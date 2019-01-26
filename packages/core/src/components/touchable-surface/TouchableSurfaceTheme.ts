/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {
  InjectableSubTheme,
  OptionalInjectableSubTheme,
} from '../subcomponents';
import { TouchableSurfaceProps } from './TouchableSurfaceProps';

export interface TouchableSurfaceTheme {
  readonly container: InjectableSubTheme<
    TouchableSurfaceProps,
    ViewProps,
    ViewStyle
  >;
  readonly touchable: InjectableSubTheme<
    TouchableSurfaceProps,
    TouchableWithoutFeedbackProps,
    ViewStyle
  >;
}

export interface OptionalTouchableSurfaceTheme {
  readonly container?: OptionalInjectableSubTheme<
    TouchableSurfaceProps,
    ViewProps,
    ViewStyle
  >;
  readonly touchable?: OptionalInjectableSubTheme<
    TouchableSurfaceProps,
    TouchableWithoutFeedbackProps,
    ViewStyle
  >;
}
