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
  Palette,
  Server,
  ShoppingCart,
  BarChart3,
  Rocket,
  Terminal,
  Plug,
  Users
} from 'lucide-react';

export const navigation = [
  { id: 'overview', icon: Home, label: 'Overview', section: 'Introduction', path: '/' },
  { id: 'transformation', icon: Zap, label: 'AI Transformation', section: 'Introduction', path: '/transformation' },
  { id: 'new-model', icon: RefreshCw, label: 'The New SDLC Model', section: 'Introduction', path: '/new-model' },
  { id: 'ceremonies', icon: Calendar, label: 'Ceremonies Reimagined', section: 'Process', path: '/ceremonies' },
  { id: 'continuous-flow', icon: Waves, label: 'Continuous Flow', section: 'Process', path: '/continuous-flow' },
  { id: 'work-management', icon: ClipboardList, label: 'Beyond Jira & Kanban', section: 'Process', path: '/work-management' },
  { id: 'role-po', icon: User, label: 'Product Owner', section: 'Roles & Claude', path: '/roles/product-owner' },
  { id: 'role-dev', icon: Code, label: 'Developer', section: 'Roles & Claude', path: '/roles/developer' },
  { id: 'role-qe', icon: TestTube, label: 'QE Engineer', section: 'Roles & Claude', path: '/roles/qe-engineer' },
  { id: 'role-devops', icon: Settings, label: 'DevOps / Platform', section: 'Roles & Claude', path: '/roles/devops' },
  { id: 'role-architect', icon: Building, label: 'Architect', section: 'Roles & Claude', path: '/roles/architect' },
  { id: 'role-scrum', icon: Target, label: 'Scrum Master / Coach', section: 'Roles & Claude', path: '/roles/scrum-master' },
  { id: 'team-frontend', icon: Palette, label: 'Frontend Team', section: 'Team Playbooks', path: '/playbooks/frontend' },
  { id: 'team-backend', icon: Server, label: 'Microservices Team', section: 'Team Playbooks', path: '/playbooks/backend' },
  { id: 'team-commerce', icon: ShoppingCart, label: 'Commerce Platform', section: 'Team Playbooks', path: '/playbooks/commerce' },
  { id: 'team-data', icon: BarChart3, label: 'CDP / Data Team', section: 'Team Playbooks', path: '/playbooks/data' },
  { id: 'setup-quick', icon: Zap, label: 'Quick Start (5 min)', section: 'Setup & Execute', path: '/setup/quick-start' },
  { id: 'setup-dev', icon: Terminal, label: 'Developer Setup', section: 'Setup & Execute', path: '/setup/developer' },
  { id: 'setup-po', icon: User, label: 'Product Owner Setup', section: 'Setup & Execute', path: '/setup/product-owner' },
  { id: 'setup-qe', icon: TestTube, label: 'QE Engineer Setup', section: 'Setup & Execute', path: '/setup/qe-engineer' },
  { id: 'setup-devops', icon: Settings, label: 'DevOps Setup', section: 'Setup & Execute', path: '/setup/devops' },
  { id: 'setup-architect', icon: Building, label: 'Architect Setup', section: 'Setup & Execute', path: '/setup/architect' },
  { id: 'setup-mcp', icon: Plug, label: 'MCP Integrations', section: 'Setup & Execute', path: '/setup/mcp' },
  { id: 'setup-team', icon: Users, label: 'Full Team Rollout', section: 'Setup & Execute', path: '/setup/team-rollout' },
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
