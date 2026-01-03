# @maxenlin/mcp-zentao-11-3

Legacy version MCP server for Zentao 11.3, supporting all MCP protocol-compatible IDEs and tools (such as Cursor IDE, Claude Desktop, Continue, etc.), only supporting the legacy Session API.

## ✨ Features

- ✅ **Pure Legacy API** - Only supports Session API for Zentao 11.x versions
- ✅ **Complete Functionality** - Supports full features for tasks, bugs, stories, test cases, etc.
- ✅ **AI Programming Optimization** - Provides complete development context, formatted output, intelligent summaries, and more
- ✅ **Ready to Use** - Simple configuration, focused on core functionality

## 📋 System Requirements

- **Node.js**: >= 18.0.0 (LTS version recommended)

## 📦 Installation

### Method 1: Local Installation

```bash
npm install -g @maxenlin/mcp-zentao-11-3
```

Then add the following to your MCP-compatible IDE/tool configuration file (using Cursor IDE as an example):

```json
{
  "mcpServers": {
    "zentao-11-3": {
      "command": "mcp-zentao-11-3",
      "args": [],
      "env": {
        "ZENTAO_URL": "http://your-zentao-url/zentao",
        "ZENTAO_USERNAME": "your-username",
        "ZENTAO_PASSWORD": "your-password"
      }
    }
  }
}
```

**Configuration Notes:**
- `ZENTAO_URL`: Zentao server URL (must include `/zentao` path)
- `ZENTAO_USERNAME`: Zentao username
- `ZENTAO_PASSWORD`: Zentao password

### Method 2: Using npx

Add the following to your MCP-compatible IDE/tool configuration file (using Cursor IDE as an example):

```json
{
  "mcpServers": {
    "zentao-11-3": {
      "command": "npx",
      "args": ["-y", "@maxenlin/mcp-zentao-11-3"],
      "env": {
        "ZENTAO_URL": "http://your-zentao-url/zentao",
        "ZENTAO_USERNAME": "your-username",
        "ZENTAO_PASSWORD": "your-password"
      }
    }
  }
}
```

**Configuration Notes:**
- `ZENTAO_URL`: Zentao server URL (must include `/zentao` path)
- `ZENTAO_USERNAME`: Zentao username
- `ZENTAO_PASSWORD`: Zentao password

## 🚀 Usage

After completing the configuration, restart your IDE/tool to use it.

### Basic Features

```
Get my tasks
Get my bugs
Get all product list
Get story list for product 230
View details of story 2508
```

### Relationship Queries

```
Get all bugs related to story 2508
View the story related to bug 20692
```

### Batch Operations

```
Batch update task status to in progress
Batch resolve bugs, mark as fixed
```

### Data Statistics

```
View my task statistics
View my bug statistics
```

### AI Programming Assistance

```
Get complete development context for story 2508 (including related bugs and test cases)
Generate Markdown summary for story 2508
Generate Markdown summary for bug 20692
Format task 123 as Markdown
```

### Intelligent Analysis

```
Analyze complexity of story 2508
Analyze priority of bug 20692
Analyze workload of task 123
```

### Code Generation Prompts

```
Generate code framework prompt based on story 2508
Generate test case prompt based on bug 20692
Generate code review checklist for story 2508
```

## 📋 Available Tools

### Configuration Management

- `initZentao` - Initialize Zentao connection
- `getConfig` - View configuration information

### Task Management

- `getMyTasks` - Get my task list
- `getTaskDetail` - Get task details
- `updateTask` - Update task
- `finishTask` - Complete task

### Bug Management

- `getMyBugs` - Get my bug list
- `getBugDetail` - Get bug details
- `resolveBug` - Resolve bug

### Product Management

- `getProducts` - Get product list

### Story Management

- `getProductStories` - Get product's story list
- `getStoryDetail` - Get story details
- `searchStories` - Search stories
- `searchStoriesByProductName` - Search stories by product name

### Test Case Management

- `getProductTestCases` - Get product's test cases
- `getTestCaseDetail` - Get test case details
- `createTestCase` - Create test case
- `getStoryTestCases` - Get story's test cases

### Test Task Management

- `getTestTasks` - Get test task list
- `getTestTaskDetail` - Get test task details
- `getTestTaskResults` - Get test results for test task
- `runTestCase` - Execute test case

### Relationship Queries

- `getStoryRelatedBugs` - Get bug list related to story
- `getBugRelatedStory` - Get story related to bug

### Batch Operations

- `batchUpdateTasks` - Batch update tasks
- `batchResolveBugs` - Batch resolve bugs

### Data Statistics

- `getMyTaskStatistics` - Get my task statistics
- `getMyBugStatistics` - Get my bug statistics

### AI Programming Assistance Features

- `getDevelopmentContext` - Get complete development context for story/bug (including related information)
- `generateStorySummary` - Generate story summary (supports JSON/Markdown/text formats)
- `generateBugSummary` - Generate bug summary (supports JSON/Markdown/text formats)
- `formatTaskAsMarkdown` - Format task as Markdown

### Intelligent Analysis Features

- `analyzeStoryComplexity` - Analyze story complexity (score, work hour estimate, priority recommendation)
- `analyzeBugPriority` - Analyze bug priority (score, priority recommendation)
- `analyzeTaskWorkload` - Analyze task workload (work hour estimate, difficulty assessment)

### Code Generation Prompts

- `generateCodePromptFromStory` - Generate code framework prompt based on story
- `generateTestPromptFromBug` - Generate test case prompt based on bug
- `generateCodeReviewChecklist` - Generate code review checklist

### Create Tasks Based on Story/Bug

- `createTaskFromStory` - Create task based on story (provides manual operation guide)
- `createTaskFromBug` - Create fix task based on bug (provides manual operation guide)

## 📝 License

MIT

## 🔗 Related Links

- [Zentao Open Source GitHub](https://github.com/easysoft/zentaopms) - Official Zentao GitHub repository
- [Zentao Official Website](https://www.zentao.net/)
