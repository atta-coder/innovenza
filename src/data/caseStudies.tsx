import React from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

export const caseStudies = [
  {
    id: 'global-tech',
    title: 'Global Tech Company',
    category: 'Digital Transformation',
    metrics: [
      { icon: <TrendingUp className="w-5 h-5" />, label: 'Increased Revenue', value: '150%' },
      { icon: <Users className="w-5 h-5" />, label: 'User Growth', value: '2.5x' },
      { icon: <Target className="w-5 h-5" />, label: 'ROI', value: '300%' }
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'How we transformed a traditional tech company into a digital-first leader in their industry.',
    challenge: 'The company was struggling with outdated systems and processes, leading to inefficiencies and lost opportunities.',
    solution: 'We implemented a comprehensive digital transformation strategy, modernizing their infrastructure and processes.'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    category: 'Growth Marketing',
    metrics: [
      { icon: <TrendingUp className="w-5 h-5" />, label: 'Sales Growth', value: '200%' },
      { icon: <Users className="w-5 h-5" />, label: 'Customer Base', value: '3x' },
      { icon: <Target className="w-5 h-5" />, label: 'Conversion Rate', value: '15%' }
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Scaling an e-commerce platform to achieve record-breaking growth in 12 months.',
    challenge: 'The platform was experiencing low conversion rates and struggling to scale their customer base.',
    solution: 'We developed a comprehensive growth strategy focusing on user experience, marketing automation, and data analytics.'
  },
  {
    id: 'meta-ads-success',
    title: 'Fashion Retailer Meta Ads Campaign',
    category: 'Meta Advertising',
    metrics: [
      { icon: <TrendingUp className="w-5 h-5" />, label: 'ROAS', value: '4.2x' },
      { icon: <Users className="w-5 h-5" />, label: 'Reach Growth', value: '300%' },
      { icon: <Target className="w-5 h-5" />, label: 'CTR', value: '3.8%' }
    ],
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'How we helped a fashion retailer achieve exceptional results through targeted Meta advertising campaigns.',
    challenge: 'The client needed to increase online sales and brand awareness while maintaining a profitable return on ad spend.',
    solution: 'We implemented a multi-faceted Meta Ads strategy with custom audiences, dynamic product ads, and strategic retargeting campaigns.'
  }
];