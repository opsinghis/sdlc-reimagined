import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  ComparisonGrid,
  ComparisonCard,
  ComparisonList,
  MetricCard,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  InfoBox
} from '../../components/ui';
import { traditionalSDLCPhases, phaseColors } from '../../data/sdlcPhases';

const SDLCPhaseCard = ({ phase, number, color }) => (
  <div style={{
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    overflow: 'hidden',
    minWidth: '320px',
    maxWidth: '350px',
    flex: '1 0 320px'
  }}>
    {/* Phase Header */}
    <div style={{
      background: `linear-gradient(135deg, ${color}22, ${color}11)`,
      borderBottom: `2px solid ${color}`,
      padding: '15px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        fontSize: '1rem'
      }}>{number}</div>
      <div>
        <div style={{ fontSize: '1rem', fontWeight: '600' }}>{phase.name}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{phase.duration}</div>
      </div>
    </div>

    {/* Phase Content */}
    <div style={{ padding: '15px 20px' }}>
      {/* Activities */}
      <div style={{ marginBottom: '15px' }}>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: color, marginBottom: '8px', fontWeight: '600' }}>
          ⚙️ Activities
        </div>
        <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          {phase.activities.slice(0, 5).map((a, i) => (
            <li key={i} style={{ padding: '3px 0', borderBottom: '1px solid var(--border)' }}>{a}</li>
          ))}
        </ul>
      </div>

      {/* Roles */}
      <div style={{ marginBottom: '15px' }}>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: color, marginBottom: '8px', fontWeight: '600' }}>
          👥 Roles
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {phase.roles.slice(0, 4).map((r, i) => (
            <span key={i} style={{
              padding: '3px 8px',
              background: 'var(--bg-elevated)',
              borderRadius: '4px',
              fontSize: '0.7rem',
              color: 'var(--text-secondary)'
            }}>{r}</span>
          ))}
        </div>
      </div>

      {/* Pain Points */}
      <div>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-red)', marginBottom: '8px', fontWeight: '600' }}>
          ⚠️ Pain Points
        </div>
        <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: 'var(--accent-red)', opacity: 0.8 }}>
          {phase.painPoints.slice(0, 3).map((p, i) => (
            <li key={i} style={{ padding: '2px 0' }}>• {p}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Overview = () => {
  const metrics = [
    { value: '3x', label: 'Feature Velocity' },
    { value: '70%', label: 'Less Ceremony Time' },
    { value: '50%', label: 'Faster Onboarding' },
    { value: '80%', label: 'L1 Auto-Resolution' },
    { value: '90%', label: 'Doc Coverage' },
  ];

  return (
    <div>
      <PageHeader
        title="🚀 SDLC Reimagined for the AI Era"
        description="A fundamental rethinking of how software gets built when AI is a first-class participant"
      />

      {/* Traditional SDLC Section */}
      <Card>
        <CardTitle icon="📋">Traditional SDLC - The "As-Is" State</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Before we can transform, we must understand the current state. Below is a comprehensive view of each SDLC phase.
        </p>

        {/* SDLC Flow Diagram */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          overflowX: 'auto',
          padding: '20px 10px',
          background: 'var(--bg-elevated)',
          borderRadius: '10px',
          marginBottom: '25px'
        }}>
          {traditionalSDLCPhases.map((phase, i) => (
            <React.Fragment key={i}>
              <div style={{
                minWidth: '100px',
                padding: '12px 15px',
                background: `${phaseColors[i]}22`,
                border: `1px solid ${phaseColors[i]}`,
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.7rem', color: phaseColors[i], fontWeight: '600' }}>{i + 1}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: '500' }}>{phase.name.split(' ')[0]}</div>
              </div>
              {i < traditionalSDLCPhases.length - 1 && (
                <div style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Summary Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '15px',
          marginBottom: '25px'
        }}>
          {[
            { value: '9', label: 'Phases', color: 'var(--accent-blue)' },
            { value: '25+', label: 'Distinct Roles', color: 'var(--accent-purple)' },
            { value: '50+', label: 'Tools & Platforms', color: 'var(--accent-orange)' },
            { value: '40+', label: 'Ceremonies/Meetings', color: 'var(--accent-red)' },
            { value: '70+', label: 'Artifacts Produced', color: 'var(--accent-green)' },
          ].map((stat, i) => (
            <div key={i} style={{ background: 'var(--bg-elevated)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '600', color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Phase Details - Scrollable */}
      <Card>
        <CardTitle icon="🔍">Detailed Phase Breakdown</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Scroll horizontally to explore each phase in detail.
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          paddingBottom: '20px',
          marginBottom: '10px'
        }}>
          {traditionalSDLCPhases.map((phase, i) => (
            <SDLCPhaseCard key={i} phase={phase} number={i + 1} color={phaseColors[i]} />
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          padding: '10px',
          color: 'var(--text-muted)',
          fontSize: '0.8rem'
        }}>
          ← Scroll horizontally to see all 9 phases →
        </div>
      </Card>

      {/* Critical Handoffs */}
      <Card>
        <CardTitle icon="🔄">Critical Handoffs & Dependencies</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          These handoff points are where delays, miscommunication, and quality issues most commonly occur.
        </p>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Handoff</TableHeader>
              <TableHeader>From</TableHeader>
              <TableHeader>To</TableHeader>
              <TableHeader>Common Issues</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { handoff: 'Requirements → Design', from: 'BA / PO', to: 'Architect', issue: 'Incomplete NFRs, missing edge cases' },
              { handoff: 'Design → Development', from: 'Designer', to: 'Developer', issue: 'Design-dev gap, missing interactions' },
              { handoff: 'Development → Testing', from: 'Developer', to: 'QE', issue: 'Insufficient unit tests, unclear AC' },
              { handoff: 'Testing → Release', from: 'QE', to: 'Release Mgr', issue: 'Last-minute bugs, scope negotiations' },
              { handoff: 'Release → Operations', from: 'Release Mgr', to: 'SRE', issue: 'Missing runbooks, config drift' },
            ].map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.handoff}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.to}</TableCell>
                <TableCell color="var(--accent-red)">{row.issue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* The Core Question */}
      <Card>
        <CardTitle icon="🤔">The Core Question</CardTitle>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
          We're not just adding AI tools to existing processes. We're asking:{' '}
          <strong style={{ color: 'var(--accent-purple)' }}>
            If we were designing the SDLC from scratch today, with AI as a team member, what would it look like?
          </strong>
        </p>

        <div className="decision-box">
          <h3>❓ Questions We're Answering</h3>
          <div className="decision-grid">
            <div className="decision-item">
              <h4>Do we need 2-week sprints?</h4>
              <p>Or can we move to continuous flow with AI handling the coordination?</p>
            </div>
            <div className="decision-item">
              <h4>Do we need Jira tickets?</h4>
              <p>Or can intent-based work management replace ticket pushing?</p>
            </div>
            <div className="decision-item">
              <h4>Do we need daily standups?</h4>
              <p>Or can AI-generated status make synchronous meetings optional?</p>
            </div>
            <div className="decision-item">
              <h4>Do we need code reviews?</h4>
              <p>Or can AI review with human approval gates for strategic decisions?</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Transformation at a Glance */}
      <Card>
        <CardTitle icon="📊">The Transformation at a Glance</CardTitle>
        <ComparisonGrid>
          <ComparisonCard variant="traditional" title="Traditional SDLC">
            <ComparisonList items={[
              'Sprint-based cadence (2 weeks)',
              'Ceremony-heavy (planning, standup, retro, review)',
              'Ticket-driven work management',
              'Human bottlenecks (PO, senior devs, QE)',
              'Sequential handoffs',
              'Manual documentation',
              'Reactive quality gates',
              '17+ weeks idea to production'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="AI-Native SDLC">
            <ComparisonList items={[
              'Continuous flow with AI orchestration',
              'Async-first, ceremony-light',
              'Intent-based work (goals → AI execution)',
              'AI handles routine, humans do strategic',
              'Parallel AI-assisted workflows',
              'Living, auto-generated documentation',
              'Proactive quality built-in',
              '4-6 weeks idea to production'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>
      </Card>

      <Card>
        <CardTitle icon="📈">Expected Outcomes</CardTitle>
        <MetricCard metrics={metrics} />
      </Card>
    </div>
  );
};

export default Overview;
