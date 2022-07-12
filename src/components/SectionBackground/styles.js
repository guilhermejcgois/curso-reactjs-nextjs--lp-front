import style, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = style.div`
  ${({ background, theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
