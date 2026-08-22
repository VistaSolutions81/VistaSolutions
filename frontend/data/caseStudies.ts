export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  outcome: string
  challenge: string
  imageUrl: string
  link: string
  numIndex: string
  layoutType: 'normal' | 'reversed'
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'supply-chain-redesign',
    title: 'Supply Chain Visibility Platform Redesign',
    client: 'Global Logistics Inc.',
    industry: 'Logistics',
    outcome: '+40% Efficiency',
    challenge: 'Legacy systems were causing massive data silos, leading to delayed shipments and inaccurate tracking for enterprise clients. The client needed a unified dashboard to orchestrate global operations in real-time.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4cy7NNcgWA5xbSGWTQf4yBamzqbJJJiCa_sUKaGYdZe2UexdeWiZEFqWs-xBsQzOFdVa8NlD7ouW0ldwRG909Lvc_wPX-0eeWWHDx4QqBtdp6CynWTegpiacpbg1GMqUVW1mSmfqfAhbDvXCoPIGR2iyINah4tL4Id13ycfesViPDF_aciQqDH9L9vQs-Y9ROYkwTH-BtDdBCSxyJJNaAIKJgb814rKmbtxpAfW4MrxvEuMICQ77B6w',
    link: '#',
    numIndex: '01',
    layoutType: 'normal',
  },
  {
    id: 'wealth-management-app',
    title: 'Next-Gen Wealth Management App',
    client: 'Apex Financial',
    industry: 'FinTech',
    outcome: '2.5M New Users',
    challenge: 'A traditional wealth management firm needed to attract a younger demographic without alienating their core, high-net-worth clientele. The existing app was complex, intimidating, and visually dated.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiM1FBCTHRvC9Ux_tOPm5ArKhAg7QFzXZ_GdP3BKMRikDk0jYj5hN1-0YBDuu4ER5CildRW1aa-6nPe15XMo9rJugMk6adb3XsfHD57jIYHS5hJC4DpnlcXd2m4itCCN8vu7vpYvQ5vQ_8GqtFXL1tla-sMIi133t4qLev9o7hhExpMCxs1VIQCGFe7x23SC05Svzqg7ReIlMcEo62RAJml_OuU3H0iBXk44F9t8z5J8QtTaqHScMcWw',
    link: '#',
    numIndex: '02',
    layoutType: 'reversed',
  },
]
