# Claude Code: Complete Usage Guide

> A practical guide to installing and using Claude Code, the terminal-based AI coding agent by Anthropic.

---

## What is Claude Code?

**Claude Code** is a command-line AI coding agent developed by Anthropic. It operates directly in your terminal, providing an agentic coding experience that can:

- Read and edit files in your project
- Run shell commands
- Search your codebase
- Manage Git operations
- Interact with GitHub (create PRs, issues)
- Iterate on code based on test results

---

## Prerequisites

Before installing Claude Code, ensure you have:

### System Requirements

| Requirement | Minimum Version |
|------------|----------------|
| Operating System | macOS 10.15+, Ubuntu 20.04+, or Windows with WSL2 |
| Node.js | v18.0.0 or higher |
| npm | v8.0.0 or higher |
| Git | v2.30+ |
| RAM | 4GB minimum |

### Install Node.js

```bash
# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc  # or ~/.zshrc
nvm install 20
nvm use 20

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show v10.x.x
```

### Install Git

```bash
# macOS
brew install git

# Ubuntu/Debian
sudo apt update && sudo apt install git

# Windows (WSL2)
sudo apt update && sudo apt install git
```

---

## Installation

### Install Claude Code via npm

```bash
# Install globally
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version
```

### Authentication

Claude Code requires an Anthropic API key or you can use it with a Claude subscription:

```bash
# Option 1: Set API key as environment variable
export ANTHROPIC_API_KEY="your-api-key-here"

# Option 2: Login interactively
claude login
```

---

## Basic Usage

### Starting Claude Code

```bash
# Navigate to your project directory
cd your-project

# Start Claude Code
claude

# Start with a specific task
claude "Fix the login bug in auth.ts"

# Start in non-interactive mode
claude -p "Explain the project structure"
```

### Common Commands

Once inside the Claude Code REPL:

```
> help                    # Show available commands
> /clear                  # Clear conversation history
> /compact                # Summarize and compact history
> /cost                   # Show token usage and cost
> /init                   # Initialize project memory
> /config                 # View/edit configuration
> /exit                   # Exit Claude Code
```

---

## Project Configuration

### CLAUDE.md File

Create a `CLAUDE.md` file in your project root to give Claude context about your project:

```markdown
# Project Context

## Tech Stack
- React 19 with TypeScript
- Vite as build tool
- Tailwind CSS for styling
- Jest for testing

## Build Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run test` — Run tests
- `npm run lint` — Run linter

## Code Conventions
- Use functional components with hooks
- Follow Airbnb style guide
- Write tests for all new features
- Use TypeScript strict mode
```

### Configuration File

```bash
# Initialize configuration
claude /init

# Edit settings
claude /config
```

---

## Practical Examples

### Example 1: Bug Fix

```bash
$ claude "There's a bug where the login form doesn't validate email format. 
Fix it and add tests."
```

Claude Code will:
1. Search for the login form component
2. Read the current validation logic
3. Add email format validation
4. Write unit tests
5. Run the tests to verify

### Example 2: Feature Implementation

```bash
$ claude "Add a dark mode toggle to the navbar. It should persist 
the user's preference in localStorage."
```

### Example 3: Code Refactoring

```bash
$ claude "Refactor the API calls in src/services/ to use a shared 
axios instance with interceptors for auth tokens and error handling."
```

### Example 4: Documentation

```bash
$ claude "Generate JSDoc comments for all exported functions in 
src/utils/ directory."
```

---

## Advanced Features

### Multi-turn Conversations

Claude Code maintains context across your conversation:

```
You: Add a User model with name, email, and role fields
Claude: [creates User model]

You: Now add validation for the email field
Claude: [updates the same file with validation]

You: Write tests for the validation
Claude: [creates test file referencing the model]
```

### Git Integration

```bash
# Claude can manage Git operations
$ claude "Create a new branch, implement the feature, and create a PR"

# Review changes before committing
$ claude "Show me a diff of all changes you've made"
```

### Extended Thinking

For complex tasks, Claude Code uses extended thinking to plan its approach:

```bash
# Enable verbose mode to see thinking
$ claude --verbose "Redesign the database schema for better performance"
```

---

## Tips & Best Practices

### 1. Be Specific
```bash
# ❌ Vague
$ claude "Fix the bug"

# ✅ Specific
$ claude "Fix the null pointer error in UserService.getProfile() 
when the user's avatar URL is undefined"
```

### 2. Provide Context
```bash
# Include relevant information
$ claude "The API endpoint POST /api/users returns 500 when the 
email field contains special characters. The error log shows 
'Invalid UTF-8 sequence'. Fix the input sanitization."
```

### 3. Iterate Incrementally
```bash
# Break complex tasks into steps
$ claude "First, let's plan the architecture for the new payment system"
# Review the plan, then:
$ claude "Now implement the PaymentService based on our plan"
```

### 4. Use CLAUDE.md
Always maintain an up-to-date `CLAUDE.md` to help Claude understand your project conventions.

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|---------|
| `claude: command not found` | Run `npm install -g @anthropic-ai/claude-code` |
| Authentication error | Check `ANTHROPIC_API_KEY` or run `claude login` |
| Slow response | Check internet connection; consider using `/compact` |
| File permission errors | Check project directory permissions |
| Out of context | Use `/compact` to summarize and free up context |

### Getting Help

```bash
# Check documentation
claude --help

# Report issues
# Visit: https://github.com/anthropics/claude-code/issues
```
