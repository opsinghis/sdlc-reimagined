import React, { useState } from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  InfoBox
} from '../../components/ui';

// Workflow Step Component
const WorkflowStep = ({ step, isHuman, isLast, color }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
    {/* Connector line */}
    {!isLast && (
      <div style={{
        position: 'absolute',
        left: '20px',
        top: '42px',
        width: '2px',
        height: 'calc(100% - 20px)',
        background: isHuman ? 'var(--accent-orange)' : color
      }} />
    )}

    {/* Step circle */}
    <div style={{
      width: '42px',
      height: '42px',
      borderRadius: isHuman ? '50%' : '10px',
      background: isHuman ? 'var(--accent-orange)' : color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      flexShrink: 0,
      border: isHuman ? '3px dashed white' : 'none',
      boxShadow: isHuman ? '0 0 15px var(--accent-orange)' : 'none'
    }}>
      {step.icon}
    </div>

    {/* Content */}
    <div style={{
      flex: 1,
      marginLeft: '15px',
      marginBottom: '25px',
      background: isHuman ? 'rgba(249, 115, 22, 0.1)' : 'var(--bg-elevated)',
      border: isHuman ? '1px dashed var(--accent-orange)' : '1px solid var(--border)',
      borderRadius: '10px',
      padding: '15px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
        <span style={{
          fontWeight: '600',
          color: isHuman ? 'var(--accent-orange)' : 'var(--text-primary)'
        }}>
          {step.title}
        </span>
        {isHuman && (
          <span style={{
            padding: '2px 8px',
            background: 'var(--accent-orange)',
            color: 'white',
            borderRadius: '10px',
            fontSize: '0.7rem',
            fontWeight: '600'
          }}>
            HUMAN
          </span>
        )}
        {!isHuman && (
          <span style={{
            padding: '2px 8px',
            background: `${color}33`,
            color: color,
            borderRadius: '10px',
            fontSize: '0.7rem',
            fontWeight: '600'
          }}>
            {step.agent}
          </span>
        )}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
        {step.description}
      </p>
      {step.duration && (
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
          ⏱️ {step.duration}
        </div>
      )}
    </div>
  </div>
);

// Workflow Diagram Component
const WorkflowDiagram = ({ title, description, steps, color, stats }) => (
  <div style={{
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '16px',
    padding: '25px',
    marginBottom: '25px'
  }}>
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ margin: '0 0 8px 0', color: color }}>{title}</h3>
      <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{description}</p>
    </div>

    <div style={{ marginBottom: '20px' }}>
      {steps.map((step, i) => (
        <WorkflowStep
          key={i}
          step={step}
          isHuman={step.isHuman}
          isLast={i === steps.length - 1}
          color={color}
        />
      ))}
    </div>

    {/* Stats */}
    <div style={{
      display: 'flex',
      gap: '20px',
      padding: '15px',
      background: 'var(--bg-elevated)',
      borderRadius: '10px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      {stats.map((stat, i) => (
        <div key={i} style={{ textAlign: 'center', minWidth: '100px' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: '700', color: stat.color || color }}>{stat.value}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const HumanCheckpoints = () => {
  const [activeTab, setActiveTab] = useState('workflows');
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Workflow definitions
  const workflows = {
    newInitiative: {
      id: 'newInitiative',
      title: '🚀 New Initiative / Feature',
      shortTitle: 'New Initiative',
      description: 'Building a completely new capability from scratch - highest human involvement',
      category: 'Development',
      color: 'var(--accent-purple)',
      steps: [
        { icon: '💡', title: 'Intent Capture', agent: 'Orchestrator', description: 'Business goal or problem statement received', duration: 'Minutes' },
        { icon: '👤', title: 'Strategic Approval', isHuman: true, description: 'Product Leader validates business case, priority, and alignment with roadmap' },
        { icon: '🎯', title: 'Requirements Generation', agent: 'Product Agent', description: 'AI generates user stories, acceptance criteria, edge cases', duration: '1-2 hours' },
        { icon: '👤', title: 'Requirements Review', isHuman: true, description: 'Product Owner reviews and refines requirements, validates business logic' },
        { icon: '🏗️', title: 'Architecture Design', agent: 'Architect Agent', description: 'AI generates technical design, API specs, data models', duration: '2-4 hours' },
        { icon: '👤', title: 'Architecture Approval', isHuman: true, description: 'Tech Lead/Architect reviews design decisions, scalability, security' },
        { icon: '💻', title: 'Development', agent: 'Dev Agents', description: 'Frontend, Backend, Database agents implement in parallel', duration: '1-2 weeks' },
        { icon: '🧪', title: 'Quality Validation', agent: 'QE Agent', description: 'Generates and runs unit, integration, E2E tests', duration: '4-8 hours' },
        { icon: '🔒', title: 'Security Scan', agent: 'Security Agent', description: 'SAST, DAST, dependency checks, compliance validation', duration: '1-2 hours' },
        { icon: '👤', title: 'Final Review', isHuman: true, description: 'Tech Lead reviews code, Senior QE validates coverage, Security approves' },
        { icon: '🚀', title: 'Deployment', agent: 'DevOps Agent', description: 'Staged rollout with monitoring, canary analysis', duration: '2-4 hours' },
        { icon: '👤', title: 'Go-Live Approval', isHuman: true, description: 'Release Manager gives final go/no-go for production' },
        { icon: '📊', title: 'Monitoring & Iteration', agent: 'Monitoring Agent', description: 'Continuous monitoring, alerting, feedback loop', duration: 'Ongoing' }
      ],
      stats: [
        { value: '5', label: 'Human Checkpoints', color: 'var(--accent-orange)' },
        { value: '8', label: 'AI Agent Steps' },
        { value: '2-3 weeks', label: 'Total Duration' },
        { value: '~20%', label: 'Human Time' }
      ]
    },
    enhancement: {
      id: 'enhancement',
      title: '✨ Enhancement / Improvement',
      shortTitle: 'Enhancement',
      description: 'Improving existing functionality - moderate human involvement',
      category: 'Development',
      color: 'var(--accent-blue)',
      steps: [
        { icon: '📝', title: 'Enhancement Request', agent: 'Orchestrator', description: 'Improvement request captured from feedback or backlog', duration: 'Minutes' },
        { icon: '🔍', title: 'Impact Analysis', agent: 'Architect Agent', description: 'AI analyzes affected systems, dependencies, risks', duration: '30 min' },
        { icon: '👤', title: 'Scope Approval', isHuman: true, description: 'Product Owner confirms scope, priority, and expected outcome' },
        { icon: '🎯', title: 'Spec Generation', agent: 'Product Agent', description: 'AI generates updated specs, acceptance criteria', duration: '1 hour' },
        { icon: '💻', title: 'Implementation', agent: 'Dev Agents', description: 'Code changes implemented following existing patterns', duration: '2-5 days' },
        { icon: '🧪', title: 'Testing', agent: 'QE Agent', description: 'Regression tests + new test cases for enhancement', duration: '2-4 hours' },
        { icon: '🔍', title: 'Code Review', agent: 'Review Agent', description: 'AI performs first-pass review for style, security, patterns', duration: '30 min' },
        { icon: '👤', title: 'Human Review', isHuman: true, description: 'Developer peer review for logic validation and knowledge sharing' },
        { icon: '🚀', title: 'Deployment', agent: 'DevOps Agent', description: 'Automated deployment with feature flag if needed', duration: '1 hour' },
        { icon: '📊', title: 'Validation', agent: 'Monitoring Agent', description: 'Verify metrics, gather early feedback', duration: '24-48 hours' }
      ],
      stats: [
        { value: '2', label: 'Human Checkpoints', color: 'var(--accent-orange)' },
        { value: '8', label: 'AI Agent Steps' },
        { value: '3-7 days', label: 'Total Duration' },
        { value: '~10%', label: 'Human Time' }
      ]
    },
    bugFix: {
      id: 'bugFix',
      title: '🐛 Bug Fix',
      shortTitle: 'Bug Fix',
      description: 'Fixing defects in existing functionality - minimal human involvement',
      category: 'Development',
      color: 'var(--accent-green)',
      steps: [
        { icon: '🚨', title: 'Bug Detected', agent: 'Monitoring Agent', description: 'Issue detected via monitoring, user report, or test failure', duration: 'Auto' },
        { icon: '🔍', title: 'Root Cause Analysis', agent: 'Debug Agent', description: 'AI traces error, identifies root cause, suggests fix', duration: '15-30 min' },
        { icon: '🧪', title: 'Failing Test', agent: 'QE Agent', description: 'AI writes failing test that captures the bug', duration: '10 min' },
        { icon: '💻', title: 'Fix Implementation', agent: 'Dev Agent', description: 'AI implements fix following existing patterns', duration: '30 min - 2 hours' },
        { icon: '✅', title: 'Test Verification', agent: 'QE Agent', description: 'Run failing test (now passes) + regression suite', duration: '15-30 min' },
        { icon: '🔍', title: 'Auto Review', agent: 'Review Agent', description: 'AI validates fix doesn\'t introduce new issues', duration: '10 min' },
        { icon: '👤', title: 'Quick Approval', isHuman: true, description: 'Developer glances at diff, approves if straightforward (async)' },
        { icon: '🚀', title: 'Auto Deploy', agent: 'DevOps Agent', description: 'Automatic deployment if all checks pass', duration: '15-30 min' },
        { icon: '📊', title: 'Verification', agent: 'Monitoring Agent', description: 'Confirm fix resolves issue in production', duration: '1 hour' }
      ],
      stats: [
        { value: '1', label: 'Human Checkpoint', color: 'var(--accent-orange)' },
        { value: '8', label: 'AI Agent Steps' },
        { value: '2-6 hours', label: 'Total Duration' },
        { value: '~5%', label: 'Human Time' }
      ]
    },
    securityIncident: {
      id: 'securityIncident',
      title: '🔒 Security Incident',
      shortTitle: 'Security Incident',
      description: 'Responding to security vulnerabilities or breaches - high human oversight',
      category: 'Operations',
      color: 'var(--accent-red)',
      steps: [
        { icon: '🚨', title: 'Incident Detection', agent: 'Security Agent', description: 'Vulnerability or breach detected via scans, alerts, or reports', duration: 'Auto' },
        { icon: '🔍', title: 'Severity Assessment', agent: 'Security Agent', description: 'AI assesses CVSS score, blast radius, exploit likelihood', duration: '5-15 min' },
        { icon: '👤', title: 'Triage Decision', isHuman: true, description: 'Security Lead confirms severity, decides response level' },
        { icon: '🛡️', title: 'Containment', agent: 'DevOps Agent', description: 'AI implements immediate containment measures', duration: '15-30 min' },
        { icon: '🔬', title: 'Root Cause Analysis', agent: 'Security Agent', description: 'Deep analysis of attack vector, affected systems', duration: '1-4 hours' },
        { icon: '👤', title: 'Response Plan Approval', isHuman: true, description: 'Security Lead approves remediation strategy' },
        { icon: '💻', title: 'Remediation', agent: 'Dev Agents', description: 'Implement patches, fixes, configuration changes', duration: '2-24 hours' },
        { icon: '🧪', title: 'Verification', agent: 'Security Agent', description: 'Verify fix, run penetration tests, validate security', duration: '2-4 hours' },
        { icon: '👤', title: 'Disclosure Decision', isHuman: true, description: 'Legal/Security decides on customer notification, public disclosure' },
        { icon: '📝', title: 'Documentation', agent: 'Doc Agent', description: 'Generate incident report, update runbooks', duration: '1-2 hours' },
        { icon: '👤', title: 'Post-Mortem Review', isHuman: true, description: 'Team reviews incident, identifies systemic improvements' }
      ],
      stats: [
        { value: '4', label: 'Human Checkpoints', color: 'var(--accent-orange)' },
        { value: '7', label: 'AI Agent Steps' },
        { value: '4-48 hours', label: 'Total Duration' },
        { value: '~30%', label: 'Human Time' }
      ]
    },
    hotfix: {
      id: 'hotfix',
      title: '🔥 Production Hotfix',
      shortTitle: 'Hotfix',
      description: 'Critical fix needed in production immediately - expedited with oversight',
      category: 'Operations',
      color: 'var(--accent-orange)',
      steps: [
        { icon: '🚨', title: 'Critical Issue Detected', agent: 'Monitoring Agent', description: 'P1/P0 issue affecting production users', duration: 'Auto' },
        { icon: '👤', title: 'Severity Confirmation', isHuman: true, description: 'On-call engineer confirms critical status, initiates war room' },
        { icon: '🔍', title: 'Rapid Diagnosis', agent: 'Debug Agent', description: 'AI rapidly traces issue, identifies likely cause', duration: '5-15 min' },
        { icon: '💻', title: 'Fix Development', agent: 'Dev Agent', description: 'AI generates minimal targeted fix', duration: '15-60 min' },
        { icon: '🧪', title: 'Smoke Test', agent: 'QE Agent', description: 'Quick validation of fix, critical path testing', duration: '10-20 min' },
        { icon: '👤', title: 'Deploy Approval', isHuman: true, description: 'Tech Lead approves emergency deployment' },
        { icon: '🚀', title: 'Emergency Deploy', agent: 'DevOps Agent', description: 'Fast-track deployment bypassing normal queue', duration: '10-15 min' },
        { icon: '📊', title: 'Monitoring', agent: 'Monitoring Agent', description: 'Intensive monitoring of fix effectiveness', duration: '1-2 hours' },
        { icon: '👤', title: 'All-Clear', isHuman: true, description: 'On-call confirms resolution, closes incident' }
      ],
      stats: [
        { value: '3', label: 'Human Checkpoints', color: 'var(--accent-orange)' },
        { value: '6', label: 'AI Agent Steps' },
        { value: '1-4 hours', label: 'Total Duration' },
        { value: '~25%', label: 'Human Time' }
      ]
    },
    refactoring: {
      id: 'refactoring',
      title: '🔧 Refactoring / Tech Debt',
      shortTitle: 'Refactoring',
      description: 'Improving code quality without changing functionality - moderate oversight',
      category: 'Development',
      color: 'var(--accent-cyan)',
      steps: [
        { icon: '📊', title: 'Tech Debt Analysis', agent: 'Architect Agent', description: 'AI identifies refactoring opportunities, calculates ROI', duration: '1-2 hours' },
        { icon: '👤', title: 'Prioritization', isHuman: true, description: 'Tech Lead approves refactoring scope and timing' },
        { icon: '🏗️', title: 'Refactoring Plan', agent: 'Architect Agent', description: 'AI generates safe refactoring steps, migration path', duration: '1-2 hours' },
        { icon: '💻', title: 'Refactoring Execution', agent: 'Dev Agents', description: 'AI performs refactoring with automated transformations', duration: '1-5 days' },
        { icon: '🧪', title: 'Regression Testing', agent: 'QE Agent', description: 'Full regression suite to ensure no behavior changes', duration: '2-4 hours' },
        { icon: '⚡', title: 'Performance Validation', agent: 'Performance Agent', description: 'Verify no performance regression', duration: '1-2 hours' },
        { icon: '🔍', title: 'Code Review', agent: 'Review Agent', description: 'AI validates refactoring follows patterns, improves quality', duration: '30 min' },
        { icon: '👤', title: 'Final Approval', isHuman: true, description: 'Senior dev verifies refactoring quality and completeness' },
        { icon: '🚀', title: 'Gradual Rollout', agent: 'DevOps Agent', description: 'Staged deployment with careful monitoring', duration: '1-2 days' }
      ],
      stats: [
        { value: '2', label: 'Human Checkpoints', color: 'var(--accent-orange)' },
        { value: '7', label: 'AI Agent Steps' },
        { value: '3-10 days', label: 'Total Duration' },
        { value: '~10%', label: 'Human Time' }
      ]
    },
    apiIntegration: {
      id: 'apiIntegration',
      title: '🔌 API Integration',
      shortTitle: 'API Integration',
      description: 'Integrating with external third-party APIs - requires vendor coordination',
      category: 'Development',
      color: 'var(--accent-pink)',
      steps: [
        { icon: '📋', title: 'Integration Request', agent: 'Orchestrator', description: 'New integration requirement captured', duration: 'Minutes' },
        { icon: '🔍', title: 'API Analysis', agent: 'Architect Agent', description: 'AI analyzes API docs, identifies integration approach', duration: '1-2 hours' },
        { icon: '👤', title: 'Vendor Assessment', isHuman: true, description: 'Legal/Security reviews vendor, approves integration' },
        { icon: '🏗️', title: 'Integration Design', agent: 'Architect Agent', description: 'AI designs integration layer, error handling, retry logic', duration: '2-4 hours' },
        { icon: '💻', title: 'Implementation', agent: 'Dev Agents', description: 'Build integration with proper abstraction layer', duration: '3-7 days' },
        { icon: '🧪', title: 'Integration Testing', agent: 'QE Agent', description: 'Test with sandbox/staging API endpoints', duration: '1-2 days' },
        { icon: '🔒', title: 'Security Review', agent: 'Security Agent', description: 'Review credentials handling, data flow, compliance', duration: '2-4 hours' },
        { icon: '👤', title: 'Production Credentials', isHuman: true, description: 'Security approves production API keys/credentials' },
        { icon: '🚀', title: 'Deployment', agent: 'DevOps Agent', description: 'Deploy with feature flag for gradual enablement', duration: '1-2 hours' },
        { icon: '👤', title: 'Go-Live Validation', isHuman: true, description: 'Product Owner validates integration works as expected' }
      ],
      stats: [
        { value: '3', label: 'Human Checkpoints', color: 'var(--accent-orange)' },
        { value: '7', label: 'AI Agent Steps' },
        { value: '1-2 weeks', label: 'Total Duration' },
        { value: '~15%', label: 'Human Time' }
      ]
    },
    documentation: {
      id: 'documentation',
      title: '📚 Documentation Update',
      shortTitle: 'Documentation',
      description: 'Updating or creating documentation - mostly automated',
      category: 'Support',
      color: 'var(--accent-yellow)',
      steps: [
        { icon: '🔍', title: 'Change Detection', agent: 'Doc Agent', description: 'AI detects code changes requiring doc updates', duration: 'Auto' },
        { icon: '📝', title: 'Draft Generation', agent: 'Doc Agent', description: 'AI generates documentation draft from code analysis', duration: '30-60 min' },
        { icon: '🎨', title: 'Diagram Generation', agent: 'Doc Agent', description: 'AI creates/updates architecture diagrams', duration: '15-30 min' },
        { icon: '✅', title: 'Accuracy Check', agent: 'Review Agent', description: 'AI validates docs match actual code behavior', duration: '15 min' },
        { icon: '👤', title: 'Human Review', isHuman: true, description: 'Tech writer or developer reviews for clarity and accuracy' },
        { icon: '🚀', title: 'Publish', agent: 'DevOps Agent', description: 'Auto-publish to documentation site', duration: '5 min' }
      ],
      stats: [
        { value: '1', label: 'Human Checkpoint', color: 'var(--accent-orange)' },
        { value: '5', label: 'AI Agent Steps' },
        { value: '1-3 hours', label: 'Total Duration' },
        { value: '~10%', label: 'Human Time' }
      ]
    }
  };

  // Group workflows by category
  const workflowsByCategory = {
    Development: ['newInitiative', 'enhancement', 'bugFix', 'refactoring', 'apiIntegration'],
    Operations: ['hotfix', 'securityIncident'],
    Support: ['documentation']
  };
  const checkpointCategories = [
    {
      category: 'Strategic',
      icon: '🎯',
      color: 'var(--accent-purple)',
      description: 'Decisions that shape company direction',
      checkpoints: [
        { trigger: 'New product/feature direction', human: 'Product Leader', aiProvides: 'Market analysis, competitor data, feasibility assessment' },
        { trigger: 'Major architectural change', human: 'Tech Leader', aiProvides: 'Options with trade-offs, risk analysis, migration plan' },
        { trigger: 'Build vs buy decision', human: 'CTO/Architect', aiProvides: 'Cost analysis, capability comparison, integration complexity' },
        { trigger: 'Team/resource allocation', human: 'VP Engineering', aiProvides: 'Utilization data, skill gaps, capacity projections' }
      ]
    },
    {
      category: 'Ethical',
      icon: '⚖️',
      color: 'var(--accent-orange)',
      description: 'Decisions requiring moral judgment',
      checkpoints: [
        { trigger: 'AI bias detected in model', human: 'Ethics Review', aiProvides: 'Bias metrics, affected populations, mitigation options' },
        { trigger: 'User privacy trade-off', human: 'Privacy Officer', aiProvides: 'Data flow analysis, consent implications, alternatives' },
        { trigger: 'Feature with addiction potential', human: 'Product Ethics', aiProvides: 'Usage patterns, psychological impact research' },
        { trigger: 'Accessibility exceptions', human: 'Accessibility Lead', aiProvides: 'Impact assessment, affected users, remediation timeline' }
      ]
    },
    {
      category: 'Legal & Compliance',
      icon: '📜',
      color: 'var(--accent-blue)',
      description: 'Decisions with legal implications',
      checkpoints: [
        { trigger: 'New data processing purpose', human: 'Legal/DPO', aiProvides: 'GDPR analysis, consent requirements, documentation' },
        { trigger: 'Third-party integration', human: 'Legal/Security', aiProvides: 'Vendor assessment, contract analysis, risk profile' },
        { trigger: 'Compliance audit findings', human: 'Compliance Officer', aiProvides: 'Gap analysis, remediation plan, evidence package' },
        { trigger: 'Open source license conflict', human: 'Legal', aiProvides: 'License compatibility analysis, alternatives' }
      ]
    },
    {
      category: 'Financial',
      icon: '💰',
      color: 'var(--accent-green)',
      description: 'Decisions with budget impact',
      checkpoints: [
        { trigger: 'Infrastructure cost spike', human: 'Finance/Eng Lead', aiProvides: 'Cost breakdown, optimization options, ROI analysis' },
        { trigger: 'New tool/service purchase', human: 'Budget Owner', aiProvides: 'Comparison analysis, TCO calculation, alternatives' },
        { trigger: 'Headcount request', human: 'Hiring Manager', aiProvides: 'Workload analysis, productivity metrics, skill gaps' },
        { trigger: 'Project over budget', human: 'Project Sponsor', aiProvides: 'Burn analysis, scope options, timeline impacts' }
      ]
    },
    {
      category: 'Customer',
      icon: '❤️',
      color: 'var(--accent-pink)',
      description: 'Decisions affecting customer relationships',
      checkpoints: [
        { trigger: 'Breaking API change', human: 'Customer Success', aiProvides: 'Impact analysis, migration guide, communication plan' },
        { trigger: 'Customer escalation', human: 'Account Manager', aiProvides: 'Issue summary, resolution options, history context' },
        { trigger: 'Feature deprecation', human: 'Product Owner', aiProvides: 'Usage data, affected customers, migration path' },
        { trigger: 'SLA breach risk', human: 'Customer Success', aiProvides: 'Risk assessment, mitigation options, communication draft' }
      ]
    },
    {
      category: 'Risk & Security',
      icon: '🛡️',
      color: 'var(--accent-red)',
      description: 'Decisions involving security trade-offs',
      checkpoints: [
        { trigger: 'Critical vulnerability found', human: 'Security Lead', aiProvides: 'Severity analysis, exploit likelihood, patch options' },
        { trigger: 'Security exception request', human: 'CISO', aiProvides: 'Risk assessment, compensating controls, time-bound plan' },
        { trigger: 'Incident requiring disclosure', human: 'Legal/Security', aiProvides: 'Impact scope, notification requirements, draft comms' },
        { trigger: 'New attack vector identified', human: 'Security Team', aiProvides: 'Threat analysis, affected systems, mitigation options' }
      ]
    },
    {
      category: 'Edge Cases',
      icon: '🔮',
      color: 'var(--accent-cyan)',
      description: 'Novel situations AI hasn\'t seen',
      checkpoints: [
        { trigger: 'Unprecedented technical issue', human: 'Senior Engineer', aiProvides: 'Similar patterns, potential causes, debugging data' },
        { trigger: 'Conflicting requirements', human: 'Product Owner', aiProvides: 'Stakeholder mapping, impact analysis, options' },
        { trigger: 'Test results inconclusive', human: 'QE Strategist', aiProvides: 'Data analysis, confidence levels, additional test suggestions' },
        { trigger: 'Performance vs feature trade-off', human: 'Tech Lead', aiProvides: 'Benchmark data, user impact, optimization options' }
      ]
    }
  ];

  const tabs = [
    { id: 'workflows', label: '🔄 Work Type Workflows', desc: 'Visual flows by work type' },
    { id: 'categories', label: '📋 Checkpoint Categories', desc: 'When humans intervene' }
  ];

  return (
    <div>
      <PageHeader
        title="🚦 Human Checkpoints"
        description="When and why AI agents escalate to humans"
      />

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '25px',
        padding: '5px',
        background: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border)'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '15px 20px',
              background: activeTab === tab.id ? 'var(--accent-purple)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center'
            }}
          >
            <div style={{ fontWeight: '600', fontSize: '1rem' }}>{tab.label}</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '3px' }}>{tab.desc}</div>
          </button>
        ))}
      </div>

      {/* Workflows Tab */}
      {activeTab === 'workflows' && (
        <div>
          {!selectedWorkflow ? (
            // Workflow Selection View
            <div>
              <Card>
                <CardTitle icon="🎯">The Escalation Principle</CardTitle>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(74, 158, 255, 0.1))',
                  border: '1px solid var(--accent-green)',
                  borderRadius: '12px',
                  padding: '25px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ margin: '0 0 15px 0' }}>AI Executes, Humans Decide</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                    The number of human checkpoints varies by work type. Click any workflow below to see
                    the detailed step-by-step process with human intervention points highlighted.
                  </p>
                </div>
              </Card>

              {/* Workflow Cards by Category */}
              {Object.entries(workflowsByCategory).map(([category, workflowIds]) => (
                <Card key={category}>
                  <CardTitle icon={category === 'Development' ? '💻' : category === 'Operations' ? '🔧' : '📋'}>
                    {category} Workflows
                  </CardTitle>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '15px'
                  }}>
                    {workflowIds.map(id => {
                      const wf = workflows[id];
                      return (
                        <div
                          key={id}
                          onClick={() => setSelectedWorkflow(id)}
                          style={{
                            background: 'var(--bg-elevated)',
                            padding: '20px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            borderLeft: `4px solid ${wf.color}`,
                            transition: 'all 0.2s',
                            border: '1px solid var(--border)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = `0 4px 12px ${wf.color}33`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <div style={{ fontSize: '1.5rem' }}>{wf.title.split(' ')[0]}</div>
                            <div style={{
                              padding: '4px 8px',
                              background: 'var(--accent-orange)22',
                              color: 'var(--accent-orange)',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: '600'
                            }}>
                              {wf.stats[0].value} human
                            </div>
                          </div>
                          <div style={{ fontWeight: '600', marginBottom: '8px', color: wf.color }}>
                            {wf.shortTitle}
                          </div>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: 1.4 }}>
                            {wf.description}
                          </p>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)',
                            borderTop: '1px solid var(--border)',
                            paddingTop: '10px',
                            marginTop: '10px'
                          }}>
                            <span>🤖 {wf.stats[1].value} AI steps</span>
                            <span>⏱️ {wf.stats[2].value}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              ))}

              <InfoBox variant="insight" title="The Pattern">
                <p style={{ margin: 0 }}>
                  Notice how human checkpoints cluster around <strong>strategic decisions</strong> (scope, architecture, go-live)
                  rather than execution tasks. As work becomes more routine, AI autonomy increases.
                  A critical bug fix at 3 AM can flow through with just async human approval.
                </p>
              </InfoBox>
            </div>
          ) : (
            // Selected Workflow Detail View
            <div>
              {/* Back Button */}
              <button
                onClick={() => setSelectedWorkflow(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '20px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}
              >
                ← Back to all workflows
              </button>

              {/* Workflow Diagram */}
              <WorkflowDiagram {...workflows[selectedWorkflow]} />

              {/* Quick Navigation to Other Workflows */}
              <Card>
                <CardTitle icon="🔄">Other Workflows</CardTitle>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {Object.values(workflows).filter(wf => wf.id !== selectedWorkflow).map(wf => (
                    <button
                      key={wf.id}
                      onClick={() => setSelectedWorkflow(wf.id)}
                      style={{
                        padding: '8px 16px',
                        background: 'var(--bg-elevated)',
                        border: `1px solid ${wf.color}`,
                        borderRadius: '20px',
                        cursor: 'pointer',
                        color: wf.color,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {wf.title.split(' ')[0]} {wf.shortTitle}
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <div>
          {!selectedCategory ? (
            // Category Selection View
            <div>
              <Card>
                <CardTitle icon="🎯">The Escalation Principle</CardTitle>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(74, 158, 255, 0.1))',
                  border: '1px solid var(--accent-green)',
                  borderRadius: '12px',
                  padding: '25px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ margin: '0 0 15px 0' }}>AI Executes, Humans Decide</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                    AI agents are empowered to execute autonomously for 95% of tasks. They escalate to humans
                    only when they encounter decisions requiring <strong>judgment, ethics, relationships, or accountability</strong>.
                    Click any category below to see specific checkpoint triggers.
                  </p>
                </div>
              </Card>

              {/* Category Cards */}
              <Card>
                <CardTitle icon="📋">Checkpoint Categories</CardTitle>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '15px'
                }}>
                  {checkpointCategories.map((cat, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedCategory(index)}
                      style={{
                        background: 'var(--bg-elevated)',
                        padding: '20px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        borderLeft: `4px solid ${cat.color}`,
                        transition: 'all 0.2s',
                        border: '1px solid var(--border)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = `0 4px 12px ${cat.color}33`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: `${cat.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem'
                        }}>
                          {cat.icon}
                        </div>
                        <div style={{
                          padding: '4px 10px',
                          background: `${cat.color}22`,
                          color: cat.color,
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          {cat.checkpoints.length} triggers
                        </div>
                      </div>
                      <div style={{ fontWeight: '600', marginBottom: '8px', fontSize: '1.1rem' }}>
                        {cat.category}
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: 1.4 }}>
                        {cat.description}
                      </p>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '5px',
                        borderTop: '1px solid var(--border)',
                        paddingTop: '12px',
                        marginTop: '8px'
                      }}>
                        {cat.checkpoints.slice(0, 2).map((cp, cpIndex) => (
                          <span key={cpIndex} style={{
                            padding: '3px 8px',
                            background: 'var(--bg-card)',
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)'
                          }}>
                            {cp.trigger.length > 25 ? cp.trigger.substring(0, 25) + '...' : cp.trigger}
                          </span>
                        ))}
                        {cat.checkpoints.length > 2 && (
                          <span style={{
                            padding: '3px 8px',
                            background: `${cat.color}15`,
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            color: cat.color
                          }}>
                            +{cat.checkpoints.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Escalation Metrics */}
              <Card>
                <CardTitle icon="📊">Escalation Metrics</CardTitle>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '20px'
                }}>
                  <div style={{
                    background: 'var(--bg-elevated)',
                    padding: '25px',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-green)' }}>95%</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>AI Autonomous</div>
                  </div>
                  <div style={{
                    background: 'var(--bg-elevated)',
                    padding: '25px',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-orange)' }}>5%</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Human Escalation</div>
                  </div>
                  <div style={{
                    background: 'var(--bg-elevated)',
                    padding: '25px',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-blue)' }}>&lt;15min</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Avg Decision Time</div>
                  </div>
                  <div style={{
                    background: 'var(--bg-elevated)',
                    padding: '25px',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-purple)' }}>100%</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Audit Trail</div>
                  </div>
                </div>
              </Card>

              <InfoBox variant="warning" title="Critical Rule">
                <p style={{ margin: 0 }}>
                  <strong>AI never makes irreversible decisions without human approval.</strong> This includes:
                  production deployments with breaking changes, data deletion, customer communications,
                  security exceptions, and financial commitments. The escalation path must always be clear.
                </p>
              </InfoBox>
            </div>
          ) : (
            // Selected Category Detail View
            <div>
              {/* Back Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '20px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}
              >
                ← Back to all categories
              </button>

              {/* Category Detail */}
              {(() => {
                const cat = checkpointCategories[selectedCategory];
                return (
                  <Card>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: `${cat.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem'
                      }}>
                        {cat.icon}
                      </div>
                      <div>
                        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{cat.category} Checkpoints</h2>
                        <p style={{ margin: '5px 0 0 0', color: 'var(--text-secondary)' }}>{cat.description}</p>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gap: '15px' }}>
                      {cat.checkpoints.map((cp, cpIndex) => (
                        <div key={cpIndex} style={{
                          background: 'var(--bg-elevated)',
                          borderRadius: '12px',
                          padding: '20px',
                          borderLeft: `4px solid ${cat.color}`
                        }}>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '15px'
                          }}>
                            <div>
                              <div style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                color: cat.color,
                                marginBottom: '6px',
                                fontWeight: '600'
                              }}>
                                🚨 Trigger
                              </div>
                              <div style={{ fontWeight: '600', fontSize: '1rem' }}>{cp.trigger}</div>
                            </div>
                            <div>
                              <div style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                color: 'var(--accent-orange)',
                                marginBottom: '6px',
                                fontWeight: '600'
                              }}>
                                👤 Human Decision Maker
                              </div>
                              <div style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                background: 'var(--accent-orange)15',
                                color: 'var(--accent-orange)',
                                borderRadius: '20px',
                                fontWeight: '500'
                              }}>
                                {cp.human}
                              </div>
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                              <div style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                color: 'var(--accent-blue)',
                                marginBottom: '6px',
                                fontWeight: '600'
                              }}>
                                🤖 AI Provides
                              </div>
                              <div style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                lineHeight: 1.5,
                                padding: '10px 15px',
                                background: 'var(--bg-card)',
                                borderRadius: '8px'
                              }}>
                                {cp.aiProvides}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })()}

              {/* Quick Navigation to Other Categories */}
              <Card>
                <CardTitle icon="🔄">Other Categories</CardTitle>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {checkpointCategories.map((cat, index) => (
                    index !== selectedCategory && (
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(index)}
                        style={{
                          padding: '10px 16px',
                          background: 'var(--bg-elevated)',
                          border: `1px solid ${cat.color}`,
                          borderRadius: '20px',
                          cursor: 'pointer',
                          color: cat.color,
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        {cat.icon} {cat.category}
                      </button>
                    )
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HumanCheckpoints;
