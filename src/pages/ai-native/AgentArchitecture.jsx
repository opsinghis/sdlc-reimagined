import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  InfoBox
} from '../../components/ui';

const AgentArchitecture = () => {
  const agentPhases = [
    {
      phase: 'Discovery & Planning',
      color: 'var(--accent-purple)',
      agents: [
        { name: 'Product Strategy Agent', icon: '🎯', tasks: 'Market analysis, competitor research, opportunity identification' },
        { name: 'Requirements Agent', icon: '📋', tasks: 'Ideas → specs, user stories, acceptance criteria generation' },
        { name: 'UX Research Agent', icon: '🔍', tasks: 'User feedback analysis, pain point identification, flow suggestions' }
      ]
    },
    {
      phase: 'Design & Architecture',
      color: 'var(--accent-blue)',
      agents: [
        { name: 'Architect Agent', icon: '🏗️', tasks: 'System design, tech selection, ADRs, scalability planning' },
        { name: 'UI/UX Design Agent', icon: '🎨', tasks: 'Wireframes, design systems, accessibility compliance' },
        { name: 'Data Modeling Agent', icon: '🗄️', tasks: 'Schema design, data flow, privacy classification' },
        { name: 'API Design Agent', icon: '🔌', tasks: 'Contract-first design, OpenAPI specs, versioning' }
      ]
    },
    {
      phase: 'Development',
      color: 'var(--accent-green)',
      agents: [
        { name: 'Frontend Agent', icon: '⚛️', tasks: 'UI components, state management, responsive design' },
        { name: 'Backend Agent', icon: '⚙️', tasks: 'Services, APIs, business logic, integrations' },
        { name: 'Database Agent', icon: '💾', tasks: 'Migrations, queries, optimization, indexing' },
        { name: 'Code Review Agent', icon: '👁️', tasks: 'PR reviews, improvements, standards enforcement' }
      ]
    },
    {
      phase: 'Quality Assurance',
      color: 'var(--accent-cyan)',
      agents: [
        { name: 'Unit Test Agent', icon: '🧪', tasks: 'Generate/maintain unit tests, coverage analysis' },
        { name: 'Integration Test Agent', icon: '🔗', tasks: 'API tests, contract tests, service integration' },
        { name: 'E2E Test Agent', icon: '🎭', tasks: 'User journeys, visual regression, cross-browser' },
        { name: 'Performance Agent', icon: '⚡', tasks: 'Load testing, stress testing, bottleneck identification' },
        { name: 'Security Agent', icon: '🔒', tasks: 'SAST, DAST, dependency scanning, pen testing' },
        { name: 'Accessibility Agent', icon: '♿', tasks: 'WCAG compliance, screen reader testing' },
        { name: 'Chaos Agent', icon: '🌪️', tasks: 'Fault injection, resilience testing, failure scenarios' }
      ]
    },
    {
      phase: 'Deployment & Release',
      color: 'var(--accent-orange)',
      agents: [
        { name: 'CI/CD Agent', icon: '🔄', tasks: 'Pipeline management, build optimization, artifacts' },
        { name: 'Infrastructure Agent', icon: '☁️', tasks: 'IaC, provisioning, scaling, cost optimization' },
        { name: 'Release Agent', icon: '🚀', tasks: 'Feature flags, canary deployments, rollback decisions' },
        { name: 'Migration Agent', icon: '📦', tasks: 'Data migrations, backward compatibility, blue-green' }
      ]
    },
    {
      phase: 'Operations & Monitoring',
      color: 'var(--accent-red)',
      agents: [
        { name: 'Observability Agent', icon: '📊', tasks: 'Metrics, logs, traces, dashboard creation' },
        { name: 'Alerting Agent', icon: '🚨', tasks: 'Alert rules, noise reduction, severity classification' },
        { name: 'Incident Agent', icon: '🚒', tasks: 'Detection, diagnosis, auto-remediation (L1/L2)' },
        { name: 'Postmortem Agent', icon: '📝', tasks: 'Timeline, root cause analysis, action items' }
      ]
    },
    {
      phase: 'Maintenance & Evolution',
      color: 'var(--accent-pink)',
      agents: [
        { name: 'Tech Debt Agent', icon: '🧹', tasks: 'Identify debt, prioritize refactoring, track improvements' },
        { name: 'Dependency Agent', icon: '📚', tasks: 'Update libraries, security patches, compatibility' },
        { name: 'Documentation Agent', icon: '📖', tasks: 'Keep docs in sync, API docs, runbooks' },
        { name: 'Deprecation Agent', icon: '🗑️', tasks: 'Sunset planning, migration guides, usage tracking' }
      ]
    },
    {
      phase: 'Compliance & Governance',
      color: 'var(--text-muted)',
      agents: [
        { name: 'Compliance Agent', icon: '✅', tasks: 'SOC2, GDPR, HIPAA, PCI audit evidence' },
        { name: 'License Agent', icon: '⚖️', tasks: 'Open source license compliance, legal review' },
        { name: 'Cost Agent', icon: '💰', tasks: 'Cloud spend analysis, optimization recommendations' },
        { name: 'Carbon Agent', icon: '🌱', tasks: 'Environmental impact, green computing suggestions' }
      ]
    }
  ];

  return (
    <div>
      <PageHeader
        title="🤖 AI Agent Architecture"
        description="Specialized AI agents for every phase of the software development lifecycle"
      />

      <Card>
        <CardTitle icon="🎯">The Orchestrator Model</CardTitle>
        <div style={{
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(74, 158, 255, 0.1))',
          border: '2px solid var(--accent-purple)',
          borderRadius: '16px',
          padding: '30px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧠</div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>ORCHESTRATOR AGENT</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            The master agent that understands business context, delegates to specialist agents,
            manages dependencies between phases, and escalates to humans only when necessary.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          {['Understands Context', 'Delegates Tasks', 'Manages Dependencies', 'Escalates Wisely'].map((item, i) => (
            <div key={i} style={{
              background: 'var(--bg-elevated)',
              padding: '15px 10px',
              borderRadius: '8px',
              fontSize: '0.85rem'
            }}>
              {item}
            </div>
          ))}
        </div>
      </Card>

      {agentPhases.map((phase, index) => (
        <Card key={index}>
          <CardTitle>
            <span style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: phase.color,
              marginRight: '10px'
            }}></span>
            Phase {index + 1}: {phase.phase}
          </CardTitle>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '15px'
          }}>
            {phase.agents.map((agent, agentIndex) => (
              <div key={agentIndex} style={{
                background: 'var(--bg-elevated)',
                borderRadius: '12px',
                padding: '20px',
                borderLeft: `4px solid ${phase.color}`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '1.5rem' }}>{agent.icon}</span>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>{agent.name}</h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {agent.tasks}
                </p>
              </div>
            ))}
          </div>
        </Card>
      ))}

      <Card>
        <CardTitle icon="🔄">Agent Communication Flow</CardTitle>
        <div style={{
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          padding: '30px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ background: 'var(--bg-card)', padding: '15px 25px', borderRadius: '8px' }}>
              📋 Requirements
            </div>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
            <div style={{ background: 'var(--bg-card)', padding: '15px 25px', borderRadius: '8px' }}>
              🏗️ Design
            </div>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
            <div style={{ background: 'var(--bg-card)', padding: '15px 25px', borderRadius: '8px' }}>
              💻 Code
            </div>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
            <div style={{ background: 'var(--bg-card)', padding: '15px 25px', borderRadius: '8px' }}>
              🧪 Test
            </div>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
            <div style={{ background: 'var(--bg-card)', padding: '15px 25px', borderRadius: '8px' }}>
              🚀 Deploy
            </div>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
            <div style={{ background: 'var(--bg-card)', padding: '15px 25px', borderRadius: '8px' }}>
              📊 Monitor
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px', marginBottom: 0 }}>
            Each phase's agents communicate through the Orchestrator, ensuring consistency and traceability
          </p>
        </div>
      </Card>

      <InfoBox variant="insight" title="Key Principle">
        <p style={{ margin: 0 }}>
          <strong>Agents are specialists, not generalists.</strong> Each agent is optimized for a specific task,
          with deep knowledge of best practices, patterns, and anti-patterns in its domain.
          The Orchestrator ensures they work together seamlessly.
        </p>
      </InfoBox>
    </div>
  );
};

export default AgentArchitecture;
