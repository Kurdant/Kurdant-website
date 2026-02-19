import { useMemo } from 'react';

// Parser manuel de frontmatter YAML (sans Buffer, compatible navigateur)
function parseFrontmatter(rawContent) {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: rawContent };
  
  const yamlText = match[1];
  const markdown = match[2];
  
  const data = {};
  yamlText.split(/\r?\n/).forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    
    // Remove quotes
    value = value.replace(/^["']|["']$/g, '');
    
    // Parse arrays [tag1, tag2]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(v => v.trim().replace(/["']/g, ''));
    }
    
    data[key] = value;
  });
  
  return { data, content: markdown };
}

export const useLocalBlog = () => {
  const blogs = useMemo(() => {
    const markdownFiles = import.meta.glob('/BLOGS/**/*.md', { query: '?raw', import: 'default', eager: true });
    
    const parsedBlogs = Object.entries(markdownFiles).map(([filepath, content]) => {
      const { data: frontmatter, content: markdown } = parseFrontmatter(content);
      
      const pathParts = filepath.split('/');
      const category = pathParts[pathParts.length - 2];
      
      return {
        ...frontmatter,
        content: markdown,
        category: frontmatter.category || category,
        filepath
      };
    });
    
    return parsedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const getBlogBySlug = (slug) => {
    return blogs.find(blog => blog.slug === slug);
  };

  const getBlogsByCategory = (category) => {
    return blogs.filter(blog => blog.category === category);
  };

  const getRecentBlogs = (count = 3) => {
    return blogs.slice(0, count);
  };

  const getAllCategories = () => {
    const categories = [...new Set(blogs.map(blog => blog.category))];
    return categories;
  };

  return {
    blogs,
    getBlogBySlug,
    getBlogsByCategory,
    getRecentBlogs,
    getAllCategories
  };
};
