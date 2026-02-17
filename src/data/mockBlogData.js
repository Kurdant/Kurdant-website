export const mockBlogPosts = [
  {
    id: '1',
    slug: 'creer-portfolio-cyberpunk-react',
    title: 'Créer un Portfolio Cyberpunk avec React',
    description: 'Découvrez comment créer un portfolio au style cyberpunk Y2K avec React, CSS modules et des effets visuels impressionnants.',
    excerpt: 'Guide complet pour développer un portfolio unique avec une esthétique cyberpunk...',
    image: '/images/blog/portfolio-cyberpunk.jpg',
    tags: ['React', 'CSS', 'Design'],
    category: 'dev',
    publishedAt: '2026-02-15T10:00:00Z',
    createdAt: '2026-02-15T10:00:00Z',
  },
  {
    id: '2',
    slug: 'canvas-api-mini-jeux-javascript',
    title: 'Canvas API : Créer des Mini-Jeux en JavaScript',
    description: 'Apprenez à utiliser l\'API Canvas pour développer des mini-jeux browser interactifs et performants.',
    excerpt: 'Tutoriel étape par étape pour maîtriser Canvas API et créer des jeux...',
    image: '/images/blog/canvas-games.jpg',
    tags: ['JavaScript', 'Canvas', 'Games'],
    category: 'gaming',
    publishedAt: '2026-02-12T14:30:00Z',
    createdAt: '2026-02-12T14:30:00Z',
  },
  {
    id: '3',
    slug: 'ia-generative-integration-web',
    title: 'Intégrer l\'IA Générative dans vos Applications Web',
    description: 'Explorez comment intégrer des modèles d\'IA générative comme GPT dans vos applications web modernes.',
    excerpt: 'Découvrez les meilleures pratiques pour intégrer l\'IA dans vos projets...',
    image: '/images/blog/ai-integration.jpg',
    tags: ['IA', 'API', 'Web'],
    category: 'ai',
    publishedAt: '2026-02-10T09:00:00Z',
    createdAt: '2026-02-10T09:00:00Z',
  },
  {
    id: '4',
    slug: 'vite-react-performance-optimisation',
    title: 'Optimiser les Performances avec Vite et React',
    description: 'Techniques avancées pour optimiser les performances de vos applications React avec Vite.',
    excerpt: 'Maximisez les performances de votre app React avec ces techniques...',
    image: '/images/blog/vite-react.jpg',
    tags: ['Vite', 'React', 'Performance'],
    category: 'dev',
    publishedAt: '2026-02-08T16:00:00Z',
    createdAt: '2026-02-08T16:00:00Z',
  },
  {
    id: '5',
    slug: 'game-design-browser-games',
    title: 'Game Design pour Jeux Browser',
    description: 'Les fondamentaux du game design appliqués au développement de jeux web.',
    excerpt: 'Principes de game design essentiels pour créer des jeux browser captivants...',
    image: '/images/blog/game-design.jpg',
    tags: ['Game Design', 'Browser', 'UX'],
    category: 'gaming',
    publishedAt: '2026-02-05T11:00:00Z',
    createdAt: '2026-02-05T11:00:00Z',
  },
  {
    id: '6',
    slug: 'supabase-backend-as-service',
    title: 'Supabase : Le Backend-as-a-Service pour Vos Projets',
    description: 'Explorez Supabase et découvrez comment simplifier le développement backend de vos applications.',
    excerpt: 'Guide d\'introduction à Supabase pour développeurs frontend...',
    image: '/images/blog/supabase.jpg',
    tags: ['Supabase', 'Backend', 'Database'],
    category: 'dev',
    publishedAt: '2026-02-03T13:00:00Z',
    createdAt: '2026-02-03T13:00:00Z',
  },
  {
    id: '7',
    slug: 'machine-learning-web-tensorflow-js',
    title: 'Machine Learning dans le Browser avec TensorFlow.js',
    description: 'Implémentez des modèles de machine learning directement dans le navigateur avec TensorFlow.js.',
    excerpt: 'Découvrez comment exécuter des modèles ML côté client...',
    image: '/images/blog/tensorflow-js.jpg',
    tags: ['ML', 'TensorFlow', 'JavaScript'],
    category: 'ai',
    publishedAt: '2026-02-01T10:30:00Z',
    createdAt: '2026-02-01T10:30:00Z',
  },
  {
    id: '8',
    slug: 'css-animations-effets-cyberpunk',
    title: 'CSS Animations : Effets Cyberpunk et Glitch',
    description: 'Créez des effets visuels cyberpunk impressionnants avec CSS et des animations avancées.',
    excerpt: 'Tutoriel complet sur les animations CSS pour un style cyberpunk...',
    image: '/images/blog/css-cyberpunk.jpg',
    tags: ['CSS', 'Animation', 'Design'],
    category: 'dev',
    publishedAt: '2026-01-28T15:00:00Z',
    createdAt: '2026-01-28T15:00:00Z',
  },
  {
    id: '9',
    slug: 'seo-react-spa-lighthouse',
    title: 'SEO pour React SPA : Optimiser Lighthouse',
    description: 'Stratégies pour améliorer le référencement et les scores Lighthouse de vos applications React.',
    excerpt: 'Optimisez votre SPA React pour le SEO et les performances...',
    image: '/images/blog/seo-react.jpg',
    tags: ['SEO', 'React', 'Lighthouse'],
    category: 'other',
    publishedAt: '2026-01-25T09:30:00Z',
    createdAt: '2026-01-25T09:30:00Z',
  },
  {
    id: '10',
    slug: 'webgl-three-js-3d-web',
    title: '3D sur le Web avec Three.js et WebGL',
    description: 'Créez des expériences 3D interactives dans le navigateur avec Three.js.',
    excerpt: 'Introduction au développement 3D web avec Three.js...',
    image: '/images/blog/threejs-webgl.jpg',
    tags: ['WebGL', 'Three.js', '3D'],
    category: 'gaming',
    publishedAt: '2026-01-20T12:00:00Z',
    createdAt: '2026-01-20T12:00:00Z',
  },
];

export const getMockPosts = (category = 'all', page = 1, perPage = 10) => {
  let filteredPosts = mockBlogPosts;

  if (category !== 'all') {
    filteredPosts = mockBlogPosts.filter(post => post.category === category);
  }

  const total = filteredPosts.length;
  const totalPages = Math.ceil(total / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const posts = filteredPosts.slice(startIndex, endIndex);

  return {
    posts,
    total,
    totalPages,
    currentPage: page,
  };
};
