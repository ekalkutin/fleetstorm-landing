import { Moon, Sun } from 'lucide-react';
import React from 'react';

import { useTheme } from 'app/theme';

import styles from './styles.module.css';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.container}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};
