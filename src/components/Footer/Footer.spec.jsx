import React from 'react';

import { renderTheme } from '../../styles/render-theme';
import { Footer } from './Footer';

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer footerHtml={'# Olá'} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c2 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      .c4 {
        font-size: 2.4rem;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #dddddd;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      .c0 .c3 {
        font-size: 1.6rem;
      }

      <p
        class="c0"
      >
        <div
          class="c1 c2"
        >
          <div
            class="c3 c4"
          >
            # Olá
          </div>
        </div>
      </p>
    `);
  });
});
