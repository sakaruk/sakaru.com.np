import React from 'react';
import { motion } from 'framer-motion';


export function AnimatedList({ items, basePath }) {
  return (
    <div className="space-y-1">
      {items.map((item, i) => (
        <motion.article 
          key={item.url}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative py-12 px-0 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10">
            <time className="font-label text-sm text-on-surface-variant/60 w-32 shrink-0 pt-1">{item.frontmatter.date}</time>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-label font-bold text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded">{item.frontmatter.tag}</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors mb-4">
                <a href={item.url}>{item.frontmatter.title}</a>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                {item.frontmatter.description || "A deep dive into custom app frameworks..."}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary font-label font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform">
                  <a href={item.url}>READ {basePath === 'talks' ? 'TALK' : 'ARTICLE'}</a> <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-surface-container-low opacity-0 group-hover:opacity-100 -mx-8 rounded-xl transition-all duration-300 -z-0"></div>
        </motion.article>
      ))}
    </div>
  );
}
