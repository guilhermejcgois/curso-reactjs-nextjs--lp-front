import React from 'react';

import { Home } from './Home';
import { renderTheme } from '../../styles/render-theme';
import { MemoryRouter } from 'react-router-dom';

describe('<Home />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
