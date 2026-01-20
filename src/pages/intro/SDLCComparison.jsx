import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  InfoBox,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell
} from '../../components/ui';
import { SDLCComparisonFlow } from '../../components/charts';

const SDLCComparison = () => {
  const comparisonData = [
    { aspect: 'Work Flow', traditional: 'Sequential phases with handoffs', agentic: 'Sequential steps with AI execution + human gates' },
    { aspect: 'Duration', traditional: '12-20 weeks idea to production', agentic: '4-6 weeks idea to production' },
    { aspect: 'Team Size', traditional: '25+ people across phases', agentic: '5-8 human specialists + AI agents' },
    { aspect: 'Human Involvement', traditional: 'Humans do all work', agentic: '3 strategic checkpoints (intent, review, approve)' },
    { aspect: 'Handoffs', traditional: '5+ team-to-team transitions', agentic: '3 human decision gates' },
    { aspect: 'Quality Assurance', traditional: 'Separate QE phase after dev', agentic: 'Continuous AI testing in parallel with build' },
    { aspect: 'Documentation', traditional: 'Manual, often outdated', agentic: 'Auto-generated, always current' },
    { aspect: 'Coordination', traditional: 'Meetings, standups, ceremonies', agentic: 'AI Orchestrator routes work to specialists' },
    { aspect: 'Bottlenecks', traditional: 'PO, senior devs, QE capacity', agentic: 'Human gates only (by design)' },
    { aspect: 'Scaling', traditional: 'Add more people (linear cost)', agentic: 'Add more AI agents (minimal cost)' },
  ];

  const agentResponsibilities = [
    { agent: 'Orchestrator Agent', icon: '🧠', responsibilities: 'Receives intent, decomposes work, routes to specialists, monitors progress, handles escalations, ensures quality gates' },
    { agent: 'Product Agent', icon: '🎯', responsibilities: 'Generates user stories, acceptance criteria, edge cases, prioritization recommendations from business goals' },
    { agent: 'Architect Agent', icon: '🏗️', responsibilities: 'Creates technical designs, API specifications, data models, architecture decision records' },
    { agent: 'Frontend Agent', icon: '🎨', responsibilities: 'Builds UI components, handles styling, responsive design, accessibility, browser compatibility' },
    { agent: 'Backend Agent', icon: '⚙️', responsibilities: 'Implements APIs, business logic, service orchestration, integrations, caching strategies' },
    { agent: 'Database Agent', icon: '🗄️', responsibilities: 'Designs schemas, writes migrations, optimizes queries, handles data integrity, backup strategies' },
    { agent: 'QE Agent', icon: '🧪', responsibilities: 'Generates unit/integration/E2E tests, executes test suites, analyzes coverage, identifies gaps' },
    { agent: 'Security Agent', icon: '🔒', responsibilities: 'Runs SAST/DAST scans, checks dependencies, validates compliance, penetration test coordination' },
    { agent: 'Performance Agent', icon: '⚡', responsibilities: 'Load testing, profiling, bottleneck identification, optimization recommendations, SLA monitoring' },
    { agent: 'DevOps Agent', icon: '🚀', responsibilities: 'CI/CD pipelines, infrastructure provisioning, deployment strategies, rollback procedures' },
    { agent: 'Monitoring Agent', icon: '📊', responsibilities: 'Sets up alerting, log aggregation, dashboard creation, anomaly detection, incident correlation' },
  ];

  const humanCheckpoints = [
    { checkpoint: '1. Define Intent', when: 'Start of flow', who: 'Product Owner / Business', decision: 'What problem to solve, define goals, success criteria, scope boundaries' },
    { checkpoint: '2. Review Specs', when: 'After AI generates requirements', who: 'Product Owner', decision: 'Validate requirements, acceptance criteria, approve before design begins' },
    { checkpoint: '3. Final Review', when: 'After build & test complete', who: 'Tech Lead', decision: 'Code quality, security sign-off, go/no-go for production deployment' },
  ];

  return (
    <div>
      <PageHeader
        title="⚖️ Traditional vs AI-Native SDLC"
        description="A visual comparison of how software development transforms with AI agents"
      />

      {/* Visual Flow Comparison */}
      <Card>
        <CardTitle icon="🔄">Visual Flow Comparison</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          The traditional SDLC follows a sequential path with human handoffs at each phase.
          The AI-native model follows a clear sequence: <strong>Human defines intent → AI orchestrates and executes → Human reviews at gates → AI continues</strong>.
          Only 3 human touchpoints out of 10 steps.
        </p>
        <SDLCComparisonFlow />
      </Card>

      {/* Step-by-Step: How the AI-Native Flow Works */}
      <Card>
        <CardTitle icon="📖">How the AI-Native Flow Works (Step by Step)</CardTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { step: 1, icon: '👤', title: 'Human Defines Intent', desc: 'Product Owner or stakeholder describes the goal: "We need a user dashboard showing real-time metrics"', type: 'human' },
            { step: 2, icon: '🧠', title: 'Orchestrator Receives & Plans', desc: 'AI Orchestrator analyzes intent, breaks it into tasks, identifies which specialist agents are needed', type: 'ai' },
            { step: 3, icon: '📋', title: 'Product Agent Creates Specs', desc: 'Generates user stories, acceptance criteria, edge cases - all from the initial intent', type: 'ai' },
            { step: 4, icon: '👤', title: 'Human Reviews Specs', desc: 'Product Owner validates: "Yes, these requirements capture what I need" or requests changes', type: 'human' },
            { step: 5, icon: '🏗️', title: 'Architect Agent Designs', desc: 'Creates technical design, API contracts, data models based on approved requirements', type: 'ai' },
            { step: 6, icon: '💻', title: 'Dev Agents Build (Parallel)', desc: 'Frontend, Backend, Database agents work simultaneously on their parts', type: 'ai' },
            { step: 7, icon: '🧪', title: 'QE + Security Agents Test (Parallel)', desc: 'Unit tests, E2E tests, security scans run as code is built - not after', type: 'ai' },
            { step: 8, icon: '👤', title: 'Human Final Review', desc: 'Tech Lead reviews: code quality, security report, test coverage - approves for production', type: 'human' },
            { step: 9, icon: '🚀', title: 'DevOps Agent Deploys', desc: 'Automated deployment to production with rollback capability', type: 'ai' },
            { step: 10, icon: '✅', title: 'Monitoring Agent Watches', desc: 'Continuous monitoring, alerting, auto-healing for production issues', type: 'ai' },
          ].map((item) => (
            <div key={item.step} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              padding: '12px 15px',
              background: item.type === 'human' ? 'rgba(249, 115, 22, 0.1)' : 'var(--bg-elevated)',
              borderLeft: item.type === 'human' ? '4px solid var(--accent-orange)' : '4px solid var(--accent-blue)',
              borderRadius: '8px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: item.type === 'human' ? '50%' : '8px',
                background: item.type === 'human' ? 'var(--accent-orange)' : 'var(--accent-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    background: item.type === 'human' ? 'var(--accent-orange)' : 'var(--accent-blue)',
                    color: 'white',
                    borderRadius: '10px'
                  }}>
                    Step {item.step}
                  </span>
                  <strong style={{ color: item.type === 'human' ? 'var(--accent-orange)' : 'var(--text-primary)' }}>
                    {item.title}
                  </strong>
                  {item.type === 'human' && (
                    <span style={{
                      fontSize: '0.65rem',
                      padding: '2px 6px',
                      background: 'var(--accent-orange)',
                      color: 'white',
                      borderRadius: '4px'
                    }}>HUMAN</span>
                  )}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <InfoBox variant="insight" title="Key Takeaway" style={{ marginTop: '20px' }}>
          Notice the pattern: <strong>Humans make decisions</strong> (what to build, is this correct, ready to ship?),
          while <strong>AI does the work</strong> (requirements, design, code, tests, deployment).
          This is the fundamental shift from traditional SDLC.
        </InfoBox>
      </Card>

      {/* Key Differences Table */}
      <Card>
        <CardTitle icon="📊">Key Differences</CardTitle>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Aspect</TableHeader>
              <TableHeader>Traditional SDLC</TableHeader>
              <TableHeader>AI-Native SDLC</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {comparisonData.map((row, i) => (
              <TableRow key={i}>
                <TableCell><strong>{row.aspect}</strong></TableCell>
                <TableCell color="var(--text-secondary)">{row.traditional}</TableCell>
                <TableCell color="var(--accent-green)">{row.agentic}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* AI Agent Responsibilities */}
      <Card>
        <CardTitle icon="🤖">AI Agent Responsibilities</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Each specialized agent handles a specific domain, working in parallel under the Orchestrator's coordination.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '15px'
        }}>
          {agentResponsibilities.map((agent, i) => (
            <div key={i} style={{
              background: 'var(--bg-elevated)',
              padding: '15px',
              borderRadius: '10px',
              borderLeft: i === 0 ? '4px solid var(--accent-purple)' : '4px solid var(--accent-blue)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>{agent.icon}</span>
                <strong style={{ fontSize: '0.95rem' }}>{agent.agent}</strong>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {agent.responsibilities}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Human Checkpoints */}
      <Card>
        <CardTitle icon="👤">Human Checkpoint Gates</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Only 3 human touchpoints in the entire flow. Humans focus on strategic decisions - defining goals, validating specs, and approving releases.
          Everything else is handled by AI agents.
        </p>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Checkpoint</TableHeader>
              <TableHeader>When</TableHeader>
              <TableHeader>Who Decides</TableHeader>
              <TableHeader>Decision Type</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {humanCheckpoints.map((row, i) => (
              <TableRow key={i}>
                <TableCell><strong>{row.checkpoint}</strong></TableCell>
                <TableCell>{row.when}</TableCell>
                <TableCell color="var(--accent-orange)">{row.who}</TableCell>
                <TableCell style={{ fontSize: '0.85rem' }}>{row.decision}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* The Paradigm Shift */}
      <Card>
        <CardTitle icon="💡">The Paradigm Shift</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-red)11, var(--accent-red)05)',
            border: '1px solid var(--accent-red)33',
            padding: '20px',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--accent-red)', marginBottom: '12px' }}>❌ Old Thinking</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li style={{ padding: '6px 0' }}>• "AI assists humans in their work"</li>
              <li style={{ padding: '6px 0' }}>• "Humans do the work, AI helps"</li>
              <li style={{ padding: '6px 0' }}>• "Add AI tools to existing process"</li>
              <li style={{ padding: '6px 0' }}>• "Keep all roles, just make them faster"</li>
              <li style={{ padding: '6px 0' }}>• "AI is a productivity tool"</li>
            </ul>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-green)11, var(--accent-green)05)',
            border: '1px solid var(--accent-green)33',
            padding: '20px',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--accent-green)', marginBottom: '12px' }}>✅ New Thinking</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li style={{ padding: '6px 0' }}>• "AI does the work, humans guide"</li>
              <li style={{ padding: '6px 0' }}>• "AI executes, humans make decisions"</li>
              <li style={{ padding: '6px 0' }}>• "Redesign process around AI capabilities"</li>
              <li style={{ padding: '6px 0' }}>• "Transform roles to strategic oversight"</li>
              <li style={{ padding: '6px 0' }}>• "AI is the primary workforce"</li>
            </ul>
          </div>
        </div>

        <InfoBox variant="insight" title="The Key Insight" style={{ marginTop: '20px' }}>
          The AI-native SDLC isn't about making humans faster at their jobs - it's about fundamentally
          rethinking who (or what) does each job. Humans shift from <strong>doing</strong> the work
          to <strong>directing</strong> the work and making judgment calls that require human values,
          creativity, and accountability.
        </InfoBox>
      </Card>

      {/* When to Use Each */}
      <Card>
        <CardTitle icon="🎯">When to Use Each Model</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px'
        }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '15px' }}>Traditional SDLC Still Works For:</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li style={{ padding: '5px 0' }}>• Highly regulated industries with audit trails</li>
              <li style={{ padding: '5px 0' }}>• Novel, unprecedented technical challenges</li>
              <li style={{ padding: '5px 0' }}>• Teams not ready for AI adoption</li>
              <li style={{ padding: '5px 0' }}>• Projects requiring extensive human judgment</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '15px' }}>AI-Native SDLC Excels For:</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li style={{ padding: '5px 0' }}>• Standard web/mobile/API development</li>
              <li style={{ padding: '5px 0' }}>• Rapid iteration and experimentation</li>
              <li style={{ padding: '5px 0' }}>• Teams embracing AI-first culture</li>
              <li style={{ padding: '5px 0' }}>• Organizations seeking 3x+ velocity</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SDLCComparison;
