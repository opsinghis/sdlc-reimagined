import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  CodeBlock
} from '../../components/ui';

const ArchitectSetup = () => {
  return (
    <div>
      <PageHeader
        title="🏗️ Architect Setup"
        description="Configure Claude for architecture and technical leadership"
      />

      <Card>
        <CardTitle icon="📄">Step 1: Create Architect CLAUDE.md</CardTitle>

        <CodeBlock language="markdown" filename="CLAUDE-ARCHITECT.md">
{`# CLAUDE.md - Architect Configuration

## Role
You are an AI architecture assistant helping with system design, technical decisions, and documentation. You provide options with trade-offs rather than single recommendations.

## Architecture Context
- **System Type**: E-commerce Platform / SaaS / Enterprise
- **Scale**: [X] users, [Y] transactions/day
- **Team Size**: [X] developers across [Y] teams
- **Maturity**: Startup / Growth / Enterprise

## Architecture Principles
1. **Simplicity**: Prefer simple solutions over complex ones
2. **Evolvability**: Design for change
3. **Resilience**: Assume failures will happen
4. **Observability**: If you can't measure it, you can't manage it
5. **Security**: Defense in depth

## Technology Radar
### Adopt
- [Technologies you actively recommend]

### Trial
- [Technologies you're experimenting with]

### Assess
- [Technologies you're watching]

### Hold
- [Technologies to avoid for new work]

## ADR Template
\`\`\`markdown
# ADR-XXX: [Title]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
[What is the issue we're addressing?]

## Decision Drivers
- [Driver 1]
- [Driver 2]

## Considered Options
1. [Option 1]
2. [Option 2]
3. [Option 3]

## Decision
[Which option was chosen and why]

## Consequences
### Positive
- [Benefit 1]

### Negative
- [Drawback 1]

### Risks
- [Risk 1]

## Related
- [Links to related ADRs, docs]
\`\`\`

## Diagram Conventions
- C4 Model for architecture (Context, Container, Component, Code)
- Mermaid for sequence diagrams
- Entity-Relationship for data models

## Non-Functional Requirements
- **Availability**: 99.9% uptime
- **Latency**: p99 < 200ms for API calls
- **Throughput**: [X] requests/second
- **Recovery**: RTO < 1 hour, RPO < 5 minutes`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📚">Step 2: Architect Prompt Library</CardTitle>

        <CodeBlock language="bash" filename=".claude-architect-aliases.sh">
{`# Architect Aliases

# ===== DESIGN =====

# System design
alias cdesign='claude "Create a system design for this requirement. Include: C4 diagrams, component descriptions, data flow, technology choices with rationale:"'

# API design
alias capi='claude "Design an API for this capability. Include: REST endpoints, request/response schemas, error handling, versioning strategy:"'

# Data model
alias cdatamodel='claude "Design a data model for this domain. Include: ERD, entity descriptions, relationships, indexes, and migration considerations:"'

# ===== DECISIONS =====

# ADR generation
alias cadr='claude "Create an Architecture Decision Record for this decision. Include multiple options with trade-offs, not just the chosen approach:"'

# Trade-off analysis
alias ctradeoff='claude "Analyze trade-offs between these architectural options. Consider: complexity, scalability, cost, team skills, time to implement:"'

# Technology evaluation
alias ctech='claude "Evaluate this technology for our use case. Include: pros/cons, fit with our stack, learning curve, community/support, licensing:"'

# ===== ANALYSIS =====

# Codebase analysis
alias canalyze='claude "Analyze this codebase architecture. Identify: patterns used, coupling issues, improvement opportunities, technical debt:"'

# Security review
alias csecurity='claude "Review this architecture for security concerns. Check: authentication, authorization, data protection, network security, secrets management:"'

# Scalability assessment
alias cscale='claude "Assess scalability of this architecture. Identify bottlenecks and recommend improvements for 10x growth:"'

# ===== DOCUMENTATION =====

# Architecture overview
alias coverview='claude "Generate an architecture overview document. Include: context diagram, key decisions, component descriptions, deployment view:"'

# Sequence diagrams
alias csequence='claude "Generate Mermaid sequence diagrams for these key flows:"'

# ===== FUNCTIONS =====

# Full architecture review
arch_review() {
    claude "Perform a comprehensive architecture review:

    1. CURRENT STATE
       - Document existing architecture
       - Identify patterns and anti-patterns
       - Map dependencies

    2. ASSESSMENT
       - Scalability analysis
       - Security posture
       - Operational readiness
       - Technical debt inventory

    3. RECOMMENDATIONS
       - Short-term improvements (quick wins)
       - Medium-term roadmap
       - Long-term vision
       - Risk mitigation

    Output as a structured report with diagrams."
}`}
        </CodeBlock>
      </Card>
    </div>
  );
};

export default ArchitectSetup;
