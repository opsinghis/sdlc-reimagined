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
        description="Get your AI Coding Assistant running on your laptop immediately"
      />

      {/* Context: Where this fits in the agentic flow */}
      <Card>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '15px',
          background: 'linear-gradient(135deg, var(--accent-purple)15, var(--accent-blue)10)',
          borderRadius: '10px',
          border: '1px solid var(--accent-purple)33'
        }}>
          <span style={{ fontSize: '2rem' }}>🎯</span>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>Setting Up for the Agentic SDLC</div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              This quick start gets you ready to work with AI agents in the <a href="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</a>.
              Your AI Coding Assistant is the interface for collaborating with Product, Dev, QE, and DevOps agents at each of the <strong>3 human gates</strong>.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📋">Prerequisites</CardTitle>
        <ul style={{ listStyle: 'none', fontSize: '0.95rem' }}>
          <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>✅ Node.js 18+ installed</li>
          <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>✅ AI Platform API key (or enterprise subscription)</li>
          <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>✅ Git installed</li>
          <li style={{ padding: '8px 0' }}>✅ VS Code or terminal access</li>
        </ul>
      </Card>

      <Card>
        <CardTitle icon="🚀">Step 1: Install AI Coding Assistant</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Run this single command in your terminal:</p>

        <CodeBlock language="bash" filename="install-ai-assistant.sh">
{`# Install AI Coding Assistant globally
npm install -g ai-coding-assistant

# Verify installation
ai --version

# Authenticate (opens browser or enter API key)
ai auth login

# Quick test
ai "say hello"`}
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
mkdir -p .ai/{roles,prompts,mcp,workflows}
mkdir -p docs/{adr,specs,runbooks}
mkdir -p scripts/{setup,automation}
mkdir -p templates/{stories,tests,docs}

# Create main AI-CONFIG.md
cat > AI-CONFIG.md << 'EOF'
# Project Configuration for AI Assistant

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
        <CardTitle icon="⚡">Step 3: First AI Command</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Navigate to any project and start using AI:</p>

        <CodeBlock language="bash">
{`# Navigate to your project
cd /path/to/your/project

# Start interactive mode
ai

# Or run a specific task
ai "analyze this codebase and create a README.md"

# Or ask a question
ai "explain how the authentication flow works in this project"`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="✅">Verification Checklist</CardTitle>
        <div style={{ display: 'grid', gap: '10px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--accent-green)' }}>□</span>
            <span><code>ai --version</code> shows version number</span>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--accent-green)' }}>□</span>
            <span><code>ai "hello"</code> returns a response</span>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--accent-green)' }}>□</span>
            <span>AI-CONFIG.md file exists in project root</span>
          </div>
        </div>
      </Card>

      <InfoBox variant="insight" title="Next Steps">
        <p>Now set up your role-specific configuration. Choose your role from the sidebar to get customized AI-CONFIG.md files, prompts, and workflows.</p>
      </InfoBox>
    </div>
  );
};

export default QuickStart;
