import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  ComparisonGrid,
  ComparisonCard,
  ComparisonList,
  PromptBox,
  InfoBox
} from '../../components/ui';

const DevOps = () => {
  const workflows = [
    {
      title: 'Incident Response',
      icon: '🚨',
      description: 'AI-assisted incident management',
      prompt: `"We have a production alert: [paste alert]. Analyze and:
1. Correlate with recent deployments and changes
2. Check similar past incidents for patterns
3. Suggest immediate mitigation steps
4. Identify root cause candidates
5. Draft incident communication
6. Prepare rollback if needed"`
    },
    {
      title: 'Infrastructure as Code',
      icon: '🏗️',
      description: 'Generate and review IaC',
      prompt: `"Create Terraform for a new microservice:
1. EKS deployment with autoscaling
2. RDS PostgreSQL with read replicas
3. S3 bucket with encryption
4. CloudWatch alarms and dashboards
5. IAM roles following least privilege
6. Follow our naming conventions in modules/"`
    },
    {
      title: 'Pipeline Optimization',
      icon: '⚡',
      description: 'Faster, more reliable CI/CD',
      prompt: `"Analyze our CI/CD pipeline and suggest optimizations:
1. Identify slow steps and parallelization opportunities
2. Reduce flaky test failures
3. Optimize Docker layer caching
4. Suggest cost reduction opportunities
5. Improve security scanning coverage
6. Add missing quality gates"`
    },
    {
      title: 'Runbook Generation',
      icon: '📋',
      description: 'Auto-generated operational docs',
      prompt: `"Generate a runbook for the payment service:
1. Service overview and architecture
2. Health check procedures
3. Common failure modes and resolutions
4. Scaling procedures
5. Backup and recovery steps
6. Escalation paths"`
    },
    {
      title: 'Cost Optimization',
      icon: '💰',
      description: 'Cloud spend analysis and reduction',
      prompt: `"Analyze our AWS cost report and suggest optimizations:
1. Identify unused or underutilized resources
2. Suggest Reserved Instance opportunities
3. Find Spot Instance candidates
4. Recommend rightsizing opportunities
5. Identify data transfer cost reduction
6. Estimate savings for each recommendation"`
    },
    {
      title: 'Security Hardening',
      icon: '🔒',
      description: 'Automated security improvements',
      prompt: `"Review our Kubernetes cluster security:
1. Check RBAC configurations
2. Audit network policies
3. Verify pod security standards
4. Check secrets management
5. Identify exposed services
6. Generate remediation steps with priority"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="⚙️ DevOps / Platform with Claude"
        description="From script runner to platform architect"
      />

      {/* Your Role in the Agentic Flow */}
      <Card>
        <div style={{
          background: 'linear-gradient(135deg, var(--accent-purple)20, var(--accent-purple)10)',
          border: '2px solid var(--accent-purple)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              background: 'var(--accent-purple)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>🚀</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--accent-purple)' }}>Platform Strategist</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>DevOps Agent handles deployment - you design platforms and approve at Gate 3</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-blue)', marginBottom: '5px' }}>Steps 9-10: AI Deploys & Monitors</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                DevOps Agent executes deployment. Monitoring Agent tracks health. Auto-rollback on issues.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px', border: '2px dashed var(--accent-orange)' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-orange)', marginBottom: '5px' }}>🎯 Gate 3: Deploy Approval</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                You approve production releases. Validate infrastructure changes. Review security posture.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-green)', marginBottom: '5px' }}>Your Focus</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Platform architecture, reliability engineering, cost optimization, security strategy.
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
          <ComparisonCard variant="traditional" title="Traditional DevOps Time Split">
            <ComparisonList items={[
              '35% - Incident response & firefighting',
              '25% - Manual deployments & maintenance',
              '20% - Script writing & automation',
              '15% - Monitoring & alerting setup',
              '5% - Architecture planning'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="AI-Enabled Platform Time Split">
            <ComparisonList items={[
              '10% - Reviewing AI incident response',
              '20% - Platform architecture',
              '25% - Developer experience',
              '25% - Reliability engineering',
              '20% - Innovation & optimization'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Claude-Powered DevOps Workflows</CardTitle>

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
        <CardTitle icon="🤖">AIOps Capabilities</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-green)' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--accent-green)' }}>Auto-Remediation</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Restart failed services</li>
              <li>• Scale based on load</li>
              <li>• Clear disk space</li>
              <li>• Rotate certificates</li>
              <li>• Apply security patches</li>
            </ul>
            <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '8px' }}>
              <span style={{ color: 'var(--accent-green)', fontWeight: '600' }}>80%</span>
              <span style={{ fontSize: '0.85rem', marginLeft: '8px' }}>incidents auto-resolved</span>
            </div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-blue)' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--accent-blue)' }}>Predictive Alerts</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Disk full in 4 hours</li>
              <li>• Memory leak detected</li>
              <li>• Certificate expires in 7 days</li>
              <li>• Unusual traffic pattern</li>
              <li>• Performance degradation trend</li>
            </ul>
            <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(74, 158, 255, 0.1)', borderRadius: '8px' }}>
              <span style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>4hr</span>
              <span style={{ fontSize: '0.85rem', marginLeft: '8px' }}>avg warning before incident</span>
            </div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-purple)' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--accent-purple)' }}>Intelligent Routing</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Route to right team</li>
              <li>• Include relevant context</li>
              <li>• Attach similar past incidents</li>
              <li>• Suggest resolution steps</li>
              <li>• Auto-escalate if needed</li>
            </ul>
            <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(167, 139, 250, 0.1)', borderRadius: '8px' }}>
              <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>-70%</span>
              <span style={{ fontSize: '0.85rem', marginLeft: '8px' }}>MTTR reduction</span>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📈">Operational Improvements</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>80%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Auto-Resolved Incidents</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-70%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>MTTR</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-60%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Toil Reduction</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>99.95%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Uptime</div>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="⚠️">What DevOps Still Owns</CardTitle>
        <InfoBox variant="warning" title="Human Judgment Required">
          <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <li style={{ padding: '5px 0' }}>• <strong>Platform architecture</strong> - AI suggests, humans design for scale and reliability</li>
            <li style={{ padding: '5px 0' }}>• <strong>Security decisions</strong> - AI scans, humans assess risk and compliance</li>
            <li style={{ padding: '5px 0' }}>• <strong>Cost vs performance trade-offs</strong> - AI analyzes, humans balance business needs</li>
            <li style={{ padding: '5px 0' }}>• <strong>Vendor selection</strong> - AI compares, humans consider strategic fit</li>
            <li style={{ padding: '5px 0' }}>• <strong>Incident escalation</strong> - AI handles routine, humans manage critical situations</li>
          </ul>
        </InfoBox>
      </Card>
    </div>
  );
};

export default DevOps;
