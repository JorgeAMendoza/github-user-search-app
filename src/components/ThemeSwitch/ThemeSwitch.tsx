import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark) setTheme('dark');
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (theme === 'light') body?.setAttribute('data-theme', 'light');
    else body?.setAttribute('data-theme', 'dark');
  }, [theme]);

  return (
    <div>
      <button
        data-testid="themeButton"
        type="button"
        onClick={() => {
          if (theme === 'light') setTheme('dark');
          else setTheme('light');
        }}
        aria-label={`Toggle theme to ${theme === 'light' ? 'dark' : 'light'}}`}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ThemeSwitch;
