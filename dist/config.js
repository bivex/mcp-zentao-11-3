import fs from 'fs';
import os from 'os';
import path from 'path';
// 定义配置文件路径
const CONFIG_DIR = path.join(os.homedir(), '.zentao');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');
// 保存配置
export function saveConfig(config) {
    // 确保配置目录存在
    if (!fs.existsSync(CONFIG_DIR)) {
        fs.mkdirSync(CONFIG_DIR, { recursive: true });
    }
    // 强制设置为 legacy
    const legacyConfig = {
        ...config,
        apiVersion: 'legacy'
    };
    // 写入配置文件
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(legacyConfig, null, 2));
}
// 读取配置（优先从环境变量读取，其次从配置文件）
export function loadConfig() {
    // 优先从环境变量读取配置
    const envUrl = process.env.ZENTAO_URL;
    const envUsername = process.env.ZENTAO_USERNAME;
    const envPassword = process.env.ZENTAO_PASSWORD;
    if (envUrl && envUsername && envPassword) {
        return {
            url: envUrl,
            username: envUsername,
            password: envPassword,
            apiVersion: 'legacy'
        };
    }
    // 如果环境变量不存在，从配置文件读取
    try {
        if (fs.existsSync(CONFIG_FILE)) {
            const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
            // 强制设置为 legacy
            return {
                ...config,
                apiVersion: 'legacy'
            };
        }
    }
    catch (error) {
        console.error('读取配置文件失败:', error);
    }
    return null;
}
// 检查是否已配置
export function isConfigured() {
    return fs.existsSync(CONFIG_FILE);
}
