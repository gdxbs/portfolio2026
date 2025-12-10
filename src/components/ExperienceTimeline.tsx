interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
}

const experiences: Experience[] = [
  {
    year: '2025',
    title: 'Master\'s in Computer Science',
    organization: 'Florida Polytechnic University',
    description: 'Specialization in Machine Learning and AI Systems',
  },
  {
    year: '2025',
    title: 'Software Engineering Intern',
    organization: 'EEI Security',
    description: 'Built secure enterprise applications',
  },
  {
    year: '2024',
    title: 'Freelance Web Developer',
    organization: 'Self Employed',
    description: 'Full-stack development and consulting',
  },
  {
    year: '2023',
    title: 'Software Engineering Intern',
    organization: 'Department of Homeland Security',
    description: 'Developed Netspider for human trafficking investigations',
  },
];

export function ExperienceTimeline() {
  return (
    <section className="px-6 py-32 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-[#00FF41] mb-16 tracking-wider">
          {'<'} EXPERIENCE /{'>'}
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-20 top-0 bottom-0 w-[1px] bg-[#E5E5E5]/20" />

          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-32 group">
                {/* Node */}
                <div className="absolute left-[-4px] md:left-[76px] top-1 w-2 h-2 bg-[#00FF41] group-hover:scale-150 transition-transform duration-200" />

                {/* Year */}
                <div className="font-mono text-sm text-[#00FF41] mb-2 md:absolute md:left-0 md:top-0 md:w-16">
                  {exp.year}
                </div>

                {/* Content */}
                <div className="border border-[#E5E5E5]/10 p-6 group-hover:border-[#00FF41]/50 transition-colors duration-200">
                  <h3 className="font-mono text-xl mb-1">{exp.title}</h3>
                  <div className="text-[#00FF41] mb-3 text-sm">{exp.organization}</div>
                  <p className="opacity-70">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
