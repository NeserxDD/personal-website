interface SkillTagProps {
  children: string;
}

export function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-block rounded-md border border-gray-200 dark:border-gray-800 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
      {children}
    </span>
  );
}
