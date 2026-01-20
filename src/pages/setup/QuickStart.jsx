import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  CodeBlock,
  InfoBox
} from '../../components/ui';

const QuickStart = () => {
  return (
    <div>
      <PageHeader
        title="⚡ Quick Start Setup (5 minutes)"
        description="Get Claude Code running on your laptop immediately"
      />

      <Card>
        <CardTitle icon="📋">Prerequisites</CardTitle>
        <ul style={{ listStyle: 'none', fontSize: '0.95rem' }}>
          <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>✅ Node.js 18+ installed</li>
          <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>✅ Anthropic API key (or Claude Pro subscription)</li>
          <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>✅ Git installed</li>
          <li style={{ padding: '8px 0' }}>✅ VS Code or terminal access</li>
        </ul>
      </Card>

      <Card>
        <CardTitle icon="🚀">Step 1: Install Claude Code</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Run this single command in your terminal:</p>

        <CodeBlock language="bash" filename="install-claude.sh">
{`# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version

# Authenticate (opens browser or enter API key)
claude auth login

# Quick test
claude "say hello"`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📁">Step 2: Create Project Structure</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Run this script to set up the recommended folder structure:</p>

        <CodeBlock language="bash" filename="setup-project.sh">
{`#!/bin/bash
# Create AI-SDLC project structure

PROJECT_ROOT="$HOME/ai-sdlc-setup"
mkdir -p "$PROJECT_ROOT"
cd "$PROJECT_ROOT"

# Create directory structure
mkdir -p .claude/{roles,prompts,mcp,workflows}
mkdir -p docs/{adr,specs,runbooks}
mkdir -p scripts/{setup,automation}
mkdir -p templates/{stories,tests,docs}

# Create main CLAUDE.md
cat > CLAUDE.md << 'EOF'
# Project Configuration for Claude

## Overview
This project uses AI-assisted development workflows.

## Conventions
- Follow existing code patterns
- Write tests for all new code
- Update documentation with changes
- Use conventional commits

## Tech Stack
- Define your tech stack here

## Commands
- \`npm run dev\` - Start development
- \`npm test\` - Run tests
- \`npm run build\` - Build project
EOF

echo "✅ Project structure created at $PROJECT_ROOT"
echo "📁 Next: cd $PROJECT_ROOT && code ."
ls -la`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="⚡">Step 3: First Claude Command</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Navigate to any project and start using Claude:</p>

        <CodeBlock language="bash">
{`# Navigate to your project
cd /path/to/your/project

# Start interactive mode
claude

# Or run a specific task
claude "analyze this codebase and create a README.md"

# Or ask a question
claude "explain how the authentication flow works in this project"`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="✅">Verification Checklist</CardTitle>
        <div style={{ display: 'grid', gap: '10px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--accent-green)' }}>□</span>
            <span><code>claude --version</code> shows version number</span>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--accent-green)' }}>□</span>
            <span><code>claude "hello"</code> returns a response</span>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--accent-green)' }}>□</span>
            <span>CLAUDE.md file exists in project root</span>
          </div>
        </div>
      </Card>

      <InfoBox variant="insight" title="Next Steps">
        <p>Now set up your role-specific configuration. Choose your role from the sidebar to get customized CLAUDE.md files, prompts, and workflows.</p>
      </InfoBox>
    </div>
  );
};

export default QuickStart;
