import style, { css } from 'styled-components';

export const Container = style.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row-wrap;

    @media ${theme.media.lteMedium} {
      flex-flow: column nowrap;
      align-content: center;
    }
  `}
`;
