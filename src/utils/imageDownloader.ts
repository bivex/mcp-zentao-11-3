/**
 * 图片下载工具函数
 * 统一处理 Bug 和需求的图片下载逻辑
 */

import { ZentaoLegacyAPI } from '../zentaoLegacyApi.js';

export interface DownloadedImage {
    url: string;
    base64?: string;
    mimeType?: string;
    size?: number;
    success: boolean;
    error?: string;
}

/**
 * 检测图片 MIME 类型
 */
function detectMimeType(buffer: Buffer): string {
    if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
        return 'image/jpeg';
    } else if (buffer[0] === 0x47 && buffer[1] === 0x49) {
        return 'image/gif';
    } else if (buffer[0] === 0x89 && buffer[1] === 0x50) {
        return 'image/png';
    }
    return 'image/png'; // 默认
}

/**
 * 下载图片列表
 * @param zentaoApi Zentao API 实例
 * @param imageUrls 图片 URL 列表
 * @param parallel 是否并行下载（默认 true）
 * @returns 下载结果数组
 */
export async function downloadImages(
    zentaoApi: ZentaoLegacyAPI,
    imageUrls: string[],
    parallel: boolean = true
): Promise<DownloadedImage[]> {
    if (imageUrls.length === 0) {
        return [];
    }

    if (parallel) {
        // 并行下载
        const downloadPromises = imageUrls.map(async (url): Promise<DownloadedImage> => {
            try {
                const imageBuffer = await zentaoApi.downloadStoryImage(url);
                const base64Image = imageBuffer.toString('base64');
                const mimeType = detectMimeType(imageBuffer);

                return {
                    url,
                    base64: base64Image,
                    mimeType,
                    size: imageBuffer.length,
                    success: true
                };
            } catch (error) {
                return {
                    url,
                    success: false,
                    error: error instanceof Error ? error.message : String(error)
                };
            }
        });

        return Promise.all(downloadPromises);
    } else {
        // 串行下载（兼容旧逻辑）
        const results: DownloadedImage[] = [];
        for (const url of imageUrls) {
            try {
                const imageBuffer = await zentaoApi.downloadStoryImage(url);
                const base64Image = imageBuffer.toString('base64');
                const mimeType = detectMimeType(imageBuffer);

                results.push({
                    url,
                    base64: base64Image,
                    mimeType,
                    size: imageBuffer.length,
                    success: true
                });
            } catch (error) {
                results.push({
                    url,
                    success: false,
                    error: error instanceof Error ? error.message : String(error)
                });
            }
        }
        return results;
    }
}

/**
 * 构建 MCP image 内容数组
 */
export function buildImageContent(
    downloadedImages: DownloadedImage[],
    entityType: 'bug' | 'story',
    entityId: number
): any[] {
    const content: any[] = [];
    
    downloadedImages.forEach((img, index) => {
        if (img.success && img.base64) {
            content.push({
                type: "image",
                data: img.base64,
                mimeType: img.mimeType || 'image/png',
                annotations: {
                    audience: ["user"],
                    priority: 0.8,
                    title: `${entityType === 'bug' ? 'Bug' : '需求'} ${entityId} 的图片 ${index + 1}`,
                    description: `来源: ${img.url}`
                }
            });
        }
    });

    return content;
}

