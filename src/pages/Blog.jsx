import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 'obgs-of-kwasu',
      title: 'How I became the OBGS of KWASU',
      excerpt: 'The untold story of resilience, late nights, and the journey of becoming a recognized builder in my community.',
      date: 'March 15, 2024',
      category: 'Story',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    },
    // More posts can be added here
  ];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="font-sans font-black text-6xl md:text-8xl text-ink tracking-tighter uppercase mb-4">
          The Blog
        </h1>
        <p className="font-sans font-bold text-xl text-ink/70">
          Thoughts, technical deep dives, and stories from the journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/blog/${post.id}`} className="block">
              <div className="border-4 border-ink bg-card shadow-brutal transition-all hover:-translate-y-2 hover:translate-x-2 hover:shadow-none overflow-hidden h-full flex flex-col">
                <div className="aspect-video bg-accent relative overflow-hidden border-b-4 border-ink">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-accent px-3 py-1 border-2 border-ink font-bold text-xs uppercase shadow-brutal-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex-grow">
                  <div className="font-sans font-bold text-sm text-ink/50 mb-4">{post.date}</div>
                  <h2 className="font-sans font-black text-3xl text-ink tracking-tight mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-sans font-medium text-ink/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-8 pb-8">
                  <span className="font-sans font-black text-sm uppercase tracking-widest text-ink group-hover:underline underline-offset-4 decoration-4 decoration-accent">
                    Read Story →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
