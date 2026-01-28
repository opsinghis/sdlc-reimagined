import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PageHeader,
  Card,
  CardTitle,
  InfoBox,
  MetricsRow
} from '../../components/ui';

const TransitionRoadmap = () => {
  const [activeWave, setActiveWave] = useState(null);

  // Restructured around the agentic SDLC transition
  const waves = [
    {
      id: 'wave1',
      title: 'Wave 1: Foundation & Pilot',
      duration: 'Months 1-3',
      color: 'var(--accent-blue)',
      icon: '🏗️',
      goal: 'Establish AI infrastructure and prove the model with one team',
      focus: 'Set up Orchestrator Agent, pilot team adoption, baseline metrics',
      phases: [
        {
          name: 'Infrastructure Setup',
          tasks: [
            { task: 'Deploy Orchestrator Agent as central coordinator', status: 'critical' },
            { task: 'Set up Product Agent for requirements generation', status: 'critical' },
            { task: 'Configure Architect Agent for technical design', status: 'normal' },
            { task: 'Establish MCP integrations (Jira, GitHub, Confluence)', status: 'normal' },
            { task: 'Define agent communication protocols', status: 'normal' }
          ]
        },
        {
          name: 'Pilot Team Enablement',
          tasks: [
            { task: 'Select pilot team (ideally full-stack squad)', status: 'critical' },
            { task: 'Train team on the 10-step agentic flow', status: 'critical' },
            { task: 'Establish the 3 human checkpoint gates', status: 'critical' },
            { task: 'Create team-specific AI-CONFIG.md configurations', status: 'normal' },
            { task: 'Identify AI champions within the team', status: 'normal' }
          ]
        },
        {
          name: 'Baseline & Metrics',
          tasks: [
            { task: 'Capture baseline: cycle time, lead time, throughput', status: 'critical' },
            { task: 'Document current ceremony time investment', status: 'normal' },
            { task: 'Track defect escape rate and rework %', status: 'normal' },
            { task: 'Measure time-to-first-commit for new features', status: 'normal' }
          ]
        }
      ],
      metrics: [
        { value: '1', label: 'Pilot Team' },
        { value: '3', label: 'Core Agents' },
        { value: '10', label: 'Step Flow Adopted' }
      ],
      roleChanges: [
        { from: 'Product Owner', to: 'Intent Definer', change: 'Focuses on Gate 1: defining goals, not writing stories' },
        { from: 'Tech Lead', to: 'Quality Gatekeeper', change: 'Focuses on Gate 3: final approval, not code review' }
      ]
    },
    {
      id: 'wave2',
      title: 'Wave 2: Build & Quality Agents',
      duration: 'Months 4-6',
      color: 'var(--accent-green)',
      icon: '💻',
      goal: 'Automate the build and quality phases with specialized agents',
      focus: 'Dev Agents, QE Agents, Security Agent working in parallel',
      phases: [
        {
          name: 'Development Agents',
          tasks: [
            { task: 'Deploy Frontend Agent for UI/component generation', status: 'critical' },
            { task: 'Deploy Backend Agent for API/service implementation', status: 'critical' },
            { task: 'Deploy Database Agent for schema/migration work', status: 'critical' },
            { task: 'Configure parallel execution orchestration', status: 'normal' },
            { task: 'Set up agent-to-agent handoff protocols', status: 'normal' }
          ]
        },
        {
          name: 'Quality Agents',
          tasks: [
            { task: 'Deploy QE Agent for test generation (unit, E2E)', status: 'critical' },
            { task: 'Deploy Security Agent for SAST/DAST scans', status: 'critical' },
            { task: 'Deploy Performance Agent for load testing', status: 'normal' },
            { task: 'Integrate quality checks into build step (step 7)', status: 'critical' },
            { task: 'Establish quality gates before human approval', status: 'normal' }
          ]
        },
        {
          name: 'Process Integration',
          tasks: [
            { task: 'Connect all agents to Orchestrator workflow', status: 'critical' },
            { task: 'Implement Gate 2: Human spec review workflow', status: 'critical' },
            { task: 'Set up automated PR creation from Dev Agents', status: 'normal' },
            { task: 'Configure test results reporting to Gate 3', status: 'normal' }
          ]
        }
      ],
      metrics: [
        { value: '6+', label: 'Active Agents' },
        { value: '80%', label: 'Test Coverage' },
        { value: '50%', label: 'Faster Builds' }
      ],
      roleChanges: [
        { from: 'Developer', to: 'AI-Augmented Developer', change: 'Reviews AI code at Gate 3, handles complex logic only' },
        { from: 'QE Engineer', to: 'Quality Strategist', change: 'Defines test strategy, reviews AI-generated tests' },
        { from: 'Security Engineer', to: 'Security Architect', change: 'Sets policies, reviews Security Agent findings' }
      ]
    },
    {
      id: 'wave3',
      title: 'Wave 3: Operations & Deployment',
      duration: 'Months 7-9',
      color: 'var(--accent-purple)',
      icon: '🚀',
      goal: 'Complete the flow with DevOps and Monitoring agents',
      focus: 'DevOps Agent, Monitoring Agent, continuous deployment',
      phases: [
        {
          name: 'DevOps Automation',
          tasks: [
            { task: 'Deploy DevOps Agent for CI/CD orchestration', status: 'critical' },
            { task: 'Implement automated deployment (step 9)', status: 'critical' },
            { task: 'Configure rollback automation', status: 'normal' },
            { task: 'Set up infrastructure-as-code generation', status: 'normal' },
            { task: 'Integrate deployment with Gate 3 approval', status: 'critical' }
          ]
        },
        {
          name: 'Monitoring & Operations',
          tasks: [
            { task: 'Deploy Monitoring Agent (step 10)', status: 'critical' },
            { task: 'Implement L1 incident auto-remediation', status: 'normal' },
            { task: 'Set up predictive alerting', status: 'normal' },
            { task: 'Configure auto-generated runbooks', status: 'normal' },
            { task: 'Deploy Incident Agent for triage', status: 'normal' }
          ]
        },
        {
          name: 'Full Flow Integration',
          tasks: [
            { task: 'Complete 10-step flow for pilot team', status: 'critical' },
            { task: 'Test end-to-end: Intent → Live in production', status: 'critical' },
            { task: 'Document flow time and bottlenecks', status: 'normal' },
            { task: 'Refine agent handoffs based on learnings', status: 'normal' }
          ]
        }
      ],
      metrics: [
        { value: '10/10', label: 'Steps Automated' },
        { value: '80%', label: 'L1 Auto-Resolution' },
        { value: '2hrs', label: 'Deploy Time' }
      ],
      roleChanges: [
        { from: 'DevOps Engineer', to: 'Platform Strategist', change: 'Designs platforms, DevOps Agent handles execution' },
        { from: 'SRE', to: 'Reliability Architect', change: 'Sets SLOs/SLAs, Monitoring Agent handles alerts' }
      ]
    },
    {
      id: 'wave4',
      title: 'Wave 4: Scale & Optimize',
      duration: 'Months 10-12',
      color: 'var(--accent-orange)',
      icon: '📈',
      goal: 'Roll out to all teams and optimize the agentic flow',
      focus: 'Organization-wide adoption, ceremony elimination, continuous improvement',
      phases: [
        {
          name: 'Organization Rollout',
          tasks: [
            { task: 'Expand agentic flow to all development teams', status: 'critical' },
            { task: 'Train all Product Owners on Gate 1 workflow', status: 'critical' },
            { task: 'Train all Tech Leads on Gate 3 workflow', status: 'critical' },
            { task: 'Scale agent infrastructure for load', status: 'normal' },
            { task: 'Establish cross-team Orchestrator coordination', status: 'normal' }
          ]
        },
        {
          name: 'Ceremony Transformation',
          tasks: [
            { task: 'Replace daily standups with AI async digests', status: 'critical' },
            { task: 'Reduce sprint planning to intent-setting sessions', status: 'critical' },
            { task: 'Transform retros to AI-facilitated async feedback', status: 'normal' },
            { task: 'Move from sprints to continuous flow', status: 'critical' },
            { task: 'Transition Scrum Masters to Flow Coaches', status: 'normal' }
          ]
        },
        {
          name: 'Optimization & Governance',
          tasks: [
            { task: 'Establish AI governance and ethics guidelines', status: 'critical' },
            { task: 'Create escalation paths for agent failures', status: 'normal' },
            { task: 'Implement continuous agent performance tuning', status: 'normal' },
            { task: 'Build ROI dashboard and executive reporting', status: 'normal' },
            { task: 'Document lessons learned and best practices', status: 'normal' }
          ]
        }
      ],
      metrics: [
        { value: '100%', label: 'Teams Adopted' },
        { value: '70%', label: 'Less Ceremonies' },
        { value: '3x', label: 'Velocity Increase' }
      ],
      roleChanges: [
        { from: 'Scrum Master', to: 'Flow Coach', change: 'Optimizes flow, removes blockers, no longer runs ceremonies' },
        { from: 'Engineering Manager', to: 'Capability Leader', change: 'Focuses on people growth, AI handles work distribution' }
      ]
    }
  ];

  const overallMetrics = [
    { value: '4-6 wks', label: 'Idea to Production' },
    { value: '3', label: 'Human Gates' },
    { value: '10+', label: 'AI Agents' },
    { value: '70%', label: 'Less Ceremony Time' },
    { value: '3x', label: 'Feature Velocity' }
  ];

  return (
    <div>
      <PageHeader
        title="🗺️ Transition Roadmap"
        description="12-month journey to the AI-native agentic SDLC"
      />

      {/* The Agentic Flow We're Adopting */}
      <Card>
        <CardTitle icon="🎯">Target State: The 10-Step Agentic Flow</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          We're transitioning from traditional SDLC to the agentic flow where AI agents execute and humans decide at 3 strategic gates.
        </p>

        <div style={{
          display: 'flex',
          gap: '5px',
          overflowX: 'auto',
          padding: '15px 0',
          marginBottom: '20px'
        }}>
          {[
            { step: 1, label: 'Intent', icon: '👤', human: true },
            { step: 2, label: 'Orchestrate', icon: '🧠', human: false },
            { step: 3, label: 'Requirements', icon: '📋', human: false },
            { step: 4, label: 'Review', icon: '👤', human: true },
            { step: 5, label: 'Design', icon: '🏗️', human: false },
            { step: 6, label: 'Build', icon: '💻', human: false },
            { step: 7, label: 'Test', icon: '🧪', human: false },
            { step: 8, label: 'Approve', icon: '👤', human: true },
            { step: 9, label: 'Deploy', icon: '🚀', human: false },
            { step: 10, label: 'Monitor', icon: '✅', human: false }
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                minWidth: '70px',
                padding: '10px',
                background: s.human ? 'var(--accent-orange)22' : 'var(--accent-blue)22',
                border: s.human ? '2px dashed var(--accent-orange)' : '2px solid var(--accent-blue)',
                borderRadius: s.human ? '20px' : '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.2rem' }}>{s.icon}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: '600', color: s.human ? 'var(--accent-orange)' : 'var(--text-primary)' }}>
                  {s.label}
                </div>
              </div>
              {i < 9 && <span style={{ color: 'var(--text-muted)', margin: '0 3px' }}>→</span>}
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          fontSize: '0.8rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '10px', border: '2px dashed var(--accent-orange)', background: 'var(--accent-orange)22' }}></div>
            <span>Human Gates (3)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '4px', border: '2px solid var(--accent-blue)', background: 'var(--accent-blue)22' }}></div>
            <span>AI Agent Steps (7)</span>
          </div>
        </div>

        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: 'var(--bg-elevated)',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <Link to="/sdlc-comparison" style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>
            See the detailed step-by-step flow →
          </Link>
        </div>
      </Card>

      {/* Target Outcomes */}
      <Card>
        <CardTitle icon="📊">Target Outcomes (Month 12)</CardTitle>
        <MetricsRow metrics={overallMetrics} />
      </Card>

      {/* 4 Waves */}
      <Card>
        <CardTitle icon="🌊">4-Wave Implementation</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
          Click each wave to see detailed implementation steps and role transitions.
        </p>

        {/* Wave Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '30px' }}>
          {waves.map((wave) => (
            <button
              key={wave.id}
              onClick={() => setActiveWave(activeWave === wave.id ? null : wave.id)}
              style={{
                background: activeWave === wave.id ? `${wave.color}22` : 'var(--bg-elevated)',
                border: activeWave === wave.id ? `2px solid ${wave.color}` : '1px solid var(--border)',
                borderRadius: '12px',
                padding: '20px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.5rem' }}>{wave.icon}</span>
                <div>
                  <div style={{ fontWeight: '600', color: wave.color }}>{wave.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{wave.duration}</div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{wave.goal}</p>
              <div style={{
                marginTop: '15px',
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
              }}>
                {wave.metrics.map((m, i) => (
                  <div key={i} style={{
                    padding: '4px 10px',
                    background: 'var(--bg-card)',
                    borderRadius: '4px',
                    fontSize: '0.75rem'
                  }}>
                    <strong style={{ color: wave.color }}>{m.value}</strong> {m.label}
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Expanded Wave Detail */}
        {activeWave && (() => {
          const wave = waves.find(w => w.id === activeWave);
          return (
            <div style={{
              background: `${wave.color}11`,
              border: `1px solid ${wave.color}33`,
              borderRadius: '16px',
              padding: '25px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '2rem' }}>{wave.icon}</span>
                <div>
                  <h3 style={{ margin: 0, color: wave.color }}>{wave.title}</h3>
                  <p style={{ margin: '5px 0 0 0', color: 'var(--text-secondary)' }}>{wave.focus}</p>
                </div>
              </div>

              {/* Implementation Phases */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                {wave.phases.map((phase, pi) => (
                  <div key={pi} style={{
                    background: 'var(--bg-card)',
                    borderRadius: '10px',
                    padding: '15px'
                  }}>
                    <h4 style={{ margin: '0 0 12px 0', fontSize: '0.9rem' }}>{phase.name}</h4>
                    {phase.tasks.map((item, ti) => (
                      <div key={ti} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        padding: '6px 0',
                        borderBottom: ti < phase.tasks.length - 1 ? '1px solid var(--border)' : 'none'
                      }}>
                        <span style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: item.status === 'critical' ? 'var(--accent-red)' : 'var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.6rem',
                          color: 'white',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          {item.status === 'critical' ? '!' : '○'}
                        </span>
                        <span style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)',
                          fontWeight: item.status === 'critical' ? '500' : '400'
                        }}>
                          {item.task}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Role Transitions */}
              <div>
                <h4 style={{ margin: '0 0 15px 0', color: wave.color }}>👥 Role Transitions in This Wave</h4>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {wave.roleChanges.map((role, ri) => (
                    <div key={ri} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '12px 15px',
                      background: 'var(--bg-card)',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        padding: '5px 12px',
                        background: 'var(--accent-red)22',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--accent-red)',
                        textDecoration: 'line-through',
                        minWidth: '120px',
                        textAlign: 'center'
                      }}>{role.from}</div>
                      <span style={{ color: 'var(--text-muted)' }}>→</span>
                      <div style={{
                        padding: '5px 12px',
                        background: 'var(--accent-green)22',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--accent-green)',
                        fontWeight: '600',
                        minWidth: '140px',
                        textAlign: 'center'
                      }}>{role.to}</div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', flex: 1 }}>{role.change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </Card>

      {/* Key Milestones */}
      <Card>
        <CardTitle icon="🏁">Key Milestones</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          {[
            { month: 'Month 3', milestone: 'First feature delivered through full agentic flow', color: 'var(--accent-blue)' },
            { month: 'Month 6', milestone: 'All agents operational, parallel build working', color: 'var(--accent-green)' },
            { month: 'Month 9', milestone: 'Intent → Production in under 2 weeks', color: 'var(--accent-purple)' },
            { month: 'Month 12', milestone: 'Organization-wide adoption, 3x velocity achieved', color: 'var(--accent-orange)' }
          ].map((m, i) => (
            <div key={i} style={{
              background: `${m.color}15`,
              border: `2px solid ${m.color}`,
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontWeight: '700', color: m.color, marginBottom: '8px' }}>{m.month}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{m.milestone}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Critical Success Factors */}
      <Card>
        <CardTitle icon="✅">Critical Success Factors</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '15px'
        }}>
          {[
            { icon: '🧠', title: 'Orchestrator First', desc: 'Deploy the Orchestrator Agent early - it coordinates all other agents and enforces the flow.' },
            { icon: '🚪', title: 'Gate Discipline', desc: 'Humans ONLY intervene at the 3 gates. Resist the urge to add more checkpoints.' },
            { icon: '📏', title: 'Baseline Before Change', desc: 'Capture cycle time, lead time, and ceremony hours before starting. You need proof of improvement.' },
            { icon: '👥', title: 'Role Evolution, Not Elimination', desc: 'Communicate clearly: roles are evolving to strategic work, not being eliminated.' },
            { icon: '🔄', title: 'Iterate the Flow', desc: 'The 10-step flow is a starting point. Refine based on your teams feedback.' },
            { icon: '📊', title: 'Measure Flow Time', desc: 'Track how long work takes from Intent (step 1) to Live (step 10). Optimize bottlenecks.' }
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(74, 222, 128, 0.1)',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              padding: '20px',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{item.icon}</div>
              <h4 style={{ color: 'var(--accent-green)', margin: '0 0 8px 0' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Common Pitfalls */}
      <Card>
        <CardTitle icon="⚠️">Common Pitfalls to Avoid</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '15px'
        }}>
          {[
            { icon: '🔧', title: 'Tool-First Thinking', desc: 'Don\'t just add AI tools to existing processes. The goal is to adopt the new flow, not augment the old one.' },
            { icon: '🚪', title: 'Too Many Gates', desc: 'Adding human checkpoints "just in case" defeats the purpose. Trust the agents, verify at the 3 gates.' },
            { icon: '🏃', title: 'Skipping the Pilot', desc: 'Prove the model works with one team before scaling. You\'ll learn crucial lessons.' },
            { icon: '📋', title: 'Keeping Old Ceremonies', desc: 'Daily standups, sprint planning - these should evolve or disappear. Don\'t run parallel processes.' },
            { icon: '🔒', title: 'Ignoring Security Early', desc: 'Get Security Agent deployed alongside Dev Agents. Security is part of the flow, not a phase.' },
            { icon: '💬', title: 'Poor Communication', desc: 'Role changes cause anxiety. Over-communicate the "why" and the evolution path for each role.' }
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(248, 113, 113, 0.1)',
              border: '1px solid rgba(248, 113, 113, 0.3)',
              padding: '20px',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{item.icon}</div>
              <h4 style={{ color: 'var(--accent-red)', margin: '0 0 8px 0' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <InfoBox variant="insight" title="The End State">
        <p style={{ margin: 0 }}>
          By Month 12, your organization runs on the <strong>10-step agentic flow</strong>. Work flows from human intent to production
          with only 3 human decision gates. AI agents handle requirements, design, code, tests, security, and deployment.
          Humans focus on <strong>what to build</strong> and <strong>whether it's ready</strong> - not the execution details.
          The result: <strong>3x velocity, 70% less ceremony time, and people doing meaningful strategic work</strong>.
        </p>
      </InfoBox>
    </div>
  );
};

export default TransitionRoadmap;
