import { Request } from 'express';

export type Theme = 'light' | 'dark';

/**
 * Extract theme from request cookies (server-side)
 */
export function getThemeFromRequest(req: Request): Theme {
  const themeCookie = req.cookies?.theme;
  return themeCookie === 'dark' ? 'dark' : 'light';
}

/**
 * Parse theme from cookie string (server-side fallback)
 */
export function getThemeFromCookieString(cookieString?: string): Theme {
  if (!cookieString) return 'light';

  const match = cookieString.match(/theme=([^;]+)/);
  const theme = match ? match[1] : 'light';

  return theme === 'dark' ? 'dark' : 'light';
}

/**
 * Generate initial theme script for SSR
 * This prevents flash of incorrect theme
 */
export function generateThemeScript(theme: Theme): string {
  return `
    <script>
      (function() {
        try {
          document.documentElement.setAttribute('data-theme', '${theme}');
        } catch (e) {
          // Fallback for any errors
          document.documentElement.setAttribute('data-theme', 'light');
        }
      })();
    </script>
  `;
}
