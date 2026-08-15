import { siteConfig } from '../../../lib/data/content';
import { SkillTag } from '../ui/skill-tag';

export function Skills() {
  return (
    <section id="skills" className="mt-12 sm:mt-14">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8c0 20.4 7.1 38.4 17.5 50.9L99.7 157L84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5c-8.5 11.5-14.9 27.5-19.4 45.8c-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7c-4-18.5-10.2-34.4-18.7-45.9c-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1c0-39.2-24.8-68.8-52.4-68.8c-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31s31-13.77 31-31s-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9c0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9c0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9c0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31z"/></svg>
        </div>
        <span className="font-display text-xs uppercase tracking-wider text-gray-400">
          02 — skills
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white mt-2">
        Skills
      </h2>

      <div className="mt-6 space-y-6">
   
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
