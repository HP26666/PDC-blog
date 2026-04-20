# PDC-blog

氕氘氚 Fusion-Core — 个人博客 / 作品集站点，基于 React 19 + TypeScript + Vite 8 + Tailwind CSS v4 构建。

## 技术栈

- **框架**：React 19 + TypeScript
- **构建工具**：Vite 8
- **样式**：Tailwind CSS v4（CSS 变量主题系统，支持明暗模式）
- **3D 场景**：Three.js + React Three Fiber（等离子核心 + 线框地球 + 轨道粒子）
- **动画**：Framer Motion
- **国际化**：i18next（中文 / English）
- **Markdown 渲染**：react-markdown + remark-gfm + rehype-highlight
- **部署**：GitHub Pages（GitHub Actions 自动部署）

## 功能

- 项目展示（GitHub / Gitee 公开仓库）
- 教学资源（AI Coding Agent 教程、竞赛项目分析报告）
- 学习笔记（Markdown 文档，支持代码高亮与复制）
- 明暗主题切换（自动检测系统偏好，localStorage 持久化）
- 中英文切换
- 响应式布局
- 玻璃态（Glassmorphism）UI 组件 + 极光渐变背景动画

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
src/
├── components/        # 通用组件
│   ├── Footer.tsx
│   ├── FusionCore.tsx
│   ├── FusionScene.tsx
│   ├── GlassCard.tsx
│   ├── Navbar.tsx
│   └── Typewriter.tsx
├── contexts/          # React Context
│   └── ThemeContext.tsx
├── content/           # Markdown 笔记源文件
├── locales/           # 国际化翻译文件
│   ├── en.json
│   └── zh.json
├── pages/             # 页面组件
│   ├── Home.tsx
│   ├── Notes.tsx
│   ├── NoteDetail.tsx
│   ├── Projects.tsx
│   ├── Teaching.tsx
│   └── TeachingDetail.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## 部署

项目通过 GitHub Actions 自动部署到 GitHub Pages，base 路径为 `/PDC-blog/`。

## License

MIT
