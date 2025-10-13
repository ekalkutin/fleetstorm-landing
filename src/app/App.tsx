import React from 'react';

import { Hero } from 'sections/hero/hero';
import { Layout } from 'widgets/layout/layout';
import './styles/index.css';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero />
      </Layout>
    </React.Fragment>
  );
};
