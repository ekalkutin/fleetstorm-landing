/**
 * Simple theme switcher - no persistence, just basic toggle
 */

export type Theme = 'light' | 'dark';

// Global function declaration
declare global {
  interface Window {
    toggleTheme: () => void;
  }
}

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

// Create singleton instance
export const themeSwitcher = new ThemeSwitcher();

// Global function for easy access (client-side only)
if (typeof window !== 'undefined') {
  window.toggleTheme = () => themeSwitcher.toggle();
}
