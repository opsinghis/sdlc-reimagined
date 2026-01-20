import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  CodeBlock,
  Timeline
} from '../../components/ui';

const DeveloperSetup = () => {
  const dailyWorkflow = [
    {
      title: 'Morning: Start Day',
      description: (
        <>
          <code>standup</code> - Generate standup from git activity<br/>
          <code>claude "What should I focus on today based on my open PRs and assigned tickets?"</code>
        </>
      )
    },
    {
      title: 'Development: Feature Work',
      description: (
        <>
          <code>feature TICKET-123-add-wishlist</code> - Start new feature<br/>
          <code>claude "Implement the wishlist service based on the spec in docs/specs/wishlist.md"</code>
        </>
      )
    },
    {
      title: 'Testing: Write Tests',
      description: (
        <>
          <code>ctest</code> - Generate tests for new code<br/>
          <code>claude "Add edge case tests for the wishlist service"</code>
        </>
      )
    },
    {
      title: 'Review: Pre-PR Check',
      description: (
        <>
          <code>creview</code> - AI review before PR<br/>
          <code>cpr</code> - Generate PR description
        </>
      )
    },
    {
      title: 'End of Day: Documentation',
      description: (
        <>
          <code>cdocs</code> - Update documentation<br/>
          <code>aicommit</code> - Commit with AI message
        </>
      )
    }
  ];

  return (
    <div>
      <PageHeader
        title="👨‍💻 Developer Setup"
        description="Complete Claude configuration for developers"
      />

      {/* Context: Where this fits in the agentic flow */}
      <Card>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '15px',
          background: 'linear-gradient(135deg, var(--accent-blue)15, var(--accent-blue)10)',
          borderRadius: '10px',
          border: '1px solid var(--accent-blue)33'
        }}>
          <span style={{ fontSize: '2rem' }}>💻</span>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>Your Role: AI-Augmented Developer</div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              In the <a href="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</a>, Dev Agents (Frontend, Backend, Database) handle code generation in <strong>Steps 5-6</strong>.
              You review AI-generated code at <strong>Gate 3</strong>, make architectural decisions, and focus on complex problems.
              See <a href="/roles/developer" style={{ color: 'var(--accent-purple)', marginLeft: '3px' }}>Developer Role</a> for the full picture.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📄">Step 1: Create Developer CLAUDE.md</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Place this file in your project root:</p>

        <CodeBlock language="markdown" filename="CLAUDE.md">
{`# CLAUDE.md - Developer Configuration

## Role
You are an AI pair programmer working with a senior developer on an enterprise application.

## Project Context
- **Tech Stack**: [React/Vue/Angular] + [Node/Python/Java] + [PostgreSQL/MongoDB]
- **Architecture**: Microservices / Monolith / Serverless
- **Testing**: Jest, Playwright, [your test framework]
- **CI/CD**: GitHub Actions / GitLab CI / Jenkins

## Code Standards

### Style Guide
- Use TypeScript with strict mode
- Follow ESLint configuration in .eslintrc
- Use Prettier for formatting
- Maximum file length: 300 lines
- Maximum function length: 50 lines

### Naming Conventions
- Components: PascalCase (UserProfile.tsx)
- Functions: camelCase (getUserData)
- Constants: UPPER_SNAKE_CASE (MAX_RETRY_COUNT)
- Files: kebab-case (user-profile.tsx) or PascalCase for components

### Git Conventions
- Commits: Conventional commits (feat:, fix:, docs:, refactor:)
- Branches: feature/TICKET-123-description, bugfix/TICKET-456-description
- PR titles: [TICKET-123] Brief description

## Architecture Patterns

### Frontend
- Atomic design: atoms → molecules → organisms → templates → pages
- State management: [Redux/Zustand/Context] for global, local state for component
- API calls: Use custom hooks (useQuery pattern)

### Backend
- Controller → Service → Repository pattern
- DTOs for API boundaries
- Domain entities for business logic
- Error handling: Custom exception classes

## Testing Requirements
- Unit tests: 80% coverage minimum
- Integration tests: All API endpoints
- E2E tests: Critical user journeys
- Test naming: should_expectedBehavior_when_condition

## When Writing Code

### Always
1. Check for existing similar patterns in codebase first
2. Add JSDoc comments for public functions
3. Include error handling
4. Write tests alongside code
5. Update related documentation

### Never
1. Commit secrets or API keys
2. Use any type in TypeScript (use unknown if needed)
3. Skip error handling
4. Leave console.log in production code
5. Create circular dependencies

## Common Tasks

### Creating a new feature
1. Create feature branch from main
2. Implement with tests
3. Update documentation
4. Create PR with description

### Fixing a bug
1. Write failing test first
2. Implement fix
3. Verify all related tests pass
4. Add regression test if needed

## File Locations
- Components: src/components/
- Services: src/services/
- Utils: src/utils/
- Tests: src/__tests__/ or alongside files
- Types: src/types/

## Environment
- Node version: Check .nvmrc
- Package manager: npm/yarn/pnpm
- Environment variables: .env.example for reference

## Commands Reference
\`\`\`bash
npm run dev      # Start development server
npm test         # Run tests
npm run build    # Production build
npm run lint     # Run linter
npm run typecheck # TypeScript check
\`\`\`

## API Documentation
- Internal APIs: /docs/api/
- External APIs: [Link to Swagger/OpenAPI]

## Contact
- Tech Lead: [name]
- Architecture questions: #tech-architecture Slack
- Security concerns: #security Slack`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📚">Step 2: Create Prompt Library</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Save these as shell aliases or scripts:</p>

        <CodeBlock language="bash" filename=".claude-aliases.sh">
{`# Add to your .bashrc or .zshrc

# ===== DEVELOPMENT ALIASES =====

# Feature Implementation
alias cf='claude "Implement the following feature based on the ticket requirements. Follow our coding standards, add tests, and update documentation:"'

# Bug Fix
alias cbug='claude "Investigate and fix this bug. Write a failing test first, then implement the fix:"'

# Code Review
alias creview='claude "Review my staged changes (git diff --staged). Check for: bugs, security issues, performance problems, style violations, missing tests. Suggest improvements:"'

# Refactoring
alias crefactor='claude "Refactor the following code to improve readability, performance, and maintainability while preserving behavior:"'

# Test Generation
alias ctest='claude "Generate comprehensive tests for the following code. Include unit tests, edge cases, and integration tests where appropriate:"'

# Documentation
alias cdocs='claude "Generate documentation for this code including JSDoc comments, README updates, and usage examples:"'

# Explain Code
alias cexplain='claude "Explain how this code works, including the architecture decisions, data flow, and any potential issues:"'

# Debug Help
alias cdebug='claude "Help me debug this issue. Here are the error logs and relevant code:"'

# PR Description
alias cpr='claude "Generate a PR description for my changes (git diff main...HEAD). Include: summary, changes made, testing done, and any notes for reviewers:"'

# ===== QUICK COMMANDS =====

# Interactive mode with context
alias ci='claude --interactive'

# Quick question
alias cq='claude'

# Continue last conversation
alias cc='claude --continue'

# ===== WORKFLOW FUNCTIONS =====

# Full feature workflow
feature() {
    echo "🚀 Starting feature: $1"
    git checkout -b "feature/$1"
    claude "I'm starting work on feature: $1. Analyze the requirements and suggest an implementation approach."
}

# Commit with AI message
aicommit() {
    claude "Generate a conventional commit message for these changes: $(git diff --staged)" | head -1 | xargs -I {} git commit -m "{}"
}

# Daily standup prep
standup() {
    claude "Generate my standup update based on:
    - Yesterday's commits: $(git log --oneline --since='yesterday' --author=$(git config user.email))
    - Current branch: $(git branch --show-current)
    - Uncommitted changes: $(git status --short)"
}`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="⚙️">Step 3: VS Code Integration</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Add to your VS Code settings.json:</p>

        <CodeBlock language="json" filename="vscode-settings.json">
{`{
    "claude.enabled": true,
    "claude.autoContext": true,
    "claude.includeOpenFiles": true,

    // Terminal integration
    "terminal.integrated.env.osx": {
        "ANTHROPIC_API_KEY": "\${env:ANTHROPIC_API_KEY}"
    },

    // Keyboard shortcuts (add to keybindings.json)
    // Ctrl+Shift+C - Open Claude
    // Ctrl+Shift+E - Explain selection
    // Ctrl+Shift+T - Generate tests for selection

    // Recommended extensions
    "recommendations": [
        "anthropic.claude-code",
        "github.copilot",
        "esbenp.prettier-vscode",
        "dbaeumer.vscode-eslint"
    ]
}`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🔄">Step 4: Git Hooks Setup</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Automate Claude in your git workflow:</p>

        <CodeBlock language="bash" filename="setup-git-hooks.sh">
{`#!/bin/bash
# Setup AI-assisted git hooks

# Create hooks directory
mkdir -p .git/hooks

# Pre-commit hook: AI review
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "🤖 Running AI pre-commit review..."

# Get staged changes
STAGED_DIFF=$(git diff --staged)

if [ -z "$STAGED_DIFF" ]; then
    exit 0
fi

# Run quick AI check (optional - comment out if too slow)
# claude "Quick review of these changes. Only report critical issues (security, bugs). Be brief:" <<< "$STAGED_DIFF"

# Run standard checks
npm run lint-staged
npm run typecheck
EOF

# Prepare-commit-msg hook: AI commit message suggestion
cat > .git/hooks/prepare-commit-msg << 'EOF'
#!/bin/bash
COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2

# Only generate for regular commits (not merge, squash, etc.)
if [ -z "$COMMIT_SOURCE" ]; then
    STAGED_DIFF=$(git diff --staged --stat)

    echo "🤖 Generating commit message suggestion..."

    # Generate suggestion (uncomment to enable)
    # SUGGESTION=$(claude "Generate a conventional commit message (feat/fix/docs/refactor) for: $STAGED_DIFF" 2>/dev/null | head -1)
    # echo "$SUGGESTION" > "$COMMIT_MSG_FILE"
fi
EOF

# Make hooks executable
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/prepare-commit-msg

echo "✅ Git hooks installed"`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📋">Daily Developer Workflow</CardTitle>
        <Timeline items={dailyWorkflow} />
      </Card>
    </div>
  );
};

export default DeveloperSetup;
