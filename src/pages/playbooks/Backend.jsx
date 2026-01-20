import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  PromptBox,
  CodeBlock
} from '../../components/ui';

const Backend = () => {
  const dailyWorkflows = [
    {
      title: 'API Endpoint Development',
      icon: '🔌',
      prompt: `"Create a REST API endpoint for [feature]:
1. Controller with input validation
2. Service layer with business logic
3. Repository for data access
4. DTOs for request/response
5. OpenAPI documentation
6. Unit and integration tests
7. Follow our patterns in src/api/"`
    },
    {
      title: 'Database Schema Changes',
      icon: '🗄️',
      prompt: `"Create database migration for [requirement]:
1. Migration script (up and down)
2. Update entity/model classes
3. Update repository methods
4. Add indexes for query patterns
5. Handle data backfill if needed
6. Test rollback scenario
7. Document breaking changes"`
    },
    {
      title: 'Microservice Creation',
      icon: '🔧',
      prompt: `"Scaffold a new microservice for [domain]:
1. Project structure following our template
2. Health check and readiness endpoints
3. Database connection setup
4. Message queue integration
5. Observability (logging, metrics, tracing)
6. Dockerfile and K8s manifests
7. CI/CD pipeline configuration"`
    },
    {
      title: 'Event-Driven Integration',
      icon: '📨',
      prompt: `"Implement event publishing/consuming for [event]:
1. Event schema definition (Avro/JSON Schema)
2. Publisher with retry logic
3. Consumer with idempotency
4. Dead letter queue handling
5. Event versioning strategy
6. Integration tests with testcontainers
7. Monitoring and alerting setup"`
    },
    {
      title: 'Performance Optimization',
      icon: '⚡',
      prompt: `"Optimize performance of [endpoint/service]:
1. Profile and identify bottlenecks
2. Query optimization (explain analyze)
3. Add appropriate caching
4. Implement connection pooling
5. Add pagination for large datasets
6. Consider async processing
7. Load test and benchmark"`
    },
    {
      title: 'Security Implementation',
      icon: '🔒',
      prompt: `"Implement security for [endpoint/service]:
1. Authentication middleware
2. Authorization rules (RBAC/ABAC)
3. Input sanitization
4. Rate limiting
5. Audit logging
6. Secrets management
7. Security test scenarios"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="🔧 Microservices / Backend Team Playbook"
        description="AI-native workflows for backend development"
      />

      <Card>
        <CardTitle icon="⚙️">Tech Stack Context</CardTitle>
        <CodeBlock language="markdown" filename="AI-CONFIG-backend.md">
{`# Backend Team AI-CONFIG.md

## Tech Stack
- Node.js with TypeScript / Java with Spring Boot
- Database: PostgreSQL + Redis
- Message Queue: Kafka / RabbitMQ
- API: REST + OpenAPI / GraphQL
- Testing: Jest / JUnit + Testcontainers
- Observability: OpenTelemetry + Datadog

## Architecture
- Microservices with domain boundaries
- Event-driven communication
- CQRS for read-heavy services
- API Gateway (Kong/Envoy)

## Conventions
- Controller → Service → Repository layers
- DTOs at API boundaries
- Domain entities for business logic
- Database-per-service pattern
- Async for non-critical operations

## File Structure (Node.js)
src/
├── api/           # Controllers, routes
├── services/      # Business logic
├── repositories/  # Data access
├── domain/        # Entities, value objects
├── events/        # Publishers, consumers
├── config/        # Configuration
└── utils/         # Shared utilities`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Daily Workflows</CardTitle>

        {dailyWorkflows.map((workflow, index) => (
          <div key={index} style={{
            background: 'var(--bg-elevated)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>{workflow.icon}</span>
              <h4 style={{ margin: 0 }}>{workflow.title}</h4>
            </div>
            <PromptBox label="AI Prompt">
              {workflow.prompt}
            </PromptBox>
          </div>
        ))}
      </Card>

      <Card>
        <CardTitle icon="📋">Quick Commands</CardTitle>
        <CodeBlock language="bash" filename="backend-aliases.sh">
{`# API endpoint
alias capi='ai "Create a REST API endpoint with full stack implementation:"'

# Database migration
alias cmigrate='ai "Create a database migration for:"'

# Service scaffolding
alias cservice='ai "Scaffold a new microservice for:"'

# Event implementation
alias cevent='ai "Implement event publishing/consuming for:"'

# Query optimization
alias cquery='ai "Optimize this database query:"'

# Integration test
alias cintegration='ai "Write integration tests for this service:"'

# API documentation
alias cdoc='ai "Generate OpenAPI documentation for:"'

# Debug production issue
alias cdebug='ai "Help debug this production issue:"'`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🏗️">Service Template</CardTitle>
        <PromptBox label="New Service Prompt">
{`"Create a new microservice for [domain]. Generate:

1. PROJECT SETUP
   - package.json with standard dependencies
   - TypeScript configuration
   - ESLint and Prettier config
   - Jest configuration

2. APPLICATION STRUCTURE
   - Express/Fastify app setup
   - Health and readiness endpoints
   - Graceful shutdown handling
   - Error handling middleware

3. DATABASE
   - PostgreSQL connection with pool
   - Prisma/TypeORM setup
   - Migration templates

4. OBSERVABILITY
   - Structured logging (pino)
   - Metrics endpoint (prometheus)
   - Distributed tracing setup

5. DEVOPS
   - Dockerfile (multi-stage build)
   - docker-compose for local dev
   - Kubernetes manifests
   - GitHub Actions CI pipeline

6. DOCUMENTATION
   - README with setup instructions
   - API documentation template
   - Architecture decision records"`}
        </PromptBox>
      </Card>

      <Card>
        <CardTitle icon="📊">Team Metrics</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>99.9%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Uptime</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>&lt;100ms</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>P95 Latency</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>85%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Test Coverage</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>0</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Critical Vulns</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Backend;
