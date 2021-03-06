/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  DefaultViewSubcomponent,
  InjectableSubTheme,
  InteractionType,
  isTouchDevice,
  rawInjectableTouchableSurfaceViewSubTheme,
  TouchableSurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { getButtonRippleColor } from '../button/getButtonRippleColor';
import { withRippleEffect } from '../button/withRippleEffect';
import { getTouchableSurfaceContainerStyle } from './container';

export const getAnimatedTouchableSurfaceContainerStyle: ViewStyleGetter<
  TouchableSurfaceProps
> = props => {
  const updatedProps =
    props.interactionState.type === InteractionType.Pressed
      ? {
          // tslint:disable-next-line:ter-indent
          ...props,
          // tslint:disable-next-line:ter-indent
          interactionState: {
            ...props.interactionState,
            type: isTouchDevice
              ? InteractionType.Enabled
              : InteractionType.Hovered,
          },
          // tslint:disable-next-line:ter-indent
        }
      : props;

  return getTouchableSurfaceContainerStyle(updatedProps);
};

export const animatedTouchableSurfaceContainerTheme: InjectableSubTheme<
  TouchableSurfaceProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableTouchableSurfaceViewSubTheme, {
  component: withRippleEffect({
    getRippleColor: getButtonRippleColor,
  })(DefaultViewSubcomponent),
  getStyle: getAnimatedTouchableSurfaceContainerStyle,
});
