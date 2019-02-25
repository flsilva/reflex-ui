/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedContainedButtonContainerTheme } from './animatedContainer';
import { containedButtonTheme } from './theme';

export const partialAnimatedContainedButtonTheme: OptionalButtonTheme = {
  container: animatedContainedButtonContainerTheme,
};

export const animatedContainedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, containedButtonTheme, partialAnimatedContainedButtonTheme);