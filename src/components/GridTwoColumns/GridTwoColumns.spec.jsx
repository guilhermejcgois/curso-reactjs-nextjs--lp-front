import React from 'react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from './GridTwoColumns';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two columns grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
