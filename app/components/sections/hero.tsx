import { siteConfig } from '../../../lib/data/content';
import { ArrowUpRight } from '../ui/icons';

export function Hero() {
  const { profile } = siteConfig;
  const aboutText = siteConfig.about[0];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center pt-16"
    >
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Profile photo with hover swap */}
        <div className="relative w-40 h-40 mx-auto mb-8 group">
          <img
            src={profile.photoMain}
            alt="Profile"
            className="w-full h-full rounded-full object-cover
                       group-hover:hidden transition-all duration-300
                       group-hover:scale-105 shadow-xl"
          />
          <img
            src={profile.photoHover}
            alt="Profile (hover)"
            className="absolute inset-0 w-full h-full rounded-full object-cover
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       scale-105 group-hover:scale-110 shadow-xl"
          />
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl text-gray-900 dark:text-white mb-2">
          {profile.name}
        </h1>

        {/* Role tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {profile.role.split('-').map((tag, i) => (
            <span
              key={i}
              className="font-mono text-xs uppercase tracking-wider text-gray-500"
            >
              {tag.trim()}
            </span>
          ))}
        </div>

        {/* About paragraph */}
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
          {aboutText}
        </p>

        {/* View Resume button */}
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span>View Resume</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
