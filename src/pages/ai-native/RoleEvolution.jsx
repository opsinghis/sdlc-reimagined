import React, { useState } from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  Tabs,
  InfoBox
} from '../../components/ui';

const RoleEvolution = () => {
  const [activeTab, setActiveTab] = useState('product');

  const roleCategories = {
    product: {
      label: 'Product & Strategy',
      roles: [
        {
          current: 'Product Owner',
          future: 'Product Visionary',
          icon: '👤',
          eliminated: [
            'Backlog grooming',
            'Story writing',
            'Sprint prioritization',
            'Acceptance criteria writing',
            'Velocity tracking'
          ],
          aiReplacement: 'Product Agent auto-generates stories, prioritizes by data, writes specs',
          remains: [
            'Product vision & strategy',
            'Customer relationships',
            'Business judgment calls',
            'Saying "no" to features',
            'Stakeholder alignment'
          ]
        },
        {
          current: 'Business Analyst',
          future: 'Domain Expert',
          icon: '📊',
          eliminated: [
            'Requirements documentation',
            'Process mapping',
            'User story writing',
            'Gap analysis reports'
          ],
          aiReplacement: 'Requirements Agent converts interviews to specs, suggests process improvements',
          remains: [
            'Stakeholder politics navigation',
            'Change management',
            'Domain expertise',
            'Business rule clarification'
          ]
        },
        {
          current: 'UX Researcher',
          future: 'Customer Advocate',
          icon: '🔍',
          eliminated: [
            'Survey analysis',
            'Analytics interpretation',
            'A/B test analysis',
            'Heatmap analysis'
          ],
          aiReplacement: 'UX Research Agent analyzes behavior, sentiment, and test results automatically',
          remains: [
            'Deep user empathy',
            'Qualitative insights',
            'Understanding the "why"',
            'User interview moderation'
          ]
        }
      ]
    },
    engineering: {
      label: 'Engineering',
      roles: [
        {
          current: 'Frontend Developer',
          future: 'UI Innovation Lead',
          icon: '⚛️',
          eliminated: [
            'Component implementation',
            'State management code',
            'Responsive CSS',
            'Unit test writing',
            'Bug fixes'
          ],
          aiReplacement: 'Frontend Agent generates complete UI code autonomously',
          remains: [
            'Novel UI paradigms',
            'Creative interactions',
            'Design system evolution',
            'Emerging tech evaluation'
          ]
        },
        {
          current: 'Backend Developer',
          future: 'Systems Thinker',
          icon: '⚙️',
          eliminated: [
            'API implementation',
            'CRUD operations',
            'Database queries',
            'Integration code',
            'Bug fixes'
          ],
          aiReplacement: 'Backend Agent generates services, APIs, business logic autonomously',
          remains: [
            'Complex domain modeling',
            'Architectural decisions',
            'System integration strategy',
            'Performance optimization strategy'
          ]
        },
        {
          current: 'DevOps Engineer',
          future: 'Platform Strategist',
          icon: '🔧',
          eliminated: [
            'Pipeline configuration',
            'Infrastructure provisioning',
            'Monitoring setup',
            'Deployment scripts',
            'Incident response (L1/L2)'
          ],
          aiReplacement: 'DevOps Agent handles IaC, CI/CD, monitoring, auto-remediation',
          remains: [
            'Platform strategy',
            'Vendor selection',
            'Cost optimization decisions',
            'Security architecture'
          ]
        },
        {
          current: 'Security Engineer',
          future: 'Risk Strategist',
          icon: '🔒',
          eliminated: [
            'Vulnerability scanning',
            'Security patching',
            'Compliance audits',
            'Penetration testing',
            'Security reviews'
          ],
          aiReplacement: 'Security Agent runs continuous SAST/DAST, auto-patches, generates audit evidence',
          remains: [
            'Risk acceptance decisions',
            'Threat modeling creativity',
            'Security architecture',
            'Incident response strategy'
          ]
        }
      ]
    },
    quality: {
      label: 'Quality',
      roles: [
        {
          current: 'QE Engineer',
          future: 'Quality Strategist',
          icon: '🧪',
          eliminated: [
            'Test case writing',
            'Test automation',
            'Test execution',
            'Bug triage',
            'Test maintenance',
            'Coverage reporting'
          ],
          aiReplacement: 'QE Agent generates tests from code/specs, executes continuously, self-heals',
          remains: [
            'Quality strategy definition',
            'Edge case intuition',
            'Risk-based test prioritization',
            'Customer quality perception'
          ]
        },
        {
          current: 'Performance Engineer',
          future: 'Performance Architect',
          icon: '⚡',
          eliminated: [
            'Load test scripts',
            'Performance test execution',
            'Bottleneck identification',
            'Performance reporting'
          ],
          aiReplacement: 'Performance Agent runs continuous load tests, identifies bottlenecks, suggests fixes',
          remains: [
            'SLA negotiation',
            'Capacity planning strategy',
            'Performance architecture',
            'Cost vs performance trade-offs'
          ]
        }
      ]
    },
    management: {
      label: 'Management',
      roles: [
        {
          current: 'Scrum Master',
          future: 'Flow Coach',
          icon: '🏃',
          eliminated: [
            'Running standups',
            'Sprint planning facilitation',
            'Burndown tracking',
            'Impediment logging',
            'Retro facilitation',
            'Velocity reporting'
          ],
          aiReplacement: 'Orchestrator Agent provides async digests, auto-plans, removes blockers',
          remains: [
            'Team psychological safety',
            'Conflict resolution',
            'Career coaching',
            'Culture building',
            'Cross-team collaboration'
          ]
        },
        {
          current: 'Project Manager',
          future: 'Outcome Owner',
          icon: '📋',
          eliminated: [
            'Status reports',
            'Gantt chart updates',
            'Resource tracking',
            'Meeting scheduling',
            'Risk logs'
          ],
          aiReplacement: 'Project Agent provides real-time dashboards, dynamic scheduling, auto-allocation',
          remains: [
            'Stakeholder alignment',
            'Scope negotiation',
            'Risk decisions',
            'Business outcome accountability'
          ]
        },
        {
          current: 'Engineering Manager',
          future: 'Talent & Growth Lead',
          icon: '👔',
          eliminated: [
            'Sprint metrics tracking',
            'Capacity planning',
            'Task assignment',
            'Status updates',
            'Performance dashboards'
          ],
          aiReplacement: 'Metrics Agent tracks productivity, Orchestrator assigns work optimally',
          remains: [
            'Hiring decisions',
            'Career development',
            'Team composition',
            'Motivation & culture',
            '1:1 coaching'
          ]
        },
        {
          current: 'Tech Lead',
          future: 'Technical Visionary',
          icon: '🎖️',
          eliminated: [
            'Code reviews',
            'Architecture diagrams',
            'Technical documentation',
            'Design reviews'
          ],
          aiReplacement: 'Architecture Agent + Review Agent handle design and code quality',
          remains: [
            'Technical vision',
            'Innovation direction',
            'Build vs buy decisions',
            'Team technical growth'
          ]
        },
        {
          current: 'Architect',
          future: 'Chief Technologist',
          icon: '🏛️',
          eliminated: [
            'Architecture diagrams',
            'ADR writing',
            'Technology evaluation reports',
            'Code reviews'
          ],
          aiReplacement: 'Architect Agent generates designs, ADRs, evaluates options with trade-offs',
          remains: [
            'Long-term technical vision',
            'Strategic technology bets',
            'Cross-system thinking',
            'Emerging tech adoption'
          ]
        }
      ]
    }
  };

  const tabs = Object.entries(roleCategories).map(([key, value]) => ({
    id: key,
    label: value.label
  }));

  const currentCategory = roleCategories[activeTab];

  return (
    <div>
      <PageHeader
        title="🔄 Role Evolution"
        description="How every role transforms in an AI-native organization"
      />

      <InfoBox variant="warning" title="Not Elimination - Evolution">
        <p style={{ margin: 0 }}>
          Roles aren't being eliminated - they're evolving to focus on what humans do best:
          <strong> strategy, relationships, judgment, and creativity</strong>.
          The tactical, repetitive work moves to AI agents.
        </p>
      </InfoBox>

      <Card>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div style={{ marginTop: '20px' }}>
          {currentCategory.roles.map((role, index) => (
            <div key={index} style={{
              background: 'var(--bg-elevated)',
              borderRadius: '16px',
              padding: '25px',
              marginBottom: '20px'
            }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                <span style={{ fontSize: '2.5rem' }}>{role.icon}</span>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      color: 'var(--accent-red)',
                      textDecoration: 'line-through',
                      fontSize: '1.1rem'
                    }}>
                      {role.current}
                    </span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{
                      color: 'var(--accent-green)',
                      fontWeight: '600',
                      fontSize: '1.3rem'
                    }}>
                      {role.future}
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Replacement Note */}
              <div style={{
                background: 'rgba(74, 158, 255, 0.1)',
                border: '1px solid rgba(74, 158, 255, 0.3)',
                borderRadius: '8px',
                padding: '12px 15px',
                marginBottom: '20px',
                fontSize: '0.9rem'
              }}>
                <strong style={{ color: 'var(--accent-blue)' }}>🤖 AI Replacement:</strong>{' '}
                <span style={{ color: 'var(--text-secondary)' }}>{role.aiReplacement}</span>
              </div>

              {/* Two columns */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                {/* Eliminated */}
                <div style={{
                  background: 'rgba(248, 113, 113, 0.1)',
                  border: '1px solid rgba(248, 113, 113, 0.2)',
                  borderRadius: '10px',
                  padding: '15px'
                }}>
                  <h4 style={{
                    color: 'var(--accent-red)',
                    margin: '0 0 12px 0',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    ❌ Tasks Eliminated
                  </h4>
                  <ul style={{
                    margin: 0,
                    paddingLeft: '20px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    {role.eliminated.map((task, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{task}</li>
                    ))}
                  </ul>
                </div>

                {/* Remains */}
                <div style={{
                  background: 'rgba(74, 222, 128, 0.1)',
                  border: '1px solid rgba(74, 222, 128, 0.2)',
                  borderRadius: '10px',
                  padding: '15px'
                }}>
                  <h4 style={{
                    color: 'var(--accent-green)',
                    margin: '0 0 12px 0',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    ✅ Human Value Remains
                  </h4>
                  <ul style={{
                    margin: 0,
                    paddingLeft: '20px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    {role.remains.map((task, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardTitle icon="📊">Team Size Impact</CardTitle>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Company Size</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Current Team</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>AI-Native Team</th>
                <th style={{ padding: '12px', textAlign: 'center' }}>Reduction</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px' }}><strong>Startup (10)</strong></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>2 PM, 5 Dev, 2 QE, 1 DevOps</td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>1 Product Lead, 2 Dev, 1 Ops</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>
                  <span style={{ background: 'rgba(74, 222, 128, 0.2)', color: 'var(--accent-green)', padding: '4px 12px', borderRadius: '20px', fontWeight: '600' }}>60%</span>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px' }}><strong>Growth (50)</strong></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>5 PM, 25 Dev, 10 QE, 5 DevOps, 5 Mgmt</td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>2 Product, 8 Dev, 3 Ops, 2 Leads</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>
                  <span style={{ background: 'rgba(74, 222, 128, 0.2)', color: 'var(--accent-green)', padding: '4px 12px', borderRadius: '20px', fontWeight: '600' }}>70%</span>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px' }}><strong>Enterprise (500)</strong></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>50 PM, 250 Dev, 100 QE, 50 DevOps, 50 Mgmt</td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>15 Product, 60 Dev, 20 Ops, 15 Leads</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>
                  <span style={{ background: 'rgba(74, 222, 128, 0.2)', color: 'var(--accent-green)', padding: '4px 12px', borderRadius: '20px', fontWeight: '600' }}>78%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default RoleEvolution;
