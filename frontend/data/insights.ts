export interface Insight {
  id: string
  title: string
  category: string
  date: string
  summary: string
  content?: string
  imageUrl?: string
  featured?: boolean
  numIndex: string
}

export const insights: Insight[] = [
  {
    id: 'end-of-monoliths',
    title: 'The End of Monoliths: A systemic approach to micro-services at scale.',
    category: 'Architecture',
    date: 'Featured',
    summary: 'Why high-performing engineering organizations are fundamentally restructuring their deployment pipelines to treat infrastructure as fungible logic.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi44lhiZyTEaUd2_0HoBW6jFY4mKULDsF6K8ZQG9tRWvmPYU6ctTFW8PyjD7cUwkFTQHnH1RBw9wfAdFKn5-QUqMFhqjBEgxY8TiXq8Hwr64gvQp3Bq53YME2D6cw5UdUsRnGXtsjCEj96uJo3yjWfN1oFJU_Q8DTCH1CZZ5ZkQyUG5LYbhGHPY5Z3oBcR9CqQ75ODgvxYzpXuVnfEnTJuKqsJcT8QO0nipwrq7SNkBum1ghm5kSq42A',
    featured: true,
    numIndex: '01',
  },
  {
    id: 'zero-trust-legacy',
    title: 'Zero-Trust Frameworks in Legacy Systems',
    category: 'Architecture',
    date: 'Oct 12',
    summary: 'Implementing modern security paradigms within environments designed a decade ago requires strategic abstraction layers, not just new tools.',
    numIndex: '02',
  },
  {
    id: 'metrics-digital-roi',
    title: 'Metrics that Matter for Digital ROI',
    category: 'Strategy',
    date: 'Oct 08',
    summary: 'Discard vanity metrics. A comprehensive guide to building data pipelines that measure actual business velocity and operational efficiency.',
    numIndex: '03',
  },
  {
    id: 'latency-product-liability',
    title: 'Latency as a Product Liability',
    category: 'Engineering',
    date: 'Oct 01',
    summary: 'In highly transactional systems, every millisecond of latency degrades user trust. Engineering strategies for sub-50ms response times.',
    numIndex: '04',
  },
  {
    id: 'async-engineering-teams',
    title: 'Building Asynchronous Engineering Teams',
    category: 'Culture',
    date: 'Sep 24',
    summary: 'The communication protocols and documentation standards required to make global, distributed engineering teams perform at elite levels.',
    numIndex: '05',
  },
  {
    id: 'design-systems-code',
    title: 'Design Systems as Code',
    category: 'Design',
    date: 'Sep 18',
    summary: 'Bridging the gap between Figma and Production by treating design tokens as immutable infrastructure.',
    numIndex: '06',
  },
  {
    id: 'data-mesh-paradigm',
    title: 'The Data Mesh Paradigm',
    category: 'Data',
    date: 'Sep 12',
    summary: 'Moving away from centralized lakes toward decentralized, domain-oriented data ownership.',
    numIndex: '07',
  },
]
