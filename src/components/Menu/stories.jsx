import React from 'react';
import { Menu } from './Menu';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Template = (args) => (
  <div>
    <Menu {...args} />
  </div>
);
