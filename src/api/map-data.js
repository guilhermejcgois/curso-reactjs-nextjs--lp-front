import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { footer_text: footerHtml = '', slug = '', title = '', menu = {}, sections = [] } = data;
    return {
      footerHtml,
      slug,
      title,
      menu: mapMenu(menu),
      sections: mapSections(sections),
    };
  });
};
