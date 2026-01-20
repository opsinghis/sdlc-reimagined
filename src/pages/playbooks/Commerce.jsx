import React from 'react';
import {
  PageHeader,
  Card,
  CardTitle,
  PromptBox,
  CodeBlock,
  InfoBox
} from '../../components/ui';

const Commerce = () => {
  const workflows = [
    {
      title: 'Payment Integration',
      icon: '💳',
      prompt: `"Implement payment method integration for [provider]:
1. SDK integration with error handling
2. Payment flow (authorize, capture, refund)
3. Webhook handlers with idempotency
4. PCI compliance considerations
5. Fraud check integration points
6. Testing with sandbox environment
7. Monitoring and alerting setup"`
    },
    {
      title: 'Checkout Flow',
      icon: '🛒',
      prompt: `"Optimize the checkout flow:
1. Cart validation and pricing rules
2. Inventory reservation logic
3. Shipping calculation integration
4. Tax calculation (Avalara/TaxJar)
5. Promotional code validation
6. Order creation and confirmation
7. Performance optimization for conversion"`
    },
    {
      title: 'Product Catalog',
      icon: '📦',
      prompt: `"Implement product catalog feature:
1. Product data model (variants, options)
2. Search integration (Elasticsearch/Algolia)
3. Filtering and faceted navigation
4. Inventory sync from ERP
5. Pricing rules engine
6. Image processing and CDN
7. SEO optimization"`
    },
    {
      title: 'Order Management',
      icon: '📋',
      prompt: `"Build order management functionality:
1. Order state machine
2. Fulfillment integration (WMS)
3. Shipping carrier integration
4. Return/refund processing
5. Order modification rules
6. Customer notifications
7. Reporting and analytics"`
    },
    {
      title: 'Promotion Engine',
      icon: '🏷️',
      prompt: `"Implement promotion capability:
1. Promotion rule engine
2. Discount types (%, fixed, BOGO)
3. Eligibility rules (cart, customer)
4. Stackability rules
5. Usage limits and tracking
6. A/B testing integration
7. Analytics and ROI tracking"`
    },
    {
      title: 'Customer Data Platform',
      icon: '👤',
      prompt: `"Implement customer profile feature:
1. Customer data model
2. Address management
3. Preference center
4. Order history aggregation
5. Loyalty program integration
6. Personalization hooks
7. GDPR compliance (export, delete)"`
    }
  ];

  return (
    <div>
      <PageHeader
        title="🛒 Commerce Platform Team Playbook"
        description="AI-native workflows for e-commerce development"
      />

      <Card>
        <CardTitle icon="⚙️">Tech Stack Context</CardTitle>
        <CodeBlock language="markdown" filename="CLAUDE-commerce.md">
{`# Commerce Team CLAUDE.md

## Platform
- Commerce Engine: Custom / commercetools / Shopify Plus
- Payments: Stripe, Adyen, PayPal
- Search: Algolia / Elasticsearch
- CDN: Cloudflare / Fastly

## Integrations
- ERP: SAP / NetSuite
- WMS: ShipBob / Flexport
- Tax: Avalara
- Email: Klaviyo / Braze
- Analytics: Segment → Snowflake

## Compliance
- PCI DSS Level 1
- GDPR / CCPA
- Accessibility WCAG 2.1 AA

## Critical Paths
- Checkout: < 3 sec total
- Search: < 200ms
- Product page: < 1.5 sec LCP
- Cart: Real-time inventory`}
        </CodeBlock>
      </Card>

      <Card>
        <CardTitle icon="🛠️">Domain Workflows</CardTitle>

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
        <CardTitle icon="⚠️">Commerce-Specific Considerations</CardTitle>
        <InfoBox variant="warning" title="Critical for E-commerce">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
            <div>
              <h5 style={{ marginBottom: '10px', color: 'var(--accent-red)' }}>🔒 PCI Compliance</h5>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem' }}>
                <li>• Never log card numbers</li>
                <li>• Use tokenization always</li>
                <li>• Encrypt data at rest/transit</li>
                <li>• Regular security scans</li>
              </ul>
            </div>
            <div>
              <h5 style={{ marginBottom: '10px', color: 'var(--accent-orange)' }}>📊 Inventory Accuracy</h5>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem' }}>
                <li>• Real-time stock checks</li>
                <li>• Reservation on cart add</li>
                <li>• Oversell protection</li>
                <li>• Multi-warehouse logic</li>
              </ul>
            </div>
            <div>
              <h5 style={{ marginBottom: '10px', color: 'var(--accent-blue)' }}>💰 Price Integrity</h5>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem' }}>
                <li>• Server-side price calc</li>
                <li>• Audit trail for changes</li>
                <li>• Currency handling</li>
                <li>• Tax calculation accuracy</li>
              </ul>
            </div>
            <div>
              <h5 style={{ marginBottom: '10px', color: 'var(--accent-green)' }}>🚀 Performance</h5>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem' }}>
                <li>• Checkout under 3 seconds</li>
                <li>• Handle flash sales</li>
                <li>• Cache invalidation</li>
                <li>• CDN for static assets</li>
              </ul>
            </div>
          </div>
        </InfoBox>
      </Card>

      <Card>
        <CardTitle icon="📊">Business Metrics</CardTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>3.2%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Conversion Rate</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>68%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cart Recovery</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>99.99%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Checkout Uptime</div>
          </div>
          <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent-green)' }}>2.1s</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Avg Checkout Time</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Commerce;
