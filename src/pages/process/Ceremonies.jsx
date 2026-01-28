import React from 'react';
import { Link } from 'react-router-dom';
import {
  PageHeader,
  Card,
  CardTitle,
  ComparisonGrid,
  ComparisonCard,
  ComparisonList,
  Badge,
  PromptBox,
  InfoBox,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell
} from '../../components/ui';

const CeremonyCard = ({ title, badge, badgeVariant, traditional, aiNative, prompt, insight }) => (
  <div className="ceremony-card" style={{
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    marginBottom: '20px',
    overflow: 'hidden'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      background: 'var(--bg-elevated)'
    }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
        {title}
      </h3>
      <Badge variant={badgeVariant}>{badge}</Badge>
    </div>
    <div style={{ padding: '20px' }}>
      <ComparisonGrid>
        <ComparisonCard variant="traditional" title={traditional.title}>
          <ComparisonList items={traditional.items} />
        </ComparisonCard>
        <ComparisonCard variant="ai-native" title={aiNative.title}>
          <ComparisonList items={aiNative.items} />
        </ComparisonCard>
      </ComparisonGrid>

      {prompt && (
        <PromptBox label={prompt.label}>
          {prompt.content}
        </PromptBox>
      )}

      {insight && (
        <InfoBox variant="insight" title="Key Insight">
          {insight}
        </InfoBox>
      )}
    </div>
  </div>
);

const Ceremonies = () => {
  const ceremonies = [
    {
      title: '📋 PI Planning (Program Increment)',
      badge: 'Transformed',
      badgeVariant: 'transformed',
      traditional: {
        title: 'Traditional (2-day event)',
        items: [
          'All teams in one room for 2 days',
          'Manual dependency mapping on boards',
          'Capacity planning in spreadsheets',
          'Feature estimation by gut feel',
          'Risk identification through discussion'
        ]
      },
      aiNative: {
        title: 'AI-Native (4-hour async + 2-hour sync)',
        items: [
          'AI pre-generates feature breakdown from OKRs',
          'Auto-detected dependencies from codebase',
          'ML-based capacity & estimation',
          'AI-identified risks from historical data',
          'Sync meeting for alignment & decisions only'
        ]
      },
      prompt: {
        label: 'AI Prompt for PI Prep',
        content: `"Based on our Q2 OKRs [attached], analyze our codebase and:
1. Break down each objective into epics and features
2. Identify cross-team dependencies from code imports
3. Estimate effort based on similar past work
4. Flag technical risks from code complexity metrics
5. Generate a draft PI board with swim lanes per team"`
      }
    },
    {
      title: '🏃 Sprint Planning',
      badge: 'Evolves to Continuous',
      badgeVariant: 'eliminated',
      traditional: {
        title: 'Traditional (4 hours bi-weekly)',
        items: [
          'PO presents backlog items',
          'Team estimates with planning poker',
          'Capacity calculation',
          'Sprint commitment',
          'Task breakdown'
        ]
      },
      aiNative: {
        title: 'AI-Native (Continuous + 30min weekly)',
        items: [
          'AI continuously refines & estimates backlog',
          'Auto-assignment based on skills & load',
          'Work pulled when ready, not time-boxed',
          'Weekly sync for priority alignment only',
          'AI generates task breakdown on demand'
        ]
      },
      insight: 'Sprint planning exists because humans need synchronization points. With AI maintaining real-time state of work, dependencies, and capacity, the need for batch planning diminishes. Work can flow continuously with weekly alignment checkpoints.'
    },
    {
      title: '🌅 Daily Standup',
      badge: 'Optional / Async',
      badgeVariant: 'eliminated',
      traditional: {
        title: 'Traditional (15 min daily)',
        items: [
          'What did you do yesterday?',
          'What will you do today?',
          'Any blockers?',
          'Often turns into problem-solving',
          '15 min × 10 people = 2.5 hrs/day team time'
        ]
      },
      aiNative: {
        title: 'AI-Native (Auto-generated async)',
        items: [
          'AI generates daily digest from commits, PRs, tickets',
          'Auto-detects blockers from stale work items',
          'Flags risks proactively',
          'Team reads async, syncs only when needed',
          'Optional 10-min sync for social connection'
        ]
      },
      prompt: {
        label: 'AI Daily Digest Generation',
        content: `"Generate today's team status from:
- Git commits from last 24 hours
- PR activity and reviews
- Jira/Linear ticket movements
- Slack dev channel highlights

Format as: Progress | Risks | Blockers | Needs Discussion
Flag anything stale >2 days or blocked >1 day"`
      }
    },
    {
      title: '🔍 Sprint Review / Demo',
      badge: 'Optimized',
      badgeVariant: 'optimized',
      traditional: {
        title: 'Traditional (1 hour bi-weekly)',
        items: [
          'Team prepares demo',
          'Live walkthrough of features',
          'Stakeholder feedback',
          'Often scramble to prepare'
        ]
      },
      aiNative: {
        title: 'AI-Native (Continuous + monthly showcase)',
        items: [
          'AI auto-generates demo videos from PRs',
          'Stakeholders can view async anytime',
          'Monthly showcase for big features only',
          'AI summarizes feedback themes'
        ]
      }
    },
    {
      title: '🔄 Retrospective',
      badge: 'Transformed',
      badgeVariant: 'transformed',
      traditional: {
        title: 'Traditional (1 hour bi-weekly)',
        items: [
          'What went well?',
          'What didn\'t go well?',
          'Action items (often forgotten)',
          'Same issues resurface'
        ]
      },
      aiNative: {
        title: 'AI-Native (AI-prepared + 30min focused)',
        items: [
          'AI analyzes velocity, blockers, incidents',
          'AI identifies patterns across retros',
          'AI tracks action item completion',
          'Meeting focuses on solutions, not discovery',
          'AI suggests improvements from industry patterns'
        ]
      },
      prompt: {
        label: 'AI Retro Analysis',
        content: `"Analyze the last 2 weeks:
1. Compare planned vs delivered (from tickets)
2. Identify top 3 blockers by time impact
3. Find recurring themes from last 5 retros
4. Track completion rate of past action items
5. Suggest 2-3 improvements based on patterns
6. Benchmark our cycle time vs industry"`
      }
    },
    {
      title: '📝 Backlog Refinement / Grooming',
      badge: 'AI-Continuous',
      badgeVariant: 'transformed',
      traditional: {
        title: 'Traditional (1 hour weekly)',
        items: [
          'PO presents upcoming stories',
          'Team asks clarifying questions',
          'Acceptance criteria refinement',
          'Estimation',
          'Dependency identification'
        ]
      },
      aiNative: {
        title: 'AI-Native (Continuous + exception handling)',
        items: [
          'AI auto-refines stories with full AC',
          'AI estimates from codebase analysis',
          'AI identifies dependencies automatically',
          'Humans review AI output async',
          'Sync only for complex/unclear items'
        ]
      }
    }
  ];

  const timeSavings = [
    { ceremony: 'PI Planning', traditional: '16 hrs/quarter', aiNative: '6 hrs/quarter', savings: '-63%' },
    { ceremony: 'Sprint Planning', traditional: '4 hrs/2 weeks', aiNative: '0.5 hrs/week', savings: '-75%' },
    { ceremony: 'Daily Standup', traditional: '1.25 hrs/week', aiNative: '0 (async)', savings: '-100%' },
    { ceremony: 'Sprint Review', traditional: '1 hr/2 weeks', aiNative: '1 hr/month', savings: '-75%' },
    { ceremony: 'Retrospective', traditional: '1 hr/2 weeks', aiNative: '0.5 hr/2 weeks', savings: '-50%' },
    { ceremony: 'Refinement', traditional: '1 hr/week', aiNative: '0.5 hr/week', savings: '-50%' },
  ];

  const agentCeremonyRoles = [
    { ceremony: 'PI Planning', agent: 'Product Agent + Orchestrator', role: 'Pre-generates feature breakdown, dependencies, estimates from OKRs' },
    { ceremony: 'Sprint Planning', agent: 'Orchestrator Agent', role: 'Maintains real-time backlog state, auto-assigns based on skills' },
    { ceremony: 'Daily Standup', agent: 'Orchestrator Agent', role: 'Generates async digest from commits, PRs, ticket movements' },
    { ceremony: 'Sprint Review', agent: 'Doc Agent', role: 'Auto-generates demo videos, release notes from PRs' },
    { ceremony: 'Retrospective', agent: 'Analytics Agent', role: 'Analyzes velocity, blockers, patterns across sprints' },
    { ceremony: 'Refinement', agent: 'Product Agent', role: 'Auto-refines stories with AC, estimates from codebase' },
  ];

  return (
    <div>
      <PageHeader
        title="📅 Ceremonies Reimagined"
        description="Which meetings survive? Which transform? Which disappear?"
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
              The <Link to="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</Link> with only <strong>3 human gates</strong> eliminates most synchronous ceremonies.
              The Orchestrator Agent maintains real-time state, making status meetings obsolete.
              Humans sync only for strategic decisions at Gate 1 (Intent), Gate 2 (Spec Review), and Gate 3 (Final Approval).
            </p>
          </div>
        </div>
      </Card>

      {ceremonies.map((ceremony, index) => (
        <CeremonyCard key={index} {...ceremony} />
      ))}

      <Card>
        <CardTitle icon="⏱️">Time Saved Summary</CardTitle>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Ceremony</TableHeader>
              <TableHeader>Traditional Time</TableHeader>
              <TableHeader>AI-Native Time</TableHeader>
              <TableHeader>Savings</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSavings.map((row, i) => (
              <TableRow key={i} highlight={row.ceremony === 'Total per Dev per Month'}>
                <TableCell>{row.ceremony}</TableCell>
                <TableCell>{row.traditional}</TableCell>
                <TableCell>{row.aiNative}</TableCell>
                <TableCell color="var(--accent-green)">{row.savings}</TableCell>
              </TableRow>
            ))}
            <TableRow highlight>
              <TableCell><strong>Total per Dev per Month</strong></TableCell>
              <TableCell><strong>~20 hours</strong></TableCell>
              <TableCell><strong>~6 hours</strong></TableCell>
              <TableCell color="var(--accent-green)"><strong>-70%</strong></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* AI Agents Powering Ceremony Transformation */}
      <Card>
        <CardTitle icon="🤖">AI Agents Powering the Transformation</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Each ceremony transformation is enabled by specialized AI agents that handle the heavy lifting previously done in meetings.
        </p>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Ceremony</TableHeader>
              <TableHeader>AI Agent</TableHeader>
              <TableHeader>What the Agent Does</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {agentCeremonyRoles.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.ceremony}</TableCell>
                <TableCell><Badge variant="transformed">{row.agent}</Badge></TableCell>
                <TableCell style={{ fontSize: '0.85rem' }}>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <InfoBox variant="insight" title="From Synchronous to Async-First">
          The Orchestrator Agent continuously monitors all work streams, making synchronous meetings obsolete for status updates.
          Humans only sync for decisions that require judgment, relationships, or strategic alignment - not for information sharing.
        </InfoBox>
      </Card>

      {/* What Remains Human */}
      <Card>
        <CardTitle icon="👥">What Remains Deeply Human</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          While AI handles information gathering and preparation, certain aspects of ceremonies remain human-centered:
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          {[
            { icon: '🎯', title: 'Strategic Decisions', desc: 'Prioritization trade-offs, roadmap direction' },
            { icon: '🤝', title: 'Team Bonding', desc: 'Social connection, trust building, culture' },
            { icon: '💡', title: 'Creative Sessions', desc: 'Brainstorming, innovation, exploration' },
            { icon: '⚖️', title: 'Conflict Resolution', desc: 'Disagreements, competing priorities' },
            { icon: '🎓', title: 'Mentorship', desc: 'Coaching, career growth, feedback' },
            { icon: '🚨', title: 'Crisis Response', desc: 'Major incidents, customer escalations' }
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--bg-elevated)',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontWeight: '600', marginBottom: '4px', fontSize: '0.9rem' }}>{item.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Ceremonies;
