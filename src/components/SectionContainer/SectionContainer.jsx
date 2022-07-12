import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => <Styled.Container>{children}</Styled.Container>;

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
