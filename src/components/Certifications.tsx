import { Award, CheckCircle2 } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  id?: string;
}

const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Amazon Web Services',
    year: '2025',
    id: 'AZ-900',
  },
  {
    name: 'Docker Foundations Professional Certificate',
    issuer: 'Docker',
    year: '2024',
    id: '',
  },
  {
    name: 'Best WCE Undergraduate Design',
    issuer: 'FGCU',
    year: '2024',
    id: '',
  },
  {
    name: 'JavaScript Foundations Professional Certificate',
    issuer: 'Mozilla',
    year: '2024',
    id: '',
  },
];

export function Certifications() {
  return (
    <section className="px-6 py-32 border-t border-[#E5E5E5]/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-sm text-[#00FF41] mb-12 tracking-wider">
          {'<'} CERTIFICATIONS AND AWARDS /{'>'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative border border-[#E5E5E5]/20 p-6 hover:bg-[#E5E5E5] hover:text-[#050505] transition-all duration-200 cursor-pointer"
            >
              {/* Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-[#00FF41] group-hover:text-[#050505] transition-colors duration-200">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono text-lg mb-1 tracking-tight">
                    {cert.name}
                  </h3>
                  <div className="text-sm opacity-60 group-hover:opacity-80 transition-opacity duration-200">
                    {cert.issuer}
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-current/10">
                <div className="flex items-center gap-2 text-xs font-mono opacity-60 group-hover:opacity-80">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
                <div className="text-xs font-mono text-[#00FF41] group-hover:text-[#050505] transition-colors duration-200">
                  {cert.year}
                </div>
              </div>

              {/* ID badge */}
              {cert.id && (
                <div className="absolute top-4 right-4 font-mono text-[10px] px-2 py-1 border border-current/20 opacity-40 group-hover:opacity-60 transition-opacity duration-200">
                  {cert.id}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
