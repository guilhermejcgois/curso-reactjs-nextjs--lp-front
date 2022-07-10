import React from 'react';
import { screen } from '@testing-library/react';

import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home />);
    const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;

    expect(headingContainer).toHaveStyle({
      background: theme.colors.mainBg,
    });
    expect(headingContainer).toHaveStyleRule('background', theme.colors.mainBg);
    expect(headingContainer).toMatchSnapshot();
  });
});
