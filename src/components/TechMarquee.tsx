export function TechMarquee() {
  const skills = [
    'Python',
    'PyTorch',
    'TensorFlow',
    'TypeScript',
    'React',
    'Docker',
    'AWS',
    'SQL',
    'OpenCV',
    'Node.js',
    'PostgreSQL',
    'Machine Learning',
  ];

  // Duplicate for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="border-y border-[#E5E5E5]/10 py-6 overflow-hidden bg-[#050505]">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedSkills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center font-mono text-sm tracking-wider mx-8 opacity-60 hover:opacity-100 hover:text-[#00FF41] transition-all duration-200"
          >
            {skill}
            <span className="mx-8 text-[#00FF41]">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
