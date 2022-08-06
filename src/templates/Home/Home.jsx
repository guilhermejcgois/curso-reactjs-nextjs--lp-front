import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { mapData } from '../../api/map-data';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';

import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFound';

import config from '../../config';

export const Home = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      const slug = pathname ? pathname : config.defaultSlug;

      try {
        let url = `${config.url}/api/pages/?filters[slug]=${slug}`;
        url += '&populate[0]=*';
        url += '&populate[1]=menu.menu_links';
        url += '&populate[2]=sections.metadata';
        url += '&populate[3]=sections.image_grid';
        url += '&populate[4]=sections.text_grid';
        url += '&populate[5]=sections.image';

        const res = await fetch(url);
        const json = await res.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        console.log({ attributes, pageData });
        setData(() => pageData[0]);
      } catch (e) {
        console.error(e);
        setData(undefined);
      }
    };

    load();
  }, [location.pathname]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;
        console.log({ component, key });

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
};
