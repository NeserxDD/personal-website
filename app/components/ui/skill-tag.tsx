import { ReactNode } from 'react';

interface SkillTagProps {
  children: ReactNode;
  variant?: 'default' | 'featured';
}

export function SkillTag({ children, variant = 'default' }: SkillTagProps) {
  const baseClasses =
    'inline-flex items-center px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider';

  if (variant === 'featured') {
    return (
      <span className={`${baseClasses} bg-ink text-background`}>
        {children}
      </span>
    );
  }

  return (
    <span className={`${baseClasses} border border-gray-300 text-gray-500`}>
      {children}
    </span>
  );
}
