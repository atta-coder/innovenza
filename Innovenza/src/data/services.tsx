import React from 'react';
import { 
  Code2, 
  Search, 
  Megaphone, 
  BarChart3, 
  PenTool,
  Rocket,
  Target,
  Mail,
  TrendingUp
} from 'lucide-react';

export const services = [
  {
    id: 'web-development',
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom websites that engage visitors and drive conversions with modern technologies and best practices.',
    gradient: 'from-violet-500 to-indigo-500',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Website Maintenance',
      'Performance Optimization'
    ],
    benefits: [
      'Increased Online Presence',
      'Better User Experience',
      'Higher Conversion Rates',
      'Improved Load Times',
      'Mobile-First Design'
    ]
  },
  {
    id: 'seo',
    icon: <Search className="w-8 h-8" />,
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher in search results with data-driven SEO strategies.',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Content Optimization',
      'Link Building'
    ],
    benefits: [
      'Higher Search Rankings',
      'Increased Organic Traffic',
      'Better ROI',
      'Brand Visibility',
      'Local SEO Presence'
    ]
  },
  // Add other services here...
];