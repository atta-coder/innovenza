import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
import BackButton from '../components/BackButton';

const blogPosts = [
  {
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt: "Discover the latest SEO techniques that are driving real results in today's digital landscape.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "John Smith",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "SEO"
  },
  {
    title: "The Future of Social Media Marketing",
    excerpt: "Explore emerging trends and technologies shaping the future of social media marketing.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Emma Davis",
    date: "March 12, 2025",
    readTime: "6 min read",
    category: "Social Media"
  },
  {
    title: "Maximizing ROI with PPC Campaigns",
    excerpt: "Learn how to optimize your PPC campaigns for better returns and lower acquisition costs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Alex Johnson",
    date: "March 10, 2025",
    readTime: "7 min read",
    category: "PPC"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        <BackButton />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Latest Insights</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-slate-900/50 rounded-lg overflow-hidden border border-white/5 hover:border-secondary/20 transition-colors">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-secondary text-white text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-400 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1 text-secondary" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-secondary" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-secondary" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
            Load More Posts
          </button>
        </div>
      </div>
      <ContactCTA />
    </div>
  );
};

export default Blog;