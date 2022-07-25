import { mapImageGrid, mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid } from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const sections = mapSections();

    expect(sections).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should return empty section for non mapped section', () => {
    const withNoTextOrImageGrid = mapSections([{ __component: 'section.section-grid' }]);

    expect(withNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);
  });

  it('should return empty section for non mapped components', () => {
    const withoutComponent = mapSections([{}]);

    expect(withoutComponent).toEqual([{}]);
  });

  it('should map section two columns without data', () => {
    const section = mapSectionTwoColumns();

    expect(section.background).toBe(false);
    expect(section.component).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.srcImg).toBe('');
    expect(section.text).toBe('');
    expect(section.title).toBe('');
  });

  it('should map section two columns with data', () => {
    const section = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056172',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });

    expect(section.background).toBe(true);
    expect(section.component).toBe('section.section-two-columns');
    expect(section.sectionId).toBe('home');
    expect(section.srcImg).toBe('a.svg');
    expect(section.text).toBe('abc');
    expect(section.title).toBe('title');
  });

  it('should map section content without data', () => {
    const section = mapSectionContent();

    expect(section.background).toBe(false);
    expect(section.component).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.html).toBe('');
    expect(section.title).toBe('');
  });

  it('should map section content with data', () => {
    const section = mapSectionContent({
      __component: 'section.section-content',
      _id: '602fdf2d540c00269e056173',
      title: 'Pricing',
      content: '<p>Hey!<p>',
      metadata: {
        background: true,
        section_id: 'pricing',
      },
    });

    expect(section.background).toBe(true);
    expect(section.component).toBe('section.section-content');
    expect(section.sectionId).toBe('pricing');
    expect(section.html).toBe('<p>Hey!<p>');
    expect(section.title).toBe('Pricing');
  });

  it('should map grid text without data', () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Coisa',
        },
        {
          title: 'Teste 2',
          description: 'abc',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: 'a.svg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
  });
});
