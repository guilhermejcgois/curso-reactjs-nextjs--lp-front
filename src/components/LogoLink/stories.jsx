import React from 'react';
import { LogoLink } from './LogoLink';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
};

export const ImageOnly = (args) => (
  <div style={{ display: 'flex' }}>
    <LogoLink {...args} />
  </div>
);

export const TextOnly = (args) => (
  <div style={{ display: 'flex' }}>
    <LogoLink {...args} />
  </div>
);
TextOnly.args = {
  srcImg: '',
};
