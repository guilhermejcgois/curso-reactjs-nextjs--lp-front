import P from 'prop-types';
import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const Footer = ({ footerHtml }) => (
  <Styled.Container>
    <SectionContainer>
      <TextComponent>{footerHtml}</TextComponent>
    </SectionContainer>
  </Styled.Container>
);

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
