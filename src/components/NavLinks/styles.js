import style, { css } from 'styled-components';

export const Container = style.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row-wrap;

    @media ${theme.media.lteMedium} {
      flex-flow: column no-wrap;
      align-content: center;
    }
  `}
`;
