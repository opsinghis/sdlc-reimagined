import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  ComparisonGrid,
  ComparisonCard,
  ComparisonList,
  PromptBox,
  InfoBox,
  CodeBlock
} from '../../components/ui';

const Developer = () => {
  const workflows = [
    {
      title: 'Feature Implementation',
      icon: '⚡',
      description: 'From spec to working code',
      prompt: `"Implement the user wishlist feature based on this spec [attached]. Follow our existing patterns in src/features/. Include:
1. React components with TypeScript
2. API endpoints (Node/Express)
3. Database migrations (PostgreSQL)
4. Unit tests for all new code
5. Update API documentation"`
    },
    {
      title: 'Code Review Assistance',
      icon: '🔍',
      description: 'First-pass review before human review',
      prompt: `"Review this PR for:
1. Security vulnerabilities (OWASP top 10)
2. Performance issues (N+1 queries, memory leaks)
3. Code style violations against our standards
4. Missing tests or edge cases
5. Documentation gaps

Provide specific line-by-line feedback."`
    },
    {
      title: 'Bug Investigation',
      icon: '🐛',
      description: 'Rapid root cause analysis',
      prompt: `"Investigate this bug: [error log attached].
1. Trace the error through the codebase
2. Identify the root cause
3. Suggest a fix with minimal blast radius
4. Write a regression test
5. Identify if this pattern exists elsewhere"`
    },
    {
      title: 'Refactoring',
      icon: '🔧',
      description: 'Safe, comprehensive refactoring',
      prompt: `"Refactor the UserService class:
1. Extract the authentication logic into AuthService
2. Ensure all existing tests pass
3. Add any missing test coverage
4. Update imports across the codebase
5. Maintain backward compatibility for public APIs"`
    },
    {
      title: 'Documentation Generation',
      icon: '📚',
      description: 'Auto-generated, always current docs',
      prompt: `"Generate documentation for the payments module:
1. API reference (OpenAPI spec)
2. Architecture overview with diagrams
3. Getting started guide
4. Common troubleshooting scenarios
5. Integration examples"`
    },
    {
      title: 'Test Generation',
      icon: '🧪',
      description: 'Comprehensive test coverage',
      prompt: `"Generate tests for the OrderService:
1. Unit tests for all public methods
2. Integration tests for database operations
3. Edge cases (null inputs, boundary values)
4. Error scenarios
5. Performance benchmarks"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="👨‍💻 Developer with Claude"
        description="From coder to AI orchestrator"
      />

      <Card>
        <CardTitle icon="🔄">Role Transformation</CardTitle>
        <ComparisonGrid>
          <ComparisonCard variant="traditional" title="Traditional Developer Time Split">
            <ComparisonList items={[
              '50% - Writing code',
              '20% - Code review & meetings',
              '15% - Debugging & troubleshooting',
              '10% - Documentation',
              '5% - Learning new tech'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="AI-Enabled Developer Time Split">
            <ComparisonList items={[
              '20% - Reviewing & refining AI code',
              '25% - Architecture & design decisions',
              '20% - Complex problem solving',
              '15% - Code review (strategic)',
              '20% - Innovation & learning'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Claude-Powered Developer Workflows</CardTitle>

        {workflows.map((workflow, index) => (
          <div key={index} style={{
            background: 'var(--bg-elevated)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>{workflow.icon}</span>
              <div>
                <h4 style={{ margin: 0 }}>{workflow.title}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{workflow.description}</p>
              </div>
            </div>
            <PromptBox label="Claude Prompt">
              {workflow.prompt}
            </PromptBox>
          </div>
        ))}
      </Card>

      <Card>
        <CardTitle icon="⚡">Quick Commands</CardTitle>
        <CodeBlock language="bash" filename="claude-dev-aliases.sh">
{`# Feature Implementation
alias cf='claude "Implement the following feature based on the ticket requirements:"'

# Bug Fix
alias cbug='claude "Investigate and fix this bug. Write a failing test first:"'

# Code Review
alias creview='claude "Review my staged changes for bugs, security, and style:"'

# Refactoring
alias crefactor='claude "Refactor this code to improve readability and performance:"'

# Test Generation
alias ctest='claude "Generate comprehensive tests for this code:"'

# Documentation
alias cdocs='claude "Generate documentation for this module:"'

# Explain Code
alias cexplain='claude "Explain how this code works and identify issues:"'

# PR Description
alias cpr='claude "Generate a PR description from my changes:"'`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📈">Productivity Gains</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>+55%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Code Output</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-30%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bug Rate</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>+200%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Doc Coverage</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-60%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Boilerplate Time</div>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="⚠️">What Developers Still Own</CardTitle>
        <InfoBox variant="warning" title="Human Judgment Required">
          <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <li style={{ padding: '5px 0' }}>• <strong>Architecture decisions</strong> - AI suggests, humans decide system design</li>
            <li style={{ padding: '5px 0' }}>• <strong>Business logic validation</strong> - AI implements, humans verify correctness</li>
            <li style={{ padding: '5px 0' }}>• <strong>Security review</strong> - AI flags issues, humans assess real risk</li>
            <li style={{ padding: '5px 0' }}>• <strong>Performance trade-offs</strong> - AI optimizes, humans balance constraints</li>
            <li style={{ padding: '5px 0' }}>• <strong>Innovation</strong> - AI executes patterns, humans create new approaches</li>
          </ul>
        </InfoBox>
      </Card>
    </div>
  );
};

export default Developer;
