# Trae AI: Complete Usage Guide

> A practical guide to installing and using Trae, the AI-powered IDE by ByteDance.

---

## What is Trae?

**Trae** is an AI-powered Integrated Development Environment (IDE) developed by ByteDance. It provides an intelligent coding experience with features like:

- AI-powered code completion and generation
- Built-in chat assistant for coding help
- Agent mode for autonomous task completion
- Multi-model support (Claude, GPT, etc.)
- Visual development and debugging tools

---

## Prerequisites

### System Requirements

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| Operating System | macOS 11+, Windows 10+, Linux (Ubuntu 20.04+) | Latest OS version |
| RAM | 4 GB | 8 GB+ |
| Disk Space | 500 MB | 2 GB+ |
| Display | 1280×720 | 1920×1080+ |
| Internet | Required for AI features | Stable broadband |

### Install Prerequisites

```bash
# Install Git (if not already installed)
# macOS
brew install git

# Ubuntu/Debian
sudo apt update && sudo apt install git

# Install Node.js (for web development)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
nvm install 20

# Install Python (for Python development)
# macOS
brew install python@3.12

# Ubuntu/Debian
sudo apt install python3.12 python3.12-venv
```

---

## Installation

### Download Trae

1. Visit the official website: **https://www.trae.ai**
2. Download the installer for your operating system
3. Run the installer

### macOS Installation

```bash
# Download from official site or use the command:
# After downloading the .dmg file:
# 1. Open the .dmg file
# 2. Drag Trae to the Applications folder
# 3. Open Trae from Applications

# If you get a security warning:
# System Preferences → Security & Privacy → Open Anyway
```

### Windows Installation

```powershell
# Download the .exe installer from trae.ai
# Run the installer and follow the setup wizard
# Trae will be available in the Start menu
```

### Linux Installation

```bash
# Download the .deb or .AppImage from trae.ai

# For .deb (Ubuntu/Debian):
sudo dpkg -i trae-*.deb

# For .AppImage:
chmod +x Trae-*.AppImage
./Trae-*.AppImage
```

---

## Getting Started

### Initial Setup

1. **Open Trae** after installation
2. **Sign in** with your account (or create one)
3. **Choose your AI model** — Select from available models
4. **Open a project** — File → Open Folder

### Interface Overview

```
┌─────────────────────────────────────────────────────┐
│  Menu Bar                                           │
├──────────┬──────────────────────────┬───────────────┤
│          │                          │               │
│ Explorer │    Editor Area           │   AI Chat     │
│          │                          │   Panel       │
│ Files    │    Your code goes here   │               │
│ Search   │                          │   Ask AI      │
│ Git      │                          │   questions   │
│          │                          │               │
├──────────┴──────────────────────────┴───────────────┤
│  Terminal / Output / Problems                       │
└─────────────────────────────────────────────────────┘
```

---

## Core Features

### 1. AI Chat (Cmd+L / Ctrl+L)

The AI Chat panel allows you to ask coding questions and get help:

```
You: How do I implement authentication in Express.js?

Trae: Here's a step-by-step implementation using JWT...
[Provides code with explanation]
[Offers to apply changes directly to your files]
```

### 2. Inline Completion (Tab to accept)

Trae provides intelligent code completions as you type:

```typescript
// Start typing and Trae suggests completions
function calculateTax(income: number): number {
  // Trae suggests the implementation based on context
  const taxRate = income > 50000 ? 0.3 : 0.2;
  return income * taxRate;
}
```

### 3. Agent Mode (Builder)

Agent Mode allows Trae to autonomously complete complex tasks:

```
You: Create a REST API for a blog with CRUD operations,
     including authentication and input validation.

Trae Agent:
├── Creates project structure
├── Installs dependencies
├── Implements routes
├── Adds authentication middleware
├── Writes validation schemas
├── Creates tests
└── Runs and verifies everything works
```

### 4. Code Actions (Cmd+I / Ctrl+I)

Quick AI-powered code actions:

- **Edit**: Modify selected code with AI assistance
- **Generate**: Create new code from description
- **Explain**: Understand complex code
- **Fix**: Automatically fix errors and bugs
- **Refactor**: Improve code structure

---

## Practical Examples

### Example 1: Creating a React Component

```
Prompt: "Create a responsive navigation bar component in React 
with TypeScript, using Tailwind CSS. Include mobile hamburger 
menu and dark mode toggle."
```

Trae will generate a complete component with:
- TypeScript types
- Responsive design
- Mobile menu logic
- Dark mode functionality

### Example 2: Debugging

```
Prompt: "I'm getting 'TypeError: Cannot read properties of 
undefined' on line 42. Help me fix it."
```

Trae will:
1. Analyze the error context
2. Identify the root cause
3. Suggest and apply the fix

### Example 3: Writing Tests

```
Prompt: "Write unit tests for the UserService class using Jest. 
Cover all public methods including edge cases."
```

### Example 4: Database Schema

```
Prompt: "Design a PostgreSQL schema for an e-commerce platform 
with users, products, orders, and reviews. Include indexes 
and foreign keys."
```

---

## Configuration

### Settings (Cmd+, / Ctrl+,)

Key settings to configure:

```json
{
  "ai.model": "claude-3.5-sonnet",
  "ai.temperature": 0.7,
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "terminal.integrated.fontSize": 13
}
```

### Keyboard Shortcuts

| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Open AI Chat | `Cmd+L` | `Ctrl+L` |
| Inline Edit | `Cmd+I` | `Ctrl+I` |
| Accept Completion | `Tab` | `Tab` |
| Open Terminal | `` Cmd+` `` | `` Ctrl+` `` |
| Command Palette | `Cmd+Shift+P` | `Ctrl+Shift+P` |
| Quick Open File | `Cmd+P` | `Ctrl+P` |

---

## Tips & Best Practices

### 1. Use Context Wisely

Add relevant files to the AI context by mentioning them:
```
"Look at src/models/User.ts and src/services/auth.ts, 
then help me add password reset functionality."
```

### 2. Be Specific with Instructions

```
❌ "Make it better"
✅ "Refactor this function to use async/await instead of 
    callbacks, add error handling, and add TypeScript types"
```

### 3. Review AI-Generated Code

Always review generated code before accepting:
- Check for security vulnerabilities
- Verify logic correctness
- Ensure it follows your project conventions

### 4. Leverage Agent Mode for Complex Tasks

For multi-file changes, use Agent Mode instead of manual chat:
```
"Implement a complete user authentication system with:
- JWT token management
- Password hashing with bcrypt
- Rate limiting on login attempts
- Email verification flow"
```

---

## Trae vs Other AI IDEs

| Feature | Trae | Cursor | VS Code + Copilot |
|---------|------|--------|-------------------|
| AI Chat | ✅ | ✅ | ✅ |
| Agent Mode | ✅ | ✅ | ✅ (via extensions) |
| Multi-model | ✅ | ✅ | ❌ (Copilot only) |
| Free Tier | ✅ | Limited | Limited |
| Open Source | ❌ | ❌ | VS Code is open source |
| Performance | Fast | Fast | Varies |

---

## Troubleshooting

| Issue | Solution |
|-------|---------|
| AI not responding | Check internet connection and model selection |
| Slow completions | Reduce context size or switch to a faster model |
| Extension conflicts | Disable conflicting extensions |
| High memory usage | Close unused editor tabs and terminals |
| Login issues | Clear cache and re-authenticate |
