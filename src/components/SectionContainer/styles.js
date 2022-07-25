import style, { css } from 'styled-components';

export const Container = style.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacing.large};
    width: 100%;
  `}
`;
