/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarVariantsTheme } from './app-bar';
import { ButtonVariantsTheme } from './button';
import { ListTheme } from './list';
import { ListItemTheme } from './list-item';
import { SurfaceTheme } from './surface';
import { FlexSvgVariantsTheme } from './svg';
import { TouchableSurfaceTheme } from './touchable-surface';
import { TypographyTheme } from './typography';
import { SuperViewVariantsTheme } from './view';

export interface ComponentsTheme {
  readonly appBar: AppBarVariantsTheme;
  readonly button: ButtonVariantsTheme;
  readonly list: ListTheme;
  readonly listItem: ListItemTheme;
  readonly surface: SurfaceTheme;
  readonly svg: FlexSvgVariantsTheme;
  readonly touchableSurface: TouchableSurfaceTheme;
  readonly typography: TypographyTheme;
  readonly views: SuperViewVariantsTheme;
}

export type ComponentsThemeOptional = Partial<ComponentsTheme>;
