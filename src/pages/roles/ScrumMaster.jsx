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

const ScrumMaster = () => {
  const workflows = [
    {
      title: 'Retrospective Facilitation',
      icon: '🔄',
      description: 'AI-prepared, data-driven retros',
      prompt: `"Prepare for our retrospective:
1. Analyze sprint metrics (velocity, burndown, cycle time)
2. Identify top 3 blockers by time impact
3. Find patterns from last 5 retros
4. Check completion rate of past action items
5. Suggest discussion topics based on data
6. Propose improvement experiments"`
    },
    {
      title: 'Team Health Monitoring',
      icon: '💚',
      description: 'Proactive team wellbeing tracking',
      prompt: `"Analyze team health indicators:
1. PR review sentiment and tone
2. Commit patterns (late nights, weekends)
3. Slack activity patterns
4. Meeting load per person
5. On-call burden distribution
6. Flag any concerns and suggest interventions"`
    },
    {
      title: 'Impediment Resolution',
      icon: '🚧',
      description: 'Faster blocker removal',
      prompt: `"Help resolve this impediment: [describe blocker]
1. Identify root cause
2. Find similar past blockers and resolutions
3. Suggest escalation path if needed
4. Draft communication to stakeholders
5. Recommend preventive measures
6. Track until resolution"`
    },
    {
      title: 'Meeting Optimization',
      icon: '📅',
      description: 'Reduce meeting overhead',
      prompt: `"Analyze our team's meetings:
1. Calculate total meeting hours per person
2. Identify meetings that could be async
3. Find overlapping or redundant meetings
4. Suggest optimal meeting-free blocks
5. Recommend agenda improvements
6. Propose a meeting diet plan"`
    },
    {
      title: 'Agile Maturity Assessment',
      icon: '📊',
      description: 'Track team agile journey',
      prompt: `"Assess our team's agile maturity:
1. Evaluate practices against agile principles
2. Score each area (planning, execution, review, etc.)
3. Identify strengths and improvement areas
4. Compare to previous assessment
5. Recommend next level practices
6. Create improvement roadmap"`
    },
    {
      title: 'Coaching Moments',
      icon: '🎓',
      description: 'AI-identified teaching opportunities',
      prompt: `"Identify coaching opportunities:
1. Spot process adherence gaps
2. Find team members who might need support
3. Identify best practices not being followed
4. Suggest micro-learning opportunities
5. Recommend pair working combinations
6. Highlight wins to celebrate"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="🎯 Scrum Master / Agile Coach with Claude"
        description="From ceremony facilitator to transformation coach"
      />

      <Card>
        <CardTitle icon="🔄">Role Transformation</CardTitle>
        <ComparisonGrid>
          <ComparisonCard variant="traditional" title="Traditional SM Time Split">
            <ComparisonList items={[
              '40% - Facilitating ceremonies',
              '25% - Status reporting & tracking',
              '20% - Impediment removal',
              '10% - Team coaching',
              '5% - Process improvement'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="AI-Enabled Coach Time Split">
            <ComparisonList items={[
              '10% - AI-assisted ceremony facilitation',
              '5% - Reviewing AI status reports',
              '25% - Strategic impediment resolution',
              '35% - Team coaching & development',
              '25% - Transformation leadership'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Claude-Powered Coaching Workflows</CardTitle>

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
        <CardTitle icon="🎯">The New Scrum Master Focus</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-purple)' }}>
            <h4 style={{ marginBottom: '10px' }}>Transformation Leadership</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Drive AI adoption in team</li>
              <li>• Champion process evolution</li>
              <li>• Lead change management</li>
              <li>• Remove organizational blockers</li>
              <li>• Build cross-team alignment</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-blue)' }}>
            <h4 style={{ marginBottom: '10px' }}>Team Development</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Individual coaching sessions</li>
              <li>• Skills gap identification</li>
              <li>• Career development support</li>
              <li>• Psychological safety building</li>
              <li>• Conflict resolution</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-green)' }}>
            <h4 style={{ marginBottom: '10px' }}>Continuous Improvement</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Experiment design & tracking</li>
              <li>• Metrics-driven decisions</li>
              <li>• Best practice sharing</li>
              <li>• Process optimization</li>
              <li>• Innovation facilitation</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-orange)' }}>
            <h4 style={{ marginBottom: '10px' }}>Stakeholder Management</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Executive communication</li>
              <li>• Dependency negotiation</li>
              <li>• Resource advocacy</li>
              <li>• Expectation management</li>
              <li>• Success storytelling</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📉">What Gets Automated</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {[
            { task: 'Daily status collection', before: '15 min/day', after: 'Auto', savings: '-100%' },
            { task: 'Velocity calculation', before: '30 min/sprint', after: 'Auto', savings: '-100%' },
            { task: 'Burndown updates', before: '10 min/day', after: 'Auto', savings: '-100%' },
            { task: 'Retro data gathering', before: '2 hrs/sprint', after: '15 min review', savings: '-87%' },
            { task: 'Blocker tracking', before: '30 min/day', after: '5 min review', savings: '-83%' },
            { task: 'Meeting notes', before: '15 min/meeting', after: 'Auto', savings: '-100%' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--bg-elevated)',
              padding: '15px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: '500', marginBottom: '5px' }}>{item.task}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {item.before} → {item.after}
                </div>
              </div>
              <span style={{ color: 'var(--accent-green)', fontWeight: '600' }}>{item.savings}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardTitle icon="📈">Coaching Impact</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>3x</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Coaching Time</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-70%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Admin Overhead</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>+85%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Action Item Completion</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>+40%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Team Satisfaction</div>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="⚠️">What Coaches Still Own</CardTitle>
        <InfoBox variant="warning" title="Human Judgment Required">
          <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <li style={{ padding: '5px 0' }}>• <strong>Human connection</strong> - AI analyzes, humans build trust and rapport</li>
            <li style={{ padding: '5px 0' }}>• <strong>Emotional intelligence</strong> - AI spots patterns, humans understand feelings</li>
            <li style={{ padding: '5px 0' }}>• <strong>Difficult conversations</strong> - AI prepares, humans navigate with empathy</li>
            <li style={{ padding: '5px 0' }}>• <strong>Organizational politics</strong> - AI ignores, humans strategically navigate</li>
            <li style={{ padding: '5px 0' }}>• <strong>Culture building</strong> - AI supports, humans inspire and lead by example</li>
          </ul>
        </InfoBox>
      </Card>
    </div>
  );
};

export default ScrumMaster;
