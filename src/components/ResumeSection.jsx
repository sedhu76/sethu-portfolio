import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Eye,
  Layers
} from 'lucide-react';
import { personalInfo, softwareSkills } from '../data/portfolioData';
import ScrollCard from './ScrollCard';

export default function ResumeSection() {
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);

  return (
    <section id="resume" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-5 border-b border-black/8">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-mono-tag text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Official Credentials &bull; 06</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
            Curriculum Vitae
          </h2>
        </div>
        <p className="max-w-md text-neutral-600 text-xs sm:text-[13px] leading-relaxed mt-2 md:mt-0">
          Complete academic curriculum, certified production toolset, and hands-on department projects available for review or immediate PDF download.
        </p>
      </div>

      {/* Main Resume Presentation Card */}
      <div className="bg-white rounded-[22px] p-4 sm:p-8 lg:p-10 border border-black/6 shadow-[0_4px_35px_rgba(0,0,0,0.03)]">
        
        {/* Top Action Bar (Slides in from LEFT) */}
        <ScrollCard direction="left" distance={90} triggerStart="top 98%" triggerEnd="top 34%">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-black/8 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 shadow-xs">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-extrabold text-[#111111] leading-tight">
                  {personalInfo.name} — Resume
                </h3>
                <p className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-500">
                  Official Document &bull; Academic Credentials
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => setShowPdfEmbed(!showPdfEmbed)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full border border-neutral-300 hover:border-black active:bg-neutral-100 text-xs font-bold text-neutral-800 hover:bg-neutral-50 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span>{showPdfEmbed ? 'Hide Document Preview' : 'Interactive Document View'}</span>
              </button>

              <a
                href={personalInfo.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full border border-neutral-300 hover:border-black active:bg-neutral-100 text-xs font-bold text-neutral-800 hover:bg-neutral-50 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                <span>Open in New Tab</span>
              </a>

              <a
                href={personalInfo.resumePdfUrl}
                download="SETHU_KUMARAN_D_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#111111] hover:bg-neutral-800 active:bg-neutral-900 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </ScrollCard>

        {/* Optional Embedded PDF Viewer */}
        {showPdfEmbed && (
          <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 shadow-inner bg-neutral-100">
            <div className="p-2.5 bg-neutral-200/70 flex items-center justify-between text-xs font-mono-tag text-neutral-700">
              <span className="truncate pr-2">PDF Preview: SETHU KUMARAN resume.pdf</span>
              <button
                onClick={() => setShowPdfEmbed(false)}
                className="text-neutral-600 hover:text-black font-semibold shrink-0"
              >
                Close Preview
              </button>
            </div>
            <iframe
              src={personalInfo.resumePdfUrl}
              title="Sethu Kumaran D Resume PDF"
              className="w-full h-[360px] sm:h-[600px] border-none"
            />
          </div>
        )}

        {/* Structured Resume Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Column 1: Summary & Experience (Slides in from LEFT) */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollCard direction="left" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
              <div className="mb-5">
                <h4 className="text-xs font-mono-tag uppercase tracking-widest text-blue-700 font-bold mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Professional Profile
                </h4>
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed bg-[#F7F7F5] p-4 rounded-xl border border-black/5">
                  {personalInfo.subtext}
                </p>
              </div>
            </ScrollCard>

            <ScrollCard direction="left" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
              <div>
                <h4 className="text-xs font-mono-tag uppercase tracking-widest text-blue-700 font-bold mb-2.5 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  Projects &amp; Academic Work
                </h4>
                <div className="bg-[#F7F7F5] p-4 sm:p-5 rounded-xl border border-black/5 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-black/5">
                    <span className="font-bold text-xs sm:text-sm text-[#111111]">
                      {personalInfo.department}
                    </span>
                    <span className="text-[10px] font-mono-tag text-neutral-500 font-semibold">
                      Hands-on Lab Work
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {personalInfo.projectsSummary.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollCard>
          </div>

          {/* Column 2: Education & Technical Matrix (Slides in from RIGHT) */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollCard direction="right" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
              <div className="mb-5">
                <h4 className="text-xs font-mono-tag uppercase tracking-widest text-blue-700 font-bold mb-2.5 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education History
                </h4>
                <div className="bg-[#F7F7F5] p-4 sm:p-5 rounded-xl border border-black/5">
                  <div className="flex items-start justify-between mb-1.5">
                    <div>
                      <h5 className="font-extrabold text-sm sm:text-base text-[#111111]">
                        {personalInfo.education.degree}
                      </h5>
                      <p className="text-xs sm:text-sm font-semibold text-blue-700">
                        {personalInfo.education.university}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono-tag bg-white px-2 py-0.5 rounded-full border border-black/5 font-semibold text-neutral-700">
                      Graduation: 2027
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 font-mono-tag mb-2">
                    {personalInfo.education.year}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {personalInfo.education.description}
                  </p>
                </div>
              </div>
            </ScrollCard>

            <ScrollCard direction="right" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
              <div>
                <h4 className="text-xs font-mono-tag uppercase tracking-widest text-blue-700 font-bold mb-2.5 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  Verified Tool Matrix
                </h4>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {softwareSkills.map((s) => (
                    <div
                      key={s.name}
                      className="p-2.5 bg-[#F7F7F5] rounded-lg border border-black/5 flex flex-col justify-between"
                    >
                      <span className="font-bold text-xs text-[#111111]">{s.name}</span>
                      <span className="text-[9px] font-mono-tag text-blue-700 font-semibold mt-1">
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollCard>
          </div>

        </div>

      </div>
    </section>
  );
}
