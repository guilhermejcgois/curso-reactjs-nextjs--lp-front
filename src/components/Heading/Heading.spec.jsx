import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { Heading } from './Heading';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);

    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.huge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>text</Heading>);

    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.light,
    });
  });

  [
    { size: 'small', expected: theme.font.sizes.medium },
    { size: 'medium', expected: theme.font.sizes.large },
    { size: 'big', expected: theme.font.sizes.huge },
    { size: 'huge', expected: theme.font.sizes.xhuge },
  ].forEach(({ size, expected }) =>
    it(`should render correct heading size ${size}`, () => {
      renderTheme(<Heading size={size}>text</Heading>);

      const heading = screen.getByRole('heading', { name: 'text' });

      expect(heading).toHaveStyle({
        'font-size': expected,
      });
    }),
  );

  xit('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, { media: theme.media.lteMedium });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>text</Heading>);

    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">text</Heading>);

    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
