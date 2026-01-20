import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  CodeBlock,
  Timeline
} from '../../components/ui';

const ProductOwnerSetup = () => {
  const dailyWorkflow = [
    {
      title: 'Morning: Review & Plan',
      description: (
        <>
          <code>claude "Summarize overnight customer feedback from Intercom and identify urgent issues"</code><br/>
          Review AI-generated daily digest of product metrics
        </>
      )
    },
    {
      title: 'Story Creation: From Intent to Specs',
      description: (
        <>
          <code>feature_spec "add Apple Pay to checkout"</code><br/>
          Review and refine AI-generated stories
        </>
      )
    },
    {
      title: 'Backlog Management',
      description: (
        <>
          <code>cpriority</code> - Re-prioritize based on new information<br/>
          <code>backlog_health</code> - Weekly backlog cleanup
        </>
      )
    },
    {
      title: 'Stakeholder Communication',
      description: (
        <>
          <code>cstakeholder</code> - Generate weekly update<br/>
          <code>crelease</code> - Prepare release communications
        </>
      )
    }
  ];

  return (
    <div>
      <PageHeader
        title="👤 Product Owner Setup"
        description="Configure Claude for product management workflows"
      />

      <Card>
        <CardTitle icon="📄">Step 1: Create PO CLAUDE.md</CardTitle>

        <CodeBlock language="markdown" filename="CLAUDE-PO.md">
{`# CLAUDE.md - Product Owner Configuration

## Role
You are an AI product analyst assistant helping a Product Owner manage the product backlog, write user stories, and make data-driven decisions.

## Product Context
- **Product**: [Your Product Name]
- **Domain**: [E-commerce/SaaS/FinTech/etc.]
- **Users**: [Primary user personas]
- **Business Model**: [Subscription/Transaction/etc.]

## User Story Format

### Standard Template
\`\`\`
**Title**: [Action-oriented title]

**User Story**:
As a [user type],
I want to [action],
So that [benefit].

**Acceptance Criteria**:
- [ ] Given [context], when [action], then [outcome]
- [ ] Given [context], when [action], then [outcome]

**Technical Notes**:
- [Any technical considerations]

**Out of Scope**:
- [What this story does NOT include]

**Dependencies**:
- [Related tickets or blockers]

**Story Points**: [Estimate]
\`\`\`

## Writing Guidelines

### User Stories Should Be
- Independent: Can be developed in any order
- Negotiable: Details can be discussed
- Valuable: Delivers user/business value
- Estimable: Team can size it
- Small: Fits in a sprint
- Testable: Clear acceptance criteria

### Acceptance Criteria Should
- Use Given-When-Then format
- Be specific and measurable
- Cover happy path and key edge cases
- Be testable by QA

## Prioritization Framework

### Value vs Effort Matrix
- **Quick Wins**: High value, low effort → Do first
- **Strategic**: High value, high effort → Plan carefully
- **Fill-ins**: Low value, low effort → Do when time permits
- **Avoid**: Low value, high effort → Deprioritize

### Priority Factors
1. Business impact (revenue, retention, acquisition)
2. User pain point severity
3. Strategic alignment with OKRs
4. Technical dependencies
5. Stakeholder commitments

## OKRs Reference
[Link or paste current OKRs here]

## Competitor Context
[Brief notes on competitors and market]

## Common Requests

### Generate User Stories
"Create user stories for [feature]. Include acceptance criteria, edge cases, and technical considerations."

### Prioritize Backlog
"Analyze these backlog items against our Q2 OKRs and recommend priority order with rationale."

### Write PRD
"Create a PRD for [feature] including problem statement, user personas, requirements, and success metrics."

### Analyze Feedback
"Analyze this customer feedback and identify top themes and recommended actions."

### Release Notes
"Generate release notes for these completed tickets. Create versions for: internal team, stakeholders, and customers."

## Data Sources
- Analytics: [Tool and access]
- Customer feedback: [Intercom/Zendesk/etc.]
- Research: [Location of research docs]

## Team Context
- Engineering team size: [X]
- Sprint length: [X weeks]
- Typical velocity: [X points/sprint]`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📚">Step 2: PO Prompt Library</CardTitle>

        <CodeBlock language="bash" filename=".claude-po-aliases.sh">
{`# Product Owner Aliases

# ===== USER STORIES =====

# Generate stories from intent
alias cstory='claude "Generate user stories with full acceptance criteria for:"'

# Expand epic into stories
alias cepic='claude "Break down this epic into user stories. Each story should be independently deliverable and fit in one sprint:"'

# Refine story
alias crefine='claude "Refine this user story. Add missing acceptance criteria, identify edge cases, and add technical notes:"'

# ===== PRIORITIZATION =====

# Prioritize backlog
alias cpriority='claude "Analyze and prioritize these backlog items. Consider: business value, user impact, effort, dependencies. Recommend order with rationale:"'

# RICE scoring
alias crice='claude "Score these features using RICE (Reach, Impact, Confidence, Effort). Provide a ranked list:"'

# ===== DOCUMENTATION =====

# Generate PRD
alias cprd='claude "Create a Product Requirements Document for this feature. Include: problem statement, user personas, user stories, success metrics, and rollout plan:"'

# Release notes
alias crelease='claude "Generate release notes from these completed tickets. Create three versions: 1) Internal/technical, 2) Stakeholder summary, 3) Customer-facing changelog:"'

# ===== ANALYSIS =====

# Customer feedback analysis
alias cfeedback='claude "Analyze this customer feedback. Identify: top themes, sentiment, actionable insights, and recommended backlog items:"'

# Competitive analysis
alias ccompete='claude "Research and compare how competitors handle this feature. Identify gaps and opportunities:"'

# ===== MEETINGS =====

# Sprint planning prep
alias cplanprep='claude "Prepare for sprint planning. From the backlog, recommend stories for next sprint based on: priority, team capacity of [X] points, and dependencies:"'

# Stakeholder update
alias cstakeholder='claude "Generate a stakeholder update summarizing: what shipped last sprint, what is in progress, upcoming priorities, and any risks/blockers:"'

# ===== FUNCTIONS =====

# Full feature workflow
feature_spec() {
    echo "📋 Generating full spec for: $1"
    claude "Create a complete feature specification for: $1

    Include:
    1. Problem Statement
    2. User Personas affected
    3. User Stories with Acceptance Criteria
    4. Edge cases and error scenarios
    5. Success metrics
    6. Technical considerations
    7. Dependencies
    8. Rollout plan
    9. Risks and mitigations"
}

# Backlog health check
backlog_health() {
    claude "Analyze our backlog health:
    1. Stories without acceptance criteria
    2. Stories too large (need splitting)
    3. Stale items (no updates in 30+ days)
    4. Missing estimates
    5. Blocked items
    6. Recommendations for cleanup"
}`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📝">Step 3: Story Templates</CardTitle>

        <CodeBlock language="markdown" filename="templates/user-story-template.md">
{`# User Story Template

## Quick Story
**As a** [user type]
**I want to** [action]
**So that** [benefit]

---

## Full Story Template

### Title
[ACTION] [OBJECT] for [USER]

### User Story
As a [specific user persona],
I want to [specific action they want to take],
So that [measurable benefit they receive].

### Background
[Why is this important? What problem does it solve?]

### Acceptance Criteria

#### Happy Path
- [ ] **Given** [initial context]
      **When** [action taken]
      **Then** [expected outcome]

#### Edge Cases
- [ ] **Given** [edge case context]
      **When** [action taken]
      **Then** [expected outcome]

#### Error Handling
- [ ] **Given** [error condition]
      **When** [action taken]
      **Then** [error handling outcome]

### Out of Scope
- [Explicitly what this story does NOT cover]
- [To be addressed in future stories]

### Technical Notes
- [Any technical considerations for the team]
- [API changes, database updates, etc.]

### Design
- [Link to Figma/designs]
- [Link to prototype]

### Dependencies
- [ ] [TICKET-XXX] - [Description]
- [ ] [External dependency]

### Success Metrics
- [How will we measure success?]
- [Target: X% increase in Y]

### Story Points
[X] points

### Sprint
[Target sprint]

---

## Checklist Before Refinement
- [ ] Clear user persona identified
- [ ] Benefit is measurable
- [ ] Acceptance criteria are testable
- [ ] Edge cases considered
- [ ] Dependencies identified
- [ ] Design attached (if UI change)
- [ ] Story is small enough for one sprint`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📋">Daily PO Workflow with Claude</CardTitle>
        <Timeline items={dailyWorkflow} />
      </Card>
    </div>
  );
};

export default ProductOwnerSetup;
