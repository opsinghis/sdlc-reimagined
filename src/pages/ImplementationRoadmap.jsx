import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PageHeader,
  Card,
  CardTitle,
  MetricsRow,
  InfoBox
} from '../components/ui';

const ImplementationRoadmap = () => {
  const [activeTab, setActiveTab] = useState('high-level');
  const [expandedPhase, setExpandedPhase] = useState(null);

  const tabs = [
    { id: 'high-level', label: 'High Level Overview', icon: '🗺️' },
    { id: 'swimlane', label: 'Swimlane View', icon: '🏊' },
    { id: 'low-level', label: 'Detailed Tasks', icon: '📋' },
    { id: 'success-criteria', label: 'Success Criteria', icon: '✅' }
  ];

  // Swimlane data - organized by workstream across all 12 weeks
  const swimlanes = [
    {
      id: 'platform',
      name: 'Platform & Infrastructure',
      owner: 'Platform Team',
      color: 'var(--accent-purple)',
      icon: '🏗️',
      tasks: [
        { week: 1, task: 'Deploy Orchestrator Agent', critical: true },
        { week: 1, task: 'Configure MCP integrations', critical: true },
        { week: 3, task: 'Deploy Product Agent', critical: true },
        { week: 5, task: 'Deploy Frontend Agent', critical: true },
        { week: 5, task: 'Deploy Backend Agent', critical: true },
        { week: 5, task: 'Deploy Database Agent', critical: true },
        { week: 5, task: 'Agent handoff protocols', critical: true },
        { week: 6, task: 'Deploy QE Agent', critical: true },
        { week: 6, task: 'Deploy Security Agent', critical: true },
        { week: 6, task: 'Quality checks integration', critical: true },
        { week: 8, task: 'Deploy Performance Agent', critical: false },
        { week: 9, task: 'Deploy DevOps Agent', critical: true },
        { week: 10, task: 'Deploy Monitoring Agent', critical: true },
        { week: 11, task: 'Scale infrastructure', critical: true }
      ]
    },
    {
      id: 'training',
      name: 'Training & Enablement',
      owner: 'Transformation Lead',
      color: 'var(--accent-blue)',
      icon: '🎓',
      tasks: [
        { week: 2, task: 'AI-native SDLC training', critical: true },
        { week: 3, task: 'Gate 1 training (PO)', critical: true },
        { week: 6, task: 'Gate 2 training (Architect)', critical: true },
        { week: 7, task: 'Gate 3 training (Dev/QE)', critical: true },
        { week: 11, task: 'Train all POs on Gate 1', critical: true },
        { week: 11, task: 'Train all Tech Leads on Gate 3', critical: true },
        { week: 11, task: 'Create onboarding playbook', critical: false }
      ]
    },
    {
      id: 'process',
      name: 'Process & Governance',
      owner: 'Scrum Master / Lead',
      color: 'var(--accent-green)',
      icon: '📋',
      tasks: [
        { week: 1, task: 'Create AI-CONFIG.md template', critical: false },
        { week: 2, task: 'Role-specific AI-CONFIG.md files', critical: false },
        { week: 3, task: 'Capture baseline metrics', critical: true },
        { week: 4, task: 'Phase 1 retrospective', critical: true },
        { week: 7, task: 'Code review checklist for AI', critical: true },
        { week: 7, task: 'Document bottlenecks', critical: true },
        { week: 8, task: 'Phase 2 retrospective', critical: true },
        { week: 10, task: 'Document E2E flow time', critical: true },
        { week: 12, task: 'AI governance guidelines', critical: true },
        { week: 12, task: 'Final retrospective', critical: true }
      ]
    },
    {
      id: 'pilot',
      name: 'Pilot Execution',
      owner: 'Pilot Team',
      color: 'var(--accent-orange)',
      icon: '🚀',
      tasks: [
        { week: 2, task: 'Install AI Coding Assistant', critical: true },
        { week: 2, task: 'Identify AI champions', critical: true },
        { week: 4, task: 'First feature through Gate 1', critical: true },
        { week: 4, task: 'Review AI requirements', critical: true },
        { week: 7, task: 'First feature Gates 1-2-3', critical: true },
        { week: 8, task: 'Measure improvements', critical: true },
        { week: 10, task: 'Full flow: Intent → Prod', critical: true }
      ]
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      owner: 'Security Team',
      color: 'var(--accent-red)',
      icon: '🔒',
      tasks: [
        { week: 1, task: 'API key management', critical: true },
        { week: 1, task: 'Data policies defined', critical: true },
        { week: 6, task: 'SAST/DAST integration', critical: true },
        { week: 12, task: 'AI governance sign-off', critical: true }
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & Deployment',
      owner: 'DevOps Team',
      color: 'var(--accent-cyan)',
      icon: '⚙️',
      tasks: [
        { week: 9, task: 'Automated deployment', critical: true },
        { week: 9, task: 'Rollback automation', critical: true },
        { week: 9, task: 'Gate 3 → Deploy trigger', critical: true },
        { week: 9, task: 'Canary deployment', critical: false },
        { week: 10, task: 'L1 auto-remediation', critical: false },
        { week: 10, task: 'Predictive alerting', critical: false }
      ]
    },
    {
      id: 'rollout',
      name: 'Organization Rollout',
      owner: 'Engineering Manager',
      color: 'var(--accent-pink)',
      icon: '📈',
      tasks: [
        { week: 2, task: 'Select pilot team', critical: true },
        { week: 11, task: 'Expand to second team', critical: true },
        { week: 12, task: 'Replace daily standups', critical: true },
        { week: 12, task: 'Intent sessions (not planning)', critical: true },
        { week: 12, task: 'Build ROI dashboard', critical: true }
      ]
    }
  ];

  const phases = [
    {
      id: 'foundation',
      phase: 'Phase 1',
      title: 'Foundation & Pilot',
      weeks: 'Weeks 1-4',
      color: 'var(--accent-blue)',
      icon: '🏗️',
      summary: 'Set up AI infrastructure, pilot team adoption, establish baseline metrics',
      humanGates: ['Gate 1 training (Intent Definition)'],
      agents: ['Orchestrator Agent', 'Product Agent'],
      highLevel: {
        goal: 'Every pilot team member uses AI daily for core tasks',
        kpis: [
          { metric: '80% pilot team active AI usage', target: '80%' },
          { metric: 'Baseline metrics captured', target: '100%' },
          { metric: 'AI-CONFIG.md configured per role', target: '100%' }
        ],
        risks: [
          { risk: 'Resistance to change', mitigation: 'Identify champions, demonstrate quick wins' },
          { risk: 'Security concerns', mitigation: 'Early security team involvement, data policies defined' }
        ]
      },
      lowLevel: {
        weeks: [
          {
            week: 'Week 1',
            title: 'Infrastructure Setup',
            tasks: [
              { task: 'Deploy Orchestrator Agent infrastructure', owner: 'Platform Team', critical: true, criteria: 'Agent responds to API calls, logs visible' },
              { task: 'Configure MCP integrations (Jira, GitHub)', owner: 'Platform Team', critical: true, criteria: 'Bidirectional sync working' },
              { task: 'Set up AI Coding Assistant licenses for pilot team', owner: 'IT/Procurement', critical: true, criteria: 'All pilot members have access' },
              { task: 'Create base AI-CONFIG.md template', owner: 'Tech Lead', critical: false, criteria: 'Template reviewed and approved' },
              { task: 'Establish secure API key management', owner: 'Security Team', critical: true, criteria: 'Keys rotatable, no hardcoding' }
            ]
          },
          {
            week: 'Week 2',
            title: 'Pilot Team Selection & Training',
            tasks: [
              { task: 'Select pilot team (full-stack squad preferred)', owner: 'Engineering Manager', critical: true, criteria: 'Team of 5-8 with mix of roles' },
              { task: 'Conduct AI-native SDLC training session', owner: 'Transformation Lead', critical: true, criteria: 'All pilot members attend' },
              { task: 'Install AI Coding Assistant for all pilot members', owner: 'Developers', critical: true, criteria: '100% installation verified' },
              { task: 'Create role-specific AI-CONFIG.md files', owner: 'Tech Lead + Roles', critical: false, criteria: 'PO, Dev, QE configs created' },
              { task: 'Identify 2-3 AI champions in pilot team', owner: 'Engineering Manager', critical: true, criteria: 'Champions named and committed' }
            ]
          },
          {
            week: 'Week 3',
            title: 'Baseline Metrics & Gate 1 Setup',
            tasks: [
              { task: 'Capture current cycle time metrics', owner: 'Scrum Master', critical: true, criteria: 'Last 3 sprints documented' },
              { task: 'Document current ceremony time investment', owner: 'Scrum Master', critical: true, criteria: 'Hours per person per sprint' },
              { task: 'Measure current defect escape rate', owner: 'QE Lead', critical: false, criteria: 'Last 6 months data' },
              { task: 'Train PO on Gate 1 (Intent Definition)', owner: 'Transformation Lead', critical: true, criteria: 'PO can define intent without stories' },
              { task: 'Deploy Product Agent for requirements generation', owner: 'Platform Team', critical: true, criteria: 'Agent generates stories from intent' }
            ]
          },
          {
            week: 'Week 4',
            title: 'First Flow Execution',
            tasks: [
              { task: 'Run first feature through Gate 1', owner: 'Product Owner', critical: true, criteria: 'Intent → Generated requirements' },
              { task: 'Product Agent generates user stories', owner: 'Product Agent', critical: true, criteria: 'Stories have acceptance criteria' },
              { task: 'Pilot team reviews AI-generated requirements', owner: 'Pilot Team', critical: true, criteria: 'Feedback documented' },
              { task: 'Iterate AI-CONFIG.md based on learnings', owner: 'Tech Lead', critical: false, criteria: 'At least 3 improvements made' },
              { task: 'Phase 1 retrospective and adjustments', owner: 'Transformation Lead', critical: true, criteria: 'Action items for Phase 2' }
            ]
          }
        ]
      }
    },
    {
      id: 'build-quality',
      phase: 'Phase 2',
      title: 'Build & Quality Agents',
      weeks: 'Weeks 5-8',
      color: 'var(--accent-green)',
      icon: '💻',
      summary: 'Deploy Dev Agents (Frontend, Backend, DB) and QE Agent for automated testing',
      humanGates: ['Gate 2 training (Spec Review)', 'Gate 3 training (Code Approval)'],
      agents: ['Frontend Agent', 'Backend Agent', 'Database Agent', 'QE Agent', 'Security Agent'],
      highLevel: {
        goal: 'Automated code and test generation with human review at gates',
        kpis: [
          { metric: 'Test coverage increase', target: '+20%' },
          { metric: 'Time to first commit', target: '-40%' },
          { metric: 'PR review time', target: '-30%' }
        ],
        risks: [
          { risk: 'Code quality concerns', mitigation: 'Strong Gate 3 review process, linting/SAST gates' },
          { risk: 'Test reliability', mitigation: 'QE oversight of AI-generated tests, flaky test detection' }
        ]
      },
      lowLevel: {
        weeks: [
          {
            week: 'Week 5',
            title: 'Development Agents Deployment',
            tasks: [
              { task: 'Deploy Frontend Agent', owner: 'Platform Team', critical: true, criteria: 'Generates React/Vue components from specs' },
              { task: 'Deploy Backend Agent', owner: 'Platform Team', critical: true, criteria: 'Generates APIs from specs' },
              { task: 'Deploy Database Agent', owner: 'Platform Team', critical: true, criteria: 'Generates migrations from schemas' },
              { task: 'Configure agent-to-agent handoff protocols', owner: 'Platform Team', critical: true, criteria: 'Agents can invoke each other' },
              { task: 'Set up parallel execution orchestration', owner: 'Platform Team', critical: false, criteria: 'Frontend/Backend can run in parallel' }
            ]
          },
          {
            week: 'Week 6',
            title: 'Quality Agents & Gate 2 Setup',
            tasks: [
              { task: 'Deploy QE Agent for test generation', owner: 'Platform Team', critical: true, criteria: 'Generates unit + E2E tests' },
              { task: 'Deploy Security Agent for SAST/DAST', owner: 'Platform Team', critical: true, criteria: 'Scans code on every PR' },
              { task: 'Train Architect/Tech Lead on Gate 2 (Spec Review)', owner: 'Transformation Lead', critical: true, criteria: 'Can approve/reject AI designs' },
              { task: 'Integrate quality checks into build step', owner: 'Platform Team', critical: true, criteria: 'Tests run before Gate 3' },
              { task: 'Configure automated PR creation from agents', owner: 'Platform Team', critical: false, criteria: 'PRs auto-created with descriptions' }
            ]
          },
          {
            week: 'Week 7',
            title: 'Gate 3 Setup & First Full Flow',
            tasks: [
              { task: 'Train developers on Gate 3 (Code Approval)', owner: 'Transformation Lead', critical: true, criteria: 'Devs know what to review' },
              { task: 'Establish code review checklist for AI code', owner: 'Tech Lead', critical: true, criteria: 'Checklist documented and shared' },
              { task: 'Run first feature through Gates 1-2-3', owner: 'Pilot Team', critical: true, criteria: 'Intent → Reviewed Code → Tests' },
              { task: 'Document flow time and bottlenecks', owner: 'Scrum Master', critical: true, criteria: 'Bottlenecks identified' },
              { task: 'Configure test results reporting to Gate 3', owner: 'Platform Team', critical: false, criteria: 'Test results visible in review' }
            ]
          },
          {
            week: 'Week 8',
            title: 'Optimization & Measurement',
            tasks: [
              { task: 'Measure test coverage improvement', owner: 'QE Lead', critical: true, criteria: '+20% vs baseline' },
              { task: 'Measure time to first commit improvement', owner: 'Tech Lead', critical: true, criteria: '-40% vs baseline' },
              { task: 'Refine agent prompts based on output quality', owner: 'Tech Lead', critical: true, criteria: '3+ prompt improvements' },
              { task: 'Deploy Performance Agent (optional)', owner: 'Platform Team', critical: false, criteria: 'Load tests auto-generated' },
              { task: 'Phase 2 retrospective and adjustments', owner: 'Transformation Lead', critical: true, criteria: 'Action items for Phase 3' }
            ]
          }
        ]
      }
    },
    {
      id: 'operations',
      phase: 'Phase 3',
      title: 'Operations & Deployment',
      weeks: 'Weeks 9-10',
      color: 'var(--accent-purple)',
      icon: '🚀',
      summary: 'Complete the flow with DevOps Agent, Monitoring Agent, and continuous deployment',
      humanGates: ['Gate 3 for production approval'],
      agents: ['DevOps Agent', 'Monitoring Agent', 'Incident Agent'],
      highLevel: {
        goal: 'Full intent-to-production flow operational',
        kpis: [
          { metric: 'Deployment frequency', target: '2x increase' },
          { metric: 'L1 incident auto-resolution', target: '50%' },
          { metric: 'MTTR reduction', target: '-50%' }
        ],
        risks: [
          { risk: 'Production stability', mitigation: 'Automated rollback, canary deployments' },
          { risk: 'Over-automation', mitigation: 'Human approval for production, escalation paths' }
        ]
      },
      lowLevel: {
        weeks: [
          {
            week: 'Week 9',
            title: 'DevOps & Deployment Automation',
            tasks: [
              { task: 'Deploy DevOps Agent for CI/CD', owner: 'Platform Team', critical: true, criteria: 'Agent manages deployment pipeline' },
              { task: 'Implement automated deployment (Step 9)', owner: 'Platform Team', critical: true, criteria: 'Deploy on Gate 3 approval' },
              { task: 'Configure rollback automation', owner: 'DevOps Team', critical: true, criteria: 'Auto-rollback on health check fail' },
              { task: 'Integrate deployment with Gate 3 approval', owner: 'Platform Team', critical: true, criteria: 'Approval triggers deploy' },
              { task: 'Set up canary/blue-green deployment', owner: 'DevOps Team', critical: false, criteria: 'Gradual rollout working' }
            ]
          },
          {
            week: 'Week 10',
            title: 'Monitoring & Full Flow Test',
            tasks: [
              { task: 'Deploy Monitoring Agent (Step 10)', owner: 'Platform Team', critical: true, criteria: 'Agent tracks production health' },
              { task: 'Implement L1 incident auto-remediation', owner: 'Platform Team', critical: false, criteria: 'Common issues auto-resolved' },
              { task: 'Set up predictive alerting', owner: 'SRE Team', critical: false, criteria: 'Alerts before issues occur' },
              { task: 'Test full flow: Intent → Production', owner: 'Pilot Team', critical: true, criteria: 'Feature live in production' },
              { task: 'Document end-to-end flow time', owner: 'Scrum Master', critical: true, criteria: 'Baseline for continuous improvement' }
            ]
          }
        ]
      }
    },
    {
      id: 'scale',
      phase: 'Phase 4',
      title: 'Scale & Optimize',
      weeks: 'Weeks 11-12',
      color: 'var(--accent-orange)',
      icon: '📈',
      summary: 'Roll out to all teams, eliminate ceremonies, achieve continuous flow',
      humanGates: ['All 3 gates operational across teams'],
      agents: ['All agents scaled'],
      highLevel: {
        goal: 'Organization-wide agentic SDLC adoption',
        kpis: [
          { metric: 'Teams using agentic flow', target: '100%' },
          { metric: 'Ceremony time reduction', target: '-70%' },
          { metric: 'Feature velocity', target: '3x baseline' }
        ],
        risks: [
          { risk: 'Scaling challenges', mitigation: 'Gradual rollout, team-by-team' },
          { risk: 'Process resistance', mitigation: 'Celebrate wins, share success stories' }
        ]
      },
      lowLevel: {
        weeks: [
          {
            week: 'Week 11',
            title: 'Organization Rollout',
            tasks: [
              { task: 'Expand to second team', owner: 'Engineering Manager', critical: true, criteria: 'Team 2 on agentic flow' },
              { task: 'Train all POs on Gate 1 workflow', owner: 'Transformation Lead', critical: true, criteria: 'All POs can define intent' },
              { task: 'Train all Tech Leads on Gate 3', owner: 'Transformation Lead', critical: true, criteria: 'All leads can review AI code' },
              { task: 'Scale agent infrastructure', owner: 'Platform Team', critical: true, criteria: 'Handle increased load' },
              { task: 'Create onboarding playbook for new teams', owner: 'Transformation Lead', critical: false, criteria: 'Self-serve onboarding docs' }
            ]
          },
          {
            week: 'Week 12',
            title: 'Ceremony Transformation & Optimization',
            tasks: [
              { task: 'Replace daily standups with AI digests', owner: 'Scrum Masters', critical: true, criteria: 'No more daily standups' },
              { task: 'Transform sprint planning to intent sessions', owner: 'Product Owners', critical: true, criteria: '30min intent sessions' },
              { task: 'Build ROI dashboard', owner: 'Transformation Lead', critical: true, criteria: 'Metrics visible to leadership' },
              { task: 'Establish AI governance guidelines', owner: 'Security + Legal', critical: true, criteria: 'Guidelines documented' },
              { task: 'Final retrospective and lessons learned', owner: 'Transformation Lead', critical: true, criteria: 'Playbook for continuous improvement' }
            ]
          }
        ]
      }
    }
  ];

  const successCriteria = {
    gate1: {
      title: 'Gate 1: Intent Definition',
      owner: 'Product Owner',
      criteria: [
        { criterion: 'PO can express feature intent in natural language', measure: 'Qualitative assessment' },
        { criterion: 'Product Agent generates complete requirements', measure: 'Requirements cover all aspects (AC, edge cases, tech notes)' },
        { criterion: 'Generated requirements accuracy', measure: '>80% accepted without major revisions' },
        { criterion: 'Time from intent to requirements', measure: '<30 minutes' }
      ]
    },
    gate2: {
      title: 'Gate 2: Spec Review',
      owner: 'Architect / Tech Lead',
      criteria: [
        { criterion: 'AI-generated designs follow architecture standards', measure: 'Passes architecture checklist' },
        { criterion: 'Technical specs are implementable', measure: 'Dev team confirms feasibility' },
        { criterion: 'Security considerations addressed', measure: 'Security Agent findings resolved' },
        { criterion: 'Time from requirements to approved design', measure: '<4 hours' }
      ]
    },
    gate3: {
      title: 'Gate 3: Code & Quality Approval',
      owner: 'Developer / QE Lead',
      criteria: [
        { criterion: 'AI-generated code passes all linting/SAST', measure: '100% pass rate' },
        { criterion: 'Test coverage meets targets', measure: '>80% line coverage' },
        { criterion: 'No critical security vulnerabilities', measure: 'SAST/DAST clean' },
        { criterion: 'Code review completed', measure: 'Checklist items verified' },
        { criterion: 'Time from code to approval', measure: '<2 hours' }
      ]
    },
    overall: {
      title: 'Overall Flow Metrics',
      criteria: [
        { criterion: 'End-to-end cycle time (Intent → Production)', measure: '<2 weeks', baseline: '4-6 weeks' },
        { criterion: 'Ceremony time per developer per sprint', measure: '<2 hours', baseline: '6-8 hours' },
        { criterion: 'Feature velocity', measure: '3x baseline', baseline: '1x' },
        { criterion: 'Defect escape rate', measure: '-50%', baseline: 'Current rate' },
        { criterion: 'Developer satisfaction (NPS)', measure: '+20 points', baseline: 'Current NPS' }
      ]
    }
  };

  const overallMetrics = [
    { value: '12 wks', label: 'Total Duration' },
    { value: '4', label: 'Phases' },
    { value: '3', label: 'Human Gates' },
    { value: '10+', label: 'AI Agents' },
    { value: '3x', label: 'Target Velocity' }
  ];

  return (
    <div>
      <PageHeader
        title="🚀 Implementation Roadmap"
        description="Detailed plan for transforming to the AI-native agentic SDLC"
      />

      {/* Context: Link to the agentic flow */}
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
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>Implementing the 10-Step Agentic Flow</div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              This roadmap guides you through implementing the <Link to="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</Link> with <strong>3 human gates</strong>.
              For the big-picture 4-wave strategy, see the <Link to="/ai-native/transition-roadmap" style={{ color: 'var(--accent-purple)' }}>Transition Roadmap</Link>.
            </p>
          </div>
        </div>
      </Card>

      {/* Overview Metrics */}
      <Card>
        <CardTitle icon="📊">Transformation Overview</CardTitle>
        <MetricsRow metrics={overallMetrics} />
      </Card>

      {/* Tab Navigation */}
      <Card>
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '25px',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '15px'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 20px',
                background: activeTab === tab.id ? 'var(--accent-purple)' : 'var(--bg-elevated)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                color: activeTab === tab.id ? 'white' : 'var(--text-primary)',
                fontWeight: activeTab === tab.id ? '600' : '400',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* High Level Tab */}
        {activeTab === 'high-level' && (
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Executive-level view of the 12-week transformation. Click each phase for KPIs and risks.
            </p>

            {/* Timeline Visualization */}
            <div style={{
              display: 'flex',
              gap: '5px',
              marginBottom: '30px',
              overflowX: 'auto',
              padding: '10px 0'
            }}>
              {phases.map((phase, i) => (
                <div key={phase.id} style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                    style={{
                      minWidth: '180px',
                      padding: '15px',
                      background: expandedPhase === phase.id ? `${phase.color}22` : 'var(--bg-elevated)',
                      border: expandedPhase === phase.id ? `2px solid ${phase.color}` : '1px solid var(--border)',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{phase.icon}</div>
                    <div style={{ fontWeight: '600', color: phase.color, fontSize: '0.85rem' }}>{phase.phase}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{phase.weeks}</div>
                  </div>
                  {i < phases.length - 1 && (
                    <span style={{ color: 'var(--text-muted)', margin: '0 8px', fontSize: '1.2rem' }}>→</span>
                  )}
                </div>
              ))}
            </div>

            {/* Phase Cards */}
            <div style={{ display: 'grid', gap: '20px' }}>
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  style={{
                    background: expandedPhase === phase.id ? `${phase.color}11` : 'var(--bg-elevated)',
                    border: expandedPhase === phase.id ? `2px solid ${phase.color}` : '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <span style={{ fontSize: '2rem' }}>{phase.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <h3 style={{ margin: 0, color: phase.color }}>{phase.title}</h3>
                        <span style={{
                          padding: '3px 10px',
                          background: 'var(--bg-card)',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)'
                        }}>{phase.weeks}</span>
                      </div>
                      <p style={{ margin: '5px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{phase.summary}</p>
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                      {expandedPhase === phase.id ? '▼' : '▶'}
                    </span>
                  </div>

                  {/* Agents & Gates Summary */}
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: expandedPhase === phase.id ? '20px' : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-blue)' }}>🤖</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {phase.agents.join(', ')}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-orange)' }}>🚪</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {phase.humanGates.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedPhase === phase.id && (
                    <div style={{ marginTop: '20px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {/* KPIs */}
                        <div>
                          <h4 style={{ margin: '0 0 15px 0', color: phase.color }}>📊 Key Performance Indicators</h4>
                          {phase.highLevel.kpis.map((kpi, ki) => (
                            <div key={ki} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '10px',
                              background: 'var(--bg-card)',
                              borderRadius: '6px',
                              marginBottom: '8px'
                            }}>
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{kpi.metric}</span>
                              <span style={{
                                padding: '4px 12px',
                                background: 'var(--accent-green)22',
                                color: 'var(--accent-green)',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: '600'
                              }}>{kpi.target}</span>
                            </div>
                          ))}
                        </div>

                        {/* Risks */}
                        <div>
                          <h4 style={{ margin: '0 0 15px 0', color: phase.color }}>⚠️ Risks & Mitigations</h4>
                          {phase.highLevel.risks.map((risk, ri) => (
                            <div key={ri} style={{
                              padding: '10px',
                              background: 'var(--bg-card)',
                              borderRadius: '6px',
                              marginBottom: '8px'
                            }}>
                              <div style={{ fontSize: '0.85rem', fontWeight: '500', marginBottom: '5px' }}>
                                <span style={{ color: 'var(--accent-red)' }}>Risk:</span> {risk.risk}
                              </div>
                              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: 'var(--accent-green)' }}>Mitigation:</span> {risk.mitigation}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Swimlane Tab */}
        {activeTab === 'swimlane' && (
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Parallel workstreams across the 12-week transformation. Each lane shows tasks by owner/team.
              Critical path items marked with <span style={{ color: 'var(--accent-red)', fontWeight: '600' }}>●</span>.
            </p>

            {/* Week Headers */}
            <div style={{ overflowX: 'auto' }}>
              <div style={{ minWidth: '1400px' }}>
                {/* Header Row - Weeks */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '180px repeat(12, 1fr)',
                  gap: '2px',
                  marginBottom: '2px'
                }}>
                  <div style={{
                    padding: '12px',
                    background: 'var(--bg-elevated)',
                    fontWeight: '600',
                    borderRadius: '8px 0 0 0'
                  }}>
                    Workstream
                  </div>
                  {[...Array(12)].map((_, i) => (
                    <div key={i} style={{
                      padding: '12px 8px',
                      background: i < 4 ? 'var(--accent-blue)22' :
                                  i < 8 ? 'var(--accent-green)22' :
                                  i < 10 ? 'var(--accent-purple)22' : 'var(--accent-orange)22',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.8rem',
                      borderRadius: i === 11 ? '0 8px 0 0' : '0'
                    }}>
                      W{i + 1}
                    </div>
                  ))}
                </div>

                {/* Phase Labels Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '180px repeat(12, 1fr)',
                  gap: '2px',
                  marginBottom: '4px'
                }}>
                  <div style={{ padding: '4px' }}></div>
                  <div style={{
                    gridColumn: 'span 4',
                    padding: '6px',
                    background: 'var(--accent-blue)',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '4px'
                  }}>
                    Phase 1: Foundation & Pilot
                  </div>
                  <div style={{
                    gridColumn: 'span 4',
                    padding: '6px',
                    background: 'var(--accent-green)',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '4px'
                  }}>
                    Phase 2: Build & Quality
                  </div>
                  <div style={{
                    gridColumn: 'span 2',
                    padding: '6px',
                    background: 'var(--accent-purple)',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '4px'
                  }}>
                    Phase 3: Ops
                  </div>
                  <div style={{
                    gridColumn: 'span 2',
                    padding: '6px',
                    background: 'var(--accent-orange)',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    borderRadius: '4px'
                  }}>
                    Phase 4: Scale
                  </div>
                </div>

                {/* Swimlane Rows */}
                {swimlanes.map((lane, laneIndex) => (
                  <div key={lane.id} style={{
                    display: 'grid',
                    gridTemplateColumns: '180px repeat(12, 1fr)',
                    gap: '2px',
                    marginBottom: '2px'
                  }}>
                    {/* Lane Label */}
                    <div style={{
                      padding: '12px 10px',
                      background: `${lane.color}15`,
                      borderLeft: `4px solid ${lane.color}`,
                      borderRadius: laneIndex === swimlanes.length - 1 ? '0 0 0 8px' : '0'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '1.1rem' }}>{lane.icon}</span>
                        <div>
                          <div style={{ fontWeight: '600', fontSize: '0.8rem', color: lane.color }}>{lane.name}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{lane.owner}</div>
                        </div>
                      </div>
                    </div>

                    {/* Week Cells */}
                    {[...Array(12)].map((_, weekIndex) => {
                      const weekTasks = lane.tasks.filter(t => t.week === weekIndex + 1);
                      return (
                        <div key={weekIndex} style={{
                          padding: '6px 4px',
                          background: 'var(--bg-elevated)',
                          minHeight: '60px',
                          borderRadius: laneIndex === swimlanes.length - 1 && weekIndex === 11 ? '0 0 8px 0' : '0'
                        }}>
                          {weekTasks.map((task, ti) => (
                            <div
                              key={ti}
                              style={{
                                padding: '4px 6px',
                                background: task.critical ? `${lane.color}33` : `${lane.color}15`,
                                border: task.critical ? `1px solid ${lane.color}` : '1px solid transparent',
                                borderRadius: '4px',
                                fontSize: '0.65rem',
                                marginBottom: ti < weekTasks.length - 1 ? '3px' : 0,
                                color: 'var(--text-primary)',
                                lineHeight: 1.3,
                                position: 'relative'
                              }}
                              title={task.task}
                            >
                              {task.critical && (
                                <span style={{
                                  position: 'absolute',
                                  top: '2px',
                                  right: '2px',
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  background: 'var(--accent-red)'
                                }}></span>
                              )}
                              {task.task.length > 20 ? task.task.substring(0, 18) + '...' : task.task}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div style={{
              marginTop: '20px',
              padding: '15px',
              background: 'var(--bg-elevated)',
              borderRadius: '8px',
              display: 'flex',
              gap: '25px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>Legend:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-red)' }}></span>
                <span style={{ fontSize: '0.8rem' }}>Critical Path</span>
              </div>
              {swimlanes.slice(0, 4).map((lane) => (
                <div key={lane.id} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: lane.color }}></span>
                  <span style={{ fontSize: '0.8rem' }}>{lane.name}</span>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div style={{
              marginTop: '20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '15px'
            }}>
              {swimlanes.map((lane) => {
                const criticalCount = lane.tasks.filter(t => t.critical).length;
                const totalCount = lane.tasks.length;
                return (
                  <div key={lane.id} style={{
                    padding: '15px',
                    background: `${lane.color}11`,
                    border: `1px solid ${lane.color}33`,
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{lane.icon}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '5px' }}>{lane.name}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: lane.color }}>
                      {totalCount} <span style={{ fontSize: '0.7rem', fontWeight: '400' }}>tasks</span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-red)' }}>
                      {criticalCount} critical
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Low Level Tab */}
        {activeTab === 'low-level' && (
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Week-by-week implementation tasks with owners, success criteria, and critical path items marked with <span style={{ color: 'var(--accent-red)' }}>●</span>.
            </p>

            {phases.map((phase) => (
              <div key={phase.id} style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                  padding: '15px',
                  background: `${phase.color}15`,
                  borderRadius: '10px',
                  borderLeft: `4px solid ${phase.color}`
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{phase.icon}</span>
                  <div>
                    <h3 style={{ margin: 0, color: phase.color }}>{phase.phase}: {phase.title}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{phase.weeks}</span>
                  </div>
                </div>

                {phase.lowLevel.weeks.map((week) => (
                  <div key={week.week} style={{
                    background: 'var(--bg-elevated)',
                    borderRadius: '10px',
                    padding: '20px',
                    marginBottom: '15px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <span style={{
                        padding: '4px 12px',
                        background: phase.color,
                        color: 'white',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>{week.week}</span>
                      <h4 style={{ margin: 0 }}>{week.title}</h4>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                      <thead>
                        <tr style={{ background: 'var(--bg-card)' }}>
                          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid var(--border)', width: '40%' }}>Task</th>
                          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid var(--border)', width: '15%' }}>Owner</th>
                          <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid var(--border)', width: '45%' }}>Success Criteria</th>
                        </tr>
                      </thead>
                      <tbody>
                        {week.tasks.map((task, ti) => (
                          <tr key={ti} style={{ borderBottom: '1px solid var(--border)' }}>
                            <td style={{ padding: '10px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: task.critical ? 'var(--accent-red)' : 'var(--border)',
                                marginTop: '5px',
                                flexShrink: 0
                              }}></span>
                              <span style={{ fontWeight: task.critical ? '500' : '400' }}>{task.task}</span>
                            </td>
                            <td style={{ padding: '10px', color: 'var(--text-secondary)' }}>{task.owner}</td>
                            <td style={{ padding: '10px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{task.criteria}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Success Criteria Tab */}
        {activeTab === 'success-criteria' && (
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
              Clear success criteria for each human gate and overall flow metrics to track transformation progress.
            </p>

            {/* Gate Success Criteria */}
            <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
              {[successCriteria.gate1, successCriteria.gate2, successCriteria.gate3].map((gate, gi) => (
                <div key={gi} style={{
                  background: 'var(--bg-elevated)',
                  borderRadius: '12px',
                  padding: '20px',
                  borderLeft: `4px solid ${gi === 0 ? 'var(--accent-orange)' : gi === 1 ? 'var(--accent-blue)' : 'var(--accent-green)'}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ fontSize: '1.3rem' }}>🚪</span>
                    <div>
                      <h4 style={{ margin: 0 }}>{gate.title}</h4>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Owner: {gate.owner}</span>
                    </div>
                  </div>

                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-card)' }}>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Criterion</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>How to Measure</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gate.criteria.map((c, ci) => (
                        <tr key={ci} style={{ borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '10px' }}>{c.criterion}</td>
                          <td style={{ padding: '10px', color: 'var(--accent-green)' }}>{c.measure}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            {/* Overall Flow Metrics */}
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-purple)15, var(--accent-blue)10)',
              border: '2px solid var(--accent-purple)',
              borderRadius: '12px',
              padding: '25px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.5rem' }}>📈</span>
                <h3 style={{ margin: 0, color: 'var(--accent-purple)' }}>{successCriteria.overall.title}</h3>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-card)' }}>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Metric</th>
                    <th style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Baseline</th>
                    <th style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Target</th>
                  </tr>
                </thead>
                <tbody>
                  {successCriteria.overall.criteria.map((c, ci) => (
                    <tr key={ci} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{c.criterion}</td>
                      <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text-muted)' }}>{c.baseline}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <span style={{
                          padding: '4px 12px',
                          background: 'var(--accent-green)22',
                          color: 'var(--accent-green)',
                          borderRadius: '4px',
                          fontWeight: '600'
                        }}>{c.measure}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Measurement Cadence */}
            <div style={{ marginTop: '25px' }}>
              <h4 style={{ marginBottom: '15px' }}>📅 Measurement Cadence</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                {[
                  { freq: 'Daily', items: ['Agent uptime', 'Error rates', 'Gate throughput'] },
                  { freq: 'Weekly', items: ['Cycle time', 'Feature velocity', 'Gate approval rate'] },
                  { freq: 'Monthly', items: ['Ceremony time', 'Developer NPS', 'ROI calculation'] },
                  { freq: 'Quarterly', items: ['Strategic review', 'Roadmap adjustment', 'Lessons learned'] }
                ].map((cadence, ci) => (
                  <div key={ci} style={{
                    background: 'var(--bg-elevated)',
                    padding: '15px',
                    borderRadius: '8px'
                  }}>
                    <div style={{
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: 'var(--accent-blue)'
                    }}>{cadence.freq}</div>
                    <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {cadence.items.map((item, ii) => (
                        <li key={ii} style={{ marginBottom: '4px' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardTitle icon="📌">Quick Reference</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px' }}>
            <h5 style={{ margin: '0 0 10px 0', color: 'var(--accent-orange)' }}>🚪 The 3 Human Gates</h5>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li><strong>Gate 1:</strong> Define Intent (PO)</li>
              <li><strong>Gate 2:</strong> Review Specs (Architect)</li>
              <li><strong>Gate 3:</strong> Approve Code (Dev/QE)</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px' }}>
            <h5 style={{ margin: '0 0 10px 0', color: 'var(--accent-blue)' }}>🤖 Core AI Agents</h5>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>Orchestrator, Product, Architect</li>
              <li>Frontend, Backend, Database</li>
              <li>QE, Security, DevOps, Monitoring</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px' }}>
            <h5 style={{ margin: '0 0 10px 0', color: 'var(--accent-green)' }}>📊 Key Targets</h5>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>3x feature velocity</li>
              <li>-70% ceremony time</li>
              <li>&lt;2 weeks cycle time</li>
            </ul>
          </div>
        </div>
      </Card>

      <InfoBox variant="insight" title="Getting Started">
        <p style={{ margin: 0 }}>
          Start with the <strong>Quick Start Setup</strong> in the sidebar to install your AI Coding Assistant, then follow this roadmap phase by phase.
          The <Link to="/ai-native/transition-roadmap" style={{ color: 'var(--accent-purple)' }}>Transition Roadmap</Link> provides the strategic 4-wave view,
          while this page gives you the tactical week-by-week execution plan.
        </p>
      </InfoBox>
    </div>
  );
};

export default ImplementationRoadmap;
