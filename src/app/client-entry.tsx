import { hydrateRoot, createRoot } from 'react-dom/client';

import { App } from './App';
import { type Theme } from './theme';

const container = document.getElementById('root')!;

// Get initial theme from server-rendered DOM
const initialTheme = (container.getAttribute('data-theme') as Theme) || 'light';

if (container.hasChildNodes()) {
  hydrateRoot(container, <App initialTheme={initialTheme} />);
} else {
  const root = createRoot(container);
  root.render(<App initialTheme={initialTheme} />);
}
