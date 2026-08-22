export interface Project {
  id: string
  title: string
  category: string
  description: string
  imageUrl: string
  link: string
  featured?: boolean
  size?: 'large' | 'small'
  numIndex: string
}

export const projects: Project[] = [
  {
    id: 'global-ledger',
    title: 'Global Ledger Platform',
    category: 'Fintech / Enterprise',
    description: 'End-to-end product design and engineering for platforms that demand scale and stability.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4nameSWibgXVeod6UQs74LQ2LnISIhe5Y6KXJOdVEz4PLzSVWWaUq_09LC9pnyR-1nawIq6DxGkZU2JJiaijwsjo5_7yDCcdvKt-fr1oi21Odu210qHRxs-QRaqfOu_ydanfWbiv77h8C6WBP3XFtQ-eu7oQpUaRXfco9Xnq4Ifpx2EYh94c6Dk8JVjy-7iag0lx598e7cWWAgAOX6gjSc9HoH3zESs4PZIkYnlGIc9OtDfW6slll',
    link: '#',
    featured: true,
    size: 'large',
    numIndex: '01',
  },
  {
    id: 'nexus-data-sync',
    title: 'Nexus Data Sync',
    category: 'Cloud Infrastructure',
    description: 'Custom architectural solutions and robust backend systems tailored to enterprise requirements.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL1x8XPkGVNp6l9ONFPnWkLLNyBsDh8IL4UXQ7VvDqP9DBKVhLLaoaJ1yV23uHI24OLZVlXlRpQLBBYy5yiZomjTnach_EpEpMGFpla4vtb-FzGGykZU_FX6wIywnfvtWW9M7bip7rg7v3bZO8_xVa8Yc99C2L2CreBQCazgrVgzjnFDbBScFmHuGFFBWJ1sJ2olqVXFi19qY1n-FlEtO8GBuFLEfnvG8Zs7I8GPjLpTBzr8jau6Zy',
    link: '#',
    featured: true,
    size: 'small',
    numIndex: '02',
  },
  {
    id: 'aura-financial',
    title: 'Aura Financial',
    category: 'UI/UX',
    description: 'Creating intuitive, architectural interfaces that balance high-end aesthetics with seamless user journeys.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk5-JwF3qJFW1fWIcmrAGRhWNtyvAaodZCcRvSQ2iuIIcdpHpQPE7-saBQU7jYAevbiOgPxiyAVtIE8cg4zhGVWozd6-p13GgklG7Vwe-39vaXrrdtBLcma3VhkYgYDJB3U65YyXtEHQCOdm6tg0iSeEs6ZjBDTe7RpdZdkWJo8wynKPHgqbawn2RjD2bjKLAKwtuCgHWCpPYYrHvl-kwfjkjpxUqkX8sh6GIoJ34YrA_I0ol0_IU4-Q',
    link: '#',
    numIndex: '01',
  },
  {
    id: 'nexus-platform',
    title: 'Nexus Platform',
    category: 'Web Apps',
    description: 'Engineering complex, state-driven platforms handling vast data flows while maintaining clean UX.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoRWPFZywMXmf3Ftlm2-DdfCVsprM8smvUEIMdHU2vfOcpEGNITJ9gOac_vAqmWil4LTp_3_bIT18RRM_bn2rT8lA7XnvwqzdsrEkezYcb0qN8XTNt3073dqBpJA4tqo27ti9N_tj96kGCapsvrWoo-lv1wctDgWKybHZH--Cdy0n_L6rLE0b11DZ7mnir5yNeAQCqKay-CQ4TgvzlGmVT_LUX0lmHIyOQdc0JiGHv5XWebVIiKi23FQ',
    link: '#',
    numIndex: '02',
  },
  {
    id: 'obscura-retail',
    title: 'Obscura Retail',
    category: 'E-Commerce',
    description: 'An editorial e-commerce website layout featuring a stark monochromatic design and quiet luxury.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyzPCpRrPl-Tah2t2Vf4iNJCFVTRwBRy_fW0sGd-dW1VhOyfOBz0RIlR7cjawKGrV_0QoyHkOStiFmlrTid5s17JAkDcdhXg7ME-QYESdLprXaPHMPrO8EDIxp8J1sYCoEj4qFYvZECmex0IfDm_wFNefv1Iw0heomVCg-KnYX-NKqe-DIDSrKO9pXWkD7xMPvOB2NZLERhQ3QLRNQFg88OvS5jjTLFNKxFbWBi-NRyOEdnP1fM8N6Jw',
    link: '#',
    numIndex: '03',
  },
  {
    id: 'framework-studio',
    title: 'Framework Studio',
    category: 'Websites',
    description: 'A minimalist architectural website design showcasing an authoritative and precise design system.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2nKa0PxMYw4TxO9Sp-P0TW8oknO29H85pxK1Q5xDPxnEU486opSigD2Ua0rlvE7c61q0euChXfGIdXwabo4B6oyXJVXiC-jfyoo7XvIA-T-AkITC6Ye8EDbHD4tTbJR_1OVxDfEWY1bH3md0XmXvEYOrYeVrVOSL2M0UkjcDl4LAD42jd3krBApGNATlhgnOgxRRUSjkAdMmEUMLwnxN7CZpzc9rmzaGKqKiQ5McPlOn37NsYRNUZEg',
    link: '#',
    numIndex: '04',
  },
]
