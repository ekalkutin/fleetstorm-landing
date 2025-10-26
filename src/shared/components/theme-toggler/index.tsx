import { Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import { themeSwitcher, type Theme } from 'app/theme-switcher';

import styles from './styles.module.css';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(themeSwitcher.getTheme());
  }, []);

  const handleToggle = () => {
    themeSwitcher.toggle();
    setTheme(themeSwitcher.getTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className={styles.container}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};
