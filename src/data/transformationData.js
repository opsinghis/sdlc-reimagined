export const transformationData = [
  {
    id: 'planning',
    traditional: {
      name: 'Planning & Ideation',
      duration: '2-4 weeks',
      activities: ['Stakeholder workshops', 'Manual requirement gathering', 'Spreadsheet budgeting', 'PowerPoint roadmaps'],
      roles: ['Product Owner', 'Business Analyst', 'Project Manager', 'Stakeholders'],
      painPoints: ['Slow consensus building', 'Requirements lost in translation', 'Outdated by the time documented'],
      artifacts: ['Project Charter', 'BRD', 'Roadmap deck']
    },
    aiNative: {
      name: 'Intent Capture',
      duration: '1-2 days',
      activities: ['Voice/text intent capture', 'AI generates full specs', 'Auto-prioritization from OKRs', 'Living roadmaps'],
      roles: ['Product Strategist', 'AI orchestrates'],
      capabilities: ['Natural language → structured requirements', 'Auto-generated user stories', 'Real-time feasibility analysis', 'Dynamic roadmap updates'],
      artifacts: ['AI-generated PRD', 'Prioritized backlog', 'Living roadmap']
    },
    transformation: {
      type: 'COLLAPSE',
      icon: '🎯',
      headline: 'From Workshops to Intent',
      insight: 'Replace weeks of meetings with minutes of intent capture. AI expands your vision into comprehensive specifications.',
      metrics: { time: '-85%', quality: '+60%', artifacts: 'Auto-generated' }
    }
  },
  {
    id: 'requirements',
    traditional: {
      name: 'Requirements Analysis',
      duration: '2-6 weeks',
      activities: ['User interviews', 'Story writing', 'Acceptance criteria', 'Refinement meetings', 'Estimation sessions'],
      roles: ['BA', 'PO', 'UX Researcher', 'Tech Lead', 'Team'],
      painPoints: ['PO bottleneck', 'Incomplete ACs', 'Missing edge cases', 'Estimation theater'],
      artifacts: ['User stories', 'Use cases', 'Process flows', 'Estimates']
    },
    aiNative: {
      name: 'AI Requirements Engine',
      duration: 'Continuous (minutes per story)',
      activities: ['AI generates stories from intent', 'Auto-complete acceptance criteria', 'Edge case discovery', 'ML-based estimation'],
      roles: ['PO reviews & approves', 'AI generates'],
      capabilities: ['100% AC coverage', 'Automatic edge case detection', 'Historical estimation accuracy', 'Dependency auto-mapping'],
      artifacts: ['Complete stories', 'Test scenarios', 'Accurate estimates']
    },
    transformation: {
      type: 'AUTOMATE',
      icon: '🤖',
      headline: 'From Writing to Reviewing',
      insight: 'PO shifts from story writer to story curator. AI handles the 80% routine work, humans focus on 20% strategic decisions.',
      metrics: { time: '-90%', coverage: '+100%', accuracy: '+40%' }
    }
  },
  {
    id: 'design',
    traditional: {
      name: 'Design & Architecture',
      duration: '2-4 weeks',
      activities: ['Architecture reviews', 'Manual diagramming', 'Figma designs', 'API spec writing', 'Design handoffs'],
      roles: ['Architect', 'UX Designer', 'Tech Lead', 'API Designer'],
      painPoints: ['Design-dev handoff gaps', 'Outdated diagrams', 'Review bottlenecks', 'Inconsistent decisions'],
      artifacts: ['Architecture docs', 'Figma files', 'API specs', 'ERDs']
    },
    aiNative: {
      name: 'AI Design Co-Pilot',
      duration: 'Hours per feature',
      activities: ['AI generates architecture options', 'Design-to-code automation', 'Auto API specs from intent', 'Living diagrams'],
      roles: ['Architect curates', 'Designer guides', 'AI generates'],
      capabilities: ['Multiple architecture options with trade-offs', 'Figma → React in seconds', 'Self-updating documentation', 'Pattern enforcement'],
      artifacts: ['Generated designs', 'Working prototypes', 'Live API specs']
    },
    transformation: {
      type: 'ACCELERATE',
      icon: '🚀',
      headline: 'From Drawing to Directing',
      insight: 'Architects become directors, not drafters. AI generates options, humans make strategic choices.',
      metrics: { time: '-75%', options: '3x more', consistency: '+90%' }
    }
  },
  {
    id: 'development',
    traditional: {
      name: 'Development',
      duration: '4-12 weeks',
      activities: ['Sprint planning', 'Manual coding', 'Standups', 'Code reviews', 'Documentation'],
      roles: ['Developers', 'Tech Lead', 'Scrum Master'],
      painPoints: ['Senior dev bottleneck', 'Context switching', 'Code review delays', 'Documentation debt'],
      artifacts: ['Code', 'Unit tests', 'Technical docs']
    },
    aiNative: {
      name: 'AI-Augmented Development',
      duration: '1-4 weeks',
      activities: ['AI pair programming', 'Spec-to-code generation', 'Auto code review', 'Living documentation'],
      roles: ['Developer orchestrates', 'AI implements', 'Human approves'],
      capabilities: ['Natural language to code', 'Full codebase context', 'Instant code review', 'Auto-generated docs'],
      artifacts: ['Generated code', 'Complete tests', 'Living docs']
    },
    transformation: {
      type: 'REVOLUTIONIZE',
      icon: '⚡',
      headline: 'From Typing to Orchestrating',
      insight: 'Developers become AI conductors. Express intent, review output, focus on architecture and edge cases.',
      metrics: { velocity: '+55%', bugs: '-30%', docs: '+200%' }
    }
  },
  {
    id: 'testing',
    traditional: {
      name: 'Testing & QA',
      duration: '2-4 weeks',
      activities: ['Test planning', 'Manual test writing', 'Test execution', 'Bug triage', 'Regression testing'],
      roles: ['QA Lead', 'QE Engineer', 'SDET', 'Manual QA'],
      painPoints: ['QE bottleneck', 'Flaky tests', 'Maintenance burden', 'Coverage gaps'],
      artifacts: ['Test plans', 'Test scripts', 'Bug reports', 'Coverage reports']
    },
    aiNative: {
      name: 'Autonomous QE Agent',
      duration: 'Continuous (minutes per PR)',
      activities: ['AI generates tests from code', 'Self-healing locators', 'Intelligent failure analysis', 'Autonomous exploratory testing'],
      roles: ['QE Architect strategizes', 'AI executes'],
      capabilities: ['100% PR test coverage', 'Zero flaky tests', 'Instant root cause analysis', 'Edge case discovery'],
      artifacts: ['Auto-generated tests', 'Self-healing suites', 'Intelligent reports']
    },
    transformation: {
      type: 'ELIMINATE',
      icon: '🧪',
      headline: 'From Writing Tests to Ensuring Quality',
      insight: 'QE evolves from test writers to quality strategists. AI handles test creation and maintenance entirely.',
      metrics: { coverage: '+70%', time: '-80%', maintenance: '-90%' }
    }
  },
  {
    id: 'cicd',
    traditional: {
      name: 'Build & Release',
      duration: '1-2 days per release',
      activities: ['Build management', 'Manual approvals', 'CAB meetings', 'Release coordination', 'Rollback planning'],
      roles: ['DevOps', 'Release Manager', 'CAB members'],
      painPoints: ['Slow approvals', 'Release anxiety', 'Manual rollbacks', 'Coordination overhead'],
      artifacts: ['Release notes', 'Change records', 'Runbooks']
    },
    aiNative: {
      name: 'Intelligent Continuous Deployment',
      duration: 'Minutes (continuous)',
      activities: ['AI risk assessment', 'Auto-approval for safe changes', 'Predictive canary analysis', 'Autonomous rollback'],
      roles: ['Platform Engineer configures', 'AI orchestrates'],
      capabilities: ['Real-time risk scoring', 'Auto-promote safe changes', 'Predictive failure detection', 'Self-healing deployments'],
      artifacts: ['Auto release notes', 'AI risk reports', 'Living runbooks']
    },
    transformation: {
      type: 'CONTINUOUS',
      icon: '🚀',
      headline: 'From Release Events to Continuous Flow',
      insight: 'Every PR can go to production. AI assesses risk and either auto-deploys or escalates for human review.',
      metrics: { frequency: '+10x', leadTime: '-90%', failures: '-45%' }
    }
  },
  {
    id: 'operations',
    traditional: {
      name: 'Operations & Support',
      duration: 'Continuous (reactive)',
      activities: ['Monitoring', 'Incident response', 'Manual runbooks', 'L1/L2/L3 escalation', 'On-call rotation'],
      roles: ['SRE', 'NOC', 'Support Engineers', 'On-call devs'],
      painPoints: ['Alert fatigue', 'Toil accumulation', 'Knowledge silos', 'Burnout'],
      artifacts: ['Incident tickets', 'Post-mortems', 'Runbooks']
    },
    aiNative: {
      name: 'AI Operations (AIOps)',
      duration: 'Continuous (proactive)',
      activities: ['Predictive alerting', 'Auto-remediation', 'Intelligent routing', 'Self-healing systems'],
      roles: ['SRE architects systems', 'AI operates'],
      capabilities: ['80% incidents auto-resolved', 'Predictive failure detection', 'Auto-generated runbooks', 'Zero-toil operations'],
      artifacts: ['AI incident reports', 'Auto post-mortems', 'Living runbooks']
    },
    transformation: {
      type: 'AUTONOMOUS',
      icon: '🔮',
      headline: 'From Firefighting to Prevention',
      insight: 'AI handles L1/L2 entirely. Humans only engage for novel L3 issues and architectural improvements.',
      metrics: { autoResolve: '80%', toil: '-60%', mttr: '-70%' }
    }
  },
  {
    id: 'ceremonies',
    traditional: {
      name: 'Agile Ceremonies',
      duration: '~20 hrs/dev/month',
      activities: ['Sprint Planning (4hr)', 'Daily Standup (1.25hr/wk)', 'Refinement (1hr/wk)', 'Review (1hr)', 'Retro (1hr)'],
      roles: ['Entire team required'],
      painPoints: ['Meeting fatigue', 'Context switching', 'Sync overhead', 'Timezone challenges'],
      artifacts: ['Meeting notes', 'Action items', 'Sprint reports']
    },
    aiNative: {
      name: 'Async-First Collaboration',
      duration: '~6 hrs/dev/month',
      activities: ['AI daily digest (async)', 'Weekly 30min alignment', 'AI-prepared retros', 'Continuous async refinement'],
      roles: ['Team syncs only when needed'],
      capabilities: ['AI-generated status', 'Async decision making', 'Smart meeting scheduling', 'Auto-facilitated retros'],
      artifacts: ['AI digests', 'Auto-summaries', 'Action tracking']
    },
    transformation: {
      type: 'ELIMINATE',
      icon: '📅',
      headline: 'From Meeting Culture to Flow State',
      insight: 'Kill the daily standup. AI knows what everyone is doing. Reserve sync time for what truly needs human discussion.',
      metrics: { meetings: '-70%', flowTime: '+4hrs/day', async: '90%' }
    }
  }
];

export const revolutionaryChanges = [
  { icon: '🚫', label: 'NO Sprints', desc: 'Continuous flow replaces time-boxed iterations', old: '2-week sprints', new: 'Continuous deployment' },
  { icon: '🚫', label: 'NO Standups', desc: 'AI generates async status updates automatically', old: '15 min/day × 5 = 1.25hr/week', new: 'AI digest in Slack' },
  { icon: '🚫', label: 'NO Manual Tickets', desc: 'Express intent, AI creates and manages work', old: 'Hours writing tickets', new: 'Voice/text intent → done' },
  { icon: '🚫', label: 'NO Separate QA Phase', desc: 'Quality built into every commit by AI', old: '2-4 weeks of testing', new: 'Instant test generation' },
  { icon: '🚫', label: 'NO Manual Docs', desc: 'Living documentation auto-generated', old: 'Always outdated', new: 'Always current' },
  { icon: '🚫', label: 'NO L1/L2 Support', desc: 'AI handles 80% of incidents automatically', old: 'Manual runbooks', new: 'Self-healing systems' },
];

export const impactMetrics = [
  { value: '9→3', label: 'Phases', color: 'var(--accent-purple)' },
  { value: '17→4', label: 'Weeks', color: 'var(--accent-green)' },
  { value: '-70%', label: 'Meetings', color: 'var(--accent-cyan)' },
  { value: '+55%', label: 'Velocity', color: 'var(--accent-blue)' },
  { value: '80%', label: 'Auto-Ops', color: 'var(--accent-pink)' },
  { value: '3x', label: 'Releases', color: 'var(--accent-orange)' },
];

export default transformationData;
