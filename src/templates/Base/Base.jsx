import React from 'react';
import P from 'prop-types';
import * as styled from './styles';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Menu } from '../../components/Menu';

export const Base = ({ links = [], logoData, footerHtml, children }) => (
  <>
    <Menu links={links} logoData={logoData} />
    <styled.Container>
      {children}
      <Footer footerHtml={footerHtml} />
    </styled.Container>
    <GoTop />
  </>
);

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
