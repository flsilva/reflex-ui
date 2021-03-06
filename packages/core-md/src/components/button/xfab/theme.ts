/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, ButtonThemeOptional } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabButtonTheme } from '../fab/theme';
import { xfabButtonContainerTheme } from './container';
import {
  xfabButtonLeadingIconContainerTheme,
  xfabButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  xfabButtonLeadingIconTheme,
  xfabButtonTrailingIconTheme,
} from './sideIcons';

export const partialXFabButtonTheme: ButtonThemeOptional = {
  container: xfabButtonContainerTheme,
  leadingIcon: xfabButtonLeadingIconTheme,
  leadingIconContainer: xfabButtonLeadingIconContainerTheme,
  trailingIcon: xfabButtonTrailingIconTheme,
  trailingIconContainer: xfabButtonTrailingIconContainerTheme,
};

export const xfabButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  ButtonThemeOptional
>({}, fabButtonTheme, partialXFabButtonTheme);
