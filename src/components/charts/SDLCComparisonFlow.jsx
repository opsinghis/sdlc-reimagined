import React from 'react';
import 'reactflow/dist/style.css';

// Simple Step Component for clear sequential flow
const FlowStep = ({ step, index, totalSteps, showConnector = true }) => {
  const isHuman = step.isHuman;
  const isParallel = step.parallel;

  return (
    <div style={{ display: 'flex', alignItems: 'stretch' }}>
      {/* Step Box */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        minWidth: isParallel ? '200px' : '120px'
      }}>
        {/* Step Number */}
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: isHuman ? 'var(--accent-orange)' : step.color,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.7rem',
          fontWeight: '700',
          marginBottom: '8px'
        }}>
          {index + 1}
        </div>

        {/* Main Box */}
        <div style={{
          padding: isParallel ? '12px' : '12px 16px',
          borderRadius: isHuman ? '20px' : '10px',
          background: isHuman
            ? 'linear-gradient(135deg, var(--accent-orange)25, var(--accent-orange)10)'
            : `linear-gradient(135deg, ${step.color}20, ${step.color}08)`,
          border: isHuman
            ? '2px dashed var(--accent-orange)'
            : `2px solid ${step.color}`,
          textAlign: 'center',
          minWidth: isParallel ? '180px' : '110px',
          width: '100%'
        }}>
          <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{step.icon}</div>
          <div style={{
            fontWeight: '600',
            fontSize: '0.8rem',
            color: isHuman ? 'var(--accent-orange)' : 'var(--text-primary)',
            marginBottom: '2px'
          }}>
            {step.label}
          </div>
          {step.who && (
            <div style={{
              fontSize: '0.65rem',
              color: isHuman ? 'var(--accent-orange)' : step.color,
              padding: '2px 6px',
              background: isHuman ? 'var(--accent-orange)15' : `${step.color}15`,
              borderRadius: '4px',
              marginTop: '4px'
            }}>
              {step.who}
            </div>
          )}
          {step.duration && (
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              {step.duration}
            </div>
          )}

          {/* Parallel agents inside */}
          {isParallel && step.agents && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              marginTop: '8px',
              justifyContent: 'center'
            }}>
              {step.agents.map((agent, i) => (
                <div key={i} style={{
                  padding: '3px 6px',
                  background: 'var(--bg-card)',
                  borderRadius: '4px',
                  fontSize: '0.6rem',
                  color: 'var(--text-secondary)'
                }}>
                  {agent}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Connector Arrow */}
      {showConnector && index < totalSteps - 1 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px',
          color: 'var(--text-muted)',
          fontSize: '1.2rem',
          marginTop: '30px'
        }}>
          →
        </div>
      )}
    </div>
  );
};

// Traditional SDLC Steps
const traditionalSteps = [
  { icon: '📋', label: 'Requirements', duration: '2-4 weeks', who: 'BA, PO', color: '#8B5CF6' },
  { icon: '🎨', label: 'Design', duration: '2-3 weeks', who: 'Architect', color: '#3B82F6' },
  { icon: '💻', label: 'Development', duration: '4-8 weeks', who: 'Developers', color: '#10B981' },
  { icon: '🧪', label: 'Testing', duration: '2-4 weeks', who: 'QE Team', color: '#F59E0B' },
  { icon: '🚀', label: 'Deployment', duration: '1-2 weeks', who: 'DevOps', color: '#EF4444' },
  { icon: '🔧', label: 'Maintenance', duration: 'Ongoing', who: 'Support', color: '#6B7280' },
];

// AI-Native SDLC Steps - Clear sequential flow with human checkpoints
const agenticSteps = [
  {
    icon: '👤',
    label: 'Define Intent',
    who: 'Human',
    duration: '30 min',
    isHuman: true,
    description: 'Human defines goal or problem'
  },
  {
    icon: '🧠',
    label: 'AI Orchestrates',
    who: 'Orchestrator Agent',
    duration: '5 min',
    color: '#8B5CF6',
    description: 'Routes to specialist agents'
  },
  {
    icon: '📋',
    label: 'Requirements',
    who: 'Product Agent',
    duration: '1-2 hrs',
    color: '#8B5CF6'
  },
  {
    icon: '👤',
    label: 'Review Specs',
    who: 'Human',
    duration: '1 hr',
    isHuman: true,
    description: 'PO validates requirements'
  },
  {
    icon: '🏗️',
    label: 'Design',
    who: 'Architect Agent',
    duration: '2-4 hrs',
    color: '#3B82F6'
  },
  {
    icon: '💻',
    label: 'Build',
    who: 'Dev Agents',
    duration: '1-2 weeks',
    color: '#10B981',
    parallel: true,
    agents: ['Frontend', 'Backend', 'Database']
  },
  {
    icon: '🧪',
    label: 'Test + Secure',
    who: 'QE + Security Agents',
    duration: '4-8 hrs',
    color: '#F59E0B',
    parallel: true,
    agents: ['Unit Tests', 'E2E', 'SAST/DAST']
  },
  {
    icon: '👤',
    label: 'Final Review',
    who: 'Human',
    duration: '2 hrs',
    isHuman: true,
    description: 'Tech Lead approves'
  },
  {
    icon: '🚀',
    label: 'Deploy',
    who: 'DevOps Agent',
    duration: '1-2 hrs',
    color: '#EF4444'
  },
  {
    icon: '✅',
    label: 'Live',
    who: 'Monitoring Agent',
    duration: 'Continuous',
    color: '#10B981'
  },
];

export const TraditionalSDLCFlow = () => {
  return (
    <div style={{
      padding: '20px',
      background: 'var(--bg-elevated)',
      borderRadius: '12px',
      overflowX: 'auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        minWidth: 'max-content'
      }}>
        {traditionalSteps.map((step, i) => (
          <FlowStep
            key={i}
            step={step}
            index={i}
            totalSteps={traditionalSteps.length}
          />
        ))}
      </div>
    </div>
  );
};

export const AgenticSDLCFlow = () => {
  return (
    <div style={{
      padding: '20px',
      background: 'var(--bg-elevated)',
      borderRadius: '12px',
      overflowX: 'auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        minWidth: 'max-content'
      }}>
        {agenticSteps.map((step, i) => (
          <FlowStep
            key={i}
            step={step}
            index={i}
            totalSteps={agenticSteps.length}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{
        marginTop: '20px',
        paddingTop: '15px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontSize: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '16px', height: '16px', borderRadius: '10px',
            border: '2px dashed var(--accent-orange)',
            background: 'var(--accent-orange)20'
          }}></div>
          <span>Human Checkpoint</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '16px', height: '16px', borderRadius: '4px',
            border: '2px solid var(--accent-purple)',
            background: 'var(--accent-purple)20'
          }}></div>
          <span>AI Agent</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: 'var(--accent-orange)', fontWeight: '600' }}>3</span>
          <span>Human touchpoints out of 10 steps</span>
        </div>
      </div>
    </div>
  );
};

// Combined comparison component
const SDLCComparisonFlow = () => {
  return (
    <div>
      {/* Traditional SDLC */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '15px'
        }}>
          <span style={{
            padding: '4px 12px',
            background: 'var(--accent-red)22',
            color: 'var(--accent-red)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '600'
          }}>Traditional</span>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Sequential Waterfall with Human Handoffs</h3>
        </div>
        <TraditionalSDLCFlow />
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '15px',
          padding: '12px',
          background: 'var(--bg-card)',
          borderRadius: '8px',
          fontSize: '0.8rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--accent-red)' }}>12-20 weeks</div>
            <div style={{ color: 'var(--text-muted)' }}>Total Duration</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--accent-red)' }}>5+ handoffs</div>
            <div style={{ color: 'var(--text-muted)' }}>Team Transitions</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--accent-red)' }}>Sequential</div>
            <div style={{ color: 'var(--text-muted)' }}>Execution</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--accent-red)' }}>25+ people</div>
            <div style={{ color: 'var(--text-muted)' }}>Team Size</div>
          </div>
        </div>
      </div>

      {/* Agentic SDLC */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '15px'
        }}>
          <span style={{
            padding: '4px 12px',
            background: 'var(--accent-green)22',
            color: 'var(--accent-green)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '600'
          }}>AI-Native</span>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Parallel Agentic Flow with Orchestration</h3>
        </div>
        <AgenticSDLCFlow />
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '15px',
          padding: '12px',
          background: 'var(--bg-card)',
          borderRadius: '8px',
          fontSize: '0.8rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--accent-green)' }}>4-6 weeks</div>
            <div style={{ color: 'var(--text-muted)' }}>Total Duration</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--accent-green)' }}>2 checkpoints</div>
            <div style={{ color: 'var(--text-muted)' }}>Human Gates</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--accent-green)' }}>Parallel</div>
            <div style={{ color: 'var(--text-muted)' }}>Execution</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: 'var(--accent-green)' }}>5-8 people</div>
            <div style={{ color: 'var(--text-muted)' }}>+ AI Agents</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{
        marginTop: '25px',
        padding: '15px',
        background: 'var(--bg-card)',
        borderRadius: '8px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        fontSize: '0.8rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>🧠</div>
          <span>Orchestrator Agent</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--accent-blue)33', border: '2px solid var(--accent-blue)' }}></div>
          <span>AI Agent</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '10px', background: 'var(--accent-orange)33', border: '2px dashed var(--accent-orange)' }}></div>
          <span>Human Checkpoint</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '30px', height: '2px', background: 'var(--accent-purple)' }}></div>
          <span>Data Flow</span>
        </div>
      </div>
    </div>
  );
};

export default SDLCComparisonFlow;
