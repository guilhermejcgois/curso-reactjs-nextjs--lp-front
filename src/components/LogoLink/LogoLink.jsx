import P from 'prop-types';
import React from 'react';
import { Heading } from '../Heading/Heading';
import * as Styled from './styles';

export const LogoLink = ({ text, srcImage = '', link }) => (
  <Heading size="small" uppercase>
    <Styled.Container href={link}>
      {srcImage ? <img src={srcImage} alt={text} /> : <span>{text}</span>}
    </Styled.Container>
  </Heading>
);

LogoLink.propTypes = {
  link: P.string.isRequired,
  srcImage: P.string,
  text: P.string.isRequired,
};
