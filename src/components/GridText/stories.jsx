import React from 'react';
import { GridText } from './GridText';
import mock from './mock';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
  argTypes: {
    title: { type: 'string' },
    html: { type: 'string' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => <GridText {...args} />;
