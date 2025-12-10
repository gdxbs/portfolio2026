import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/gdxbs',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gbateham/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:gwbateham@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="border-t border-[#E5E5E5]/10 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Terminal-style prompt */}
          <div className="font-mono text-sm opacity-60">
            <span className="text-[#00FF41]">gregory@bateham</span>
            <span className="mx-2">~</span>
            <span>$</span>
            <span className="ml-2 animate-pulse">_</span>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-sm border border-[#E5E5E5]/20 px-4 py-2 hover:bg-[#E5E5E5] hover:text-[#050505] transition-all duration-200"
              >
                <span className="group-hover:text-[#050505] text-[#00FF41] transition-colors duration-200">
                  {link.icon}
                </span>
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#E5E5E5]/10 text-center font-mono text-xs opacity-40">
          © 2025 Gregory Bateham. All systems operational.
        </div>
      </div>
    </footer>
  );
}
