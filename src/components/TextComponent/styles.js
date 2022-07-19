import style, { css } from 'styled-components';

export const Container = style.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
