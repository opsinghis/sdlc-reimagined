import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Overview, Transformation, NewModel, SDLCComparison } from './pages/intro';
import {
  AgentArchitecture,
  RoleEvolution,
  OrgStructure,
  HumanCheckpoints,
  TransitionRoadmap
} from './pages/ai-native';
import { Ceremonies, ContinuousFlow, WorkManagement } from './pages/process';
import { ProductOwner, Developer, QEEngineer, DevOps, Architect, ScrumMaster } from './pages/roles';
import {
  QuickStart,
  DeveloperSetup,
  ProductOwnerSetup,
  QEEngineerSetup,
  DevOpsSetup,
  ArchitectSetup,
  MCPIntegrations,
  TeamRollout
} from './pages/setup';
import ImplementationRoadmap from './pages/ImplementationRoadmap';
import PlaceholderPage from './pages/PlaceholderPage';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Introduction */}
          <Route index element={<Overview />} />
          <Route path="transformation" element={<Transformation />} />
          <Route path="new-model" element={<NewModel />} />
          <Route path="sdlc-comparison" element={<SDLCComparison />} />

          {/* AI-Native Organization */}
          <Route path="ai-native/agent-architecture" element={<AgentArchitecture />} />
          <Route path="ai-native/role-evolution" element={<RoleEvolution />} />
          <Route path="ai-native/org-structure" element={<OrgStructure />} />
          <Route path="ai-native/human-checkpoints" element={<HumanCheckpoints />} />
          <Route path="ai-native/transition-roadmap" element={<TransitionRoadmap />} />

          {/* Process */}
          <Route path="ceremonies" element={<Ceremonies />} />
          <Route path="continuous-flow" element={<ContinuousFlow />} />
          <Route path="work-management" element={<WorkManagement />} />

          {/* Roles */}
          <Route path="roles/product-owner" element={<ProductOwner />} />
          <Route path="roles/developer" element={<Developer />} />
          <Route path="roles/qe-engineer" element={<QEEngineer />} />
          <Route path="roles/devops" element={<DevOps />} />
          <Route path="roles/architect" element={<Architect />} />
          <Route path="roles/scrum-master" element={<ScrumMaster />} />

          {/* Setup */}
          <Route path="setup/quick-start" element={<QuickStart />} />
          <Route path="setup/developer" element={<DeveloperSetup />} />
          <Route path="setup/product-owner" element={<ProductOwnerSetup />} />
          <Route path="setup/qe-engineer" element={<QEEngineerSetup />} />
          <Route path="setup/devops" element={<DevOpsSetup />} />
          <Route path="setup/architect" element={<ArchitectSetup />} />
          <Route path="setup/mcp" element={<MCPIntegrations />} />
          <Route path="setup/team-rollout" element={<TeamRollout />} />

          {/* Getting Started */}
          <Route path="implementation" element={<ImplementationRoadmap />} />

          {/* Catch-all */}
          <Route path="*" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
