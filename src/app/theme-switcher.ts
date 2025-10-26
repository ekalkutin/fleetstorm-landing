export type Theme = 'light' | 'dark';

class ThemeSwitcher {
  private currentTheme: Theme = 'light';

  constructor() {
    // Only initialize on client side
    if (typeof window !== 'undefined') {
      this.applyTheme(this.currentTheme);
    }
  }

  /**
   * Switch to a specific theme
   */
  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.applyTheme(theme);
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
   * Apply theme to DOM using data attribute (client-side only)
   */
  private applyTheme(theme: Theme): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
}

export const themeSwitcher = new ThemeSwitcher();
