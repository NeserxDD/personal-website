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

  const icons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    system: <Monitor className="h-5 w-5" />,
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {icons[theme]}
    </button>
  );
}
