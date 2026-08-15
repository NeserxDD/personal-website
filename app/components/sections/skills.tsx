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

      <div className="mt-6 space-y-6">
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
    </section>
  );
}
