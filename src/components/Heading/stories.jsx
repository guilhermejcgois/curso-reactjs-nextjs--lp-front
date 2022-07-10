import React from 'react';
import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Texto qualquer',
  },
  argTypes: {
    children: { type: 'string' },
    colorDark: { type: 'boolean' },
  },
};

export const Dark = (args) => <Heading {...args}></Heading>;

Dark.args = { children: 'Texto claro', colorDark: false };
Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Light = (args) => <Heading {...args}></Heading>;
Light.args = {
  children: 'Texto escuro',
};
Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const Uppercase = (args) => <Heading {...args}></Heading>;
Uppercase.args = { uppercase: true };
