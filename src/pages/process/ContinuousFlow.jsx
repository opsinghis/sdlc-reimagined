import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  ComparisonGrid,
  ComparisonCard,
  ComparisonList,
  InfoBox,
  Timeline,
  TimelineItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  PromptBox
} from '../../components/ui';

const ContinuousFlow = () => {
  return (
    <div>
      <PageHeader
        title="🌊 From Sprints to Continuous Flow"
        description="Why time-boxing made sense before AI, and what replaces it"
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
              The <a href="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</a> enables true continuous delivery.
              Work flows from <strong>Human Intent (Gate 1)</strong> → AI execution → <strong>Human Review (Gate 2)</strong> → AI build/test → <strong>Human Approval (Gate 3)</strong> → AI deploy.
              No sprints needed - the Orchestrator Agent manages flow continuously.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="🤔">Why Did We Need Sprints?</CardTitle>
        <ComparisonGrid>
          <ComparisonCard variant="traditional" title="Problems Sprints Solved">
            <ComparisonList items={[
              'Predictability: Regular delivery cadence',
              'Focus: Protect team from scope creep',
              'Coordination: Sync point for dependencies',
              'Planning: Batch work for efficiency',
              'Feedback: Regular stakeholder touchpoint'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="How AI Solves These Differently">
            <ComparisonList items={[
              'Predictability: AI forecasts completion dates per item',
              'Focus: AI manages WIP limits automatically',
              'Coordination: AI tracks deps in real-time',
              'Planning: AI handles planning continuously',
              'Feedback: Auto-generated demos, async review'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>
      </Card>

      <Card>
        <CardTitle icon="🔄">The Continuous Flow Model</CardTitle>

        <InfoBox variant="insight" title="Core Principle">
          Instead of "what can we commit to in 2 weeks?", the question becomes "what's the next most valuable thing to work on right now?" AI maintains system state, humans make strategic decisions.
        </InfoBox>

        <h3 style={{ marginTop: '20px', marginBottom: '15px' }}>Key Elements:</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '10px' }}>🎯 Priority Queue</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              AI-maintained, continuously re-ranked based on value, dependencies, and team capacity
            </p>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '10px' }}>🚦 WIP Limits</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              AI enforces work-in-progress limits per person and team to maintain flow
            </p>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '10px' }}>📊 Flow Metrics</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Cycle time, throughput, and lead time replace velocity as key metrics
            </p>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '10px' }}>🔔 Smart Alerts</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              AI alerts when items are blocked, stale, or need attention
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📅">What Replaces the Sprint Cadence?</CardTitle>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Cadence</TableHeader>
              <TableHeader>Purpose</TableHeader>
              <TableHeader>Who</TableHeader>
              <TableHeader>Duration</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Daily</strong></TableCell>
              <TableCell>AI-generated digest reviewed async</TableCell>
              <TableCell>Individual</TableCell>
              <TableCell>5 min read</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Weekly</strong></TableCell>
              <TableCell>Priority alignment, blocker resolution</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>30 min sync</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Bi-weekly</strong></TableCell>
              <TableCell>Retrospective & improvement</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>30 min sync</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Monthly</strong></TableCell>
              <TableCell>Stakeholder showcase, roadmap review</TableCell>
              <TableCell>Team + Stakeholders</TableCell>
              <TableCell>1 hr sync</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Quarterly</strong></TableCell>
              <TableCell>OKR setting, strategic planning</TableCell>
              <TableCell>Leadership + Teams</TableCell>
              <TableCell>Half-day</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <Card>
        <CardTitle icon="🚀">Release Frequency Evolution</CardTitle>

        <Timeline>
          <TimelineItem title="Level 1: Sprint-Based (Current)">
            <p>Release at end of sprint. 2-week batches. Manual release process.</p>
          </TimelineItem>
          <TimelineItem title="Level 2: Weekly Releases">
            <p>Fixed weekly release train. Features queue up. AI handles release notes.</p>
          </TimelineItem>
          <TimelineItem title="Level 3: Daily Releases">
            <p>Automated daily deploys. Feature flags control exposure. AI monitors canary.</p>
          </TimelineItem>
          <TimelineItem title="Level 4: Continuous Deployment">
            <p>Every merged PR goes to production. AI validates, deploys, monitors, rolls back.</p>
          </TimelineItem>
          <TimelineItem title="Level 5: AI-Orchestrated">
            <p>AI decides optimal release timing based on risk, traffic, team availability.</p>
          </TimelineItem>
        </Timeline>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Enabling Continuous Flow with Claude</CardTitle>

        <PromptBox label="Daily Flow Management Prompt">
{`"As our Flow Manager, analyze current state and provide:

1. QUEUE STATUS
   - Items ready to pull (refined, no blockers)
   - Items approaching WIP limit by person
   - Stale items (>3 days no movement)

2. DEPENDENCY ALERTS
   - Cross-team blockers
   - External dependency risks
   - Upcoming conflicts

3. RECOMMENDED ACTIONS
   - What should be pulled next by whom
   - What needs unblocking
   - What should be descoped/deprioritized

4. FLOW METRICS
   - Cycle time trend (7-day rolling)
   - Throughput this week vs last
   - Blocker time ratio"`}
        </PromptBox>
      </Card>

      <Card>
        <CardTitle icon="📈">Flow Metrics Dashboard</CardTitle>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={{
            padding: '25px',
            background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(74, 222, 128, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(74, 222, 128, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-green)' }}>2.3 days</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Avg Cycle Time</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-green)', marginTop: '5px' }}>↓ 40% from last month</div>
          </div>
          <div style={{
            padding: '25px',
            background: 'linear-gradient(135deg, rgba(74, 158, 255, 0.1), rgba(74, 158, 255, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(74, 158, 255, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-blue)' }}>18</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Items/Week Throughput</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-green)', marginTop: '5px' }}>↑ 25% from last month</div>
          </div>
          <div style={{
            padding: '25px',
            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(167, 139, 250, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-purple)' }}>78%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Flow Efficiency</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-green)', marginTop: '5px' }}>↑ 15% from last month</div>
          </div>
          <div style={{
            padding: '25px',
            background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(251, 146, 60, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(251, 146, 60, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent-orange)' }}>3</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Current Blockers</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-red)', marginTop: '5px' }}>⚠️ 1 critical</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContinuousFlow;
