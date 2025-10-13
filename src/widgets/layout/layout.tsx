import React, { PropsWithChildren } from 'react';

import { Header } from '../header/header';

type Props = {} & PropsWithChildren;

export const Layout: React.FC<Props> = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
