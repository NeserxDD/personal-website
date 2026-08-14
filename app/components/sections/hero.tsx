import { siteConfig } from '../../../lib/data/content';

export function Hero() {
  const { profile } = siteConfig;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center pt-16"
    >
      <div className="space-y-8 fade-in">
        {/* Profile photo with hover swap */}
        <div className="relative w-32 h-32 mx-auto group">
          <img
            src={profile.photoMain}
            alt="Profile"
            className="w-full h-full rounded-full object-cover
                       group-hover:hidden transition-all duration-300
                       group-hover:scale-105"
          />
          <img
            src={profile.photoHover}
            alt="Profile (hover)"
            className="absolute inset-0 w-full h-full rounded-full object-cover
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       scale-105 group-hover:scale-110"
          />
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl lowercase text-ink">
          {profile.name}
        </h1>

        {/* Role tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {profile.role.split('|').map((tag, i) => (
            <span
              key={i}
              className="font-mono text-xs uppercase tracking-wider text-gray-500"
            >
              {tag.trim()}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-md mx-auto">
          {profile.subtitle}
        </p>
      </div>
    </section>
  );
}
