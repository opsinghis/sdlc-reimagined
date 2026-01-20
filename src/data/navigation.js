import {
  Home,
  Zap,
  RefreshCw,
  Calendar,
  Waves,
  ClipboardList,
  User,
  Code,
  TestTube,
  Settings,
  Building,
  Target,
  Rocket,
  Terminal,
  Plug,
  Users,
  Bot,
  GitBranch,
  Network,
  AlertCircle,
  Map,
  GitCompare
} from 'lucide-react';

export const navigation = [
  // Introduction
  { id: 'overview', icon: Home, label: 'Overview', section: 'Introduction', path: '/' },
  { id: 'transformation', icon: Zap, label: 'AI Transformation', section: 'Introduction', path: '/transformation' },
  { id: 'new-model', icon: RefreshCw, label: 'The New SDLC Model', section: 'Introduction', path: '/new-model' },
  { id: 'sdlc-comparison', icon: GitCompare, label: 'Traditional vs AI-Native', section: 'Introduction', path: '/sdlc-comparison' },

  // AI-Native Organization (NEW SECTION)
  { id: 'agent-architecture', icon: Bot, label: 'AI Agent Architecture', section: 'AI-Native Organization', path: '/ai-native/agent-architecture' },
  { id: 'role-evolution', icon: GitBranch, label: 'Role Evolution', section: 'AI-Native Organization', path: '/ai-native/role-evolution' },
  { id: 'org-structure', icon: Network, label: 'New Org Structure', section: 'AI-Native Organization', path: '/ai-native/org-structure' },
  { id: 'human-checkpoints', icon: AlertCircle, label: 'Human Checkpoints', section: 'AI-Native Organization', path: '/ai-native/human-checkpoints' },
  { id: 'transition-roadmap', icon: Map, label: 'Transition Roadmap', section: 'AI-Native Organization', path: '/ai-native/transition-roadmap' },

  // Process
  { id: 'ceremonies', icon: Calendar, label: 'Ceremonies Reimagined', section: 'Process', path: '/ceremonies' },
  { id: 'continuous-flow', icon: Waves, label: 'Continuous Flow', section: 'Process', path: '/continuous-flow' },
  { id: 'work-management', icon: ClipboardList, label: 'Beyond Jira & Kanban', section: 'Process', path: '/work-management' },

  // Roles & Claude
  { id: 'role-po', icon: User, label: 'Product Owner', section: 'Roles & Claude', path: '/roles/product-owner' },
  { id: 'role-dev', icon: Code, label: 'Developer', section: 'Roles & Claude', path: '/roles/developer' },
  { id: 'role-qe', icon: TestTube, label: 'QE Engineer', section: 'Roles & Claude', path: '/roles/qe-engineer' },
  { id: 'role-devops', icon: Settings, label: 'DevOps / Platform', section: 'Roles & Claude', path: '/roles/devops' },
  { id: 'role-architect', icon: Building, label: 'Architect', section: 'Roles & Claude', path: '/roles/architect' },
  { id: 'role-scrum', icon: Target, label: 'Scrum Master / Coach', section: 'Roles & Claude', path: '/roles/scrum-master' },

  // Setup & Execute
  { id: 'setup-quick', icon: Zap, label: 'Quick Start (5 min)', section: 'Setup & Execute', path: '/setup/quick-start' },
  { id: 'setup-dev', icon: Terminal, label: 'Developer Setup', section: 'Setup & Execute', path: '/setup/developer' },
  { id: 'setup-po', icon: User, label: 'Product Owner Setup', section: 'Setup & Execute', path: '/setup/product-owner' },
  { id: 'setup-qe', icon: TestTube, label: 'QE Engineer Setup', section: 'Setup & Execute', path: '/setup/qe-engineer' },
  { id: 'setup-devops', icon: Settings, label: 'DevOps Setup', section: 'Setup & Execute', path: '/setup/devops' },
  { id: 'setup-architect', icon: Building, label: 'Architect Setup', section: 'Setup & Execute', path: '/setup/architect' },
  { id: 'setup-mcp', icon: Plug, label: 'MCP Integrations', section: 'Setup & Execute', path: '/setup/mcp' },
  { id: 'setup-team', icon: Users, label: 'Full Team Rollout', section: 'Setup & Execute', path: '/setup/team-rollout' },

  // Getting Started
  { id: 'implementation', icon: Rocket, label: 'Implementation Roadmap', section: 'Getting Started', path: '/implementation' },
];

export const getGroupedNavigation = () => {
  return navigation.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {});
};

export default navigation;
