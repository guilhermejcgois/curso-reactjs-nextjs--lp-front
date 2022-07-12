import React from 'react';
import { SectionContainer } from './SectionContainer';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. `
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: {
      type: '',
    },
  },
};

export const Template = (args) => (
  <div>
    <SectionContainer {...args} />
  </div>
);
