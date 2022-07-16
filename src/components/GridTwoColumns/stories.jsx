import React from 'react';
import { GridTwoColumns } from './GridTwoColumns';
import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImg: { type: 'string' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => <GridTwoColumns {...args} />;

export const WithBackground = (args) => <GridTwoColumns {...args} />;
WithBackground.args = {
  background: true,
};
