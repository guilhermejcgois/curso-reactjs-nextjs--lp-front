import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from './SectionContainer';

describe('SectionContainer', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer background={true}>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
