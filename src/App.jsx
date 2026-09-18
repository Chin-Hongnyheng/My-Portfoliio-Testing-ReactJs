import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ProjectCard'

/**
 * ============================================================================
 * REUSABLE COMPONENT 1 (Takes Props & Renders Different Content Per Instance)
 * ============================================================================
 * Component: StatusBadge
 * Props:
 *   - `isBusy` (boolean): Controls status text, color, and indicator
 *   - `onToggle` (function): Event handler called when badge is clicked
 */
function StatusBadge({ isBusy, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      title="Click to toggle availability"
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 border ${
        isBusy
          ? 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 hover:border-gray-400'
          : 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800 hover:border-blue-400'
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isBusy ? 'bg-gray-400' : 'bg-blue-500'
          }`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isBusy ? 'bg-gray-500' : 'bg-blue-600'
          }`}
        ></span>
      </span>
      <span>{isBusy ? 'Busy Learning' : 'Open to Work'}</span>
    </button>
  )
}

/**
 * ============================================================================
 * REUSABLE COMPONENT 2 (Takes Props & Uses the `children` Prop)
 * ============================================================================
 * Component: SectionCard
 * Props:
 *   - `title` (string): Card section title
 *   - `subtitle` (string): Optional category / subtitle
 *   - `children` (ReactNode): Content nested inside the card container
 */
function SectionCard({ title, subtitle, children }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 flex flex-col gap-4">
      {(title || subtitle) && (
        <div className="flex flex-col gap-1">
          {subtitle && (
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

function App() {
  const [isBusy, setIsBusy] = useState(false)

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Responsive Grid: Single column on mobile (<md), 2 columns (main + sidebar) on md: and up */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Main Content Column (md:col-span-7 lg:col-span-8) */}
          <main className="order-2 md:order-1 md:col-span-7 lg:col-span-8 flex flex-col gap-6">
            
            {/* 1. Vision & Goals Card (Using Reusable SectionCard with children) */}
            <SectionCard
              subtitle="Vision & Mission"
              title="Full-Stack Development & Vibe Coding"
            >
              <div className="rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 p-4">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  My goal is to become a <strong className="text-gray-900 dark:text-gray-100 font-semibold">full-stack programmer</strong> that can develop web applications from scratch and also become a <strong className="text-blue-600 dark:text-blue-400 font-semibold">professional vibe coder with antigravity</strong>.
                </p>
              </div>

              {/* Two Feature Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:border-blue-500 hover:shadow-sm transition-all duration-200 flex flex-col gap-2">
                  <span className="text-lg">🚀</span>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Web From Scratch
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                    Mastering end-to-end architecture, modern component structures, and clean maintainable code.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:border-blue-500 hover:shadow-sm transition-all duration-200 flex flex-col gap-2">
                  <span className="text-lg text-blue-600 dark:text-blue-400">✦</span>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Antigravity Vibe Coder
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                    Harnessing cutting-edge AI pair programming and agentic workflows to build and iterate rapidly.
                  </p>
                </div>
              </div>
            </SectionCard>

            {/* 2. Core Stack & Skills Card (Using Reusable SectionCard with children) */}
            <SectionCard
              subtitle="Competencies"
              title="Core Stack & Focus Areas"
            >
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Development',
                  'Web From Scratch',
                  '✦ Antigravity Vibe Coder',
                  'React 19 & Modern Web',
                  'Tailwind CSS v4',
                  'Vite Ecosystem',
                  'JavaScript (ESNext)',
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-md font-medium border transition-all duration-200 hover:scale-105 cursor-pointer ${
                      index === 2
                        ? 'bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800 hover:bg-blue-100'
                        : 'bg-white text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SectionCard>

            {/* 3. Featured Projects Section: ProjectCard Rendered Twice with Different Data */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Featured Projects
                </span>
                <span className="text-xs text-gray-500">
                  Composed from Card + Badge + Button
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Instance 1: Portfolio Showcase */}
                <ProjectCard
                  title="Portfolio Showcase"
                  status="Active"
                  statusVariant="default"
                  description="Modern developer portfolio designed and built from scratch with React 19, Tailwind CSS, and shadcn/ui."
                  tags={['React 19', 'Tailwind', 'Vite', 'shadcn/ui']}
                  projectUrl="https://github.com/Chin-Hongnyheng/My-Portfoliio-Testing-ReactJs.git"
                />

                {/* Instance 2: Antigravity AI Vibe Suite */}
                <ProjectCard
                  title="Antigravity AI Vibe Suite"
                  status="In Progress"
                  statusVariant="outline"
                  description="Full-stack web application accelerated by AI agentic workflows and automated pair-programming."
                  tags={['Antigravity', 'Full-Stack', 'AI Agents']}
                  projectUrl="https://github.com/Chin-Hongnyheng"
                />
              </div>
            </div>

            {/* 4. Status Indicator Footer */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 flex items-center justify-between text-xs text-gray-500 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                <span className="text-gray-700 dark:text-gray-300">
                  {isBusy
                    ? 'Currently dedicated to deep learning and building projects'
                    : 'Ready for web projects & full-stack development opportunities'}
                </span>
              </div>
              <span className="hidden sm:inline-block font-mono text-gray-500">live status</span>
            </div>
          </main>

          {/* Sidebar Column (md:col-span-5 lg:col-span-4) */}
          <aside className="order-1 md:order-2 md:col-span-5 lg:col-span-4 flex flex-col gap-6 md:sticky md:top-8">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 flex flex-col gap-6">
              
              {/* Header: Avatar Monogram + Live StatusBadge */}
              <div className="flex items-center justify-between gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm hover:scale-105 hover:bg-blue-700 transition-all duration-200 cursor-pointer">
                  CH
                </div>
                <StatusBadge
                  isBusy={isBusy}
                  onToggle={() => setIsBusy((prev) => !prev)}
                />
              </div>

              {/* Profile Info with strict text-gray hierarchy */}
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
                  Chin Hongnyheng
                </h1>
                <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                  Aspiring Full-Stack Developer &amp; Vibe Coder
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Self-Taught | React.js Enthusiast | AI-Assisted Development
                </p>
              </div>

              {/* Quick Details List */}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500">
                <div className="flex items-center justify-between py-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-150">
                  <span>Specialty</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Web From Scratch</span>
                </div>
                <div className="flex items-center justify-between py-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-150">
                  <span>Workflow</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Antigravity AI</span>
                </div>
                <div className="flex items-center justify-between py-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-150">
                  <span>Location</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Remote / Global</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  variant="default"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-medium hover:scale-105 active:scale-95 transition-all duration-200"
                  onClick={() => window.open('https://github.com/Chin-Hongnyheng/My-Portfoliio-Testing-ReactJs.git', '_blank')}
                >
                  GitHub Project
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 cursor-pointer font-medium hover:scale-105 active:scale-95 transition-all duration-200"
                  onClick={() => setIsBusy((prev) => !prev)}
                >
                  Toggle Status
                </Button>
              </div>

              {/* Footnote Hint */}
              <div className="text-center">
                <span className="text-xs text-gray-500">
                  Click badge or button to toggle availability
                </span>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default App
