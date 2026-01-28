import React from 'react';
import { Link } from 'react-router-dom';
import {
  PageHeader,
  Card,
  CardTitle,
  CodeBlock
} from '../../components/ui';

const DevOpsSetup = () => {
  return (
    <div>
      <PageHeader
        title="⚙️ DevOps / Platform Engineer Setup"
        description="Configure AI for infrastructure and operations"
      />

      {/* Context: Where this fits in the agentic flow */}
      <Card>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '15px',
          background: 'linear-gradient(135deg, var(--accent-purple)15, var(--accent-purple)10)',
          borderRadius: '10px',
          border: '1px solid var(--accent-purple)33'
        }}>
          <span style={{ fontSize: '2rem' }}>🚀</span>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>Your Role: Platform Strategist</div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              In the <Link to="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</Link>, DevOps Agent handles deployment (<strong>Step 9</strong>) and Monitoring Agent tracks health (<strong>Step 10</strong>).
              You approve production releases at <strong>Gate 3</strong> and design the platform architecture.
              See <Link to="/roles/devops" style={{ color: 'var(--accent-purple)', marginLeft: '3px' }}>DevOps Role</Link> for the full picture.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📄">Step 1: Create DevOps AI-CONFIG.md</CardTitle>

        <CodeBlock language="markdown" filename="AI-CONFIG-DEVOPS.md">
{`# AI-CONFIG.md - DevOps/Platform Engineer Configuration

## Role
You are an AI infrastructure and operations assistant. You help with IaC, CI/CD, monitoring, and incident response.

## Infrastructure Context
- **Cloud**: AWS / GCP / Azure
- **Orchestration**: Kubernetes (EKS/GKE/AKS)
- **IaC**: Terraform / Pulumi
- **CI/CD**: GitHub Actions / GitLab CI
- **Monitoring**: Datadog / Prometheus + Grafana
- **Logging**: ELK / CloudWatch

## IaC Standards

### Terraform Conventions
\`\`\`hcl
# File structure
infrastructure/
  modules/
    vpc/
    eks/
    rds/
  environments/
    dev/
    staging/
    prod/

# Naming: {project}-{env}-{resource}
# Example: myapp-prod-eks-cluster
\`\`\`

### Security Requirements
- No hardcoded secrets (use Secrets Manager/Vault)
- Encrypt at rest and in transit
- Least privilege IAM policies
- Private subnets for workloads
- WAF for public endpoints

## Kubernetes Standards
- Namespace per team/service
- Resource limits on all pods
- Liveness and readiness probes
- PodDisruptionBudgets for HA
- Network policies for isolation

## CI/CD Pipeline Standards
- All changes through PR
- Automated testing gates
- Security scanning (SAST/DAST)
- Approval for prod deployments
- Automated rollback capability

## Incident Response

### Severity Levels
- **P1**: Complete outage, revenue impact
- **P2**: Degraded service, user impact
- **P3**: Minor issue, workaround exists
- **P4**: Cosmetic/low impact

### Response Times
- P1: 15 min acknowledge, 1 hr resolve
- P2: 30 min acknowledge, 4 hr resolve
- P3: 4 hr acknowledge, 24 hr resolve
- P4: Next business day

## Runbook Location
- /docs/runbooks/

## Alert Channels
- P1/P2: PagerDuty + Slack #incidents
- P3/P4: Slack #ops-alerts`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📚">Step 2: DevOps Prompt Library</CardTitle>

        <CodeBlock language="bash" filename=".ai-devops-aliases.sh">
{`# DevOps/Platform Aliases

# ===== INFRASTRUCTURE =====

# Generate Terraform
alias ctf='ai "Generate Terraform code for this infrastructure requirement. Follow our module patterns and security standards:"'

# Generate Kubernetes manifests
alias ck8s='ai "Generate Kubernetes manifests for this service. Include: Deployment, Service, ConfigMap, HPA, PDB, NetworkPolicy:"'

# Generate Helm chart
alias chelm='ai "Create a Helm chart for this application with configurable values for dev/staging/prod:"'

# Dockerfile generation
alias cdocker='ai "Create an optimized, secure Dockerfile for this application. Use multi-stage builds and non-root user:"'

# ===== CI/CD =====

# Generate GitHub Actions workflow
alias cgha='ai "Create a GitHub Actions workflow for this project. Include: build, test, security scan, deploy stages:"'

# Pipeline troubleshooting
alias cpipeline='ai "Debug this CI/CD pipeline failure. Identify root cause and suggest fix:"'

# ===== INCIDENT RESPONSE =====

# Incident analysis
alias cincident='ai "Analyze this incident:
- Alert/Error: [paste here]
- Affected service:
- Time started:

Provide:
1. Likely root cause
2. Immediate mitigation steps
3. Commands to run for diagnosis
4. Rollback procedure if needed"'

# Generate runbook
alias crunbook='ai "Create a runbook for this scenario. Include: symptoms, diagnosis steps, resolution steps, escalation criteria:"'

# Post-mortem
alias cpostmortem='ai "Generate a post-mortem document for this incident. Include: timeline, root cause, impact, action items:"'

# ===== MONITORING =====

# Alert rules
alias calert='ai "Create alerting rules (Prometheus/Datadog) for this service. Include appropriate thresholds and runbook links:"'

# Dashboard
alias cdashboard='ai "Create a Grafana dashboard JSON for monitoring this service. Include: golden signals, business metrics, dependencies:"'

# ===== FUNCTIONS =====

# ITOps Agent - Auto-remediation
itops_analyze() {
    ai "You are an ITOps agent. Analyze this alert and determine action:

    Alert: $1

    1. Classify severity (P1-P4)
    2. Identify likely cause
    3. If L1 (routine): Execute remediation automatically
    4. If L2 (needs verification): Suggest remediation, await approval
    5. If L3 (complex): Page on-call with context

    Current runbooks available:
    - restart-pod
    - scale-deployment
    - rollback-deployment
    - clear-cache
    - failover-database"
}

# Cost analysis
alias ccost='ai "Analyze these AWS/GCP costs and identify optimization opportunities. Consider: right-sizing, reserved instances, spot instances, unused resources:"'`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🤖">Step 3: ITOps Agent Setup</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Automated incident response agent:</p>

        <CodeBlock language="javascript" filename="itops-agent/index.js">
{`// ITOps Agent - Automated Incident Response
// Run with: node itops-agent/index.js

const AIClient = require('@your-ai/sdk');

const aiClient = new AIClient();

// Runbook definitions
const RUNBOOKS = {
  'high-cpu': {
    l1_actions: ['restart-pod', 'scale-up'],
    l2_actions: ['analyze-profiler', 'check-recent-deploys'],
    l3_threshold: '15 minutes unresolved'
  },
  'high-memory': {
    l1_actions: ['restart-pod', 'clear-cache'],
    l2_actions: ['heap-dump', 'analyze-leaks'],
    l3_threshold: '10 minutes unresolved'
  },
  'high-error-rate': {
    l1_actions: ['check-dependencies', 'verify-configs'],
    l2_actions: ['rollback-deployment', 'enable-circuit-breaker'],
    l3_threshold: '5 minutes or P1'
  },
  '5xx-errors': {
    l1_actions: ['restart-pod', 'check-health-endpoints'],
    l2_actions: ['rollback-deployment', 'check-database'],
    l3_threshold: 'Immediate if P1'
  }
};

async function analyzeAlert(alert) {
  const response = await aiClient.messages.create({
    model: 'your-ai-model',
    max_tokens: 1024,
    system: \`You are an ITOps agent. Analyze alerts and recommend actions.

Available runbooks: \${JSON.stringify(RUNBOOKS, null, 2)}

Response format:
{
  "severity": "P1|P2|P3|P4",
  "category": "high-cpu|high-memory|high-error-rate|5xx-errors|other",
  "root_cause_hypothesis": "string",
  "recommended_action": "L1_AUTO|L2_APPROVAL|L3_ESCALATE",
  "specific_actions": ["action1", "action2"],
  "commands": ["kubectl command 1", "aws command 2"],
  "escalation_message": "string if L3"
}\`,
    messages: [{
      role: 'user',
      content: \`Analyze this alert: \${JSON.stringify(alert)}\`
    }]
  });

  return JSON.parse(response.content[0].text);
}

async function executeL1Action(action, context) {
  console.log(\`🤖 Executing L1 action: \${action}\`);
  // Implement actual kubectl/aws commands here
  // Example: exec(\`kubectl rollout restart deployment/\${context.service}\`)
}

async function handleAlert(alert) {
  console.log('📟 Alert received:', alert.name);

  const analysis = await analyzeAlert(alert);
  console.log('🔍 Analysis:', analysis);

  switch (analysis.recommended_action) {
    case 'L1_AUTO':
      console.log('✅ L1 - Auto-remediating...');
      for (const action of analysis.specific_actions) {
        await executeL1Action(action, alert);
      }
      // Log to incident system
      break;

    case 'L2_APPROVAL':
      console.log('⚠️ L2 - Requesting approval...');
      // Send to Slack for approval
      // await sendSlackApproval(analysis);
      break;

    case 'L3_ESCALATE':
      console.log('🚨 L3 - Escalating to on-call...');
      // Page on-call via PagerDuty
      // await pageOnCall(analysis);
      break;
  }
}

// Example: Webhook handler for alerts
// In production, this would be an Express server receiving webhooks
const exampleAlert = {
  name: 'High CPU Usage',
  service: 'order-service',
  namespace: 'production',
  metric: 'cpu_usage_percent',
  value: 95,
  threshold: 80,
  duration: '5 minutes'
};

handleAlert(exampleAlert);`}
        </CodeBlock>
      </Card>
    </div>
  );
};

export default DevOpsSetup;
