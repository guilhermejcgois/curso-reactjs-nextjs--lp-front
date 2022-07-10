import style, { css } from 'styled-components';

export const Container = style.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
