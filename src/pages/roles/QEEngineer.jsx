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

const QEEngineer = () => {
  const workflows = [
    {
      title: 'Test Generation from Code',
      icon: '🧪',
      description: 'Automatic test creation for new code',
      prompt: `"Generate comprehensive tests for this new feature:
1. Unit tests for all functions
2. Integration tests for API endpoints
3. E2E tests for user journeys
4. Edge cases and boundary conditions
5. Performance benchmarks

Follow our testing patterns in src/__tests__/"`
    },
    {
      title: 'Test Gap Analysis',
      icon: '🔍',
      description: 'Identify what needs more testing',
      prompt: `"Analyze our test coverage and identify:
1. Untested code paths (beyond line coverage)
2. Missing edge cases in existing tests
3. Integration points without tests
4. User journeys not covered by E2E
5. Security scenarios not tested

Prioritize by risk and suggest tests to add."`
    },
    {
      title: 'Flaky Test Resolution',
      icon: '🔧',
      description: 'Fix unreliable tests automatically',
      prompt: `"This test is flaky (fails 20% of runs). Analyze and fix:
1. Identify the race condition or timing issue
2. Add proper waits/retries
3. Isolate external dependencies
4. Improve test data management
5. Update to use more reliable selectors"`
    },
    {
      title: 'Test Data Generation',
      icon: '📊',
      description: 'Create realistic test datasets',
      prompt: `"Generate test data for the user management module:
1. 100 realistic user profiles (varied demographics)
2. Edge cases (long names, special characters, unicode)
3. Boundary values (min/max limits)
4. Invalid data for negative tests
5. SQL injection and XSS payloads for security tests

Output as fixtures we can use in tests."`
    },
    {
      title: 'Exploratory Testing Assistant',
      icon: '🎯',
      description: 'Guided exploratory testing sessions',
      prompt: `"Help me with exploratory testing for the checkout flow:
1. Suggest test scenarios I might not think of
2. Identify risky areas based on code complexity
3. Generate test charters for the session
4. Suggest edge cases from past bug patterns
5. Help document findings in structured format"`
    },
    {
      title: 'Bug Report Enhancement',
      icon: '🐛',
      description: 'Comprehensive bug documentation',
      prompt: `"Enhance this bug report:
1. Add likely root cause analysis from code
2. Suggest reproduction steps
3. Identify related code areas
4. Write a failing test that captures this bug
5. Estimate severity and blast radius
6. Suggest similar patterns to check"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="🧪 QE Engineer with Claude"
        description="From test writer to quality strategist"
      />

      {/* Your Role in the Agentic Flow */}
      <Card>
        <div style={{
          background: 'linear-gradient(135deg, var(--accent-green)20, var(--accent-green)10)',
          border: '2px solid var(--accent-green)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              background: 'var(--accent-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>🧪</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--accent-green)' }}>Quality Strategist</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>QE Agent handles test generation - you define strategy and review at Gate 3</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-blue)', marginBottom: '5px' }}>Step 7: QE Agent Tests</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                QE Agent generates unit, integration, and E2E tests. Security Agent runs SAST/DAST. Tests run in parallel with build.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px', border: '2px dashed var(--accent-orange)' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-orange)', marginBottom: '5px' }}>🎯 Gate 3: Quality Review</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                You review test coverage, security scan results, and identify gaps before production release approval.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-green)', marginBottom: '5px' }}>Your Focus</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Test strategy, risk analysis, exploratory testing, quality coaching, edge cases AI might miss.
              </p>
            </div>
          </div>
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <a href="/sdlc-comparison" style={{ color: 'var(--accent-purple)', fontSize: '0.85rem' }}>See the full 10-step agentic flow →</a>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="🔄">Role Transformation</CardTitle>
        <ComparisonGrid>
          <ComparisonCard variant="traditional" title="Traditional QE Time Split">
            <ComparisonList items={[
              '40% - Writing test cases/scripts',
              '25% - Test execution & maintenance',
              '20% - Bug reporting & verification',
              '10% - Test planning',
              '5% - Process improvement'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="AI-Enabled QE Time Split">
            <ComparisonList items={[
              '10% - Reviewing AI-generated tests',
              '25% - Quality strategy & risk analysis',
              '25% - Exploratory testing',
              '20% - Test architecture',
              '20% - Quality advocacy & coaching'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Claude-Powered QE Workflows</CardTitle>

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
        <CardTitle icon="🎯">The New QE Focus Areas</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-purple)' }}>
            <h4 style={{ marginBottom: '10px' }}>Quality Strategy</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Define test pyramid balance</li>
              <li>• Set coverage targets by risk</li>
              <li>• Design quality gates</li>
              <li>• Establish metrics & SLOs</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-blue)' }}>
            <h4 style={{ marginBottom: '10px' }}>Test Architecture</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Design test frameworks</li>
              <li>• Build test utilities</li>
              <li>• Create test data management</li>
              <li>• Enable AI test generation</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-green)' }}>
            <h4 style={{ marginBottom: '10px' }}>Exploratory Testing</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Human intuition + AI support</li>
              <li>• Risk-based test charters</li>
              <li>• Creative edge case discovery</li>
              <li>• User experience validation</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-orange)' }}>
            <h4 style={{ marginBottom: '10px' }}>Quality Advocacy</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Shift-left coaching</li>
              <li>• Developer testing enablement</li>
              <li>• Quality culture building</li>
              <li>• Process improvement</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📈">Quality Metrics Improvement</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>+70%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Test Coverage</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-80%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Test Writing Time</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-90%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Flaky Tests</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-50%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Escape Rate</div>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="⚠️">What QE Still Owns</CardTitle>
        <InfoBox variant="warning" title="Human Judgment Required">
          <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <li style={{ padding: '5px 0' }}>• <strong>Risk assessment</strong> - AI identifies patterns, humans assess real business risk</li>
            <li style={{ padding: '5px 0' }}>• <strong>User empathy</strong> - AI tests scenarios, humans understand user frustration</li>
            <li style={{ padding: '5px 0' }}>• <strong>Test strategy</strong> - AI executes, humans decide what matters most</li>
            <li style={{ padding: '5px 0' }}>• <strong>Exploratory creativity</strong> - AI suggests, humans discover the unexpected</li>
            <li style={{ padding: '5px 0' }}>• <strong>Quality culture</strong> - AI automates, humans inspire quality mindset</li>
          </ul>
        </InfoBox>
      </Card>

      {/* AI Agent Context */}
      <Card>
        <CardTitle icon="🤖">Your AI Agent Partners</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          In the AI-native model, you collaborate with specialized QE agents that handle different aspects of quality assurance:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
          {[
            { icon: '🧪', name: 'Unit Test Agent', desc: 'Generates unit tests for all code changes' },
            { icon: '🔗', name: 'Integration Agent', desc: 'Creates API and service integration tests' },
            { icon: '🎭', name: 'E2E Test Agent', desc: 'Builds user journey automation tests' },
            { icon: '⚡', name: 'Performance Agent', desc: 'Load testing, benchmarks, profiling' },
            { icon: '🔒', name: 'Security Agent', desc: 'SAST, DAST, penetration test coordination' },
            { icon: '♿', name: 'Accessibility Agent', desc: 'WCAG compliance, screen reader testing' }
          ].map((agent, i) => (
            <div key={i} style={{
              background: 'var(--bg-elevated)',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{agent.icon}</div>
              <div style={{ fontWeight: '600', marginBottom: '4px', fontSize: '0.9rem' }}>{agent.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{agent.desc}</div>
            </div>
          ))}
        </div>
        <InfoBox variant="insight" title="The QE Specialist Role">
          Human QE specialists evolve from test writers to quality architects - designing test strategies, reviewing AI-generated tests,
          leading exploratory testing sessions, and ensuring the AI agents maintain high quality standards.
          See <a href="/ai-native/role-evolution" style={{ color: 'var(--accent-purple)' }}>Role Evolution</a> for the full picture.
        </InfoBox>
      </Card>
    </div>
  );
};

export default QEEngineer;
