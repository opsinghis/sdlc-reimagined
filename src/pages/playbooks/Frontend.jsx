import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  PromptBox,
  CodeBlock,
  InfoBox
} from '../../components/ui';

const Frontend = () => {
  const dailyWorkflows = [
    {
      title: 'Component Development',
      icon: '🧩',
      prompt: `"Create a React component for [describe component]:
1. TypeScript with proper types
2. Styled with our design system (Tailwind/styled-components)
3. Accessible (ARIA labels, keyboard nav)
4. Responsive design
5. Unit tests with React Testing Library
6. Storybook story
7. Follow our component patterns in src/components/"`
    },
    {
      title: 'Design Implementation',
      icon: '🎨',
      prompt: `"Convert this Figma design to React:
1. Match the design pixel-perfect
2. Use design tokens from our system
3. Handle all responsive breakpoints
4. Add hover/focus/active states
5. Implement animations per spec
6. Create component variants
7. Document props in Storybook"`
    },
    {
      title: 'State Management',
      icon: '📊',
      prompt: `"Implement state management for [feature]:
1. Choose appropriate state location (local/context/global)
2. Define TypeScript types for state shape
3. Create actions/reducers (if Redux) or store (if Zustand)
4. Add selectors for derived data
5. Handle loading and error states
6. Add persistence if needed
7. Write tests for state logic"`
    },
    {
      title: 'API Integration',
      icon: '🔗',
      prompt: `"Integrate API endpoint for [feature]:
1. Create typed API client function
2. Use React Query/SWR for caching
3. Handle loading, error, empty states
4. Add optimistic updates if applicable
5. Implement retry logic
6. Add request cancellation
7. Test with MSW mocks"`
    },
    {
      title: 'Performance Optimization',
      icon: '⚡',
      prompt: `"Optimize performance of this component:
1. Analyze with React DevTools Profiler
2. Identify unnecessary re-renders
3. Add appropriate memoization
4. Implement virtualization if needed
5. Optimize bundle size (code splitting)
6. Add loading skeletons
7. Measure improvement with metrics"`
    },
    {
      title: 'Accessibility Audit',
      icon: '♿',
      prompt: `"Audit accessibility for [page/component]:
1. Run axe-core analysis
2. Test keyboard navigation
3. Test screen reader announcements
4. Check color contrast ratios
5. Verify focus management
6. Test with reduced motion
7. Generate remediation report"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="🎨 Frontend Team Playbook"
        description="AI-native workflows for frontend development"
      />

      <Card>
        <CardTitle icon="⚙️">Tech Stack Context</CardTitle>
        <CodeBlock language="markdown" filename="CLAUDE-frontend.md">
{`# Frontend Team CLAUDE.md

## Tech Stack
- React 18 with TypeScript
- State: Zustand / React Query
- Styling: Tailwind CSS + Headless UI
- Testing: Vitest + React Testing Library + Playwright
- Build: Vite
- Design System: Custom based on Figma tokens

## Conventions
- Functional components only
- Custom hooks for reusable logic
- Collocate tests with components
- Use barrel exports (index.ts)
- CSS modules for component styles

## File Structure
src/
├── components/    # Shared components
├── features/      # Feature-based modules
├── hooks/         # Custom hooks
├── lib/           # Utilities and helpers
├── pages/         # Route components
├── stores/        # Global state
└── styles/        # Global styles and tokens`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Daily Workflows</CardTitle>

        {dailyWorkflows.map((workflow, index) => (
          <div key={index} style={{
            background: 'var(--bg-elevated)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>{workflow.icon}</span>
              <h4 style={{ margin: 0 }}>{workflow.title}</h4>
            </div>
            <PromptBox label="Claude Prompt">
              {workflow.prompt}
            </PromptBox>
          </div>
        ))}
      </Card>

      <Card>
        <CardTitle icon="📋">Quick Commands</CardTitle>
        <CodeBlock language="bash" filename="frontend-aliases.sh">
{`# Component scaffolding
alias cnew='claude "Create a new React component with TypeScript, tests, and Storybook story:"'

# Design to code
alias cdesign='claude "Convert this Figma design to React component:"'

# Fix styling
alias cstyle='claude "Fix the styling issues in this component to match the design:"'

# Accessibility fix
alias ca11y='claude "Fix accessibility issues in this component:"'

# Performance
alias cperf='claude "Optimize performance of this component:"'

# Test generation
alias cftest='claude "Generate React Testing Library tests for this component:"'

# E2E test
alias ce2e='claude "Generate Playwright E2E test for this user flow:"'

# State refactor
alias cstate='claude "Refactor state management in this component:"'`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🎯">Quality Checklist</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '15px', color: 'var(--accent-purple)' }}>Before PR</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
              <li style={{ padding: '5px 0' }}>□ TypeScript strict mode passes</li>
              <li style={{ padding: '5px 0' }}>□ All tests pass</li>
              <li style={{ padding: '5px 0' }}>□ Storybook story added</li>
              <li style={{ padding: '5px 0' }}>□ Accessibility audit clean</li>
              <li style={{ padding: '5px 0' }}>□ Responsive tested (3 breakpoints)</li>
              <li style={{ padding: '5px 0' }}>□ No console errors/warnings</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '15px', color: 'var(--accent-blue)' }}>AI Review Focus</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
              <li style={{ padding: '5px 0' }}>□ Component composition</li>
              <li style={{ padding: '5px 0' }}>□ Render optimization</li>
              <li style={{ padding: '5px 0' }}>□ Error boundary coverage</li>
              <li style={{ padding: '5px 0' }}>□ Loading state handling</li>
              <li style={{ padding: '5px 0' }}>□ Props interface design</li>
              <li style={{ padding: '5px 0' }}>□ Event handler patterns</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📊">Team Metrics</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>95%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>TypeScript Coverage</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>90%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Test Coverage</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>100</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Lighthouse Score</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>0</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>A11y Violations</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Frontend;
