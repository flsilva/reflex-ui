/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';

import { defaultPaletteTheme } from './defaultPaletteTheme';
import { PaletteTheme, PaletteThemeOptional } from './PaletteTheme';

export const createPaletteTheme = (theme: PaletteThemeOptional): PaletteTheme =>
  merge({}, defaultPaletteTheme, theme);
