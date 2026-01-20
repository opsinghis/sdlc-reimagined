import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  CodeBlock,
  Table
} from '../../components/ui';

const MCPIntegrations = () => {
  const mcpServers = [
    { integration: 'GitHub', package: '@modelcontextprotocol/server-github', useCase: 'PRs, issues, code search, repo management' },
    { integration: 'GitLab', package: '@modelcontextprotocol/server-gitlab', useCase: 'MRs, issues, pipelines' },
    { integration: 'Slack', package: '@modelcontextprotocol/server-slack', useCase: 'Read channels, send messages, search' },
    { integration: 'PostgreSQL', package: '@modelcontextprotocol/server-postgres', useCase: 'Query databases, analyze schemas' },
    { integration: 'Linear', package: 'mcp-linear', useCase: 'Issues, projects, cycles' },
    { integration: 'Jira/Confluence', package: 'mcp-atlassian', useCase: 'Tickets, docs, boards' },
    { integration: 'Notion', package: '@modelcontextprotocol/server-notion', useCase: 'Pages, databases, search' },
    { integration: 'Google Drive', package: '@modelcontextprotocol/server-gdrive', useCase: 'Docs, sheets, search' }
  ];

  const tableColumns = [
    { key: 'integration', header: 'Integration' },
    { key: 'package', header: 'Package' },
    { key: 'useCase', header: 'Use Case' }
  ];

  return (
    <div>
      <PageHeader
        title="🔌 MCP Integrations Setup"
        description="Connect AI Agents to your tools via Model Context Protocol"
      />

      {/* Context: Where this fits in the agentic flow */}
      <Card>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '15px',
          background: 'linear-gradient(135deg, var(--accent-purple)15, var(--accent-blue)10)',
          borderRadius: '10px',
          border: '1px solid var(--accent-purple)33'
        }}>
          <span style={{ fontSize: '2rem' }}>🎯</span>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>MCP Powers the Orchestrator Agent</div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              In the <a href="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</a>, MCP connects the Orchestrator Agent to your tools.
              This enables AI agents to read from Jira, manage GitHub PRs, update Slack, and access databases - automating the flow between <strong>human gates</strong>.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📋">What is MCP?</CardTitle>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Model Context Protocol (MCP) allows AI agents to connect to external tools and data sources. This enables them to read from Jira, GitHub, Slack, databases, and more.
        </p>
      </Card>

      <Card>
        <CardTitle icon="⚙️">Step 1: MCP Configuration File</CardTitle>

        <CodeBlock language="json" filename="ai_assistant_config.json">
{`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-github-token>"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/your/projects"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/dbname"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "<your-slack-bot-token>",
        "SLACK_TEAM_ID": "<your-team-id>"
      }
    },
    "linear": {
      "command": "npx",
      "args": ["-y", "mcp-linear"],
      "env": {
        "LINEAR_API_KEY": "<your-linear-api-key>"
      }
    },
    "jira": {
      "command": "npx",
      "args": ["-y", "mcp-atlassian"],
      "env": {
        "ATLASSIAN_HOST": "https://your-domain.atlassian.net",
        "ATLASSIAN_EMAIL": "your-email@company.com",
        "ATLASSIAN_API_TOKEN": "<your-api-token>"
      }
    }
  }
}`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📍">Step 2: Config File Locations</CardTitle>

        <CodeBlock language="bash">
{`# MacOS
~/Library/Application Support/AI-Assistant/config.json

# Windows
%APPDATA%\\AI-Assistant\\config.json

# Linux
~/.config/AI-Assistant/config.json

# Create directory if it doesn't exist
mkdir -p "$(dirname ~/Library/Application\\ Support/AI-Assistant/config.json)"

# Copy your config
cp mcp_config.json ~/Library/Application\\ Support/AI-Assistant/`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🔗">Step 3: Available MCP Servers</CardTitle>
        <Table columns={tableColumns} data={mcpServers} />
      </Card>

      <Card>
        <CardTitle icon="🚀">Step 4: Using MCP with AI Agents</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Once configured, AI agents can access these tools directly:</p>

        <CodeBlock language="text">
{`# Example prompts with MCP integrations:

# GitHub
"Create a PR from my current branch to main with a description of the changes"
"What are the open PRs that need my review?"
"Find all issues labeled 'bug' in the frontend repo"

# Jira/Linear
"Create a bug ticket for the checkout issue I just described"
"What tickets are assigned to me in the current sprint?"
"Move ticket ABC-123 to 'In Review'"

# Slack
"Summarize the #engineering channel from today"
"Post the deployment status to #releases"
"Find messages about the outage from yesterday"

# Database
"Show me the schema of the users table"
"How many orders were placed today?"
"Find customers who haven't ordered in 30 days"`}
        </CodeBlock>
      </Card>
    </div>
  );
};

export default MCPIntegrations;
