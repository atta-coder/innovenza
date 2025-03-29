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
  TrendingUp,
  Facebook
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
    ],
    detailedDescription: 'Our web development services focus on creating modern, responsive websites that not only look great but also perform exceptionally well. We use cutting-edge technologies and follow best practices to ensure your website stands out in today\'s competitive digital landscape.',
    process: [
      'Requirements Analysis',
      'Design & Prototyping',
      'Development',
      'Testing & QA',
      'Deployment',
      'Maintenance & Support'
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
    ],
    detailedDescription: 'Our SEO services are designed to improve your website\'s visibility in search engine results pages. We use data-driven strategies and white-hat techniques to help you rank higher and attract more qualified traffic.',
    process: [
      'SEO Audit',
      'Keyword Strategy',
      'On-Page Optimization',
      'Content Strategy',
      'Link Building',
      'Performance Tracking'
    ]
  },
  {
    id: 'content-marketing',
    icon: <PenTool className="w-8 h-8" />,
    title: 'Content Marketing',
    description: 'Engaging content that tells your story and connects with your target audience.',
    gradient: 'from-pink-500 to-rose-500',
    features: [
      'Content Strategy',
      'Blog Writing',
      'Social Media Content',
      'Email Marketing',
      'Video Content'
    ],
    benefits: [
      'Increased Engagement',
      'Brand Authority',
      'Organic Traffic Growth',
      'Lead Generation',
      'Customer Loyalty'
    ],
    detailedDescription: 'Our content marketing services help you create and distribute valuable, relevant content that attracts and retains your target audience. We develop comprehensive content strategies that align with your business goals.',
    process: [
      'Content Audit',
      'Strategy Development',
      'Content Creation',
      'Distribution',
      'Performance Analysis',
      'Optimization'
    ]
  },
  {
    id: 'social-media',
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Social Media Marketing',
    description: 'Strategic social media management to build brand awareness and engage your audience.',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Platform Strategy',
      'Content Creation',
      'Community Management',
      'Paid Advertising',
      'Analytics & Reporting'
    ],
    benefits: [
      'Brand Awareness',
      'Audience Engagement',
      'Lead Generation',
      'Customer Loyalty',
      'Social Proof'
    ],
    detailedDescription: 'Our social media marketing services help you build and maintain a strong presence across all relevant social platforms. We create engaging content and manage your community to drive meaningful interactions.',
    process: [
      'Platform Audit',
      'Strategy Development',
      'Content Calendar',
      'Community Management',
      'Analytics',
      'Optimization'
    ]
  },
  {
    id: 'meta-ads',
    icon: <Facebook className="w-8 h-8" />,
    title: 'Meta Ads',
    description: 'Strategic Meta advertising campaigns that drive conversions and maximize ROI across Facebook and Instagram.',
    gradient: 'from-blue-600 to-blue-400',
    features: [
      'Campaign Strategy Development',
      'Custom Audience Creation',
      'Ad Creative Design',
      'A/B Testing',
      'Performance Analytics',
      'Conversion Tracking'
    ],
    benefits: [
      'Targeted Reach',
      'Increased Brand Awareness',
      'Higher Conversion Rates',
      'Better Ad Spend ROI',
      'Detailed Performance Insights'
    ],
    detailedDescription: 'Our Meta Ads service helps businesses leverage the full potential of Facebook and Instagram advertising. We create targeted campaigns that reach your ideal audience, drive engagement, and generate measurable results through strategic ad placement and optimization.',
    process: [
      'Audience Analysis',
      'Campaign Strategy',
      'Creative Development',
      'Campaign Launch',
      'Performance Monitoring',
      'Optimization & Scaling'
    ]
  },
  {
    id: 'analytics',
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to optimize your digital marketing performance and ROI.',
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Custom Dashboard Setup',
      'KPI Tracking',
      'Performance Analysis',
      'Conversion Tracking',
      'ROI Measurement'
    ],
    benefits: [
      'Data-Driven Decisions',
      'Performance Optimization',
      'Cost Efficiency',
      'Campaign Insights',
      'Better ROI'
    ],
    detailedDescription: 'Our analytics and reporting services provide you with clear, actionable insights into your digital marketing performance. We help you understand your data and make informed decisions to improve your results.',
    process: [
      'Goals Definition',
      'Tracking Setup',
      'Data Collection',
      'Analysis',
      'Reporting',
      'Recommendations'
    ]
  }
];