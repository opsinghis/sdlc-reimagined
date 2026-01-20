export const phaseColors = [
  '#a78bfa', // 0 - Planning (purple)
  '#60a5fa', // 1 - Requirements (blue)
  '#22d3ee', // 2 - Design (cyan)
  '#4ade80', // 3 - Development (green)
  '#facc15', // 4 - Testing (bright yellow/gold)
  '#fb923c', // 5 - Build (orange)
  '#f472b6', // 6 - Deployment (pink)
  '#f87171', // 7 - Operations (red)
  '#c084fc'  // 8 - Maintenance (light purple)
];

export const traditionalSDLCPhases = [
  {
    name: 'Planning & Ideation',
    duration: '2-4 weeks',
    activities: [
      'Vision & goal setting',
      'Stakeholder identification',
      'High-level scoping',
      'Feasibility analysis',
      'Resource planning',
      'Budget estimation',
      'Risk assessment',
      'Roadmap creation'
    ],
    roles: ['Product Owner', 'Business Analyst', 'Project Manager', 'Stakeholders', 'Enterprise Architect'],
    inputs: [
      'Business strategy & OKRs',
      'Market research',
      'Customer feedback',
      'Competitive analysis',
      'Technical constraints'
    ],
    outputs: [
      'Project charter',
      'Product vision document',
      'High-level roadmap',
      'Initial budget estimate',
      'Resource plan',
      'Risk register'
    ],
    tools: ['Aha!', 'ProductBoard', 'Miro', 'PowerPoint', 'Confluence', 'Excel'],
    ceremonies: [
      'Kickoff meeting',
      'Stakeholder workshops',
      'Vision alignment sessions',
      'Portfolio review'
    ],
    painPoints: [
      'Unclear requirements from business',
      'Competing stakeholder priorities',
      'Unrealistic timeline expectations',
      'Scope creep starts early'
    ]
  },
  {
    name: 'Requirements Analysis',
    duration: '2-6 weeks',
    activities: [
      'Requirements elicitation',
      'User research & interviews',
      'Use case development',
      'User story writing',
      'Acceptance criteria definition',
      'Requirements prioritization',
      'Traceability mapping',
      'Requirements sign-off'
    ],
    roles: ['Business Analyst', 'Product Owner', 'UX Researcher', 'Subject Matter Expert', 'Technical Lead'],
    inputs: [
      'Project charter',
      'Stakeholder interviews',
      'User research data',
      'Existing system docs',
      'Regulatory requirements'
    ],
    outputs: [
      'BRD (Business Req Doc)',
      'FRD (Functional Req Doc)',
      'User stories & epics',
      'Use case diagrams',
      'Process flows',
      'Requirements traceability matrix',
      'Prioritized backlog'
    ],
    tools: ['Jira', 'Confluence', 'Figma', 'Miro', 'Lucidchart', 'User Interviews', 'Survey tools'],
    ceremonies: [
      'Requirements workshops',
      'User interviews',
      'Backlog refinement',
      'Story mapping sessions',
      'Sign-off meetings'
    ],
    painPoints: [
      'Incomplete requirements',
      'Ambiguous acceptance criteria',
      'Missing edge cases',
      'Requirements change frequently',
      'PO bottleneck for clarifications'
    ]
  },
  {
    name: 'Design & Architecture',
    duration: '2-4 weeks',
    activities: [
      'System architecture design',
      'API design & contracts',
      'Database modeling',
      'UI/UX design',
      'Security architecture',
      'Integration design',
      'Technical specifications',
      'Design reviews'
    ],
    roles: ['Solution Architect', 'Tech Lead', 'UX Designer', 'UI Designer', 'Security Architect', 'DBA'],
    inputs: [
      'Functional requirements',
      'Non-functional requirements',
      'Technical constraints',
      'Existing architecture',
      'Design system'
    ],
    outputs: [
      'Architecture Decision Records',
      'System design document',
      'API specifications (OpenAPI)',
      'Database ERD',
      'UI mockups & prototypes',
      'Sequence diagrams',
      'Infrastructure diagram',
      'Security design doc'
    ],
    tools: ['Figma', 'Lucidchart', 'Draw.io', 'Swagger', 'Enterprise Architect', 'Mermaid', 'Storybook'],
    ceremonies: [
      'Architecture review board',
      'Design critiques',
      'API review sessions',
      'Security review',
      'UX review'
    ],
    painPoints: [
      'Design-development handoff gaps',
      'Architecture review bottleneck',
      'Inconsistent design decisions',
      'Missing NFR considerations',
      'Design documentation debt'
    ]
  },
  {
    name: 'Development',
    duration: '4-12 weeks (multiple sprints)',
    activities: [
      'Sprint planning',
      'Code development',
      'Unit test writing',
      'Code review',
      'Bug fixing',
      'Technical debt management',
      'Documentation',
      'Daily standups'
    ],
    roles: ['Senior Developer', 'Developer', 'Tech Lead', 'Scrum Master', 'DevOps Engineer'],
    inputs: [
      'User stories with AC',
      'Design specifications',
      'API contracts',
      'UI mockups',
      'Coding standards'
    ],
    outputs: [
      'Working code',
      'Unit tests',
      'Code documentation',
      'API implementations',
      'PR/MR submissions',
      'Technical documentation',
      'Build artifacts'
    ],
    tools: ['VS Code', 'IntelliJ', 'Git', 'GitHub/GitLab', 'Jira', 'Slack', 'SonarQube'],
    ceremonies: [
      'Sprint planning (4 hrs)',
      'Daily standup (15 min)',
      'Backlog refinement (1 hr/wk)',
      'Sprint review (1 hr)',
      'Sprint retrospective (1 hr)',
      'Code review sessions'
    ],
    painPoints: [
      'Context switching overhead',
      'Code review bottlenecks',
      'Technical debt accumulation',
      'Unclear requirements mid-sprint',
      'Senior dev dependency',
      'Meeting overload'
    ]
  },
  {
    name: 'Testing & QA',
    duration: '2-4 weeks per release',
    activities: [
      'Test planning',
      'Test case development',
      'Manual testing',
      'Automated testing',
      'Integration testing',
      'Performance testing',
      'Security testing',
      'UAT coordination',
      'Bug triage'
    ],
    roles: ['QA Lead', 'QE Engineer', 'SDET', 'Performance Engineer', 'Security Tester', 'Business Users (UAT)'],
    inputs: [
      'Requirements & AC',
      'Test strategy',
      'Deployed code (staging)',
      'Test data',
      'Test environments'
    ],
    outputs: [
      'Test plan',
      'Test cases',
      'Automated test suites',
      'Test execution reports',
      'Bug reports',
      'Coverage reports',
      'Performance benchmarks',
      'Security scan results',
      'UAT sign-off'
    ],
    tools: ['Jest', 'Playwright', 'Selenium', 'JMeter', 'Postman', 'OWASP ZAP', 'TestRail', 'Allure'],
    ceremonies: [
      'Test planning sessions',
      'Bug triage meetings',
      'UAT sessions',
      'Go/No-go meetings',
      'Test retrospectives'
    ],
    painPoints: [
      'Testing bottleneck before release',
      'Flaky automated tests',
      'Insufficient test coverage',
      'Test environment issues',
      'QE:Dev ratio imbalance',
      'Manual regression overhead'
    ]
  },
  {
    name: 'Build & CI',
    duration: 'Continuous',
    activities: [
      'Build automation',
      'Continuous integration',
      'Artifact management',
      'Dependency management',
      'Static code analysis',
      'Security scanning',
      'Build optimization'
    ],
    roles: ['DevOps Engineer', 'Build Engineer', 'Platform Engineer', 'Developer'],
    inputs: [
      'Source code',
      'Build configurations',
      'Dependencies',
      'Pipeline definitions',
      'Quality gates config'
    ],
    outputs: [
      'Build artifacts',
      'Docker images',
      'Test reports',
      'Code quality reports',
      'Security scan reports',
      'Dependency reports',
      'Build metrics'
    ],
    tools: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Docker', 'Artifactory', 'SonarQube', 'Snyk'],
    ceremonies: [
      'Build failure triage',
      'Pipeline reviews',
      'Dependency updates review'
    ],
    painPoints: [
      'Slow build times',
      'Flaky pipeline steps',
      'Dependency conflicts',
      'Build environment drift',
      'Security vulnerability backlog'
    ]
  },
  {
    name: 'Deployment & Release',
    duration: '1-2 days per release',
    activities: [
      'Release planning',
      'Environment preparation',
      'Deployment execution',
      'Smoke testing',
      'Feature flag management',
      'Rollback preparation',
      'Release communication',
      'Change management'
    ],
    roles: ['Release Manager', 'DevOps Engineer', 'SRE', 'QA Lead', 'Product Owner', 'Change Advisory Board'],
    inputs: [
      'Release candidate',
      'Release notes',
      'Deployment runbook',
      'Rollback plan',
      'Change request'
    ],
    outputs: [
      'Deployed application',
      'Release notes',
      'Deployment verification',
      'Change records',
      'Communication to stakeholders',
      'Updated documentation'
    ],
    tools: ['ArgoCD', 'Spinnaker', 'Harness', 'LaunchDarkly', 'ServiceNow', 'Kubernetes', 'Terraform'],
    ceremonies: [
      'Release planning meeting',
      'CAB (Change Advisory Board)',
      'Go/No-go decision',
      'Release retrospective',
      'Stakeholder communication'
    ],
    painPoints: [
      'Manual deployment steps',
      'CAB approval delays',
      'Release coordination overhead',
      'Rollback complexity',
      'Release night stress',
      'Infrequent releases (fear)'
    ]
  },
  {
    name: 'Operations & Monitoring',
    duration: 'Continuous',
    activities: [
      'Infrastructure management',
      'Monitoring & alerting',
      'Incident response',
      'Performance optimization',
      'Capacity planning',
      'Backup & recovery',
      'Security patching',
      'Log management'
    ],
    roles: ['SRE', 'Platform Engineer', 'DevOps Engineer', 'NOC Engineer', 'DBA', 'Security Engineer'],
    inputs: [
      'Running systems',
      'Monitoring data',
      'Alerts',
      'Logs',
      'Performance metrics'
    ],
    outputs: [
      'System uptime',
      'Incident reports',
      'Performance reports',
      'Capacity forecasts',
      'Runbooks',
      'Post-mortems',
      'SLA reports'
    ],
    tools: ['Datadog', 'New Relic', 'PagerDuty', 'Splunk', 'Prometheus', 'Grafana', 'ELK Stack', 'AWS CloudWatch'],
    ceremonies: [
      'On-call handoff',
      'Incident bridge calls',
      'Post-mortem reviews',
      'Capacity planning reviews',
      'SLA reviews'
    ],
    painPoints: [
      'Alert fatigue',
      'Manual runbook execution',
      'On-call burnout',
      'Reactive vs proactive ops',
      'Knowledge silos',
      'Toil accumulation'
    ]
  },
  {
    name: 'Maintenance & Support',
    duration: 'Continuous',
    activities: [
      'Bug fixes',
      'Patch management',
      'User support (L1/L2/L3)',
      'Technical debt reduction',
      'Documentation updates',
      'Knowledge transfer',
      'Compliance updates',
      'EOL planning'
    ],
    roles: ['Support Engineer', 'Developer', 'Tech Lead', 'DBA', 'Security Engineer', 'Technical Writer'],
    inputs: [
      'Support tickets',
      'Bug reports',
      'User feedback',
      'Security advisories',
      'Compliance requirements'
    ],
    outputs: [
      'Bug fixes',
      'Patches',
      'Updated documentation',
      'Knowledge base articles',
      'Support metrics',
      'Customer satisfaction scores'
    ],
    tools: ['Zendesk', 'ServiceNow', 'Jira Service Desk', 'Confluence', 'Intercom', 'Freshdesk'],
    ceremonies: [
      'Ticket triage',
      'Support standups',
      'Escalation reviews',
      'Knowledge sharing sessions',
      'Customer feedback reviews'
    ],
    painPoints: [
      'Support ticket backlog',
      'Knowledge loss when people leave',
      'Documentation always outdated',
      'Context switching for devs',
      'Technical debt deprioritized'
    ]
  }
];

export const aiNativePhases = [
  {
    name: 'Intent & Design',
    icon: '🎯',
    duration: '1-3 days',
    color: '#8b5cf6',
    collapsesFrom: ['Planning & Ideation', 'Requirements Analysis', 'Design & Architecture'],
    activities: [
      'Natural language intent capture',
      'AI generates comprehensive specs',
      'Auto-prioritized backlog from OKRs',
      'AI architecture options with trade-offs',
      'Design-to-prototype in minutes',
      'Living documentation from day 1'
    ],
    roles: ['Product Strategist (was PO+BA)', 'AI Architect (was SA+Tech Lead)'],
    artifacts: ['AI-generated PRD', 'Auto stories with ACs', 'Generated designs', 'Architecture options']
  },
  {
    name: 'AI-Augmented Build',
    icon: '⚡',
    duration: '1-2 weeks',
    color: '#22d3ee',
    collapsesFrom: ['Development', 'Testing & QA', 'Build & CI'],
    activities: [
      'AI pair programming (spec→code)',
      'Autonomous test generation',
      'Real-time AI code review',
      'Self-healing test suites',
      'Continuous quality gates',
      'Auto-generated documentation'
    ],
    roles: ['AI Developer (orchestrates AI)', 'QE Strategist (designs quality)'],
    artifacts: ['Production code', 'Complete test coverage', 'Living docs', 'Quality reports']
  },
  {
    name: 'Intelligent Ops',
    icon: '🔮',
    duration: 'Continuous',
    color: '#4ade80',
    collapsesFrom: ['Deployment & Release', 'Operations & Monitoring', 'Maintenance & Support'],
    activities: [
      'AI risk assessment per change',
      'Auto-deploy safe changes',
      'Predictive incident detection',
      '80% auto-remediation',
      'Self-healing infrastructure',
      'AI-powered support'
    ],
    roles: ['Platform Architect (systems)', 'AI operates day-to-day'],
    artifacts: ['Auto releases', 'AI incident reports', 'Predictive alerts', 'Living runbooks']
  }
];

export default traditionalSDLCPhases;
