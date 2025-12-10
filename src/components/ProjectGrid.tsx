import { Code2, Shield, FileSearch, Database, ExternalLink, Globe, Bot, Cpu, MessageSquare } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  featured?: boolean;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'CuttingEdgeAI',
    description: 'RL Optimizer for 2D-CSP using PyTorch & OpenCV.',
    icon: <Code2 className="w-8 h-8" />,
    tags: ['PyTorch', 'RL', 'OpenCV', 'Python'],
    featured: true,
    link: 'https://www.techrxiv.org/users/965245/articles/1333810-cuttingedgeai-rl-for-unique-2d-cutting-stock-problems?commit=d2209b7cada94c4bfe940101a2885dc30d559790',
  },
  {
    title: 'C# .NET Chat Application',
    description: 'Multi-threaded, service-oriented WPF application.',
    icon: <MessageSquare className="w-8 h-8" />,
    tags: ['C#', '.NET 6', 'WPF', 'Supabase'],
    link: 'https://github.com/gdxbs/WPF',
  },
  {
    title: 'Netspider',
    description: 'Web scraper for human trafficking investigations (NBC Recognized).',
    icon: <Shield className="w-8 h-8" />,
    tags: ['DHS', 'Python', 'Scraping', 'Investigation'],
    link: 'https://github.com/PauloDrefahl/NetspiderHSI',
  },
  {
    title: 'Patent AI Checker',
    description: 'NLP-powered patent analysis tool (Hackathon Winner).',
    icon: <FileSearch className="w-8 h-8" />,
    tags: ['NLP', 'AI', 'Analysis', 'Award'],
    link: 'https://github.com/zesutton2619/PAT',
  },
  {
    title: 'DBuilder',
    description: 'AI-Powered Database Designer.',
    icon: <Database className="w-8 h-8" />,
    tags: ['AI', 'Database', 'Design', 'Tools'],
    link: 'https://idbsrs.vercel.app/',
  },
  {
    title: 'Wiki4Anything',
    description: 'Create an account and upload or edit articles on any topic. Currently undergoing revisions.',
    icon: <Globe className="w-8 h-8" />,
    tags: ['React', 'MySQL', 'Ant Design', 'JWT', 'Jest'],
    link: 'https://github.com/gdxbs/Wiki',
  },
  {
    title: 'Reddit Automated Testing',
    description: 'UI and interactivity testing using the power of automation.',
    icon: <Bot className="w-8 h-8" />,
    tags: ['Selenium', 'Python', 'JavaScript', 'XML'],
    link: 'https://github.com/zesutton2619/Software-Testing-Reddit',
  },
];

export function ProjectGrid() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-sm text-[#00FF41] mb-4 tracking-wider">
          {'<'} SELECTED_WORK /{'>'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative border border-[#E5E5E5]/20 p-8 hover:bg-[#E5E5E5] hover:text-[#050505] transition-all duration-200 cursor-pointer block ${project.featured ? 'md:col-span-2' : ''
                }`}
            >
              {/* Icon */}
              <div className="mb-6 text-[#00FF41] group-hover:text-[#050505] transition-colors duration-200">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="font-mono text-2xl mb-3 tracking-tight flex items-center gap-2">
                {project.title}
                {project.link && (
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}
              </h3>

              {/* Description */}
              <p className="opacity-70 group-hover:opacity-100 mb-6 transition-opacity duration-200">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="font-mono text-xs px-3 py-1 border border-current opacity-40 group-hover:opacity-70 transition-opacity duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}