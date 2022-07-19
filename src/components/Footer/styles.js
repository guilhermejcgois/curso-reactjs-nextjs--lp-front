import style, { css } from 'styled-components';

export const Container = style.p`
  ${({ theme }) => css`
    text-align: center;
    a {
      color: inherit;
      font-size: ${theme.font.sizes.medium};
      text-decoration: none;
    }
  `}
`;
