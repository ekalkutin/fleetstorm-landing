import React from 'react';

import { Features } from 'sections/features/features';
import { Feedback } from 'sections/feedback/feedback';
import { Hero } from 'sections/hero';
import { Pricing } from 'sections/pricing/pricing';
import { Footer } from 'shared/components/footer';
import { Layout } from 'shared/components/layout';

// Initialize theme system
import 'app/theme-switcher';

import './styles/index.css';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero />
        <Features />
        <Feedback />
        <Pricing />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};
