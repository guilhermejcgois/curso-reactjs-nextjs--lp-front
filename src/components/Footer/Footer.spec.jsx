import React from 'react';

import { renderTheme } from '../../styles/render-theme';
import { Footer } from './Footer';

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Footer footerHtml={'# Olá'} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      .c2 {
        font-size: 2.4rem;
      }

      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        font-size: 2.4rem;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      <p
        class="c0"
      >
        <div
          class="c1"
        >
          <div
            class="c2"
          >
            # Olá
          </div>
        </div>
      </p>
    `);
  });
});
