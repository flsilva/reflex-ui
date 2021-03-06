/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonProps, rawButtonIconSubTheme, SubTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

// tslint:disable-next-line:max-line-length
import { getAllVariantsButtonLeadingIconProps } from '../all-variants/sideIcons';

export const defaultButtonLeadingIconTheme: SubTheme<
  ButtonProps,
  SvgProps,
  ViewStyle
> = merge({}, rawButtonIconSubTheme, {
  getProps: getAllVariantsButtonLeadingIconProps,
});

export const defaultButtonTrailingIconTheme: SubTheme<
  ButtonProps,
  SvgProps,
  ViewStyle
> = defaultButtonLeadingIconTheme;
