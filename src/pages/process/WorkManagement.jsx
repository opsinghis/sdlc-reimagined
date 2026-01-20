import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  ComparisonGrid,
  ComparisonCard,
  ComparisonList,
  Badge,
  PromptBox,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell
} from '../../components/ui';

const WorkManagement = () => {
  const jiraDecisions = [
    { label: 'Audit Trail', verdict: 'keep', desc: 'Compliance, history, traceability' },
    { label: 'Cross-Team Visibility', verdict: 'keep', desc: 'Dependencies, roadmaps, reporting' },
    { label: 'Ticket Management', verdict: 'evolve', desc: 'AI creates/updates, humans approve' },
    { label: 'Kanban Board', verdict: 'evolve', desc: 'AI-managed flow, less manual drag-drop' },
    { label: 'Manual Status Updates', verdict: 'replace', desc: 'AI infers from commits, PRs, deploys' },
    { label: 'Estimation Ceremonies', verdict: 'replace', desc: 'AI estimates from codebase analysis' },
  ];

  const automations = [
    { traditional: 'Move to "In Progress"', automation: 'Auto when branch created or first commit' },
    { traditional: 'Move to "In Review"', automation: 'Auto when PR opened' },
    { traditional: 'Move to "QA"', automation: 'Auto when PR merged to staging' },
    { traditional: 'Move to "Done"', automation: 'Auto when deployed to production' },
    { traditional: 'Add blocker label', automation: 'Auto when no activity for 2+ days or PR blocked' },
    { traditional: 'Update time estimate', automation: 'Auto-adjust based on actual progress' },
    { traditional: 'Link related tickets', automation: 'Auto from code references and PR mentions' },
  ];

  const toolOptions = [
    {
      name: 'Jira + AI Layer',
      color: 'var(--accent-blue)',
      desc: 'Keep Jira, add AI automation',
      features: ['Jira Automation + Claude API', 'Custom GPT for ticket creation', 'Webhook-based status updates'],
      bestFor: 'Enterprise, compliance needs'
    },
    {
      name: 'Linear + AI',
      color: 'var(--accent-purple)',
      desc: 'Modern tool with native AI',
      features: ['Built-in AI features', 'Better git integration', 'Cycles instead of sprints'],
      bestFor: 'Modern teams, startups'
    },
    {
      name: 'GitHub/GitLab Native',
      color: 'var(--accent-orange)',
      desc: 'Issues + Projects in git platform',
      features: ['Tight code-issue linking', 'Copilot integration', 'Single platform'],
      bestFor: 'Developer-centric teams'
    },
    {
      name: 'AI-First Platform',
      color: 'var(--accent-pink)',
      desc: 'New breed of AI-native tools',
      features: ['Intent-based interfaces', 'Conversation-driven management', 'Auto-everything'],
      bestFor: 'Greenfield, innovation'
    },
  ];

  return (
    <div>
      <PageHeader
        title="📋 Beyond Jira & Kanban"
        description="Do we still need tickets? What does AI-native work management look like?"
      />

      {/* Context: Where this fits in the agentic flow */}
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
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>In the Agentic SDLC Model</div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              In the <a href="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</a>, the Orchestrator Agent becomes the work management system.
              It receives human intent at <strong>Gate 1</strong>, decomposes into tasks, assigns to specialist agents, tracks progress, and surfaces items for human review at <strong>Gate 2</strong> and <strong>Gate 3</strong>.
              Traditional ticket management is replaced by intent-based orchestration.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="decision-box">
          <h3 style={{ marginBottom: '15px' }}>🤔 The Big Question: Do We Still Need Jira?</h3>
          <div className="decision-grid">
            {jiraDecisions.map((item, i) => (
              <div key={i} className="decision-item">
                <Badge variant={item.verdict}>{item.verdict.toUpperCase()}</Badge>
                <h4 style={{ margin: '10px 0 5px' }}>{item.label}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="🔮">Intent-Based Work Management</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Instead of creating tickets manually, express intent and let AI handle the work breakdown.
        </p>

        <ComparisonGrid>
          <ComparisonCard variant="traditional" title="Traditional Ticket Flow">
            <ComparisonList items={[
              'PO writes user story',
              'Team refines in meeting',
              'Developer creates sub-tasks',
              'Developer updates status manually',
              'Developer writes PR description',
              'Developer closes ticket'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="Intent-Based Flow">
            <ComparisonList items={[
              'PO expresses intent in natural language',
              'AI generates epic → stories → tasks',
              'AI assigns based on skills & capacity',
              'AI updates status from git activity',
              'AI links PRs, updates, closes',
              'Human intervenes only for decisions'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>

        <PromptBox label="Example: Intent to Tickets">
{`PO says: "We need to add Apple Pay to checkout for UK customers"

Claude generates:
├── EPIC: Apple Pay Integration - UK
│   ├── STORY: Apple Pay button on checkout page
│   │   ├── TASK: Add Apple Pay SDK dependency
│   │   ├── TASK: Create ApplePayButton component
│   │   ├── TASK: Implement payment sheet handler
│   │   └── TASK: Add unit tests for component
│   ├── STORY: Backend payment processing
│   │   ├── TASK: Create Apple Pay payment adapter
│   │   ├── TASK: Add merchant validation endpoint
│   │   └── TASK: Integration tests with sandbox
│   ├── STORY: UK-specific compliance
│   │   ├── TASK: SCA/PSD2 compliance check
│   │   └── TASK: Add UK payment method display logic
│   └── STORY: Feature flag & rollout
│       ├── TASK: Create feature flag
│       └── TASK: Configure UK-only targeting

Estimated: 13 story points | Dependencies: Payment gateway config
Risk: Apple developer account approval timeline`}
        </PromptBox>
      </Card>

      <Card>
        <CardTitle icon="📊">AI-Managed Board States</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Instead of manual drag-and-drop, AI manages ticket states based on actual activity:
        </p>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Traditional Action</TableHeader>
              <TableHeader>AI Automation</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {automations.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.traditional}</TableCell>
                <TableCell color="var(--accent-green)">{row.automation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Card>
        <CardTitle icon="🆚">Tool Evolution Options</CardTitle>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {toolOptions.map((tool, i) => (
            <div key={i} style={{
              background: 'var(--bg-elevated)',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid var(--border)'
            }}>
              <h4 style={{ color: tool.color, marginBottom: '10px' }}>{tool.name}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>{tool.desc}</p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', listStyle: 'none' }}>
                {tool.features.map((f, j) => (
                  <li key={j} style={{ padding: '3px 0' }}>• {f}</li>
                ))}
              </ul>
              <p style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--accent-green)' }}>
                Best for: {tool.bestFor}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardTitle icon="🔗">Integration Architecture</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          How AI connects your work management to the rest of your toolchain:
        </p>

        <div style={{
          padding: '30px',
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ padding: '15px 25px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              💬 Slack/Teams
            </div>
            <span style={{ color: 'var(--text-muted)' }}>↔</span>
            <div style={{
              padding: '20px 30px',
              background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
              borderRadius: '12px',
              fontWeight: '600'
            }}>
              🤖 Claude AI Hub
            </div>
            <span style={{ color: 'var(--text-muted)' }}>↔</span>
            <div style={{ padding: '15px 25px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              📋 Jira/Linear
            </div>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <span style={{ color: 'var(--text-muted)' }}>↕</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
            <div style={{ padding: '15px 25px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              🔧 GitHub/GitLab
            </div>
            <div style={{ padding: '15px 25px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              📊 Analytics
            </div>
            <div style={{ padding: '15px 25px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              🚀 CI/CD
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WorkManagement;
