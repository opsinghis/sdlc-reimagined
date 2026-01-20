import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  InfoBox
} from '../../components/ui';

const OrgStructure = () => {
  const humanRoles = [
    {
      title: 'Quality Strategist',
      previousRole: 'QE Engineer / Architect',
      icon: '🎯',
      responsibilities: [
        'Define quality standards agents enforce',
        'Edge case judgment',
        'Risk-based testing strategy',
        'Customer quality perception'
      ]
    },
    {
      title: 'People & Culture Lead',
      previousRole: 'Scrum Master / EM',
      icon: '💚',
      responsibilities: [
        'Team psychological safety',
        'Conflict resolution',
        'Career development',
        'Culture building'
      ]
    },
    {
      title: 'Domain Expert',
      previousRole: 'BA / PO',
      icon: '🧠',
      responsibilities: [
        'Business domain knowledge',
        'Stakeholder relationships',
        'Edge case clarification',
        'Business rule validation'
      ]
    },
    {
      title: 'Risk & Security Officer',
      previousRole: 'Security Engineer / SRE',
      icon: '🛡️',
      responsibilities: [
        'Risk acceptance decisions',
        'Security architecture',
        'Compliance sign-off',
        'Incident escalation handling'
      ]
    },
    {
      title: 'Innovation Lead',
      previousRole: 'Tech Lead / Architect',
      icon: '💡',
      responsibilities: [
        'Emerging technology evaluation',
        'Technical vision',
        'Build vs buy decisions',
        'Innovation initiatives'
      ]
    },
    {
      title: 'Customer Advocate',
      previousRole: 'Support / UX Researcher',
      icon: '❤️',
      responsibilities: [
        'Customer empathy',
        'User research',
        'Feedback interpretation',
        'Experience strategy'
      ]
    }
  ];

  return (
    <div>
      <PageHeader
        title="🏢 AI-Native Org Structure"
        description="How teams are organized when AI agents do the heavy lifting"
      />

      <Card>
        <CardTitle icon="📐">The Three-Layer Model</CardTitle>

        {/* Executive Layer */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(244, 114, 182, 0.2))',
          border: '2px solid var(--accent-purple)',
          borderRadius: '16px',
          padding: '25px',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', textAlign: 'center' }}>
            EXECUTIVE LAYER
          </h3>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', margin: '0 0 20px 0' }}>
            Vision, Strategy, Culture, External Relationships
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '15px',
            textAlign: 'center'
          }}>
            {['CTO', 'VP Product', 'VP Engineering', 'CISO'].map((role, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                padding: '15px',
                borderRadius: '8px',
                fontWeight: '600'
              }}>
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div style={{ textAlign: 'center', fontSize: '2rem', color: 'var(--text-muted)', margin: '10px 0' }}>
          ↓
        </div>

        {/* AI Orchestration Layer */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(74, 158, 255, 0.2), rgba(34, 211, 238, 0.2))',
          border: '2px solid var(--accent-blue)',
          borderRadius: '16px',
          padding: '25px',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', textAlign: 'center' }}>
            🤖 AI ORCHESTRATION LAYER
          </h3>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', margin: '0 0 20px 0' }}>
            Autonomous agents executing the SDLC
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '15px',
            textAlign: 'center'
          }}>
            {[
              { icon: '🎯', name: 'Product Agents' },
              { icon: '💻', name: 'Dev Agents' },
              { icon: '🧪', name: 'Quality Agents' },
              { icon: '🚀', name: 'Ops Agents' },
              { icon: '🔒', name: 'Security Agents' },
              { icon: '📊', name: 'Analytics Agents' }
            ].map((agent, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{agent.icon}</div>
                <div style={{ fontSize: '0.85rem' }}>{agent.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div style={{ textAlign: 'center', fontSize: '2rem', color: 'var(--text-muted)', margin: '10px 0' }}>
          ↓
        </div>

        {/* Human Specialist Layer */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(251, 146, 60, 0.2))',
          border: '2px solid var(--accent-green)',
          borderRadius: '16px',
          padding: '25px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', textAlign: 'center' }}>
            HUMAN SPECIALIST LAYER
          </h3>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', margin: '0 0 20px 0' }}>
            Intervene only when AI escalates
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '15px'
          }}>
            {humanRoles.map((role, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{role.icon}</div>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>{role.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  ex-{role.previousRole}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="👥">Human Specialist Roles Defined</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {humanRoles.map((role, index) => (
            <div key={index} style={{
              background: 'var(--bg-elevated)',
              borderRadius: '12px',
              padding: '20px',
              borderTop: '4px solid var(--accent-green)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                <span style={{ fontSize: '2rem' }}>{role.icon}</span>
                <div>
                  <h4 style={{ margin: 0 }}>{role.title}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Previously: {role.previousRole}
                  </span>
                </div>
              </div>
              <ul style={{
                margin: 0,
                paddingLeft: '20px',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
              }}>
                {role.responsibilities.map((resp, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardTitle icon="🔄">Communication Flow</CardTitle>
        <div style={{
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          padding: '30px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                background: 'rgba(167, 139, 250, 0.2)',
                borderRadius: '10px',
                padding: '20px',
                marginBottom: '10px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>👔</div>
                <strong>Executives</strong>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Set vision & strategy
              </div>
            </div>
            <div>
              <div style={{
                background: 'rgba(74, 158, 255, 0.2)',
                borderRadius: '10px',
                padding: '20px',
                marginBottom: '10px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤖</div>
                <strong>AI Agents</strong>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Execute autonomously
              </div>
            </div>
            <div>
              <div style={{
                background: 'rgba(74, 222, 128, 0.2)',
                borderRadius: '10px',
                padding: '20px',
                marginBottom: '10px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧑‍💼</div>
                <strong>Human Specialists</strong>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Handle escalations
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'var(--bg-card)',
            borderRadius: '10px'
          }}>
            <h4 style={{ margin: '0 0 15px 0' }}>Daily Flow</h4>
            <ol style={{
              margin: 0,
              paddingLeft: '20px',
              color: 'var(--text-secondary)'
            }}>
              <li style={{ marginBottom: '8px' }}>AI Orchestrator receives work from backlog</li>
              <li style={{ marginBottom: '8px' }}>Orchestrator delegates to specialist agents</li>
              <li style={{ marginBottom: '8px' }}>Agents execute autonomously (code, test, deploy)</li>
              <li style={{ marginBottom: '8px' }}>Only escalate to humans for judgment calls</li>
              <li style={{ marginBottom: '8px' }}>Humans make decisions, AI continues execution</li>
              <li>Executives review outcomes weekly, adjust strategy</li>
            </ol>
          </div>
        </div>
      </Card>

      <InfoBox variant="insight" title="The Key Insight">
        <p style={{ margin: 0 }}>
          In the AI-native org, <strong>humans don't manage work - they manage outcomes</strong>.
          AI agents handle the "how" while humans focus on the "what" and "why".
          This isn't about fewer people - it's about people doing more meaningful work.
        </p>
      </InfoBox>
    </div>
  );
};

export default OrgStructure;
