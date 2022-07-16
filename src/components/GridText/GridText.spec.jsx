import React from 'react';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from './GridText';
import mock from './mock';

describe('<GridText />', () => {
  it('should render grid section with background', () => {
    const { container } = renderTheme(<GridText {...mock} background={true} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid section without background', () => {
    const { container } = renderTheme(<GridText {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
