import React from 'react';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';
import P from 'prop-types';
import * as styled from './styles';

export const GoTop = ({ handleClick }) => (
  <styled.Container href="#" onClick={handleClick} aria-label="Go to top" title="Go to top">
    <KeyboardArrowUp />
  </styled.Container>
);

GoTop.propTypes = {
  handleClick: P.func,
};
