import { siteConfig } from '../../../lib/data/content';
import { SkillTag } from '../ui/skill-tag';

export function Skills() {
  return (
    <section id="skills" className="py-section">
      <div className="mb-8">
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          03 — skills
        </span>
        <h2 className="text-2xl font-semibold text-ink mt-1">Skills</h2>
        <div className="mt-4 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="font-semibold text-ink">Technical</h3>
          {siteConfig.skills.technical.map((category) => (
            <div key={category.category}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-2">
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
          <h3 className="font-semibold text-ink">Soft Skills</h3>
          <div className="space-y-2">
            {siteConfig.skills.soft.map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span className="font-mono text-sm text-gray-500">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
