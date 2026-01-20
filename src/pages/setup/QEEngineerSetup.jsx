import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  CodeBlock
} from '../../components/ui';

const QEEngineerSetup = () => {
  return (
    <div>
      <PageHeader
        title="🧪 QE Engineer Setup"
        description="Configure AI for quality engineering and test automation"
      />

      {/* Context: Where this fits in the agentic flow */}
      <Card>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '15px',
          background: 'linear-gradient(135deg, var(--accent-green)15, var(--accent-green)10)',
          borderRadius: '10px',
          border: '1px solid var(--accent-green)33'
        }}>
          <span style={{ fontSize: '2rem' }}>🧪</span>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>Your Role: Quality Strategist</div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              In the <a href="/sdlc-comparison" style={{ color: 'var(--accent-purple)' }}>10-step agentic flow</a>, QE Agent generates tests in <strong>Step 7</strong> while Security Agent runs SAST/DAST.
              You review test coverage and security results at <strong>Gate 3</strong>, focusing on strategy and edge cases AI might miss.
              See <a href="/roles/qe-engineer" style={{ color: 'var(--accent-purple)', marginLeft: '3px' }}>QE Engineer Role</a> for the full picture.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <CardTitle icon="📄">Step 1: Create QE AI-CONFIG.md</CardTitle>

        <CodeBlock language="markdown" filename="AI-CONFIG-QE.md">
{`# AI-CONFIG.md - QE Engineer Configuration

## Role
You are an AI QE assistant helping with test strategy, test automation, and quality analysis. You generate comprehensive tests and help maintain test infrastructure.

## Testing Context
- **Frameworks**: Jest, Playwright, [your frameworks]
- **Coverage Target**: 80% unit, 100% critical paths E2E
- **Test Types**: Unit, Integration, E2E, Performance, Security

## Test Conventions

### File Structure
\`\`\`
src/
  components/
    Button/
      Button.tsx
      Button.test.tsx      # Unit tests alongside
      Button.stories.tsx   # Storybook
tests/
  integration/            # Integration tests
  e2e/                    # Playwright E2E tests
  performance/            # k6 performance tests
  fixtures/               # Test data
\`\`\`

### Naming Convention
- Test files: \`*.test.ts\` or \`*.spec.ts\`
- Test names: \`should_[expectedBehavior]_when_[condition]\`
- Describe blocks: Match component/function name

### Test Structure (AAA Pattern)
\`\`\`typescript
describe('ComponentName', () => {
  describe('methodName', () => {
    it('should_returnX_when_givenY', () => {
      // Arrange
      const input = setupTestData();

      // Act
      const result = methodUnderTest(input);

      // Assert
      expect(result).toBe(expectedValue);
    });
  });
});
\`\`\`

## E2E Test Patterns

### Page Object Model
\`\`\`typescript
// pages/CheckoutPage.ts
export class CheckoutPage {
  readonly page: Page;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.submitButton = page.getByRole('button', { name: 'Place Order' });
  }

  async completeCheckout(paymentDetails: PaymentDetails) {
    // Implementation
  }
}
\`\`\`

### Test Data Management
- Use factories for test data generation
- Fixtures for static test data
- API mocking for external services

## Coverage Requirements
- Statements: 80%
- Branches: 75%
- Functions: 80%
- Lines: 80%

## When Generating Tests

### Always Include
1. Happy path scenarios
2. Edge cases (empty, null, boundary values)
3. Error scenarios
4. Async behavior tests
5. Mock external dependencies

### Test Quality Checklist
- [ ] Tests are independent (no shared state)
- [ ] Tests are deterministic (no flaky tests)
- [ ] Tests are fast (mock slow operations)
- [ ] Tests are readable (clear naming, comments)
- [ ] Tests cover requirements (trace to AC)

## Common Commands
\`\`\`bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm test -- --coverage     # With coverage
npm run test:e2e           # E2E tests
npm run test:e2e:headed    # E2E with browser visible
\`\`\`

## Selectors Priority (Playwright)
1. getByRole() - Accessibility roles
2. getByLabel() - Form labels
3. getByText() - Visible text
4. getByTestId() - data-testid attribute
5. Avoid: CSS selectors, XPath (brittle)`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="📚">Step 2: QE Prompt Library</CardTitle>

        <CodeBlock language="bash" filename=".ai-qe-aliases.sh">
{`# QE Engineer Aliases

# ===== TEST GENERATION =====

# Generate unit tests
alias cunit='ai "Generate comprehensive unit tests for this code. Include happy path, edge cases, error scenarios. Use Jest and follow our conventions:"'

# Generate E2E tests
alias ce2e='ai "Generate Playwright E2E tests for this user flow. Use Page Object Model pattern and our test conventions:"'

# Generate integration tests
alias cintegration='ai "Generate integration tests for this API/service. Include success cases, error handling, and edge cases:"'

# Generate from ticket
alias ctickettest='ai "Generate all tests (unit, integration, E2E) for this user story. Cover all acceptance criteria:"'

# ===== TEST MAINTENANCE =====

# Fix flaky test
alias cflaky='ai "Analyze this flaky test and suggest fixes. Identify timing issues, race conditions, or test isolation problems:"'

# Update selectors
alias cselectors='ai "The UI has changed. Update these test selectors to use resilient patterns (prefer role, label, testid over CSS):"'

# Refactor tests
alias ctestrefactor='ai "Refactor these tests to improve maintainability: reduce duplication, improve naming, add better assertions:"'

# ===== ANALYSIS =====

# Analyze failures
alias cfailure='ai "Analyze these test failures. For each: 1) Is it a real bug or test issue? 2) Root cause? 3) Suggested fix:"'

# Coverage gaps
alias ccoverage='ai "Analyze code coverage report and identify: 1) Critical uncovered paths, 2) Recommended tests to add, 3) Priority order:"'

# Test strategy
alias cstrategy='ai "Create a test strategy for this feature. Include: test types needed, coverage goals, risk areas, and testing approach:"'

# ===== PERFORMANCE =====

# Generate load tests
alias cloadtest='ai "Generate k6 performance tests for this API. Include: baseline load, peak load, stress test scenarios:"'

# Analyze performance
alias cperfanalysis='ai "Analyze these performance test results. Identify bottlenecks and recommend optimizations:"'

# ===== FUNCTIONS =====

# Full test suite for PR
generate_tests_for_pr() {
    echo "🧪 Generating tests for PR changes..."
    CHANGED_FILES=$(git diff --name-only origin/main...HEAD)
    ai "Generate tests for these changed files:
    $CHANGED_FILES

    For each file:
    1. Unit tests (if logic)
    2. Integration tests (if API)
    3. E2E tests (if user-facing)

    Follow our testing conventions in AI-CONFIG.md"
}

# Test failure triage
triage_failures() {
    ai "Triage these test failures from CI:
    $1

    For each failure:
    1. Classification: Real Bug / Test Issue / Flaky / Environment
    2. Root cause analysis
    3. Recommended action
    4. If bug: Draft Jira ticket
    5. If test issue: Fix the test"
}

# Generate test data
alias ctestdata='ai "Generate test data/fixtures for this schema. Include: valid cases, boundary values, invalid cases, and edge cases:"'`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🤖">Step 3: QE Agent Setup</CardTitle>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Create an automated QE agent that runs on PRs:</p>

        <CodeBlock language="yaml" filename=".github/workflows/qe-agent.yml">
{`name: QE Agent

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  qe-agent:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Get changed files
        id: changed
        run: |
          echo "files=$(git diff --name-only origin/main...HEAD | tr '\\n' ' ')" >> $GITHUB_OUTPUT

      - name: Run QE Agent Analysis
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          # Install AI CLI
          npm install -g ai-coding-assistant

          # Generate test recommendations
          ai "Analyze these changed files for test coverage:
          \${{ steps.changed.outputs.files }}

          1. Check if adequate tests exist
          2. Suggest missing test cases
          3. Identify risk areas
          4. Generate any missing critical tests

          Output as GitHub PR comment format." > qe-report.md

      - name: Comment on PR
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const report = fs.readFileSync('qe-report.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '## 🤖 QE Agent Report\\n\\n' + report
            });

      - name: Run existing tests
        run: npm test -- --coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3`}
        </CodeBlock>
      </Card>
    </div>
  );
};

export default QEEngineerSetup;
