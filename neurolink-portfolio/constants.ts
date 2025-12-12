import { Project, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'Machine Learning', level: 90, category: 'ML' },
  { name: 'Deep Learning', level: 85, category: 'ML' },
  { name: 'Reinforcement Learning', level: 80, category: 'ML' },
  { name: 'Computer Vision', level: 80, category: 'ML' },
  { name: 'Data Engineering', level: 85, category: 'Dev' },
  { name: 'Frontend / UX', level: 80, category: 'Dev' },
  { name: 'Video Editing', level: 85, category: 'Tools' },
  { name: 'Soft Skills', level: 90, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '2D to 3D Arch Converter',
    description: 'Automated pipeline converting 2D architectural diagrams into 3D layouts. Utilizes ML preprocessing, OpenCV, and automated labeling to detect components and validate structure.',
    techStack: ['Python', 'ML', 'OpenCV', 'Data Preprocessing'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    repoUrl: '#',
    demoUrl: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Fleet Management System',
    description: 'Logistics platform optimizing driver incentives using Markov Decision Processes (MDP). Features real-time shortest-path mapping, earnings dashboards, and driver performance tracking.',
    techStack: ['MDP', 'SQL Server', 'Maps API', 'Frontend'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Multiplayer Web Tag Game',
    description: 'Browser-based real-time multiplayer game. Engineered for smooth gameplay with responsive UI states, seamless screen transitions, and optimized JavaScript logic.',
    techStack: ['JavaScript', 'HTML', 'Game Logic'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    featured: false,
  },
  {
    id: '4',
    title: 'Gmail Automation Agent',
    description: 'Productivity bot that automates reading, summarizing, and replying to emails. leverages Gmail API and basic NLP logic to streamline communication workflows.',
    techStack: ['Python', 'Gmail API', 'NLP'],
    imageUrl: 'https://picsum.photos/600/400?random=4',
    featured: false,
  },
  {
    id: '5',
    title: 'Doc Processing Mini Agent',
    description: 'Document intelligence tool extracting text from PDFs to generate concise summaries. Implements LLM retrieval mechanisms via LangChain/LlamaIndex.',
    techStack: ['Python', 'LLM', 'LangChain'],
    imageUrl: 'https://picsum.photos/600/400?random=5',
    featured: false,
  },
];
