/**
 * Simple theme switcher using modern CSS features
 */

export type Theme = 'light' | 'dark';

class ThemeSwitcher {
  private currentTheme: Theme = 'light';

  constructor() {
    this.loadTheme();
  }

  /**
   * Switch to a specific theme
   */
  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.applyTheme(theme);
    this.saveTheme(theme);
  }

  /**
   * Toggle between light and dark
   */
  toggle(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Get current theme
   */
  getTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Apply theme to DOM using data attribute
   */
  private applyTheme(theme: Theme): void {
    if (theme === 'light') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  /**
   * Load theme from localStorage or system preference
   */
  private loadTheme(): void {
    const saved = localStorage.getItem('theme') as Theme;
    if (saved && (saved === 'light' || saved === 'dark')) {
      this.setTheme(saved);
    } else {
      // Use system preference as fallback
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  /**
   * Save theme to localStorage
   */
  private saveTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
  }
}

// Create singleton instance
export const themeSwitcher = new ThemeSwitcher();

// Global function for easy access
declare global {
  interface Window {
    toggleTheme: () => void;
  }
}

window.toggleTheme = () => themeSwitcher.toggle();
