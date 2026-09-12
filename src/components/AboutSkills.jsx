import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Layers,
  Wrench,
  Compass,
  Cpu,
  CheckCircle,
  Languages,
  BookOpen
} from 'lucide-react';
import {
  personalInfo,
  softwareSkills,
  technicalSkills,
  additionalSkills
} from '../data/portfolioData';
import { getSoftwareIcon } from './SoftwareIcons';
import ScrollCard from './ScrollCard';

export default function AboutSkills() {
  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-5 border-b border-black/8">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-mono-tag text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Profile &amp; Expertise &bull; 05</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
            About &amp; Skills
          </h2>
        </div>
        <p className="max-w-md text-neutral-600 text-xs sm:text-[13px] leading-relaxed mt-2 md:mt-0">
          Rooted in formal Multimedia &amp; Animation education at Bharathiar University with practical mastery in industry-standard production suites.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Column: Authentic Profile & Academic Background (Slides in from LEFT) */}
        <div className="lg:col-span-5 space-y-5 sm:space-y-6">
          {/* Profile Card */}
          <ScrollCard direction="left" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
            <div className="bg-white rounded-[20px] p-4 sm:p-7 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all">
              <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 text-white flex items-center justify-center font-extrabold text-lg sm:text-xl shadow-xs shrink-0">
                  SK
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111111]">{personalInfo.name}</h3>
                  <p className="text-[10px] sm:text-[11px] font-mono-tag text-blue-700 font-semibold uppercase">
                    {personalInfo.brandName} &bull; Multimedia &amp; Animation
                  </p>
                </div>
              </div>

              <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-4">
                {personalInfo.subtext}
              </p>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#F7F7F5] border border-black/5">
                <span className="text-[10px] font-mono-tag uppercase tracking-wider text-neutral-500 font-semibold block mb-0.5">
                  Philosophy
                </span>
                <p className="text-xs font-medium text-neutral-800 italic">
                  &ldquo;Skilled in creating engaging visual content and eager to learn new techniques while gaining professional experience in the creative industry.&rdquo;
                </p>
              </div>
            </div>
          </ScrollCard>

          {/* Education Card strictly from resume */}
          <ScrollCard direction="left" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
            <div className="bg-white rounded-[20px] p-4 sm:p-7 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all">
              <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#111111]">Formal Education</h4>
                  <p className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-500">Academic Credentials</p>
                </div>
              </div>

              <div className="border-l-2 border-blue-600 pl-3 space-y-0.5 mb-3">
                <h5 className="font-extrabold text-[#111111] text-xs sm:text-base">
                  {personalInfo.education.degree}
                </h5>
                <p className="text-xs font-semibold text-blue-700">
                  {personalInfo.education.university}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-[11px] font-mono-tag text-neutral-500 pt-0.5">
                  <span>{personalInfo.education.year}</span>
                  <span>&bull;</span>
                  <span>Expected: {personalInfo.education.expectedGraduation}</span>
                </div>
              </div>

              <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-3.5">
                {personalInfo.education.description}
              </p>

              <div className="pt-3 border-t border-black/5">
                <span className="text-xs font-bold text-neutral-900 block mb-1.5">
                  Department Projects &amp; Lab Work:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  {personalInfo.projectsSummary.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollCard>

          {/* Languages */}
          <ScrollCard direction="left" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
            <div className="bg-white rounded-[20px] p-3.5 sm:p-6 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                  <Languages className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111111]">Languages Spoken</h4>
                  <p className="text-[10px] font-mono-tag text-neutral-500">Communication Proficiency</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono-tag font-semibold bg-[#F7F7F5] border border-black/5 text-neutral-800"
                  >
                    {lang.name} ({lang.level})
                  </span>
                ))}
              </div>
            </div>
          </ScrollCard>

        </div>

        {/* Right Column: Interactive Skills Grid (Slides in from RIGHT) */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          
          {/* Software Tools */}
          <ScrollCard direction="right" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
            <div className="bg-white rounded-[20px] p-4 sm:p-7 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all">
              <div className="flex items-center justify-between mb-4 sm:mb-5 pb-3 border-b border-black/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#111111]">Software &amp; Tools</h4>
                    <p className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-500">Confirmed in Resume</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono-tag uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full font-bold">
                  Industry Standard
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {softwareSkills.map((tool) => {
                  const IconComponent = getSoftwareIcon(tool.name);
                  return (
                    <div
                      key={tool.name}
                      className="p-2.5 sm:p-3 rounded-xl bg-[#F7F7F5] border border-black/5 hover:border-black/20 hover:bg-white hover:shadow-xs transition-all duration-300 group flex items-start gap-2.5 sm:gap-3 cursor-default"
                    >
                      {IconComponent && (
                        <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-xs" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1 mb-0.5">
                          <span className="font-extrabold text-[#111111] text-xs sm:text-[13px] group-hover:text-blue-700 transition-colors leading-snug">
                            {tool.name}
                          </span>
                          <span className="text-[9px] font-mono-tag px-1.5 py-0.5 rounded-full bg-white border border-black/5 text-neutral-700 font-semibold shrink-0">
                            {tool.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 line-clamp-1">
                          {tool.category}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollCard>

          {/* Technical Production Skills */}
          <ScrollCard direction="right" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
            <div className="bg-white rounded-[20px] p-4 sm:p-7 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#111111]">Technical Skills</h4>
                    <p className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-500">Core Capabilities</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono-tag text-neutral-400">
                  {technicalSkills.length} Disciplines
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold hover:border-neutral-900 hover:text-black hover:scale-105 transition-all shadow-xs flex items-center gap-1.5 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollCard>

          {/* Additional Professional Skills */}
          <ScrollCard direction="right" distance={120} triggerStart="top 98%" triggerEnd="top 34%">
            <div className="bg-white rounded-[20px] p-4 sm:p-7 border border-black/6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] transition-all">
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-black/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#111111]">Professional &amp; Soft Skills</h4>
                    <p className="text-[10px] sm:text-[11px] font-mono-tag text-neutral-500">Workplace Competencies</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {additionalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="p-2 rounded-lg bg-[#F7F7F5] border border-black/5 text-center text-[10px] sm:text-[11px] font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </ScrollCard>

        </div>

      </div>
    </section>
  );
}
