/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getSizedPaddingStyle,
  getThemedColor,
  InjectableSubThemeOptional,
  rawSurfaceTheme,
  SurfaceProps,
  SurfaceTheme,
  SurfaceThemeOptional,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { getFlexboxStyle } from '../../flexbox/getFlexboxStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';

export const getSurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  flexWrap: 'wrap',
  ...getFlexboxStyle(props),
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  backgroundColor: getThemedColor(props),
  borderRadius: 4,
});

export const surfaceContainerTheme: InjectableSubThemeOptional<
  SurfaceProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getSurfaceContainerStyle,
};

export const optionalSurfaceTheme: SurfaceThemeOptional = {
  container: surfaceContainerTheme,
};

export const surfaceTheme: SurfaceTheme = merge<
  {},
  SurfaceTheme,
  SurfaceThemeOptional
>({}, rawSurfaceTheme, optionalSurfaceTheme);
