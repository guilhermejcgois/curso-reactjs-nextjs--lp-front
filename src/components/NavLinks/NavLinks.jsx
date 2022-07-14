import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => (
  <Styled.Container aria-label="Main menu">
    {links.map((link) => (
      <MenuLink key={link.link} {...link} />
    ))}
  </Styled.Container>
);

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
