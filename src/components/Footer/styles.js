import style, { css } from 'styled-components';

import { Container as SectionContainer } from '../SectionContainer/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = style.p`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
