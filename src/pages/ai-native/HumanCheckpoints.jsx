import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  InfoBox
} from '../../components/ui';

const HumanCheckpoints = () => {
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

  return (
    <div>
      <PageHeader
        title="🚦 Human Checkpoints"
        description="When and why AI agents escalate to humans"
      />

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
            only when they encounter decisions requiring <strong>judgment, ethics, relationships, or accountability</strong>
            that cannot be algorithmically determined.
          </p>
        </div>
      </Card>

      {checkpointCategories.map((cat, index) => (
        <Card key={index}>
          <CardTitle>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: `${cat.color}20`,
              marginRight: '10px',
              fontSize: '1.2rem'
            }}>
              {cat.icon}
            </span>
            {cat.category} Checkpoints
          </CardTitle>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{cat.description}</p>

          <div style={{ display: 'grid', gap: '15px' }}>
            {cat.checkpoints.map((cp, cpIndex) => (
              <div key={cpIndex} style={{
                background: 'var(--bg-elevated)',
                borderRadius: '10px',
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
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '5px'
                    }}>
                      Trigger
                    </div>
                    <div style={{ fontWeight: '600' }}>{cp.trigger}</div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '5px'
                    }}>
                      Human Decision Maker
                    </div>
                    <div style={{ color: 'var(--accent-green)' }}>{cp.human}</div>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <div style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '5px'
                    }}>
                      AI Provides
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      {cp.aiProvides}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}

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
  );
};

export default HumanCheckpoints;
