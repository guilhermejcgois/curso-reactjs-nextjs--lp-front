import React from 'react';
import { GridContent } from './GridContent';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
  argTypes: {
    title: { type: 'string' },
    html: { type: 'string' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => <GridContent {...args} />;
