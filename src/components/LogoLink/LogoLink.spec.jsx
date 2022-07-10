import React from 'react';
import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from './LogoLink';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello world" />);

    const heading = screen.getByRole('heading', { name: 'Hello world' });

    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello world" srcImage="image.jpg" />);

    const heading = screen.getByRole('img', { name: 'Hello world' });

    expect(heading).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Hello world" srcImage="image.jpg" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #0a1128;
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
      }

      .c1 > img {
        max-height: 3rem;
      }

      <h1
        class="c0"
      >
        <a
          class="c1"
          href="#target"
        >
          <img
            alt="Hello world"
            src="image.jpg"
          />
        </a>
      </h1>
    `);
  });
});
