'use client';

import { useState } from 'react';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            title: 'Do Flow',
            description: 'A beautiful, intuitive to-do list app with smart features, smooth animations, and everything you need to stay productive.',
            image: '',
            tags: ['Next.js', 'SupaBase', 'TypeScript', 'Tailwind'],
            category: 'fullstack',
            link: 'https://doflow-todolist.vercel.app/',
            github: 'https://github.com/atharva-dev1/doflow',
        },
        {
            title: '3D Portfolio Website',
            description: 'An interactive 3D portfolio showcasing projects with Three.js animations and smooth transitions.',
            image: '/api/placeholder/600/400',
            tags: ['React', 'Three.js', 'GSAP', 'WebGL'],
            category: 'frontend',
            link: '#',
            github: '#',
        },
        {
            title: 'PDF to Flipbook',
            description: 'A simple and interactive PDF to Flipbook web application built using HTML, CSS, and JavaScript. This project converts a static PDF into a realistic flipbook-style viewing experience directly in the browser.',
            image: '/api/placeholder/600/400',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'PDF.js'],
            category: 'Frontend',
            link: 'https://pdf-to-flipbook.netlify.app/',
            github: 'https://github.com/atharva-dev1/pdf-to-flipbook',
        },
        {
            title: 'AI Chat Application',
            description: 'An AI-powered chat application with natural language processing and context-aware responses.',
            image: '/api/placeholder/600/400',
            tags: ['Next.js', 'OpenAI', 'TypeScript', 'Prisma'],
            category: 'fullstack',
            link: '#',
            github: '#',
        },
        {
            title: 'Weather Dashboard',
            description: 'Beautiful weather dashboard with real-time data, forecasts, and interactive maps.',
            image: '/api/placeholder/600/400',
            tags: ['React', 'API Integration', 'Charts.js', 'CSS'],
            category: 'frontend',
            link: '#',
            github: '#',
        },
        {
            title: 'Social Media API',
            description: 'RESTful API for a social media platform with authentication, posts, comments, and likes.',
            image: '/api/placeholder/600/400',
            tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
            category: 'backend',
            link: '#',
            github: '#',
        },
    ];

    const filters = ['all', 'fullstack', 'frontend', 'backend'];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="min-h-screen py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and expertise
                </p>

                {/* Filter buttons */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                                    : 'glass hover:border-indigo-500'
                                }`}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="card group cursor-pointer overflow-hidden"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s forwards`,
                                opacity: 0,
                            }}
                        >
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                                    <a
                                        href={project.link}
                                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.github}
                                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="px-3 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
}
