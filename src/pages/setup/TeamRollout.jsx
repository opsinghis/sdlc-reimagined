import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  CodeBlock,
  Timeline
} from '../../components/ui';

const TeamRollout = () => {
  const rolloutPlan = [
    {
      title: 'Week 1: Pilot',
      description: (
        <>
          • 2-3 developers start using Claude Code<br/>
          • Daily check-ins to gather feedback<br/>
          • Refine CLAUDE.md and prompts<br/>
          • Document common use cases
        </>
      )
    },
    {
      title: 'Week 2: Expand to Dev Team',
      description: (
        <>
          • All developers onboarded<br/>
          • Pair programming sessions to share tips<br/>
          • Set up shared prompt library<br/>
          • QE team begins pilot
        </>
      )
    },
    {
      title: 'Week 3: Full Engineering',
      description: (
        <>
          • QE, DevOps, Architects onboarded<br/>
          • MCP integrations configured<br/>
          • Team-specific workflows documented<br/>
          • Measure initial productivity gains
        </>
      )
    },
    {
      title: 'Week 4: Product & Process',
      description: (
        <>
          • Product Owners onboarded<br/>
          • AI-assisted ceremonies begin<br/>
          • Full metrics review<br/>
          • Optimization and refinement
        </>
      )
    }
  ];

  return (
    <div>
      <PageHeader
        title="👥 Full Team Rollout Guide"
        description="Step-by-step guide to roll out Claude across your entire team"
      />

      <Card>
        <CardTitle icon="📋">Pre-Rollout Checklist</CardTitle>

        <div style={{ display: 'grid', gap: '10px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px' }}>
            <strong>□ API Access</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>
              Anthropic API key or Claude for Work subscription for team
            </p>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px' }}>
            <strong>□ Security Review</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>
              Approved by security team, data handling policies defined
            </p>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px' }}>
            <strong>□ Pilot Team Selected</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>
              2-3 developers for initial testing (1-2 weeks)
            </p>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px' }}>
            <strong>□ Success Metrics Defined</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>
              Baseline metrics captured (velocity, cycle time, etc.)
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="🚀">Rollout Script</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Run this script to set up a new team member:</p>

        <CodeBlock language="bash" filename="setup-team-member.sh">
{`#!/bin/bash
# Team Member Claude Setup Script
# Usage: ./setup-team-member.sh <role> <project-path>

ROLE=$1
PROJECT_PATH=$2

if [ -z "$ROLE" ] || [ -z "$PROJECT_PATH" ]; then
    echo "Usage: ./setup-team-member.sh <role> <project-path>"
    echo "Roles: developer | po | qe | devops | architect"
    exit 1
fi

echo "🚀 Setting up Claude for $ROLE..."

# 1. Install Claude Code
echo "📦 Installing Claude Code..."
npm install -g @anthropic-ai/claude-code

# 2. Create project structure
echo "📁 Creating project structure..."
cd "$PROJECT_PATH"
mkdir -p .claude/{prompts,workflows}

# 3. Download role-specific CLAUDE.md
echo "📄 Setting up role configuration..."
CLAUDE_MD_URL="https://raw.githubusercontent.com/your-org/claude-configs/main/roles/$ROLE/CLAUDE.md"
# In practice, copy from your internal repo
# curl -o CLAUDE.md "$CLAUDE_MD_URL"

# 4. Set up aliases
echo "⚡ Setting up aliases..."
ALIAS_FILE="$HOME/.claude-aliases-$ROLE.sh"
cat > "$ALIAS_FILE" << 'ALIASES'
# Role-specific aliases will be added here based on role
# See the role-specific setup pages for content
ALIASES

# Add to shell config
if ! grep -q "claude-aliases" ~/.zshrc 2>/dev/null; then
    echo "source $ALIAS_FILE" >> ~/.zshrc
fi
if ! grep -q "claude-aliases" ~/.bashrc 2>/dev/null; then
    echo "source $ALIAS_FILE" >> ~/.bashrc
fi

# 5. Verify installation
echo "✅ Verifying installation..."
claude --version

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run: source ~/.zshrc (or restart terminal)"
echo "2. Run: claude auth login"
echo "3. Test: claude 'hello world'"
echo ""
echo "📚 Documentation: https://your-internal-docs/claude-guide"`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📅">4-Week Team Rollout Plan</CardTitle>
        <Timeline items={rolloutPlan} />
      </Card>

      <Card>
        <CardTitle icon="📊">Success Metrics Template</CardTitle>

        <CodeBlock language="markdown" filename="metrics-template.md">
{`# AI-SDLC Transformation Metrics

## Baseline (Before Claude)
- Sprint velocity: ___ points
- Cycle time (commit to deploy): ___ hours
- PR review time: ___ hours
- Test coverage: ___%
- Ceremony time per dev per sprint: ___ hours
- Incidents per week: ___
- MTTR: ___ minutes

## Week 2 Check-in
- Sprint velocity: ___ points (___% change)
- Cycle time: ___ hours (___% change)
- PR review time: ___ hours (___% change)
- Qualitative feedback: [summary]

## Week 4 Review
- All metrics + trends
- Developer satisfaction survey
- Top use cases identified
- Challenges and solutions
- Recommendations for optimization

## Monthly Tracking
| Metric | Baseline | Month 1 | Month 2 | Month 3 |
|--------|----------|---------|---------|---------|
| Velocity | | | | |
| Cycle Time | | | | |
| Test Coverage | | | | |
| Ceremony Hours | | | | |
| Developer NPS | | | | |`}
        </CodeBlock>
      </Card>
    </div>
  );
};

export default TeamRollout;
