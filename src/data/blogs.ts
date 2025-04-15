import { services } from './services';

export interface Blog {
  id: string;
  serviceId: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

export const blogs: Blog[] = [
  {
    id: 'responsive-web-design-2025',
    serviceId: 'web-development',
    title: 'The Future of Responsive Web Design in 2025',
    description: 'Explore the latest trends and technologies shaping responsive web design, from fluid typography to container queries.',
    content: `
      The landscape of web development is constantly evolving, and responsive design remains at its core. As we move into 2025, several key trends are reshaping how we approach responsive web design:

      ## Container Queries: The New Responsive
      Container queries represent a paradigm shift in responsive design. Unlike traditional media queries that look at the viewport, container queries allow components to adapt based on their parent container's size. This enables truly modular, context-aware components that can maintain their intended design regardless of where they're placed in the layout.

      ## Fluid Typography and Spacing
      Modern responsive design goes beyond simple breakpoints. Fluid typography using clamp() and viewport units creates smooth scaling text that maintains readability across all device sizes. Similarly, fluid spacing ensures consistent visual rhythm throughout your layouts.

      ## Performance Optimization
      With Core Web Vitals becoming increasingly important, responsive design must consider performance implications:
      - Optimized image delivery using srcset and sizes
      - Responsive loading strategies
      - Layout shift prevention

      ## Accessibility in Responsive Design
      Responsive design must ensure accessibility across all viewports:
      - Maintaining touch targets on mobile
      - Ensuring sufficient color contrast
      - Supporting both touch and keyboard navigation

      ## Future-Proofing Your Designs
      As new devices and form factors emerge, responsive design strategies must evolve:
      - Flexible grid systems
      - Component-based architecture
      - Progressive enhancement
      
      The future of responsive design is about creating resilient, adaptable interfaces that work seamlessly across all devices while maintaining performance and accessibility.
    `,
    date: '2024-03-15',
    readTime: '8 min',
    author: {
      name: 'Alex Chen',
      role: 'Senior Web Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 'seo-strategies-2025',
    serviceId: 'seo',
    title: 'Advanced SEO Strategies for 2025: Beyond Traditional Optimization',
    description: 'Discover cutting-edge SEO techniques that leverage AI, user intent, and semantic search to improve rankings.',
    content: `
      As search engines become more sophisticated, SEO strategies must evolve to keep pace. Here's what's working in 2025:

      ## AI-Driven Content Optimization
      Artificial Intelligence is revolutionizing how we approach SEO:
      - Natural language processing for content optimization
      - Predictive analytics for keyword research
      - AI-powered content generation and optimization

      ## User Intent and Semantic Search
      Understanding and matching user intent is crucial:
      - Topic clusters and semantic relevance
      - Entity-based optimization
      - Natural language query optimization

      ## Technical SEO Evolution
      Technical optimization continues to advance:
      - Core Web Vitals optimization
      - Mobile-first indexing requirements
      - Progressive Web Apps (PWAs)

      ## E-E-A-T and Content Authority
      Google's E-E-A-T guidelines emphasize:
      - Experience
      - Expertise
      - Authoritativeness
      - Trustworthiness

      ## Local SEO and Multi-Location Optimization
      Local search continues to evolve:
      - Local content optimization
      - Google Business Profile optimization
      - Local link building strategies

      Stay ahead of the curve by implementing these advanced SEO strategies while maintaining a solid foundation of SEO basics.
    `,
    date: '2024-03-10',
    readTime: '10 min',
    author: {
      name: 'Sarah Johnson',
      role: 'SEO Strategist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 'content-marketing-trends',
    serviceId: 'content-marketing',
    title: 'Content Marketing Trends Reshaping Digital Strategy',
    description: 'Learn how AI, personalization, and interactive content are transforming content marketing strategies.',
    content: `
      Content marketing is evolving rapidly with new technologies and changing consumer preferences. Here's what's driving success in 2025:

      ## AI-Powered Content Creation
      Artificial Intelligence is revolutionizing content creation:
      - AI-assisted writing and editing
      - Content personalization at scale
      - Predictive content analytics

      ## Interactive Content Experiences
      Engagement through interaction:
      - Interactive infographics
      - Augmented reality content
      - Virtual reality experiences
      - Gamified content

      ## Video Content Evolution
      Video continues to dominate:
      - Short-form video optimization
      - Live streaming strategies
      - Virtual events and webinars
      - 360-degree video experiences

      ## Data-Driven Content Strategy
      Leveraging data for better content:
      - Advanced content analytics
      - Behavioral analysis
      - Content attribution modeling
      - ROI measurement

      ## Content Distribution and Syndication
      Maximizing content reach:
      - Multi-channel distribution
      - Content atomization
      - Strategic partnerships
      - Influencer collaboration

      Success in content marketing requires staying ahead of these trends while maintaining focus on quality and value delivery.
    `,
    date: '2024-03-05',
    readTime: '12 min',
    author: {
      name: 'Michael Zhang',
      role: 'Content Strategy Director',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
];

export const getBlogsByService = (serviceId: string): Blog[] => {
  return blogs.filter(blog => blog.serviceId === serviceId);
};

export const getBlogById = (blogId: string): Blog | undefined => {
  return blogs.find(blog => blog.id === blogId);
};