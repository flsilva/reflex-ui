/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  rawInjectableButtonViewSubTheme,
  SizedData,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import {
  getAllVariantsButtonContainerProps,
  getAllVariantsButtonContainerStyle,
} from '../all-variants/container';

export const containedButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: {
    height: 24,
    minWidth: 40,
    paddingHorizontal: 6,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    height: 28,
    minWidth: 52,
    paddingHorizontal: 8,
  },
  small: {
    height: 32,
    minWidth: 56,
    paddingHorizontal: 12,
  },
  medium: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 16,
  },
  large: {
    height: 40,
    minWidth: 72,
    paddingHorizontal: 20,
  },
  xlarge: {
    height: 48,
    minWidth: 80,
    paddingHorizontal: 24,
  },
  xxlarge: {
    height: 64,
    minWidth: 96,
    paddingHorizontal: 40,
  },
};

export const getContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonContainerStyle(props),
  ...containedButtonContainerSizedStyle[props.size],
});

export const containedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getContainedButtonContainerStyle,
});
