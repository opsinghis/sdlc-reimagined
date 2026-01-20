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

const Architect = () => {
  const workflows = [
    {
      title: 'Architecture Decision Records',
      icon: '📝',
      description: 'AI-assisted ADR generation',
      prompt: `"Create an ADR for choosing between GraphQL and REST for our new API:
1. Context and problem statement
2. Decision drivers (performance, team skills, tooling)
3. Options considered with pros/cons
4. Decision outcome with rationale
5. Consequences and risks
6. Follow our ADR template in docs/adr/"`
    },
    {
      title: 'System Design Generation',
      icon: '🏗️',
      description: 'Auto-generate architecture diagrams',
      prompt: `"Design a scalable e-commerce checkout system:
1. High-level system diagram (C4 model)
2. Sequence diagrams for key flows
3. Data model (ERD)
4. API specifications (OpenAPI)
5. Infrastructure requirements
6. Non-functional requirements coverage"`
    },
    {
      title: 'Code Review for Architecture',
      icon: '🔍',
      description: 'Architectural compliance checks',
      prompt: `"Review this PR for architectural compliance:
1. Does it follow our layered architecture?
2. Are dependencies pointing in the right direction?
3. Is it respecting bounded contexts?
4. Are there any coupling concerns?
5. Does it follow our API standards?
6. Any scalability or performance concerns?"`
    },
    {
      title: 'Tech Radar Updates',
      icon: '📡',
      description: 'Evaluate new technologies',
      prompt: `"Evaluate [new technology] for our tech radar:
1. What problem does it solve?
2. How does it compare to our current stack?
3. Adoption complexity and learning curve
4. Community and enterprise support
5. Security considerations
6. Recommendation: Adopt/Trial/Assess/Hold"`
    },
    {
      title: 'Migration Planning',
      icon: '🔄',
      description: 'Plan system migrations',
      prompt: `"Plan migration from monolith to microservices:
1. Identify bounded contexts from code analysis
2. Suggest extraction order by risk/value
3. Define data migration strategy
4. Plan API versioning approach
5. Identify shared libraries to extract
6. Create rollback strategy"`
    },
    {
      title: 'Architecture Review',
      icon: '✅',
      description: 'Comprehensive system review',
      prompt: `"Conduct architecture review for the order service:
1. Current state assessment
2. Scalability analysis
3. Security review
4. Performance bottlenecks
5. Technical debt inventory
6. Improvement roadmap with priorities"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="🏗️ Architect with AI"
        description="From diagram drafter to architectural director"
      />

      {/* Your Role in the Agentic Flow */}
      <Card>
        <div style={{
          background: 'linear-gradient(135deg, var(--accent-blue)20, var(--accent-blue)10)',
          border: '2px solid var(--accent-blue)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              background: 'var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>🏗️</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--accent-blue)' }}>Architecture Director</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Architect Agent generates designs - you approve at Gate 2 and guide strategy</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-blue)', marginBottom: '5px' }}>Step 4: Architecture Design</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Architect Agent generates system designs, ADRs, API specs. Identifies risks and dependencies.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px', border: '2px dashed var(--accent-orange)' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-orange)', marginBottom: '5px' }}>🎯 Gate 2: Design Review</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                You review AI-generated architecture. Validate technical approach. Approve before build begins.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '8px' }}>
              <div style={{ fontWeight: '600', color: 'var(--accent-green)', marginBottom: '5px' }}>Your Focus</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Strategic decisions, system-wide thinking, governance, enabling teams.
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
          <ComparisonCard variant="traditional" title="Traditional Architect Time Split">
            <ComparisonList items={[
              '30% - Creating diagrams and documents',
              '25% - Review meetings and discussions',
              '20% - Researching technologies',
              '15% - Reviewing PRs for compliance',
              '10% - Strategic planning'
            ]} />
          </ComparisonCard>
          <ComparisonCard variant="ai-native" title="AI-Enabled Architect Time Split">
            <ComparisonList items={[
              '10% - Reviewing AI-generated designs',
              '30% - Strategic architecture decisions',
              '25% - Mentoring and enabling teams',
              '20% - Innovation and R&D',
              '15% - Stakeholder alignment'
            ]} />
          </ComparisonCard>
        </ComparisonGrid>
      </Card>

      <Card>
        <CardTitle icon="🛠️">AI-Powered Architecture Workflows</CardTitle>

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
            <PromptBox label="AI Prompt">
              {workflow.prompt}
            </PromptBox>
          </div>
        ))}
      </Card>

      <Card>
        <CardTitle icon="📊">Architecture Governance with AI</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-purple)' }}>
            <h4 style={{ marginBottom: '10px' }}>Automated Compliance</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Dependency direction checks</li>
              <li>• Layer violation detection</li>
              <li>• API standard enforcement</li>
              <li>• Naming convention validation</li>
              <li>• Security pattern verification</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-blue)' }}>
            <h4 style={{ marginBottom: '10px' }}>Living Documentation</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Auto-updated diagrams</li>
              <li>• Real-time dependency graphs</li>
              <li>• API documentation sync</li>
              <li>• ADR tracking and linking</li>
              <li>• Tech debt visualization</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-green)' }}>
            <h4 style={{ marginBottom: '10px' }}>Decision Support</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li>• Trade-off analysis</li>
              <li>• Impact assessment</li>
              <li>• Risk identification</li>
              <li>• Cost modeling</li>
              <li>• Benchmark comparisons</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="🎯">Architecture Principles Enforcement</CardTitle>
        <PromptBox label="AI as Architecture Guardian">
{`"As our Architecture Guardian, continuously check:

1. STRUCTURE
   - Are new services following our bounded context map?
   - Are dependencies flowing in the right direction?
   - Is the API gateway being used appropriately?

2. PATTERNS
   - Are we using the right patterns for the problem?
   - Is there code duplication that should be a shared service?
   - Are anti-patterns being introduced?

3. NON-FUNCTIONALS
   - Will this scale to 10x current load?
   - Are there single points of failure?
   - Is data being handled per our security standards?

4. TECHNICAL DEBT
   - What debt is being added?
   - Is debt being documented?
   - Are there quick wins to reduce existing debt?

Report weekly with severity levels and recommendations."`}
        </PromptBox>
      </Card>

      <Card>
        <CardTitle icon="📈">Impact Metrics</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>3x</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Architecture Options</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-75%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Documentation Time</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>+90%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Compliance Rate</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>-50%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Review Bottleneck</div>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="⚠️">What Architects Still Own</CardTitle>
        <InfoBox variant="warning" title="Human Judgment Required">
          <ul style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <li style={{ padding: '5px 0' }}>• <strong>Strategic decisions</strong> - AI presents options, humans choose direction</li>
            <li style={{ padding: '5px 0' }}>• <strong>Trade-off evaluation</strong> - AI analyzes, humans weigh business context</li>
            <li style={{ padding: '5px 0' }}>• <strong>Organizational fit</strong> - AI ignores politics, humans navigate reality</li>
            <li style={{ padding: '5px 0' }}>• <strong>Long-term vision</strong> - AI optimizes locally, humans think holistically</li>
            <li style={{ padding: '5px 0' }}>• <strong>Stakeholder buy-in</strong> - AI documents, humans persuade and align</li>
          </ul>
        </InfoBox>
      </Card>
    </div>
  );
};

export default Architect;
