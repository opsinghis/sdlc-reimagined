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

      {/* Your Role in the Agentic Flow */}
      <Card>
        <div style={{
          background: 'linear-gradient(135deg, var(--accent-blue)20, var(--accent-blue)10)',
          border: '2px solid var(--accent-blue)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              background: 'var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>💻</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--accent-blue)' }}>AI-Augmented Developer</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>You review AI-generated code and make architectural decisions at Gate 3</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-blue)', marginBottom: '5px' }}>Steps 5-7: AI Builds</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Dev Agents (Frontend, Backend, Database) write code. QE Agent generates tests. You focus on complex logic only.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px', border: '2px dashed var(--accent-orange)' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-orange)', marginBottom: '5px' }}>🎯 Gate 3: Final Review</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                You review AI code for architecture, security, and complex logic. You're the quality gatekeeper before deploy.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-green)', marginBottom: '5px' }}>Your Focus</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Architecture decisions, complex problem solving, innovation, code review at Gate 3.
              </p>
            </div>
          </div>
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <a href="/sdlc-comparison" style={{ color: 'var(--accent-purple)', fontSize: '0.85rem' }}>See the full 10-step agentic flow →</a>
          </div>
        </div>
      </Card>

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

      {/* AI Agent Collaboration */}
      <Card>
        <CardTitle icon="🤖">Your AI Agent Team</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          In the AI-native model, developers work alongside specialized Dev Agents that handle different layers of the stack:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
          {[
            { icon: '🎨', name: 'Frontend Agent', desc: 'React/Vue components, styling, responsive design' },
            { icon: '⚙️', name: 'Backend Agent', desc: 'APIs, business logic, service orchestration' },
            { icon: '🗄️', name: 'Database Agent', desc: 'Schema design, migrations, query optimization' },
            { icon: '🧪', name: 'Test Agent', desc: 'Unit, integration, E2E test generation' },
            { icon: '📝', name: 'Doc Agent', desc: 'API docs, READMEs, architecture diagrams' },
            { icon: '🔍', name: 'Review Agent', desc: 'First-pass code review, style checks' }
          ].map((agent, i) => (
            <div key={i} style={{
              background: 'var(--bg-elevated)',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{agent.icon}</div>
              <div style={{ fontWeight: '600', marginBottom: '4px', fontSize: '0.9rem' }}>{agent.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{agent.desc}</div>
            </div>
          ))}
        </div>
        <InfoBox variant="insight" title="The Developer Specialist Role">
          Human developers evolve from coders to AI orchestrators - directing agents, reviewing output, making architectural decisions,
          and focusing on complex problems that require creativity and deep understanding.
          See <a href="/ai-native/role-evolution" style={{ color: 'var(--accent-purple)' }}>Role Evolution</a> for the complete picture.
        </InfoBox>
      </Card>
    </div>
  );
};

export default Developer;
