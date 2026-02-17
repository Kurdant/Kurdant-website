import { useState, useEffect } from 'react';
import { getMockPosts } from '../data/mockBlogData';

const WISP_BASE_URL = 'https://wisp.blog/api';
const BLOG_ID = import.meta.env.VITE_WISP_BLOG_ID || 'kurdant-blog';
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_BLOG === 'true' || true;

const CATEGORY_MAP = {
  all: null,
  dev: 'development',
  gaming: 'gaming',
  ai: 'artificial-intelligence',
  other: 'other'
};

export function useWisp(category = 'all', page = 1, perPage = 10) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      if (USE_MOCK_DATA) {
        setTimeout(() => {
          const mockData = getMockPosts(category, page, perPage);
          setPosts(mockData.posts);
          setTotalPages(mockData.totalPages);
          setLoading(false);
        }, 500);
        return;
      }

      try {
        const categoryParam = CATEGORY_MAP[category];
        const params = new URLSearchParams({
          page: page.toString(),
          limit: perPage.toString(),
        });

        if (categoryParam) {
          params.append('category', categoryParam);
        }

        const response = await fetch(
          `${WISP_BASE_URL}/blogs/${BLOG_ID}/posts?${params}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }

        const data = await response.json();
        
        setPosts(data.posts || []);
        setTotalPages(Math.ceil((data.total || 0) / perPage));
      } catch (err) {
        setError(err.message);
        console.error('WISP API Error:', err);
        
        const mockData = getMockPosts(category, page, perPage);
        setPosts(mockData.posts);
        setTotalPages(mockData.totalPages);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category, page, perPage]);

  return { posts, loading, error, totalPages };
}

export function useBlogPost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${WISP_BASE_URL}/blogs/${BLOG_ID}/posts/${slug}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
        console.error('WISP API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
}
