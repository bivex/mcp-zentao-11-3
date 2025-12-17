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
 * 下载图片列表
 * @param zentaoApi Zentao API 实例
 * @param imageUrls 图片 URL 列表
 * @param parallel 是否并行下载（默认 true）
 * @returns 下载结果数组
 */
export declare function downloadImages(zentaoApi: ZentaoLegacyAPI, imageUrls: string[], parallel?: boolean): Promise<DownloadedImage[]>;
/**
 * 构建 MCP image 内容数组
 */
export declare function buildImageContent(downloadedImages: DownloadedImage[], entityType: 'bug' | 'story', entityId: number): any[];
