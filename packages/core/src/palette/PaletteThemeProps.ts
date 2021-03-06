/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorTheme } from './ColorTheme';
import { PaletteTheme } from './PaletteTheme';

export interface PaletteThemeProps {
  readonly colorTheme: ColorTheme;
  readonly contained?: boolean;
  readonly invertColor?: boolean;
  readonly paletteTheme: PaletteTheme;
}

export type PaletteThemePropsOptional = Partial<PaletteThemeProps>;
