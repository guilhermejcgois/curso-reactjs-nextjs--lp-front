import React from 'react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from './GridContent';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content with background', () => {
    const { container } = renderTheme(<GridContent {...mock} background={true} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid content without background', () => {
    const { container } = renderTheme(<GridContent {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
