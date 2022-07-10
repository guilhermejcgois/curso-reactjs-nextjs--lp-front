import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target} role="link">
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.string.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
