import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  FlowDiagram,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  Badge
} from '../../components/ui';

const NewModel = () => {
  const flowSteps = [
    { icon: '💡', title: 'Intent', subtitle: 'Goal or problem', aiDriven: false },
    { icon: '🤖', title: 'AI Expansion', subtitle: 'Requirements, design', aiDriven: true },
    { icon: '👤', title: 'Human Review', subtitle: 'Strategic approval', aiDriven: false },
    { icon: '⚡', title: 'AI Build', subtitle: 'Code + tests', aiDriven: true },
    { icon: '🔍', title: 'AI Quality', subtitle: 'Review + validate', aiDriven: true },
    { icon: '✅', title: 'Human Gate', subtitle: 'Final approval', aiDriven: false },
    { icon: '🚀', title: 'AI Deploy', subtitle: 'Auto release', aiDriven: true }
  ];

  const divisionOfLabor = [
    { activity: 'Requirements', ai: 'Generate stories, acceptance criteria, edge cases', human: 'Define intent, validate business value, prioritize' },
    { activity: 'Design', ai: 'Generate architecture options, diagrams, API specs', human: 'Choose approach, handle trade-offs, ensure coherence' },
    { activity: 'Development', ai: 'Write code, handle boilerplate, implement patterns', human: 'Complex logic, architectural decisions, innovation' },
    { activity: 'Testing', ai: 'Generate tests, execute, analyze results', human: 'Define strategy, exploratory testing, edge cases' },
    { activity: 'Code Review', ai: 'First-pass review, style, security, best practices', human: 'Architecture decisions, business logic validation' },
    { activity: 'Documentation', ai: 'Generate and maintain all documentation', human: 'Validate accuracy, add context' },
    { activity: 'Deployment', ai: 'Risk assessment, canary analysis, rollback', human: 'Go/no-go for major releases, incident escalation' },
    { activity: 'Operations', ai: 'L1/L2 incident response, auto-remediation', human: 'L3 complex issues, architecture improvements' }
  ];

  return (
    <div>
      <PageHeader
        title="🔄 The New SDLC Model"
        description="From waterfall → agile → AI-native continuous flow"
      />

      <Card>
        <CardTitle icon="🌊">Continuous Value Flow</CardTitle>
        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
          Instead of time-boxed sprints, work flows continuously from intent to production with AI orchestration.
        </p>
        <FlowDiagram steps={flowSteps} />
      </Card>

      <Card>
        <CardTitle icon="⚖️">The New Division of Labor</CardTitle>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Activity</TableHeader>
              <TableHeader>AI Responsibility</TableHeader>
              <TableHeader>Human Responsibility</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {divisionOfLabor.map((row, i) => (
              <TableRow key={i}>
                <TableCell><strong>{row.activity}</strong></TableCell>
                <TableCell>{row.ai}</TableCell>
                <TableCell>{row.human}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Card>
        <CardTitle icon="🎯">The Three Modes of Work</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <Badge variant="keep">AI-Autonomous</Badge>
            <h4 style={{ margin: '10px 0' }}>Routine Work</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Bug fixes, dependency updates, documentation, L1 incidents, test generation, code formatting
            </p>
            <p style={{ marginTop: '10px', color: 'var(--accent-green)', fontSize: '0.85rem' }}>
              AI executes fully, human notified
            </p>
          </div>

          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <Badge variant="evolve">AI-Assisted</Badge>
            <h4 style={{ margin: '10px 0' }}>Standard Work</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Feature development, API design, integration work, performance optimization
            </p>
            <p style={{ marginTop: '10px', color: 'var(--accent-orange)', fontSize: '0.85rem' }}>
              AI drafts, human reviews & approves
            </p>
          </div>

          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <Badge variant="replace">Human-Led</Badge>
            <h4 style={{ margin: '10px 0' }}>Strategic Work</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Architecture decisions, product strategy, team design, complex incidents, innovation
            </p>
            <p style={{ marginTop: '10px', color: 'var(--accent-red)', fontSize: '0.85rem' }}>
              Human leads, AI supports with research & options
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="🔄">From Push to Pull</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <h4 style={{ color: 'var(--accent-red)', marginBottom: '15px' }}>❌ Traditional Push Model</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                • PO pushes stories into sprint
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                • Manager assigns work to developers
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                • QE waits for code to test
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                • Release scheduled weeks in advance
              </li>
              <li style={{ padding: '8px 0' }}>
                • Work batched to reduce coordination overhead
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-green)', marginBottom: '15px' }}>✅ AI-Native Pull Model</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                • Developer pulls next highest-value item
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                • AI suggests optimal work based on skills
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                • Tests generated alongside code
              </li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                • Release on every merge (if safe)
              </li>
              <li style={{ padding: '8px 0' }}>
                • Single-piece flow maximizes value delivery
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📊">Key Metrics Shift</CardTitle>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Traditional Metric</TableHeader>
              <TableHeader>Problem</TableHeader>
              <TableHeader>New Metric</TableHeader>
              <TableHeader>Why Better</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Velocity (points)</strong></TableCell>
              <TableCell color="var(--accent-red)">Gameable, not tied to value</TableCell>
              <TableCell><strong>Cycle Time</strong></TableCell>
              <TableCell color="var(--accent-green)">Measures actual speed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Sprint Commitment</strong></TableCell>
              <TableCell color="var(--accent-red)">Creates artificial deadlines</TableCell>
              <TableCell><strong>Throughput</strong></TableCell>
              <TableCell color="var(--accent-green)">Measures sustainable flow</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Bugs Found</strong></TableCell>
              <TableCell color="var(--accent-red)">Rewards finding problems late</TableCell>
              <TableCell><strong>Defect Escape Rate</strong></TableCell>
              <TableCell color="var(--accent-green)">Rewards prevention</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Lines of Code</strong></TableCell>
              <TableCell color="var(--accent-red)">Rewards verbosity</TableCell>
              <TableCell><strong>Value Delivered</strong></TableCell>
              <TableCell color="var(--accent-green)">Ties to business outcomes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Utilization %</strong></TableCell>
              <TableCell color="var(--accent-red)">Rewards busyness over impact</TableCell>
              <TableCell><strong>Flow Efficiency</strong></TableCell>
              <TableCell color="var(--accent-green)">Rewards reducing waste</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default NewModel;
