import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

export const renderTheme = (children) => render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
