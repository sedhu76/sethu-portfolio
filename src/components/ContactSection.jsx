import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  ArrowUpRight,
  MessageSquare,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ScrollCard from './ScrollCard';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'needs_activation' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Sethu,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Inquiry from ${formData.name || 'Client'}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (data.success === true || data.success === 'true') {
        setSubmitStatus('success');
        setStatusMessage("Message sent directly! I'll get back to you shortly.");
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else if (data.message && data.message.includes('Activation')) {
        setSubmitStatus('needs_activation');
        setStatusMessage("Form activation required: An activation link was sent to your email. Click 'Activate Form' once in your Gmail to receive direct messages!");
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Unable to send message directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setStatusMessage('Network error occurred. You can still send via your email client.');
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-28">
      {/* Container with ambient light glow */}
      <div className="relative rounded-[22px] sm:rounded-[32px] bg-gradient-to-b from-white via-white to-neutral-50 p-4 sm:p-8 lg:p-12 border border-black/8 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden">
        
        {/* Abstract Background Design Mark */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
          
          {/* Left Column: Headline & Direct Contact Info (Slides in from LEFT) */}
          <div className="lg:col-span-6">
            <ScrollCard direction="left" distance={130} triggerStart="top 98%" triggerEnd="top 34%">
              <div className="space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono-tag text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <span>Available for Creative Opportunities</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight leading-[1.12]">
                  Have an idea? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-neutral-900">
                    Let's create something memorable.
                  </span>
                </h2>

                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-lg">
                  Whether you need commercial product graphics, cinematic editing, 3D environment visualizations, or dynamic motion graphics, let's connect and bring your vision to life.
                </p>

                {/* Direct Contact Cards */}
                <div className="space-y-2.5 sm:space-y-3 pt-1">
                  {/* Email Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F7F7F5] border border-black/5 hover:border-black/15 transition-all gap-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white text-blue-700 flex items-center justify-center shadow-xs shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-mono-tag uppercase text-neutral-500 font-semibold block">
                          Direct Email
                        </span>
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-xs sm:text-sm font-bold text-[#111111] hover:text-blue-700 transition-colors break-all block"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={copyEmail}
                      className="self-end sm:self-auto p-1.5 sm:p-2 rounded-lg bg-white hover:bg-neutral-100 text-neutral-700 border border-black/5 transition-all flex items-center gap-1 text-xs font-semibold cursor-pointer shrink-0 active:scale-95"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-mono-tag text-[10px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="font-mono-tag text-[10px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F7F7F5] border border-black/5 hover:border-black/15 transition-all gap-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white text-blue-700 flex items-center justify-center shadow-xs shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-mono-tag uppercase text-neutral-500 font-semibold block">
                          Direct Call / WhatsApp
                        </span>
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="text-xs sm:text-sm font-bold text-[#111111] hover:text-blue-700 transition-colors"
                        >
                          +91 {personalInfo.phone}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={copyPhone}
                      className="self-end sm:self-auto p-1.5 sm:p-2 rounded-lg bg-white hover:bg-neutral-100 text-neutral-700 border border-black/5 transition-all flex items-center gap-1 text-xs font-semibold cursor-pointer shrink-0 active:scale-95"
                      title="Copy phone to clipboard"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-mono-tag text-[10px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="font-mono-tag text-[10px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20-%20Creative%20Design`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <span>Let's Work Together</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </ScrollCard>
          </div>

          {/* Right Column: Direct Message Box (Slides in from RIGHT) */}
          <div className="lg:col-span-6">
            <ScrollCard direction="right" distance={130} triggerStart="top 98%" triggerEnd="top 34%">
              <div className="bg-[#F7F7F5] rounded-[20px] p-4 sm:p-6 border border-black/6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white text-neutral-900 flex items-center justify-center shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#111111]">Quick Project Inquiry</h3>
                    <p className="text-[10px] text-neutral-500 font-mono-tag">Direct transmission to inbox</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono-tag uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-200 text-xs focus:outline-hidden focus:border-blue-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tag uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-200 text-xs focus:outline-hidden focus:border-blue-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tag uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                      Project Details / Scope
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your graphic design, 3D render, or video project..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-200 text-xs focus:outline-hidden focus:border-blue-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className={`w-full flex items-center justify-center gap-2 text-white font-bold text-xs py-3 rounded-lg shadow-xs transition-all cursor-pointer ${
                      submitStatus === 'loading'
                        ? 'bg-neutral-700 cursor-not-allowed opacity-80'
                        : submitStatus === 'success'
                        ? 'bg-emerald-600 hover:bg-emerald-700'
                        : 'bg-[#111111] hover:bg-neutral-800 hover:shadow-md'
                    }`}
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                        <span>Sending Directly...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-blue-400" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{statusMessage}</span>
                    </div>
                  )}

                  {submitStatus === 'needs_activation' && (
                    <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1.5 animate-fadeIn">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{statusMessage}</span>
                      </div>
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={handleMailtoFallback}
                          className="text-blue-700 underline font-semibold hover:text-blue-900 cursor-pointer text-[11px]"
                        >
                          Click here to send immediately via email app instead &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs space-y-1.5 animate-fadeIn">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{statusMessage}</span>
                      </div>
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={handleMailtoFallback}
                          className="text-blue-700 underline font-semibold hover:text-blue-900 cursor-pointer text-[11px]"
                        >
                          Click here to send via your email client &rarr;
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </ScrollCard>
          </div>

        </div>

      </div>
    </section>
  );
}
