/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getThemedColor,
  InjectableSubTheme,
  InteractionType,
  rawInjectableTouchableSurfaceViewSubTheme,
  TouchableSurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { Platform, ViewProps, ViewStyle } from 'react-native';

export const getTouchableSurfaceContainerStyle: ViewStyleGetter<
  TouchableSurfaceProps
> = ({ colorTheme, interactionState, invertColor, paletteTheme }) => ({
  backgroundColor: getThemedColor({
    colorTheme,
    contained: false,
    interactionState,
    invertColor,
    paletteTheme,
  }),
  ...Platform.select({
    web: {
      cursor:
        interactionState.type === InteractionType.Disabled
          ? 'default'
          : 'pointer',
      outline: 'none',
    },
  }),
});

export const touchableSurfaceContainerTheme: InjectableSubTheme<
  TouchableSurfaceProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableTouchableSurfaceViewSubTheme, {
  getStyle: getTouchableSurfaceContainerStyle,
});