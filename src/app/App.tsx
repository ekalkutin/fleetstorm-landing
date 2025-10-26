import React from 'react';

import { ThemeProvider, type Theme } from 'app/theme';
import { Features } from 'sections/features/features';
import { Feedback } from 'sections/feedback/feedback';
import { Hero } from 'sections/hero';
import { Pricing } from 'sections/pricing/pricing';
import { Footer } from 'shared/components/footer';
import { Layout } from 'shared/components/layout';

import './styles/index.css';

interface AppProps {
  initialTheme?: Theme;
}

export const App: React.FC<AppProps> = ({ initialTheme = 'light' }) => {
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <Layout>
        <Hero />
        <Features />
        <Feedback />
        <Pricing />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
