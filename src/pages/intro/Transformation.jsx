import React, { useState } from 'react';
import {
  PageHeader,
  Card,
  Button,
  TransformationBadge
} from '../../components/ui';
import {
  transformationData,
  revolutionaryChanges,
  impactMetrics
} from '../../data/transformationData';
import {
  traditionalSDLCPhases,
  aiNativePhases,
  phaseColors
} from '../../data/sdlcPhases';

const Transformation = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [viewMode, setViewMode] = useState('map');

  const phase = transformationData[activePhase];

  const viewModes = [
    { id: 'map', label: '🗺️ Full SDLC Map', desc: 'Visual comparison' },
    { id: 'journey', label: '🎯 Phase Journey', desc: 'Step by step' },
    { id: 'compare', label: '⚖️ Side by Side', desc: 'Table view' },
    { id: 'present', label: '📺 Presentation', desc: 'Full screen' }
  ];

  return (
    <div>
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
        borderRadius: '16px',
        padding: '40px',
        marginBottom: '30px',
        textAlign: 'center',
        border: '1px solid rgba(139, 92, 246, 0.3)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>
          ⚡ SDLC Transformation with AI
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          Not incremental improvement — <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>fundamental transformation</span>.
          9 phases collapse into 3. 17 weeks become 4.
        </p>

        {/* View Mode Toggle */}
        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {viewModes.map(mode => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              style={{
                padding: '12px 24px',
                background: viewMode === mode.id ? 'var(--accent-purple)' : 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: viewMode === mode.id ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAP VIEW */}
      {viewMode === 'map' && (
        <div>
          {/* Traditional SDLC Flow */}
          <Card style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{
                padding: '8px 20px',
                background: 'rgba(248, 113, 113, 0.2)',
                color: '#f87171',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>TRADITIONAL SDLC</span>
              <span style={{ color: 'var(--text-muted)' }}>9 phases • 17+ weeks • 25+ roles • Ceremony-heavy</span>
            </div>

            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px 0' }}>
              {traditionalSDLCPhases.map((p, i) => (
                <div key={i} style={{
                  minWidth: '140px',
                  padding: '15px',
                  background: `${phaseColors[i]}15`,
                  border: `3px solid ${phaseColors[i]}`,
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.7rem', color: phaseColors[i], fontWeight: '700', marginBottom: '5px' }}>
                    PHASE {i + 1}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '8px' }}>
                    {p.name.split('&')[0].trim()}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#f87171' }}>
                    ⏱️ {p.duration}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline bar */}
            <div style={{
              display: 'flex',
              marginTop: '20px',
              background: 'var(--bg-elevated)',
              borderRadius: '8px',
              overflow: 'hidden',
              height: '40px'
            }}>
              {[
                { name: 'Plan', weeks: 2, color: '#a78bfa' },
                { name: 'Req', weeks: 3, color: '#60a5fa' },
                { name: 'Design', weeks: 2, color: '#22d3ee' },
                { name: 'Dev', weeks: 6, color: '#4ade80' },
                { name: 'Test', weeks: 3, color: '#facc15' },
                { name: 'Release', weeks: 1, color: '#f472b6' },
              ].map((p, i) => (
                <div key={i} style={{
                  flex: p.weeks,
                  background: `${p.color}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '2px solid var(--bg-primary)',
                  fontSize: '0.75rem'
                }}>
                  <span style={{ fontWeight: '600', color: p.color }}>{p.weeks}w</span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'right', marginTop: '5px', color: 'var(--accent-red)', fontWeight: '600' }}>
              Total: ~17 weeks
            </div>
          </Card>

          {/* Transformation Arrow */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px',
            position: 'relative'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
              padding: '20px 40px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)'
            }}>
              <span style={{ fontSize: '2rem' }}>🤖</span>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>TRANSFORM WITH CLAUDE</div>
                <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>9 phases → 3 phases | 17 weeks → 4 weeks</div>
              </div>
              <span style={{ fontSize: '2rem' }}>⬇️</span>
            </div>
          </div>

          {/* AI-Native SDLC */}
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{
                padding: '8px 20px',
                background: 'rgba(74, 222, 128, 0.2)',
                color: '#4ade80',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>AI-NATIVE SDLC</span>
              <span style={{ color: 'var(--text-muted)' }}>10 steps • 4-6 weeks • 3 human gates • AI executes</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {aiNativePhases.map((p, i) => (
                <div key={i} style={{
                  padding: '25px',
                  background: `${p.color}10`,
                  border: `2px solid ${p.color}`,
                  borderRadius: '16px',
                  position: 'relative'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ fontSize: '2rem' }}>{p.icon}</span>
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{p.name}</div>
                      <div style={{ fontSize: '0.85rem', color: p.color }}>⚡ {p.duration}</div>
                    </div>
                  </div>

                  {/* Collapses from */}
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '5px' }}>
                      REPLACES TRADITIONAL:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {p.collapsesFrom.map((cf, j) => (
                        <span key={j} style={{
                          padding: '3px 8px',
                          background: 'rgba(248, 113, 113, 0.2)',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          color: '#f87171',
                          textDecoration: 'line-through'
                        }}>{cf}</span>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      HOW IT WORKS:
                    </div>
                    <ul style={{ listStyle: 'none', fontSize: '0.8rem' }}>
                      {p.activities.map((a, j) => (
                        <li key={j} style={{ padding: '3px 0', color: 'var(--text-secondary)' }}>
                          <span style={{ color: p.color }}>✓</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Roles */}
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '5px' }}>
                      NEW ROLES:
                    </div>
                    {p.roles.map((r, j) => (
                      <div key={j} style={{
                        padding: '5px 10px',
                        background: `${p.color}20`,
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        marginBottom: '4px',
                        color: p.color
                      }}>{r}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* New Timeline */}
            <div style={{
              display: 'flex',
              marginTop: '25px',
              background: 'var(--bg-elevated)',
              borderRadius: '8px',
              overflow: 'hidden',
              height: '40px'
            }}>
              <div style={{ flex: 1, background: '#8b5cf633', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>Intent & Design: 3 days</span>
              </div>
              <div style={{ flex: 3, background: '#22d3ee33', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>AI-Augmented Build: 2 weeks</span>
              </div>
              <div style={{ flex: 2, background: '#4ade8033', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>Intelligent Ops: Continuous</span>
              </div>
            </div>
            <div style={{ textAlign: 'right', marginTop: '5px', color: 'var(--accent-green)', fontWeight: '600' }}>
              Time to production: ~4 weeks (then continuous)
            </div>
          </Card>

          {/* Revolutionary Changes */}
          <Card style={{ marginTop: '30px' }}>
            <h3 style={{ marginBottom: '20px' }}>🎯 Revolutionary Changes</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
              {revolutionaryChanges.map((item, i) => (
                <div key={i} style={{
                  padding: '15px',
                  background: 'var(--bg-elevated)',
                  borderRadius: '10px',
                  borderLeft: '3px solid var(--accent-purple)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    <span style={{ fontWeight: '600', color: 'var(--accent-purple)' }}>{item.label}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>{item.desc}</div>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '0.75rem', alignItems: 'center' }}>
                    <span style={{ padding: '3px 8px', background: 'rgba(248, 113, 113, 0.2)', color: '#f87171', borderRadius: '4px', textDecoration: 'line-through' }}>
                      {item.old}
                    </span>
                    <span>→</span>
                    <span style={{ padding: '3px 8px', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', borderRadius: '4px' }}>
                      {item.new}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Impact Summary */}
          <div style={{
            marginTop: '30px',
            padding: '30px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
            borderRadius: '16px',
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}>
            <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>📊 Total Transformation Impact</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '20px',
              textAlign: 'center'
            }}>
              {impactMetrics.map((m, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: m.color }}>{m.value}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* The Key Insight */}
          <Card style={{ marginTop: '30px' }}>
            <h3 style={{ marginBottom: '20px' }}>💡 The Key Insight</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              This transformation isn't about adding AI to existing processes - it's about fundamentally changing
              <strong> who does what</strong>. AI executes, humans decide at 3 strategic gates.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '15px',
              marginBottom: '20px'
            }}>
              {[
                { gate: 'Gate 1: Define Intent', who: 'Human', what: 'Sets the goal', icon: '🎯', color: 'var(--accent-orange)' },
                { gate: 'Gate 2: Review Specs', who: 'Human', what: 'Validates requirements', icon: '📋', color: 'var(--accent-orange)' },
                { gate: 'Gate 3: Final Approval', who: 'Human', what: 'Approves for production', icon: '✅', color: 'var(--accent-orange)' }
              ].map((item, i) => (
                <div key={i} style={{
                  background: `${item.color}15`,
                  border: `2px dashed ${item.color}`,
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                  <div style={{ fontWeight: '600', color: item.color, marginBottom: '5px' }}>{item.gate}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.what}</div>
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', textAlign: 'center' }}>
              <strong>Everything between these gates</strong> - requirements generation, design, coding, testing, deployment -
              is handled by <strong>AI agents</strong> working in parallel.
            </p>

            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                See the <a href="/sdlc-comparison" style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>detailed step-by-step flow</a> showing exactly how work moves through the 10 stages, or
                explore the complete <a href="/ai-native/agent-architecture" style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>AI Agent Architecture</a>.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Phase Navigation - for journey/compare/present */}
      {viewMode !== 'map' && (
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          padding: '15px',
          background: 'var(--bg-card)',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '1px solid var(--border)'
        }}>
          {transformationData.map((p, i) => (
            <button
              key={i}
              onClick={() => setActivePhase(i)}
              style={{
                padding: '10px 20px',
                background: activePhase === i ? `linear-gradient(135deg, ${phaseColors[i]}, ${phaseColors[i]}88)` : 'var(--bg-elevated)',
                border: activePhase === i ? 'none' : '1px solid var(--border)',
                borderRadius: '8px',
                color: activePhase === i ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontWeight: activePhase === i ? '600' : '400',
                transition: 'all 0.2s'
              }}
            >
              <span style={{ marginRight: '8px' }}>{p.transformation.icon}</span>
              {p.traditional.name.split(' ')[0]}
            </button>
          ))}
        </div>
      )}

      {/* Journey View */}
      {viewMode === 'journey' && phase && (
        <div>
          {/* Transformation Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '30px',
            padding: '30px',
            background: 'var(--bg-card)',
            borderRadius: '16px',
            border: '1px solid var(--border)'
          }}>
            <TransformationBadge type={phase.transformation.type} />
            <h2 style={{ fontSize: '2rem', margin: '20px 0 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
              <span style={{ fontSize: '2.5rem' }}>{phase.transformation.icon}</span>
              {phase.transformation.headline}
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              {phase.transformation.insight}
            </p>

            {/* Key Metrics */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '25px' }}>
              {Object.entries(phase.transformation.metrics).map(([key, value]) => (
                <div key={key} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>{value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Before/After Comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '20px', alignItems: 'stretch' }}>
            {/* Traditional */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(248, 113, 113, 0.1), rgba(248, 113, 113, 0.05))',
              border: '1px solid rgba(248, 113, 113, 0.3)',
              borderRadius: '16px',
              padding: '25px'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '5px 15px',
                background: 'rgba(248, 113, 113, 0.2)',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#f87171',
                marginBottom: '15px'
              }}>TRADITIONAL</div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{phase.traditional.name}</h3>
              <div style={{ color: 'var(--accent-red)', fontSize: '0.9rem', marginBottom: '20px' }}>
                ⏱️ {phase.traditional.duration}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>ACTIVITIES</h4>
                <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
                  {phase.traditional.activities.map((a, i) => (
                    <li key={i} style={{ padding: '6px 0', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                      • {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', color: '#f87171', marginBottom: '10px' }}>⚠️ PAIN POINTS</h4>
                <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#f87171' }}>
                  {phase.traditional.painPoints.map((p, i) => (
                    <li key={i} style={{ padding: '4px 0' }}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Arrow */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 10px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
              }}>→</div>
              <div style={{
                marginTop: '10px',
                padding: '5px 15px',
                background: 'var(--bg-card)',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '600',
                color: 'var(--accent-purple)'
              }}>WITH CLAUDE</div>
            </div>

            {/* AI-Native */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(74, 222, 128, 0.05))',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              borderRadius: '16px',
              padding: '25px'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '5px 15px',
                background: 'rgba(74, 222, 128, 0.2)',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#4ade80',
                marginBottom: '15px'
              }}>AI-NATIVE</div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{phase.aiNative.name}</h3>
              <div style={{ color: 'var(--accent-green)', fontSize: '0.9rem', marginBottom: '20px' }}>
                ⚡ {phase.aiNative.duration}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>HOW IT WORKS</h4>
                <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
                  {phase.aiNative.activities.map((a, i) => (
                    <li key={i} style={{ padding: '6px 0', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-green)' }}>✓</span> {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', color: '#4ade80', marginBottom: '10px' }}>🚀 AI CAPABILITIES</h4>
                <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#4ade80' }}>
                  {phase.aiNative.capabilities.map((c, i) => (
                    <li key={i} style={{ padding: '4px 0' }}>★ {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
            padding: '20px',
            background: 'var(--bg-card)',
            borderRadius: '12px'
          }}>
            <Button
              variant="secondary"
              onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
              disabled={activePhase === 0}
            >
              ← Previous Phase
            </Button>

            <span style={{ color: 'var(--text-muted)', alignSelf: 'center' }}>
              {activePhase + 1} of {transformationData.length}
            </span>

            <Button
              onClick={() => setActivePhase(Math.min(transformationData.length - 1, activePhase + 1))}
              disabled={activePhase === transformationData.length - 1}
            >
              Next Phase →
            </Button>
          </div>
        </div>
      )}

      {/* Compare View */}
      {viewMode === 'compare' && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1000px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-card)' }}>
                <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid var(--border)' }}>Phase</th>
                <th style={{ padding: '15px', textAlign: 'center', borderBottom: '2px solid var(--accent-red)', color: 'var(--accent-red)' }}>Traditional</th>
                <th style={{ padding: '15px', textAlign: 'center', borderBottom: '2px solid var(--accent-purple)' }}>Transformation</th>
                <th style={{ padding: '15px', textAlign: 'center', borderBottom: '2px solid var(--accent-green)', color: 'var(--accent-green)' }}>AI-Native</th>
                <th style={{ padding: '15px', textAlign: 'center', borderBottom: '2px solid var(--accent-blue)' }}>Impact</th>
              </tr>
            </thead>
            <tbody>
              {transformationData.map((p, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '20px', background: 'var(--bg-elevated)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.5rem' }}>{p.transformation.icon}</span>
                      <div style={{ fontWeight: '600' }}>{p.traditional.name}</div>
                    </div>
                  </td>
                  <td style={{ padding: '20px', background: 'rgba(248, 113, 113, 0.05)' }}>
                    <div style={{ color: 'var(--accent-red)', marginBottom: '5px' }}>⏱️ {p.traditional.duration}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {p.traditional.roles.slice(0, 3).join(', ')}
                    </div>
                  </td>
                  <td style={{ padding: '20px', textAlign: 'center' }}>
                    <TransformationBadge type={p.transformation.type} />
                    <div style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {p.transformation.headline}
                    </div>
                  </td>
                  <td style={{ padding: '20px', background: 'rgba(74, 222, 128, 0.05)' }}>
                    <div style={{ color: 'var(--accent-green)', marginBottom: '5px' }}>⚡ {p.aiNative.duration}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {p.aiNative.roles.join(', ')}
                    </div>
                  </td>
                  <td style={{ padding: '20px', textAlign: 'center' }}>
                    {Object.entries(p.transformation.metrics).slice(0, 2).map(([k, v]) => (
                      <div key={k} style={{ marginBottom: '5px' }}>
                        <span style={{ color: 'var(--accent-green)', fontWeight: '600' }}>{v}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '5px' }}>{k}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Present View */}
      {viewMode === 'present' && phase && (
        <div style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '4rem' }}>{phase.transformation.icon}</span>
            <h2 style={{ fontSize: '3rem', margin: '20px 0' }}>{phase.transformation.headline}</h2>
            <TransformationBadge type={phase.transformation.type} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1rem', color: 'var(--accent-red)', marginBottom: '10px' }}>BEFORE</div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--accent-red)' }}>{phase.traditional.duration}</div>
              <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{phase.traditional.name}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1rem', color: 'var(--accent-green)', marginBottom: '10px' }}>AFTER</div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--accent-green)' }}>{phase.aiNative.duration}</div>
              <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{phase.aiNative.name}</div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
            marginTop: '50px'
          }}>
            {Object.entries(phase.transformation.metrics).map(([key, value]) => (
              <div key={key} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--accent-purple)' }}>{value}</div>
                <div style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '1.3rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '50px auto 0',
            fontStyle: 'italic'
          }}>
            "{phase.transformation.insight}"
          </p>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '50px'
          }}>
            <Button variant="secondary" size="lg" onClick={() => setActivePhase(Math.max(0, activePhase - 1))}>
              ← Previous
            </Button>
            <div style={{ color: 'var(--text-muted)', fontSize: '1.2rem', alignSelf: 'center' }}>
              {activePhase + 1} / {transformationData.length}
            </div>
            <Button size="lg" onClick={() => setActivePhase(Math.min(transformationData.length - 1, activePhase + 1))}>
              Next →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transformation;
