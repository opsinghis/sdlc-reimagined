import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  Timeline,
  InfoBox,
  MetricsRow
} from '../../components/ui';

const TransitionRoadmap = () => {
  const phases = [
    {
      title: 'Phase 1: Foundation (Months 1-2)',
      items: [
        { task: 'Deploy Claude Code to pilot team (5-10 developers)', status: 'critical' },
        { task: 'Establish CLAUDE.md standards for each role', status: 'critical' },
        { task: 'Set up AI coding assistants (Cursor/Copilot)', status: 'normal' },
        { task: 'Create baseline metrics (velocity, cycle time, quality)', status: 'critical' },
        { task: 'Train pilot team on AI-assisted development', status: 'normal' },
        { task: 'Identify AI champions in each team', status: 'normal' }
      ]
    },
    {
      title: 'Phase 2: Developer Productivity (Months 3-4)',
      items: [
        { task: 'Roll out to all developers', status: 'critical' },
        { task: 'Implement AI code review automation', status: 'normal' },
        { task: 'Auto-generate documentation from code', status: 'normal' },
        { task: 'Deploy Code Review Agent on all PRs', status: 'normal' },
        { task: 'Establish prompt libraries per team', status: 'normal' },
        { task: 'Measure: 30%+ productivity improvement', status: 'metric' }
      ]
    },
    {
      title: 'Phase 3: Quality Transformation (Months 5-6)',
      items: [
        { task: 'Deploy QE Agent for test generation', status: 'critical' },
        { task: 'Implement auto-test generation from PRs', status: 'normal' },
        { task: 'Set up Performance Agent for continuous load testing', status: 'normal' },
        { task: 'Deploy Security Agent for SAST/DAST', status: 'normal' },
        { task: 'Transition QE engineers to Quality Strategist role', status: 'critical' },
        { task: 'Measure: 80%+ test coverage, 50% less QE time', status: 'metric' }
      ]
    },
    {
      title: 'Phase 4: Process Automation (Months 7-8)',
      items: [
        { task: 'Replace standups with AI async digests', status: 'critical' },
        { task: 'AI-prepared refinement sessions', status: 'normal' },
        { task: 'Reduce sprint planning to 30 minutes', status: 'normal' },
        { task: 'AI-facilitated retrospectives', status: 'normal' },
        { task: 'Transition Scrum Masters to Flow Coach role', status: 'critical' },
        { task: 'Measure: 70% reduction in ceremony time', status: 'metric' }
      ]
    },
    {
      title: 'Phase 5: Operations Automation (Months 9-10)',
      items: [
        { task: 'Deploy ITOps Agent for incident response', status: 'critical' },
        { task: 'Implement L1 auto-remediation', status: 'normal' },
        { task: 'AI-generated runbooks and postmortems', status: 'normal' },
        { task: 'Predictive alerting and anomaly detection', status: 'normal' },
        { task: 'Transition SREs to Platform Strategist role', status: 'critical' },
        { task: 'Measure: 80% L1 auto-resolution, 50% MTTR reduction', status: 'metric' }
      ]
    },
    {
      title: 'Phase 6: Full AI-Native (Months 11-12)',
      items: [
        { task: 'Deploy Orchestrator Agent for work management', status: 'critical' },
        { task: 'Move from sprints to continuous flow', status: 'critical' },
        { task: 'AI-driven backlog prioritization', status: 'normal' },
        { task: 'Continuous deployment with AI gates', status: 'normal' },
        { task: 'Finalize new org structure', status: 'critical' },
        { task: 'Full metrics dashboard and ROI report', status: 'metric' }
      ]
    }
  ];

  const successMetrics = [
    { value: '70%', label: 'Less Ceremony Time' },
    { value: '55%', label: 'Faster Delivery' },
    { value: '80%', label: 'Test Auto-Generation' },
    { value: '78%', label: 'Team Size Optimization' },
    { value: '3x', label: 'Release Frequency' }
  ];

  return (
    <div>
      <PageHeader
        title="🗺️ Transition Roadmap"
        description="12-month journey from traditional SDLC to AI-native organization"
      />

      <Card>
        <CardTitle icon="🎯">Target Outcomes</CardTitle>
        <MetricsRow metrics={successMetrics} />
      </Card>

      <Card>
        <CardTitle icon="📅">12-Month Implementation Plan</CardTitle>

        {phases.map((phase, index) => (
          <div key={index} style={{
            background: 'var(--bg-elevated)',
            borderRadius: '12px',
            padding: '25px',
            marginBottom: '20px',
            borderLeft: `4px solid ${index < 2 ? 'var(--accent-blue)' : index < 4 ? 'var(--accent-green)' : 'var(--accent-purple)'}`
          }}>
            <h3 style={{ margin: '0 0 20px 0' }}>{phase.title}</h3>
            <div style={{ display: 'grid', gap: '10px' }}>
              {phase.items.map((item, itemIndex) => (
                <div key={itemIndex} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 15px',
                  background: item.status === 'critical'
                    ? 'rgba(248, 113, 113, 0.1)'
                    : item.status === 'metric'
                    ? 'rgba(74, 222, 128, 0.1)'
                    : 'var(--bg-card)',
                  borderRadius: '8px'
                }}>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: item.status === 'critical'
                      ? 'var(--accent-red)'
                      : item.status === 'metric'
                      ? 'var(--accent-green)'
                      : 'var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: 'white'
                  }}>
                    {item.status === 'critical' ? '!' : item.status === 'metric' ? '✓' : '○'}
                  </span>
                  <span style={{
                    color: item.status === 'metric' ? 'var(--accent-green)' : 'var(--text-primary)',
                    fontWeight: item.status === 'critical' ? '600' : '400'
                  }}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-red)' }}></span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Critical milestone</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-green)' }}></span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Success metric</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--border)' }}></span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Supporting task</span>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="⚠️">Common Pitfalls to Avoid</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '15px'
        }}>
          {[
            { icon: '🌊', title: 'Boiling the Ocean', desc: 'Start with one team, prove value, then expand. Don\'t transform everything at once.' },
            { icon: '📊', title: 'Skipping Baselines', desc: 'Without baseline metrics, you can\'t prove improvement. Capture data before starting.' },
            { icon: '🔒', title: 'Ignoring Security', desc: 'Get security team buy-in early. Define what data can/cannot go to AI services.' },
            { icon: '👥', title: 'No Champions', desc: 'Identify enthusiastic early adopters who can help others and share best practices.' },
            { icon: '📚', title: 'Skipping Training', desc: 'AI tools require skill. Budget time for learning prompt engineering and AI workflows.' },
            { icon: '🏃', title: 'Moving Too Fast', desc: 'Role transitions need time. Don\'t eliminate roles before people adapt to new ones.' }
          ].map((pitfall, i) => (
            <div key={i} style={{
              background: 'rgba(248, 113, 113, 0.1)',
              border: '1px solid rgba(248, 113, 113, 0.3)',
              padding: '20px',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{pitfall.icon}</div>
              <h4 style={{ color: 'var(--accent-red)', margin: '0 0 8px 0' }}>{pitfall.title}</h4>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>{pitfall.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardTitle icon="✅">Success Factors</CardTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '15px'
        }}>
          {[
            { icon: '👔', title: 'Executive Sponsorship', desc: 'Leadership commitment to the transformation and willingness to invest in change.' },
            { icon: '⏰', title: 'Dedicated Time', desc: 'Allow teams 10-20% time for learning and experimentation during rollout.' },
            { icon: '🎓', title: 'Continuous Learning', desc: 'Regular training sessions, shared prompt libraries, and knowledge sharing.' },
            { icon: '📈', title: 'Measure Everything', desc: 'Track metrics weekly, celebrate wins, and adjust based on data.' },
            { icon: '🔄', title: 'Iterative Approach', desc: 'Continuously refine CLAUDE.md and prompts based on team feedback.' },
            { icon: '💬', title: 'Open Communication', desc: 'Address fears about job changes openly. Focus on role evolution, not elimination.' }
          ].map((factor, i) => (
            <div key={i} style={{
              background: 'rgba(74, 222, 128, 0.1)',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              padding: '20px',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{factor.icon}</div>
              <h4 style={{ color: 'var(--accent-green)', margin: '0 0 8px 0' }}>{factor.title}</h4>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>{factor.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <InfoBox variant="insight" title="The Goal">
        <p style={{ margin: 0 }}>
          The end state isn't "fewer people" - it's <strong>"people doing more meaningful work"</strong>.
          Every person who previously spent time on repetitive tasks now focuses on strategy, creativity,
          relationships, and judgment. The organization delivers more value with the same investment in people.
        </p>
      </InfoBox>
    </div>
  );
};

export default TransitionRoadmap;
