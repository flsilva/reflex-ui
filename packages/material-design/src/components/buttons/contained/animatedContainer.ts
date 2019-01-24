/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  DefaultViewSubcomponent,
  InjectableSubTheme,
  InteractionType,
  isTouchDevice,
  rawInjectableButtonViewSubTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { withRippleEffect } from '../withRippleEffect';
import { getContainedButtonContainerStyle } from './container';
import { getContainedButtonRippleColor } from './getContainedButtonRippleColor';

export const getAnimatedContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
  // tslint:disable-next-line:ter-arrow-parens
> = props => {
  const updatedProps =
    props.interactionState.type === InteractionType.PRESSED
      ? {
          // tslint:disable-next-line:ter-indent
          ...props,
          // tslint:disable-next-line:ter-indent
          interactionState: {
            ...props.interactionState,
            type: isTouchDevice
              ? InteractionType.ENABLED
              : InteractionType.HOVERED,
          },
          // tslint:disable-next-line:ter-indent
        }
      : props;

  return getContainedButtonContainerStyle(updatedProps);
};

export const animatedContainedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(DefaultViewSubcomponent),
  getStyle: getAnimatedContainedButtonContainerStyle,
});