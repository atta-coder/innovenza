import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Search, 
  Share2, 
  BarChart3, 
  PenTool,
  Smartphone,
  Megaphone,
  Mail,
  ArrowRight,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom websites that engage visitors and drive conversions with modern technologies and best practices.',
    link: '#web-development',
    gradient: 'from-violet-500 to-indigo-500'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher in search results with data-driven SEO strategies.',
    link: '#seo',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Social Media',
    description: 'Strategic social media management to build your brand and engage with your target audience.',
    link: '#social-media',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics & Data',
    description: 'Data-driven insights to optimize your marketing efforts and maximize ROI.',
    link: '#analytics',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Content Creation',
    description: 'Engaging content that tells your brand story and connects with your audience.',
    link: '#content',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies that align with your business goals and drive growth.',
    link: '#strategy',
    gradient: 'from-purple-500 to-fuchsia-500'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'PPC Advertising',
    description: 'Targeted paid advertising campaigns that deliver measurable results and ROI.',
    link: '#advertising',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email Marketing',
    description: 'Strategic email campaigns that nurture leads and drive customer engagement.',
    link: '#email',
    gradient: 'from-blue-500 to-violet-500'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Growth Marketing',
    description: 'Data-driven growth strategies that scale your business and increase market share.',
    link: '#growth',
    gradient: 'from-green-500 to-emerald-500'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-600 font-medium text-sm mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Digital
              <span className="text-gradient-primary"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your business with our full suite of digital marketing services
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-indigo-500/5 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <a 
                  href={service.link}
                  className="inline-flex items-center text-violet-600 font-medium group/link"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;