import React from 'react';

import { Features } from 'sections/features/features';
import { Feedback } from 'sections/feedback/feedback';
import { Hero } from 'sections/hero/hero';
import { Pricing } from 'sections/pricing/pricing';
import { Layout } from 'widgets/layout/layout';

import './styles/index.css';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero />
        <Features />
        <Feedback />
        <Pricing />
      </Layout>
    </React.Fragment>
  );
};
