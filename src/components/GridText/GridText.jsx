import React from 'react';
import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as styled from './styles';

export const GridText = ({ title, description, grid, background = false }) => (
  <SectionBackground background={background}>
    <styled.Container>
      <Heading size="huge" colorDark={!background} uppercase as="h2">
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <styled.Grid>
        {grid.map((el, i) => (
          <styled.GridElement key={i}>
            <Heading size="medium" colorDark={!background} as="h3">
              {el.title}
            </Heading>
            <TextComponent>{el.description}</TextComponent>
          </styled.GridElement>
        ))}
      </styled.Grid>
    </styled.Container>
  </SectionBackground>
);

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
