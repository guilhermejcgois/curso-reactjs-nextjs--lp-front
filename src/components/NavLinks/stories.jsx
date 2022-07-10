import React from 'react';
import { NavLinks } from './NavLinks';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <NavLinks {...args} />
  </div>
);
