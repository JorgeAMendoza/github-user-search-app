import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../Icons';
import style from './theme-switch.module.css';

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
        className={style.themeButton}
        data-testid="themeButton"
        type="button"
        onClick={() => {
          if (theme === 'light') setTheme('dark');
          else setTheme('light');
        }}
        aria-label={`Toggle theme to ${theme === 'light' ? 'dark' : 'light'}}`}
      >
        {theme === 'light' ? 'Dark' : 'Light'}{' '}
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
