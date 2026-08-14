'use client';

import { useTheme } from '../../theme/provider';
import { Sun, Moon, Monitor } from '../ui/icons';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    const next =
      theme === 'light'
        ? 'dark'
        : theme === 'dark'
          ? 'system'
          : 'light';
    setTheme(next);
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' && <Sun />}
      {theme === 'dark' && <Moon />}
      {theme === 'system' && <Monitor />}
    </button>
  );
}
