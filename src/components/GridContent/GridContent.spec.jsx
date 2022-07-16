import React from 'react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from './GridContent';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
