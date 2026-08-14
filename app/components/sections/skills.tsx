import { siteConfig } from '../../../lib/data/content';
import { SkillTag } from '../ui/skill-tag';

export function Skills() {
  return (
    <section id="skills" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l3 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7-5-7h7z" />
          </svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          02 — skills
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Skills
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="font-semibold text-gray-900 dark:text-white">Technical</h3>
          {siteConfig.skills.technical.map((category) => (
            <div key={category.category} className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Soft Skills</h3>
          <div className="space-y-2">
            {siteConfig.skills.soft.map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span className="font-mono text-sm text-gray-500 dark:text-gray-400">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
