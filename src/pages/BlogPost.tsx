import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { getBlogById } from '../data/blogs';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = blogId ? getBlogById(blogId) : undefined;

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/"
            className="inline-flex items-center text-violet-600 hover:text-violet-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to={`/services/${blog.serviceId}`}
          className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Service
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
          
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center">
              <img
                src={blog.author.image}
                alt={blog.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                <p className="text-sm text-gray-500">{blog.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{blog.readTime}</span>
            </div>
            
            <div className="text-sm text-gray-500">
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          <div className="prose prose-lg prose-violet">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;