'use client';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'HTML', level: 95 },
                { name: 'CSS', level: 95 },
                { name: 'React.js', level: 90 },
                { name: 'Vue.js', level: 85 },
                { name: 'Next.js', level: 90 },
                { name: 'TypeScript', level: 88 },
                { name: 'Tailwind CSS', level: 92 },
                { name: 'Three.js', level: 75 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 90 },
                { name: 'Express', level: 85 },
                { name: 'MongoDB', level: 82 },
                { name: 'MySQL', level: 80 },
                { name: 'Oracle', level: 78 },
            ],
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'VS Code', level: 93 },
                { name: 'Pycharm', level: 93 },
                { name: 'Git & Github', level: 93 },
                { name: 'Docker', level: 80 },
                { name: 'AWS', level: 75 },
                { name: 'Canva', level: 85 },
                { name: 'Figma', level: 85 },
            ],
        },
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
                    My <span className="gradient-text">Skills</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="card space-y-6">
                            <h3 className="text-2xl font-bold text-center gradient-text mb-8">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-indigo-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animation: `slideIn 1s ease-out ${skillIdx * 0.1}s forwards`,
                                                    transform: 'translateX(-100%)',
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-lg mb-8">
                        Always learning and exploring new technologies
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind', 'Docker', 'AWS'].map((tech) => (
                            <span
                                key={tech}
                                className="px-6 py-3 glass rounded-full text-sm font-semibold hover:border-indigo-500 transition-all duration-300 cursor-pointer hover:scale-110"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
        </section>
    );
}
