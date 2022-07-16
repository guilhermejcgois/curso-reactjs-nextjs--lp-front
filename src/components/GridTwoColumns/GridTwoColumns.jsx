import React from 'react';
import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as styled from './styles';

export const GridTwoColumns = ({ title, text, srcImg, background = false }) => (
  <SectionBackground background={background} uppercase>
    <styled.Container>
      <styled.TextContainer>
        <Heading colorDark={!background} uppercase>
          {title}
        </Heading>
        <TextComponent>{text}</TextComponent>
      </styled.TextContainer>
      <styled.ImageContainer>
        <styled.Image src={srcImg} alt={title} />
      </styled.ImageContainer>
    </styled.Container>
  </SectionBackground>
);

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
