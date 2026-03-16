import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { id } = useParams();

  // Mock post data for the requested story
  const post = {
    title: 'How I became the OBGS of KWASU',
    date: 'March 15, 2024',
    category: 'The Journey',
    content: `
      <p>It wasn't something that happened overnight. Being the OBGS (Official Big Guy of Software) at KWASU was a title earned through late nights in the lab, troubleshooting bugs that no one else wanted to touch, and a relentless drive to build things that actually worked.</p>
      <p>I remember my first year, feeling like just another student in the crowd. But I knew I wanted more. I started by building simple tools for my classmates, then moved on to bigger projects for the department.</p>
      <blockquote>The title isn't about the name, it's about the value you bring to the community.</blockquote>
      <p>As I started shipping more, people started noticing. "Ari is the guy," they'd say. And that's how it started. In this post, I'll break down the key moments that defined this journey...</p>
    `,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link 
          to="/blog" 
          className="inline-block mb-12 font-sans font-black text-sm uppercase tracking-widest text-ink bg-accent px-6 py-3 border-4 border-ink shadow-brutal hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-brutal-sm transition-all"
        >
          ← Back to Blog
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-accent px-3 py-1 border-2 border-ink font-bold text-xs uppercase shadow-brutal-sm">
              {post.category}
            </span>
            <span className="font-sans font-bold text-sm text-ink/50">{post.date}</span>
          </div>
          <h1 className="font-sans font-black text-5xl md:text-7xl text-ink tracking-tighter uppercase mb-12 leading-[0.9]">
            {post.title}
          </h1>
        </div>

        <div className="border-4 border-ink bg-card shadow-brutal overflow-hidden mb-16">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-auto grayscale"
          />
        </div>

        <div 
          className="prose prose-xl prose-ink max-w-none font-sans font-medium text-ink/80 leading-relaxed
                     prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
                     prose-blockquote:border-l-8 prose-blockquote:border-accent prose-blockquote:bg-accent/10 prose-blockquote:p-8 prose-blockquote:font-black prose-blockquote:italic
                     prose-strong:font-black prose-a:text-accent prose-a:font-black prose-a:decoration-4 prose-a:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </div>
  );
};

export default BlogPost;
