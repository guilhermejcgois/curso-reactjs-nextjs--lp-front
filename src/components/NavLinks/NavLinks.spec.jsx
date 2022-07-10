import React from 'react';
import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from './NavLinks';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link 10/).parentElement).toHaveStyleRule('flex-flow', 'column no-wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshots', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });
});
