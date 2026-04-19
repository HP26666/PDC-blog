# Development Environment Setup Guide

> A comprehensive guide to setting up your development environment for AI-assisted coding tools and modern web development.

---

## Overview

This guide covers the installation and configuration of essential tools needed for modern AI-assisted development workflows.

```
Development Environment Stack:
├── Operating System (macOS / Linux / Windows + WSL2)
├── Terminal & Shell (Zsh / Bash)
├── Version Control (Git + GitHub)
├── Runtime Environments
│   ├── Node.js (JavaScript/TypeScript)
│   ├── Python (AI/ML tools)
│   └── Rust (optional, for some tools)
├── Package Managers (npm, pip, cargo)
├── Code Editors / IDEs
│   ├── VS Code
│   ├── Trae
│   └── Cursor
└── AI Coding Tools
    ├── Claude Code
    ├── GitHub Copilot
    └── Other agents
```

---

## Step 1: Operating System Setup

### macOS

macOS comes ready for development. Install the command line tools:

```bash
# Install Xcode Command Line Tools
xcode-select --install

# Install Homebrew (package manager)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Verify
brew --version
```

### Windows (WSL2)

Windows users should install WSL2 for the best development experience:

```powershell
# Open PowerShell as Administrator
wsl --install

# Restart your computer, then:
wsl --set-default-version 2

# Install Ubuntu
wsl --install -d Ubuntu-24.04
```

After WSL2 is set up, all following commands should be run inside the WSL2 terminal.

### Linux (Ubuntu/Debian)

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install essential build tools
sudo apt install -y build-essential curl wget git unzip
```

---

## Step 2: Terminal & Shell

### Install Zsh (recommended)

```bash
# macOS (already default)
echo $SHELL  # Should show /bin/zsh

# Linux
sudo apt install zsh
chsh -s $(which zsh)
# Log out and log back in
```

### Install Oh My Zsh (optional, for better UX)

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Recommended `.zshrc` additions

```bash
# Add to ~/.zshrc

# Aliases for common commands
alias ll="ls -la"
alias gs="git status"
alias gc="git commit"
alias gp="git push"
alias gpl="git pull"
alias dev="npm run dev"
alias build="npm run build"

# Node version manager
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

---

## Step 3: Git & GitHub

### Install Git

```bash
# macOS
brew install git

# Linux
sudo apt install git

# Verify
git --version
```

### Configure Git

```bash
# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Enable helpful settings
git config --global pull.rebase true
git config --global fetch.prune true
git config --global diff.colorMoved zebra
```

### Set up SSH for GitHub

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Start ssh-agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard
# macOS:
pbcopy < ~/.ssh/id_ed25519.pub
# Linux:
cat ~/.ssh/id_ed25519.pub
# Then add at: GitHub → Settings → SSH Keys → New SSH Key

# Test connection
ssh -T git@github.com
```

### Install GitHub CLI

```bash
# macOS
brew install gh

# Linux
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update && sudo apt install gh

# Authenticate
gh auth login
```

---

## Step 4: Node.js & npm

### Install via NVM (recommended)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Restart terminal or source profile
source ~/.bashrc  # or ~/.zshrc

# Install latest LTS
nvm install --lts
nvm use --lts

# Verify
node --version  # v20.x.x or v22.x.x
npm --version   # v10.x.x
```

### Useful Global Packages

```bash
# TypeScript
npm install -g typescript ts-node

# Development tools
npm install -g vite create-vite
npm install -g nodemon

# Linting & formatting
npm install -g eslint prettier
```

---

## Step 5: Python

### Install Python

```bash
# macOS
brew install python@3.12

# Linux
sudo apt install python3.12 python3.12-venv python3-pip

# Verify
python3 --version  # Python 3.12.x
pip3 --version
```

### Set up Virtual Environment

```bash
# Create a virtual environment
python3 -m venv ~/.venvs/default

# Activate it
source ~/.venvs/default/bin/activate

# Install common packages
pip install requests flask fastapi uvicorn
pip install numpy pandas matplotlib
pip install torch transformers  # For AI/ML
```

---

## Step 6: Code Editors

### VS Code

```bash
# macOS
brew install --cask visual-studio-code

# Linux
sudo snap install code --classic
# Or download from: https://code.visualstudio.com
```

#### Essential VS Code Extensions

```bash
# Install via command line
code --install-extension ms-python.python
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension GitHub.copilot
```

### VS Code Settings

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.minimap.enabled": false,
  "terminal.integrated.fontSize": 13,
  "workbench.colorTheme": "One Dark Pro",
  "files.autoSave": "onFocusChange"
}
```

---

## Step 7: AI Coding Tools

### Claude Code

```bash
# Install
npm install -g @anthropic-ai/claude-code

# Authenticate
export ANTHROPIC_API_KEY="your-key"
# or
claude login

# Use in a project
cd your-project
claude
```

### GitHub Copilot

1. Install VS Code extension: `GitHub.copilot`
2. Sign in with your GitHub account
3. Enable Copilot in settings

### Trae IDE

1. Download from https://www.trae.ai
2. Install and launch
3. Sign in and configure AI model

---

## Step 8: Docker (Optional)

Docker is useful for consistent development environments:

```bash
# macOS
brew install --cask docker

# Linux
sudo apt install docker.io docker-compose-v2
sudo usermod -aG docker $USER
# Log out and log back in

# Verify
docker --version
docker compose version
```

---

## Quick Start Checklist

Use this checklist to verify your setup:

```bash
# Run these commands to verify everything is installed
echo "=== System ===" && uname -a
echo "=== Git ===" && git --version
echo "=== Node.js ===" && node --version
echo "=== npm ===" && npm --version
echo "=== Python ===" && python3 --version
echo "=== Code ===" && code --version 2>/dev/null || echo "VS Code not found"
echo "=== Claude ===" && claude --version 2>/dev/null || echo "Claude Code not found"
echo "=== Docker ===" && docker --version 2>/dev/null || echo "Docker not found"
```

Expected output:
```
=== System === Linux/Darwin ...
=== Git === git version 2.40+
=== Node.js === v20.x.x or higher
=== npm === v10.x.x or higher
=== Python === Python 3.12.x
=== Code === 1.90+ or Trae
=== Claude === x.x.x
=== Docker === Docker version 24+
```

---

## Summary

| Tool | Purpose | Required? |
|------|---------|-----------|
| Git | Version control | ✅ Yes |
| Node.js | JavaScript runtime | ✅ Yes |
| Python | AI/ML, scripting | ✅ Yes |
| VS Code/Trae | Code editor | ✅ Yes (pick one) |
| Claude Code | AI coding agent | Optional |
| Docker | Containerization | Optional |
| Zsh + Oh My Zsh | Better terminal | Optional |

You're now ready to start building with AI-assisted coding tools! 🚀
