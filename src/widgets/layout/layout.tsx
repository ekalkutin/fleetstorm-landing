import React, { PropsWithChildren } from 'react';

import { Header } from 'widgets/header/header';

type Props = {} & PropsWithChildren;

export const Layout: React.FC<Props> = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
