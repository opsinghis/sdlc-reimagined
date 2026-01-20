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

const ProductOwner = () => {
  const workflows = [
    {
      title: 'User Story Generation',
      icon: '📝',
      description: 'From intent to complete stories',
      detail: 'Express a feature idea, get complete user stories with acceptance criteria',
      prompt: `"I need to add a wishlist feature. Generate user stories covering: adding items, viewing wishlist, sharing wishlist, moving to cart. Include acceptance criteria, edge cases, and technical considerations for our React + Node stack."`
    },
    {
      title: 'Backlog Prioritization',
      icon: '📊',
      description: 'Data-driven priority scoring',
      prompt: `"Analyze our backlog against: 1) Q2 OKRs [attached], 2) Customer feedback themes from Intercom [attached], 3) Technical debt impact. Score each item on value/effort and recommend top 10 priorities with rationale."`
    },
    {
      title: 'Stakeholder Communication',
      icon: '📣',
      description: 'Auto-generated updates and reports',
      prompt: `"Generate a weekly stakeholder update covering: 1) Features shipped this week, 2) Key metrics movement, 3) Upcoming releases, 4) Risks and mitigations. Format for executive audience."`
    },
    {
      title: 'Competitor Analysis',
      icon: '🔍',
      description: 'Market intelligence on demand',
      prompt: `"Analyze [competitor product] recent updates. Compare their feature set to ours. Identify gaps we should address and features where we lead. Suggest 3 product initiatives based on this analysis."`
    },
    {
      title: 'Sprint/Cycle Preparation',
      icon: '🎯',
      description: 'AI-prepared planning materials',
      prompt: `"Prepare for next sprint: 1) Suggest stories from backlog based on team velocity and dependencies, 2) Pre-refine top candidates with ACs, 3) Identify risks, 4) Generate discussion points for planning."`
    },
    {
      title: 'Release Notes Generation',
      icon: '📋',
      description: 'Auto-generated from merged PRs',
      prompt: `"Generate release notes from the PRs merged this week. Format for: 1) Customer-facing changelog, 2) Internal technical summary, 3) Support team briefing document."`
    }
  ];

  return (
    <div>
      <PageHeader
        title="👤 Product Owner with Claude"
        description="From ticket writer to strategic product leader"
      />

      <Card>
        <CardTitle icon="🔄">Role Transformation</CardTitle>
        <ComparisonGrid>
          <ComparisonCard variant="traditional" title="Traditional PO Time Split">
            <ComparisonList items={[
              '40% - Writing user stories',
              '25% - Refinement & planning meetings',
              '20% - Stakeholder communication',
              '10% - Strategy & roadmap',
              '5% - Data analysis'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="AI-Enabled PO Time Split">
            <ComparisonList items={[
              '10% - Reviewing AI-generated stories',
              '10% - Focused decision meetings',
              '25% - Stakeholder alignment',
              '35% - Strategy & roadmap',
              '20% - Data-driven decisions'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Claude-Powered PO Workflows</CardTitle>

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
            {workflow.detail && (
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '15px' }}>{workflow.detail}</p>
            )}
            <PromptBox label="Claude Prompt">
              {workflow.prompt}
            </PromptBox>
          </div>
        ))}
      </Card>

      <Card>
        <CardTitle icon="📈">Key Metrics Shift</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-75%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Time Writing Stories</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>+100%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>AC Coverage</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>3x</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Strategy Time</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-50%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Meeting Time</div>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="⚠️">What the PO Still Owns</CardTitle>
        <InfoBox variant="warning" title="Human Judgment Required">
          <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <li style={{ padding: '5px 0' }}>• <strong>Business value decisions</strong> - AI can score, but humans decide what matters</li>
            <li style={{ padding: '5px 0' }}>• <strong>Stakeholder relationships</strong> - AI prepares, humans connect</li>
            <li style={{ padding: '5px 0' }}>• <strong>Strategic trade-offs</strong> - AI presents options, humans choose direction</li>
            <li style={{ padding: '5px 0' }}>• <strong>Product vision</strong> - AI supports execution, humans set the north star</li>
            <li style={{ padding: '5px 0' }}>• <strong>Customer empathy</strong> - AI analyzes feedback, humans truly understand</li>
          </ul>
        </InfoBox>
      </Card>
    </div>
  );
};

export default ProductOwner;
