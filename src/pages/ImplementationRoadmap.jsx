import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  Timeline,
  MetricsRow
} from '../components/ui';

const ImplementationRoadmap = () => {
  const transformationPlan = [
    {
      title: 'Weeks 1-2: Foundation',
      description: (
        <>
          • Deploy Claude Code to pilot team<br/>
          • Set up AI coding assistants (Cursor/Copilot)<br/>
          • Create initial prompt library<br/>
          • Baseline current metrics
        </>
      )
    },
    {
      title: 'Weeks 3-4: Developer Workflows',
      description: (
        <>
          • Train developers on AI pair programming<br/>
          • Implement AI code review<br/>
          • Auto-generate documentation<br/>
          • Measure productivity impact
        </>
      )
    },
    {
      title: 'Weeks 5-6: Testing Transformation',
      description: (
        <>
          • Deploy QE Agent<br/>
          • Auto-generate tests from PRs<br/>
          • Implement self-healing locators<br/>
          • AI failure analysis
        </>
      )
    },
    {
      title: 'Weeks 7-8: Ceremony Reduction',
      description: (
        <>
          • AI daily digests (eliminate standups)<br/>
          • AI-prepared refinement<br/>
          • Reduce planning to 30 min<br/>
          • AI-assisted retrospectives
        </>
      )
    },
    {
      title: 'Weeks 9-10: Operations',
      description: (
        <>
          • Deploy ITOps Agent<br/>
          • L1 auto-remediation<br/>
          • AI incident response<br/>
          • Predictive alerting
        </>
      )
    },
    {
      title: 'Weeks 11-12: Continuous Flow',
      description: (
        <>
          • Move from sprints to flow<br/>
          • AI work management<br/>
          • Continuous deployment<br/>
          • Full metrics dashboard
        </>
      )
    }
  ];

  const successMetrics = [
    { value: '-70%', label: 'Ceremony Time' },
    { value: '+55%', label: 'Dev Velocity' },
    { value: '-80%', label: 'Test Writing Time' },
    { value: '80%', label: 'L1 Auto-Resolve' },
    { value: '3x', label: 'Release Frequency' }
  ];

  return (
    <div>
      <PageHeader
        title="🚀 Implementation Roadmap"
        description="How to transform your SDLC in phases"
      />

      <Card>
        <CardTitle icon="📅">12-Week Transformation Plan</CardTitle>
        <Timeline items={transformationPlan} />
      </Card>

      <Card>
        <CardTitle icon="📊">Success Metrics</CardTitle>
        <MetricsRow metrics={successMetrics} />
      </Card>

      <Card>
        <CardTitle icon="🎯">Phase-by-Phase Goals</CardTitle>

        <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent-blue)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-blue)' }}>Phase 1: Foundation (Weeks 1-4)</h4>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              <strong>Goal:</strong> Every developer uses AI daily for coding tasks<br/>
              <strong>KPI:</strong> 80% of developers using Claude Code actively<br/>
              <strong>Risk:</strong> Resistance to change - mitigate with champions and quick wins
            </p>
          </div>

          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent-green)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-green)' }}>Phase 2: Quality (Weeks 5-6)</h4>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              <strong>Goal:</strong> Automated test generation for all PRs<br/>
              <strong>KPI:</strong> Test coverage increases by 20%+<br/>
              <strong>Risk:</strong> Test quality concerns - implement review process
            </p>
          </div>

          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent-purple)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-purple)' }}>Phase 3: Process (Weeks 7-8)</h4>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              <strong>Goal:</strong> Ceremony time reduced by 50%+<br/>
              <strong>KPI:</strong> Standups replaced with AI digests<br/>
              <strong>Risk:</strong> Loss of team connection - keep async channels active
            </p>
          </div>

          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent-orange)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-orange)' }}>Phase 4: Operations (Weeks 9-10)</h4>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              <strong>Goal:</strong> L1 incidents auto-resolved<br/>
              <strong>KPI:</strong> MTTR reduced by 60%+<br/>
              <strong>Risk:</strong> Over-automation - maintain human oversight for critical paths
            </p>
          </div>

          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent-cyan)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--accent-cyan)' }}>Phase 5: Flow (Weeks 11-12)</h4>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              <strong>Goal:</strong> Continuous delivery achieved<br/>
              <strong>KPI:</strong> Deploy frequency 3x+ increase<br/>
              <strong>Risk:</strong> Quality regression - strong automation gates required
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="⚠️">Common Pitfalls to Avoid</CardTitle>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginTop: '15px' }}>
          <div style={{ background: 'rgba(248, 113, 113, 0.1)', border: '1px solid rgba(248, 113, 113, 0.3)', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ color: 'var(--accent-red)', margin: '0 0 8px 0' }}>❌ Boiling the Ocean</h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Don't try to transform everything at once. Start with one team, prove value, then expand.
            </p>
          </div>
          <div style={{ background: 'rgba(248, 113, 113, 0.1)', border: '1px solid rgba(248, 113, 113, 0.3)', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ color: 'var(--accent-red)', margin: '0 0 8px 0' }}>❌ Skipping Baselines</h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Without baseline metrics, you can't prove improvement. Capture data before starting.
            </p>
          </div>
          <div style={{ background: 'rgba(248, 113, 113, 0.1)', border: '1px solid rgba(248, 113, 113, 0.3)', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ color: 'var(--accent-red)', margin: '0 0 8px 0' }}>❌ Ignoring Security</h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Get security team buy-in early. Define what data can/cannot go to AI services.
            </p>
          </div>
          <div style={{ background: 'rgba(248, 113, 113, 0.1)', border: '1px solid rgba(248, 113, 113, 0.3)', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ color: 'var(--accent-red)', margin: '0 0 8px 0' }}>❌ No Champions</h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Identify enthusiastic early adopters who can help others and share best practices.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="✅">Success Factors</CardTitle>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginTop: '15px' }}>
          <div style={{ background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.3)', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ color: 'var(--accent-green)', margin: '0 0 8px 0' }}>✓ Executive Sponsorship</h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Leadership commitment to the transformation and willingness to invest in training.
            </p>
          </div>
          <div style={{ background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.3)', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ color: 'var(--accent-green)', margin: '0 0 8px 0' }}>✓ Dedicated Time</h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Allow teams 10-20% time for learning and experimentation during rollout.
            </p>
          </div>
          <div style={{ background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.3)', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ color: 'var(--accent-green)', margin: '0 0 8px 0' }}>✓ Shared Learning</h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Regular sharing sessions where teams showcase their best AI workflows.
            </p>
          </div>
          <div style={{ background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.3)', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ color: 'var(--accent-green)', margin: '0 0 8px 0' }}>✓ Iterative Approach</h5>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Continuously refine CLAUDE.md and prompts based on team feedback.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ImplementationRoadmap;
