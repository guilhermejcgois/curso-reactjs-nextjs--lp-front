export const mapSections = (sections = []) => {
  return sections.map((section) => {
    switch (section.__component) {
      case 'section.section-two-columns':
        return mapSectionTwoColumns(section);
      case 'section.section-content':
        return mapSectionContent(section);
      case 'section.section-grid': {
        const { text_grid = [], image_grid = [] } = section;

        if (text_grid.length > 0) {
          return mapTextGrid(section);
        }

        if (image_grid.length > 0) {
          return mapImageGrid(section);
        }
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcImg } = {} } = {} } = {
      data: {
        attributes: { url: '' },
      },
    },
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((item) => {
      const { title = '', description = '' } = item;

      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((item) => {
      const { image: { url: srcImg = '', alternativeText: altText = '' } = '' } = item;

      return {
        srcImg,
        altText,
      };
    }),
  };
};
