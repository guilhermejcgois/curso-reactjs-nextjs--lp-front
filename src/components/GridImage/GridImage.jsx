import React from 'react';
import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as styled from './styles';

export const GridImage = ({ title, description, grid, background = false, sectionId = '' }) => (
  <SectionBackground background={background} sectionId={sectionId}>
    <styled.Container>
      <Heading size="huge" colorDark={!background} uppercase as="h2">
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <styled.Grid>
        {grid.map((el) => (
          <styled.GridElement key={el.srcImg}>
            <styled.Image src={el.srcImg} alt={el.altText} />
          </styled.GridElement>
        ))}
      </styled.Grid>
    </styled.Container>
  </SectionBackground>
);

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
  sectionId: P.string,
};
