import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from './SectionBackground';

describe('SectionBackground', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background white', () => {
    const { container } = renderTheme(
      <SectionBackground background={false}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
