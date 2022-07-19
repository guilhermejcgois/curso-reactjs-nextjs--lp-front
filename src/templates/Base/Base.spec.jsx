import React from 'react';

import { renderTheme } from '../../styles/render-theme';

import { Base } from './Base';
import { mockBase } from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
