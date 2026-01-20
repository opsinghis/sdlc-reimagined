import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  PromptBox,
  CodeBlock
} from '../../components/ui';

const Data = () => {
  const workflows = [
    {
      title: 'Data Pipeline Development',
      icon: '🔄',
      prompt: `"Create a data pipeline for [data source]:
1. Source connector configuration
2. Data extraction with incremental logic
3. Transformation with dbt models
4. Data quality checks (great_expectations)
5. Load to data warehouse
6. Orchestration with Airflow/Dagster
7. Monitoring and alerting"`
    },
    {
      title: 'Customer 360 View',
      icon: '👤',
      prompt: `"Build customer 360 data model:
1. Identity resolution logic
2. Source data integration
3. Attribute aggregation (behavioral, transactional)
4. Segment calculation
5. Real-time profile updates
6. Privacy compliance (consent, retention)
7. API for downstream systems"`
    },
    {
      title: 'Analytics Dashboard',
      icon: '📊',
      prompt: `"Create analytics dashboard for [domain]:
1. Metric definitions (with SQL)
2. dbt models for aggregations
3. Data freshness requirements
4. Looker/Tableau visualization
5. Access control setup
6. Scheduled refresh
7. Alert thresholds"`
    },
    {
      title: 'ML Feature Engineering',
      icon: '🤖',
      prompt: `"Build feature store for [ML use case]:
1. Feature definitions with business logic
2. Historical feature backfill
3. Real-time feature computation
4. Feature versioning
5. Training/serving consistency
6. Monitoring for drift
7. Documentation for data scientists"`
    },
    {
      title: 'Data Quality Framework',
      icon: '✅',
      prompt: `"Implement data quality for [dataset]:
1. Schema validation rules
2. Completeness checks
3. Uniqueness constraints
4. Referential integrity
5. Business rule validation
6. Anomaly detection
7. SLA tracking and reporting"`
    },
    {
      title: 'Privacy & Compliance',
      icon: '🔒',
      prompt: `"Implement data privacy for [use case]:
1. PII identification and classification
2. Data masking/tokenization
3. Access control policies
4. Consent management integration
5. Right to deletion workflow
6. Data lineage tracking
7. Audit logging"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="📊 CDP / Data Team Playbook"
        description="AI-native workflows for data engineering"
      />

      <Card>
        <CardTitle icon="⚙️">Tech Stack Context</CardTitle>
        <CodeBlock language="markdown" filename="CLAUDE-data.md">
{`# Data Team CLAUDE.md

## Tech Stack
- Warehouse: Snowflake / BigQuery / Databricks
- Transformation: dbt
- Orchestration: Airflow / Dagster
- Streaming: Kafka + Flink
- Feature Store: Feast / Tecton
- BI: Looker / Tableau

## Data Sources
- Transactional: PostgreSQL CDC
- Events: Segment / Snowplow
- Marketing: Google Ads, Meta, Klaviyo
- Product: Amplitude / Mixpanel

## Governance
- Data Catalog: Atlan / DataHub
- Quality: great_expectations
- Lineage: dbt + custom
- Access: Snowflake RBAC

## Conventions
- dbt models: staging → intermediate → marts
- Naming: source_table_metric_granularity
- Testing: schema + data tests on all models
- Documentation: all columns documented`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Data Workflows</CardTitle>

        {workflows.map((workflow, index) => (
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
            <PromptBox label="Claude Prompt">
              {workflow.prompt}
            </PromptBox>
          </div>
        ))}
      </Card>

      <Card>
        <CardTitle icon="📋">Quick Commands</CardTitle>
        <CodeBlock language="bash" filename="data-aliases.sh">
{`# dbt model generation
alias cdbt='claude "Create a dbt model for:"'

# SQL optimization
alias csql='claude "Optimize this SQL query for Snowflake:"'

# Pipeline creation
alias cpipe='claude "Create an Airflow DAG for:"'

# Data quality
alias cquality='claude "Add data quality checks for:"'

# Schema documentation
alias cschema='claude "Document this data model:"'

# Metric definition
alias cmetric='claude "Define this business metric with SQL:"'

# Debug pipeline
alias cdebug='claude "Debug this data pipeline failure:"'

# Privacy compliance
alias cprivacy='claude "Implement privacy controls for:"'`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🏗️">Data Model Template</CardTitle>
        <PromptBox label="dbt Model Generation">
{`"Create a dbt model for [business entity]. Generate:

1. STAGING MODEL
   - Source definition
   - Column renaming to standards
   - Type casting
   - Basic cleaning

2. INTERMEDIATE MODEL
   - Business logic transformations
   - Joins with related entities
   - Calculated fields

3. MART MODEL
   - Final dimensions/facts
   - Aggregations at right grain
   - User-friendly naming

4. TESTING
   - Schema tests (unique, not_null, accepted_values)
   - Data tests (relationships, custom logic)
   - Freshness tests

5. DOCUMENTATION
   - Column descriptions
   - Business context
   - Source system notes
   - Example queries"`}
        </PromptBox>
      </Card>

      <Card>
        <CardTitle icon="📊">Data Quality Metrics</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>99.8%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Data Freshness SLA</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>100%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Models Documented</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>0</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Failed Quality Checks</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>95%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Identity Match Rate</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Data;
