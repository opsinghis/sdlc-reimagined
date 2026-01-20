import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader, Card, InfoBox } from '../components/ui';

const PlaceholderPage = ({ title, description }) => {
  const location = useLocation();

  const getPageInfo = () => {
    const path = location.pathname;

    const pageMap = {
      '/ceremonies': { title: '📅 Ceremonies Reimagined', desc: 'Which meetings survive? Which transform? Which disappear?' },
      '/continuous-flow': { title: '🌊 From Sprints to Continuous Flow', desc: 'Why time-boxing made sense before AI, and what replaces it' },
      '/work-management': { title: '📋 Beyond Jira & Kanban', desc: 'Do we still need tickets? What does AI-native work management look like?' },
      '/roles/product-owner': { title: '👤 Product Owner with AI', desc: 'From ticket writer to strategic product leader' },
      '/roles/developer': { title: '👨‍💻 Developer with AI', desc: 'From coder to AI orchestrator' },
      '/roles/qe-engineer': { title: '🧪 QE Engineer with AI', desc: 'From test writer to quality strategist' },
      '/roles/devops': { title: '⚙️ DevOps with AI', desc: 'From script runner to platform architect' },
      '/roles/architect': { title: '🏗️ Architect with AI', desc: 'From diagram drafter to architectural director' },
      '/roles/scrum-master': { title: '🎯 Scrum Master with AI', desc: 'From ceremony facilitator to transformation coach' },
      '/playbooks/frontend': { title: '🎨 Frontend Team Playbook', desc: 'AI-native workflows for frontend development' },
      '/playbooks/backend': { title: '🔧 Microservices Team Playbook', desc: 'AI-native workflows for backend development' },
      '/playbooks/commerce': { title: '🛒 Commerce Platform Playbook', desc: 'AI-native workflows for e-commerce teams' },
      '/playbooks/data': { title: '📊 CDP / Data Team Playbook', desc: 'AI-native workflows for data engineering' },
      '/setup/quick-start': { title: '⚡ Quick Start Setup', desc: 'Get AI Coding Assistant running in 5 minutes' },
      '/setup/developer': { title: '👨‍💻 Developer Setup', desc: 'Complete AI configuration for developers' },
      '/setup/product-owner': { title: '👤 Product Owner Setup', desc: 'Configure AI for product management workflows' },
      '/setup/qe-engineer': { title: '🧪 QE Engineer Setup', desc: 'Configure AI for quality engineering' },
      '/setup/devops': { title: '⚙️ DevOps Setup', desc: 'Configure AI for platform engineering' },
      '/setup/architect': { title: '🏗️ Architect Setup', desc: 'Configure AI for architecture work' },
      '/setup/mcp': { title: '🔌 MCP Integrations', desc: 'Connect AI to your tools via Model Context Protocol' },
      '/setup/team-rollout': { title: '👥 Full Team Rollout', desc: 'Step-by-step guide to roll out AI tools across your team' },
      '/implementation': { title: '🚀 Implementation Roadmap', desc: 'Phased approach to AI-native transformation' }
    };

    return pageMap[path] || { title: title || 'Page', desc: description || 'Coming soon' };
  };

  const info = getPageInfo();

  return (
    <div>
      <PageHeader title={info.title} description={info.desc} />

      <Card>
        <InfoBox variant="insight" title="Coming Soon">
          <p>
            This page is under construction. The content from the original HTML file will be migrated here.
          </p>
          <p style={{ marginTop: '10px' }}>
            Current path: <code>{location.pathname}</code>
          </p>
        </InfoBox>
      </Card>

      <Card>
        <h3 style={{ marginBottom: '15px' }}>🎯 What This Page Will Cover</h3>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
            ✓ Detailed transformation guidance
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
            ✓ Interactive comparisons (Traditional vs AI-Native)
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
            ✓ Copy-paste ready configurations
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
            ✓ AI prompts and workflows
          </li>
          <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
            ✓ Implementation checklists
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default PlaceholderPage;
