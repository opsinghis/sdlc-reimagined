import React from 'react';
import { Link } from 'react-router-dom';
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
  Badge,
  InfoBox
} from '../../components/ui';

const NewModel = () => {
  // Simplified flow showing the core pattern: Human → AI → Human → AI → Human → AI
  const flowSteps = [
    { icon: '👤', title: 'Define Intent', subtitle: 'Human sets goal', aiDriven: false },
    { icon: '🧠', title: 'AI Orchestrates', subtitle: 'Plans & routes', aiDriven: true },
    { icon: '📋', title: 'AI Generates', subtitle: 'Specs & design', aiDriven: true },
    { icon: '👤', title: 'Human Reviews', subtitle: 'Validates specs', aiDriven: false },
    { icon: '💻', title: 'AI Builds', subtitle: 'Code + tests', aiDriven: true },
    { icon: '👤', title: 'Human Approves', subtitle: 'Final gate', aiDriven: false },
    { icon: '🚀', title: 'AI Deploys', subtitle: 'Ships to prod', aiDriven: true }
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
          Instead of time-boxed sprints, work flows continuously from intent to production.
          The pattern is simple: <strong>Human decides → AI executes → Human validates → repeat</strong>.
        </p>
        <FlowDiagram steps={flowSteps} />

        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: 'var(--bg-elevated)',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            See the detailed <Link to="/sdlc-comparison" style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>step-by-step flow with all 10 stages</Link> in the Traditional vs AI-Native comparison.
          </p>
        </div>
      </Card>

      {/* Core Principle */}
      <Card>
        <CardTitle icon="💡">The Core Principle</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-orange)15, var(--accent-orange)05)',
            border: '2px solid var(--accent-orange)',
            borderRadius: '12px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>👤</div>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '8px', color: 'var(--accent-orange)' }}>Humans DECIDE</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              What to build, whether specs are right, when to ship
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-blue)15, var(--accent-blue)05)',
            border: '2px solid var(--accent-blue)',
            borderRadius: '12px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🤖</div>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '8px', color: 'var(--accent-blue)' }}>AI EXECUTES</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              Requirements, design, code, tests, deployment
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-purple)15, var(--accent-purple)05)',
            border: '2px solid var(--accent-purple)',
            borderRadius: '12px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🧠</div>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '8px', color: 'var(--accent-purple)' }}>Orchestrator COORDINATES</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              Routes work, manages flow, handles escalations
            </p>
          </div>
        </div>

        <InfoBox variant="insight" title="The Fundamental Shift">
          Traditional SDLC: Humans do all the work, tools assist.<br/>
          AI-Native SDLC: AI does all the work, humans make decisions at 3 key gates.
        </InfoBox>
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

      {/* Link to deeper content */}
      <Card>
        <CardTitle icon="🔗">Explore Further</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Understand the complete AI-native model with detailed comparisons and agent architecture.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          {[
            { icon: '⚖️', title: 'Traditional vs AI-Native', desc: 'Side-by-side visual comparison', path: '/sdlc-comparison' },
            { icon: '🤖', title: 'AI Agent Architecture', desc: 'Specialist agents for every phase', path: '/ai-native/agent-architecture' },
            { icon: '🚨', title: 'Human Checkpoints', desc: 'The 3 key decision gates', path: '/ai-native/human-checkpoints' },
            { icon: '🔄', title: 'Role Evolution', desc: 'How human roles transform', path: '/ai-native/role-evolution' }
          ].map((item, i) => (
            <a key={i} href={item.path} style={{
              display: 'block',
              background: 'var(--bg-elevated)',
              padding: '15px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</div>
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default NewModel;
