import React from 'react';
import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as styled from './styles';

export const GridContent = ({ title, html, background = false }) => (
  <SectionBackground background={background}>
    <styled.Container>
      <Heading colorDark={!background} uppercase>
        {title}
      </Heading>
      <styled.Html>
        <TextComponent>{html}</TextComponent>
      </styled.Html>
    </styled.Container>
  </SectionBackground>
);

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
