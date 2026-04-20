import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import GlassCard from '../components/GlassCard';

const resources: Record<string, {
  title: string;
  icon: string;
  tags: string[];
  content: string;
}> = {
  'ai-coding-agent': {
    title: 'AI Coding Agent 实战进阶',
    icon: '🚀',
    tags: ['AI Agent', 'Vibe Coding', 'Full Stack', 'Trae CN', 'Claude Code'],
    content: `
## 教程简介

本教程面向希望将 AI Coding Agent（如 Trae CN、Claude Code 等）融入日常开发流程的开发者。核心目标是掌握 **Vibe Coding** 工作流——用自然语言描述需求，让 AI 生成代码，快速验证并迭代。

### 适用场景

- 竞赛项目快速原型开发（2-4 周完成 MVP）
- 标准 Web 应用 / 管理系统 / 数据仪表盘
- 前后端分离的全栈项目
- 课程设计、毕业设计等技术实现环节

### 核心工具链

| 工具 | 用途 |
|------|------|
| Trae CN / Claude Code | AI Coding Agent 主工具 |
| Git | 版本控制，Agent 操作的安全网 |
| Docker | 环境隔离与快速部署 |
| Node.js / Python | 前后端运行时 |

### Vibe Coding 工作流

1. **需求描述** — 用自然语言清晰描述功能需求
2. **Agent 生成** — AI 自动生成项目骨架与核心代码
3. **调试验证** — 运行测试，发现问题后反馈给 Agent
4. **迭代优化** — 逐步添加细节功能，Agent 持续辅助

### 提示词工程要点

- **角色设定**：先给 Agent 设定角色（如"资深全栈工程师"）
- **上下文补充**：提供项目结构、技术栈、已有代码片段
- **分步指令**：复杂需求拆分为小任务逐步下发
- **验收标准**：明确输出要求，减少返工

### 最佳实践

- 从 A 级项目（标准 CRUD / 数据看板）开始练手，Agent 提效最明显
- 保持 Git 提交节奏，每完成一个功能模块及时 commit
- 遇到 Agent 无法处理的模块（如复杂算法），手动实现后再让 Agent 集成
- 善用 Agent 的代码解释能力，理解生成代码的逻辑而非盲目复制
    `,
  },
  'project-adaptation-analysis': {
    title: '竞赛项目 AI Coding Agent 适配度分析',
    icon: '📊',
    tags: ['Data Analysis', 'Project Evaluation', 'Best Practices', '竞赛指南'],
    content: `
## 分析概述

> 分析对象：172 个"软件应用与开发"类竞赛项目
> 分析视角：这些项目是否适合学生使用 AI Coding Agent 作为开发工具
> 核心结论：约 **48%** 的项目（A+B 级，~83 个）适合用 AI Coding Agent 开发

---

## 筛选维度

| 维度 | 说明 |
|------|------|
| **架构适配度** | 代码结构是否在 Agent 的"舒适区"——Web 应用、数据仪表盘、CRUD 系统等标准化架构 |
| **复杂度可控** | 大三学生在 AI Agent 辅助下，2-4 周可完成 MVP |
| **AI 加速效果** | 重复性编码工作占比越高，Agent 提效越明显 |
| **排除项** | 硬件/IoT 交互、嵌入式开发、需要本地训练 CV 模型、编译器底层实现 |

---

## A 级 · 强烈推荐（~36 个，21%）

**特征**：标准 Web 架构 + 业务逻辑明确 + Agent 可自主生成 80%+ 的代码

### Web 应用 / 管理系统类（25 个）

- 宿舍楼日常报修系统、校园二手交易系统、校园求职招聘系统
- 实验室预约管理系统、智能排课助手、电影选座售票系统
- 旧物拾梦阁、食刻必达·校快送、智能校园跑腿平台

**Agent 策略**：标准 CRUD + 权限区分 + 状态流转，Agent 可全自动生成骨架。

### 数据分析 / 可视化类（7 个）

- 天气数据分析与可视化、教学评估综合数据平台
- 城市传播大数据智能分析引擎、学生学情预测与分析

**Agent 策略**：API 取数据 → pandas 处理 → pyecharts/Streamlit 可视化，Agent 几小时搞定。

### 内容展示 / 垂直领域网站（4 个）

- 红山动物园数字资源网站、重庆非遗网站、智慧校园拼车小程序

**Agent 策略**：纯前端展示站，Agent 可一键生成页面。

---

## B 级 · 需要组合策略（~47 个，27%）

**特征**：Agent 可搭主体框架，但某些模块需要额外技术组件或更精细指导

### 含 AI 功能的 Web 应用（16 个）

- AI 反诈场景互动模拟平台、智能简历生成与诊断平台
- 舆情智能分析系统、文献解析与问答助手

**Agent 策略**：Agent 生成页面框架 + 后端，学生提供 LLM API 调用逻辑后让 Agent 集成。

### 复杂业务系统（10 个）

- 小学生写作沉浸式智能导学系统、开发爱好者社区平台、智慧社区生态服务中枢

**Agent 策略**：分模块逐步生成，逐个完成用户系统、帖子、评论、通知等模块。

### 教育学习类平台（9 个）

- 个性化助学平台、智能自适应学习平台、少儿编程一站式服务平台

**Agent 策略**：Agent 生成学习平台框架，算法部分可简化或用现成库替代。

### 心理/健康/养老类（12 个）

- 大学生 AI+心理健康服务系统、智慧健康信息管理平台、智慧养老系统

**Agent 策略**：Agent 生成测评/管理平台，AI 建议部分调外部 API。

---

## C 级 · 不适合（~18 个，10%）

| 类别 | 典型项目 | 不适合原因 |
|------|---------|-----------|
| 硬件 / IoT | 智能交通安全隐患治理系统 | 需要硬件交互 |
| 编译器 / 底层 | C 语言到 MIPS 汇编编译器 | 底层实现 Agent 无法覆盖 |
| 本地 CV 训练 | YOLOv11 健身运动监测系统 | 需要本地训练模型 |
| 强依赖 Java 生态 | 基于 Activiti 的课题审批平台 | 技术栈过于特定 |
| 3D / 复杂多模态 | 虚拟生物馆漫游平台 | 3D 渲染 Agent 支持弱 |
| 机器人 / 实体交互 | 基于 OneBot 的 QQ 机器人 | 需要特定协议对接 |

---

## 推荐课堂演示 TOP 10

按"演示效果震撼 + Vibe Coding 直观 + 学生可立即复现"排序：

| 排名 | 项目 | 一句话理由 | 预计 Agent 开发时间 |
|------|------|-----------|-------------------|
| 1 | 智简履历——AIGC 简历生成 | 填表 → 生成精美简历 → 导出 PDF | 1-2 小时 |
| 2 | 基于 Web 的问卷调查系统 | 纯 CRUD + 图表统计 | 1-2 小时 |
| 3 | 天气数据分析与可视化 | API 取数据 → 处理 → 可视化 | 1-2 小时 |
| 4 | AI 反诈场景互动模拟 | 角色扮演对话，趣味性强 | 1 小时 |
| 5 | 电影选座售票系统 | 座位图交互 + 订单流程 | 2-3 小时 |
| 6 | 宿舍楼日常报修系统 | 标准 CRUD + 状态流转 | 1 小时 |
| 7 | 墨韵 AI 塾——诗词学习 | 展示 Agent 创意生成能力 | 1 小时 |
| 8 | 智评筑优—教学评估数据平台 | 数据 Dashboard | 1-2 小时 |
| 9 | 备倍佳——AI 备课平台 | 表单输入 → 内容生成 | 1-2 小时 |
| 10 | Zoo Walk 红山动物园网站 | 纯展示型网站 | 30 分钟 |

---

## 总结

**AI Coding Agent 的价值 = 代码生成效率 × 项目标准化程度**

- CRUD 系统效率提升最显著（10x+）
- 数据分析 Dashboard 次之（5x+）
- 含 AI 功能的项目仍可大幅减少前后端开发时间

**推荐教学路径**：从 A 级中选 3-5 个项目做课堂演示，让学生体验"自然语言描述需求 → Agent 生成代码 → 快速得到可用产品"的 Vibe Coding 工作流，然后让学生自选 B 级项目做实战练习。
    `,
  },
};

function CodeBlock({ node, className, children, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '');
  const lang = match ? match[1] : '';
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const text = String(children).replace(/\n$/, '');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [children]);

  if (!className) {
    return <code className={className} {...props}>{children}</code>;
  }

  return (
    <div className="relative group">
      {lang && (
        <span className="absolute top-2 left-3 text-[10px] font-mono text-fg-muted uppercase select-none">
          {lang}
        </span>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono text-fg-muted hover:text-fg border border-[var(--border-glass)] hover:border-[var(--border-glass-hover)] bg-[var(--bg-glass)] opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        {copied ? '✓ copied' : 'copy'}
      </button>
      <code className={className} {...props}>{children}</code>
    </div>
  );
}

export default function TeachingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const resource = slug ? resources[slug] : null;

  if (!resource) {
    return (
      <div className="pt-20 sm:pt-24 pb-16 max-w-3xl mx-auto px-4">
        <Link to="/teaching" className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm text-plasma bg-plasma/10 border border-plasma/20 hover:bg-plasma/20 transition-all duration-200 mb-6 group">
          <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
          Back to Teaching
        </Link>
        <h1 className="text-2xl font-bold text-fg">404 — Resource not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24 pb-16 max-w-3xl mx-auto px-4">
      <Link to="/teaching" className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm text-plasma bg-plasma/10 border border-plasma/20 hover:bg-plasma/20 transition-all duration-200 mb-6 group">
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
        返回教学资源
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <GlassCard className="mb-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
            <span className="text-3xl sm:text-4xl">{resource.icon}</span>
            <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent leading-tight">
              {resource.title}
            </h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-xs font-mono bg-[var(--bg-glass)] text-fg-muted border border-[var(--border-glass)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <article className="prose dark:prose-invert prose-fusion max-w-none border-l-2 border-plasma/10 pl-3 sm:pl-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{ code: CodeBlock }}
            >
              {resource.content}
            </ReactMarkdown>
          </article>
        </GlassCard>
      </motion.div>
    </div>
  );
}
