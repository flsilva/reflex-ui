/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarVariantsTheme } from './app-bar/theme';
import { animatedButtonTheme } from './button/animatedTheme';
import { listItemTheme } from './list-item/theme';
import { listTheme } from './list/theme';
import { surfaceTheme } from './surface/theme';
import { flexSvgVariantsTheme } from './svg/theme';
// tslint:disable-next-line:max-line-length
import { animatedTouchableSurfaceTheme } from './touchable-surface/animatedTheme';
import { typographyTheme } from './typography/theme';
import { superViewTheme } from './view/theme';

export const animatedMaterialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  button: animatedButtonTheme,
  list: listTheme,
  listItem: listItemTheme,
  surface: surfaceTheme,
  svg: flexSvgVariantsTheme,
  touchableSurface: animatedTouchableSurfaceTheme,
  typography: typographyTheme,
  views: superViewTheme,
};
