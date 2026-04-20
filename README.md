# PDC-blog

氕氘氚（Fusion-Core）个人博客与作品集站点。

## 技术栈

- **框架**: React 19 + TypeScript
- **构建**: Vite 8
- **样式**: Tailwind CSS v4（Glassmorphism + Aurora 渐变）
- **3D**: Three.js + React Three Fiber
- **动画**: Framer Motion
- **国际化**: i18next（中/英）
- **部署**: GitHub Pages

## 功能

- 3D 聚变核心动画背景（自定义 GLSL 着色器）
- 明暗主题切换（系统偏好检测 + 手动切换）
- 项目展示（GitHub / Gitee 公开仓库）
- 教学资源（AI Coding Agent 教程、竞赛项目分析）
- 学习笔记（Markdown 渲染 + 代码高亮）
- 响应式布局

## 本地开发

```bash
# 安装依赖
npm install --registry https://registry.npmmirror.com

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
src/
├── components/       # 通用组件（GlassCard, Navbar, Footer, FusionCore...）
├── pages/            # 页面（Home, Projects, Teaching, Notes...）
├── content/          # Markdown 笔记源文件
├── locales/          # 国际化翻译文件（zh.json, en.json）
├── context/          # React Context（ThemeContext）
└── App.tsx           # 路由入口
```

## 部署

通过 GitHub Actions 自动构建并部署到 GitHub Pages。

## License

ISC
