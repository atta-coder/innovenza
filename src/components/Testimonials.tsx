import React from 'react';

const testimonials = [
  {
    content: "Innovenza transformed our online presence and helped us reach a global audience. Our booking inquiries increased by 180% within just 4 months!",
    author: "Mr. Umer",
<<<<<<< HEAD
    role: "CEO",
    company: "Tayyabatours",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
=======
    role: "Owner",
    company: "Tayyabatours",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec
  },
  {
    content: "Their expertise in social media marketing and content strategy helped us establish a strong brand presence and connect with our target audience.",
    author: "Mr. Waleed",
<<<<<<< HEAD
    role: "CEO",
    company: "Tayloft",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300"
=======
    role: "Owner",
    company: "Tayloft",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec
  },
  {
    content: "The team's e-commerce expertise helped us achieve a 250% increase in online sales while reducing our marketing costs significantly.",
    author: "Mr. Samee",
<<<<<<< HEAD
    role: "CEO",
    company: "Evento Store",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
=======
    role: "Owner",
    company: "Evento Store",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-slate-900/50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-secondary-light to-secondary bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Innovenza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-white/5 hover:border-secondary/20 transition-all duration-300 group">
              <p className="text-gray-300 mb-6 italic group-hover:text-white transition-colors">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
<<<<<<< HEAD
                  className="w-12 h-12 rounded-full object-cover mr-4"
=======
                  className="w-12 h-12 rounded-full mr-4 ring-2 ring-secondary/20 group-hover:ring-secondary transition-colors"
>>>>>>> 04036188b566433aa7ada813c01c04ccd44c70ec
                />
                <div>
                  <h4 className="text-white font-semibold group-hover:text-secondary-light transition-colors">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-secondary text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;