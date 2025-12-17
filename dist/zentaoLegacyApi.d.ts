/**
 * 禅道旧版API (11.x版本)
 * 使用Session认证方式
 */
import { Bug, Task, Story, StoryStatus, TestCase, TestCaseStatus, TestResult, TestTask, CreateTestCaseRequest, TestRunRequest, Product, TaskUpdate, BugResolution } from './types.js';
import { ZentaoConfig } from './config.js';
export declare class ZentaoLegacyAPI {
    private config;
    private client;
    private sessionId;
    constructor(config: ZentaoConfig);
    /**
     * 获取SessionID
     */
    private getSessionId;
    /**
     * 登录
     */
    private login;
    /**
     * 确保已登录
     */
    private ensureLoggedIn;
    /**
     * 发起请求
     */
    private request;
    /**
     * POST请求
     */
    private postRequest;
    /**
     * 获取产品列表
     */
    getProducts(): Promise<Product[]>;
    /**
     * 获取产品的模块树
     * @param productId 产品ID
     * @returns 模块树对象，key是模块ID，value是模块名称
     */
    getProductModules(productId: number): Promise<Record<string, string>>;
    /**
     * 获取我的任务列表
     */
    getMyTasks(): Promise<Task[]>;
    /**
     * 获取任务详情
     */
    getTaskDetail(taskId: number): Promise<Task>;
    /**
     * 获取我的Bug列表
     */
    getMyBugs(): Promise<Bug[]>;
    /**
     * 获取Bug详情
     */
    getBugDetail(bugId: number): Promise<Bug>;
    /**
     * 更新任务
     */
    updateTask(taskId: number, update: TaskUpdate): Promise<Task>;
    /**
     * 完成任务
     */
    finishTask(taskId: number, update: TaskUpdate): Promise<void>;
    /**
     * 解决Bug
     */
    resolveBug(bugId: number, resolution: BugResolution): Promise<void>;
    /**
     * 获取产品的需求列表（支持分页，自动获取所有需求）
     */
    getProductStories(productId: number, status?: StoryStatus): Promise<Story[]>;
    /**
     * 获取需求详情
     */
    getStoryDetail(storyId: number): Promise<Story>;
    /**
     * 下载需求中的图片文件
     */
    downloadStoryImage(imageUrl: string): Promise<Buffer>;
    /**
     * 提取需求描述中的所有图片URL
     */
    extractImageUrls(spec: string): string[];
    /**
     * 提取需求描述中的文件ID
     */
    extractFileIds(spec: string): string[];
    /**
     * 搜索需求（通过关键字）
     * 由于禅道11.3的搜索API权限限制，我们通过获取所有产品的需求然后本地过滤
     */
    searchStories(keyword: string, options?: {
        productId?: number;
        status?: StoryStatus;
        limit?: number;
    }): Promise<Story[]>;
    /**
     * 按产品名称搜索需求
     */
    searchStoriesByProductName(productName: string, keyword: string, options?: {
        status?: StoryStatus;
        limit?: number;
    }): Promise<{
        product: Product;
        stories: Story[];
    }[]>;
    /**
     * 获取产品的测试用例列表
     * @param productId 产品ID
     * @param status 用例状态
     * @param moduleId 模块ID（可选）
     */
    getProductTestCases(productId: number, status?: TestCaseStatus, moduleId?: number): Promise<TestCase[]>;
    /**
     * 获取测试用例详情
     */
    getTestCaseDetail(caseId: number): Promise<TestCase>;
    /**
     * 创建测试用例
     */
    createTestCase(testCase: CreateTestCaseRequest): Promise<number>;
    /**
     * 获取需求的测试用例
     */
    getStoryTestCases(storyId: number): Promise<TestCase[]>;
    /**
     * 获取测试单列表
     */
    getTestTasks(productId?: number): Promise<TestTask[]>;
    /**
     * 获取测试单详情
     */
    getTestTaskDetail(taskId: number): Promise<TestTask>;
    /**
     * 获取测试单的测试结果
     */
    getTestTaskResults(taskId: number): Promise<TestResult[]>;
    /**
     * 执行测试用例
     */
    runTestCase(taskId: number, testRun: TestRunRequest): Promise<void>;
    /**
     * 获取需求关联的 Bug 列表
     */
    getStoryRelatedBugs(storyId: number): Promise<Bug[]>;
    /**
     * 获取 Bug 关联的需求
     */
    getBugRelatedStory(bugId: number): Promise<Story | null>;
}
