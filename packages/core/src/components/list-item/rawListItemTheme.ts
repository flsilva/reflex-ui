/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { getRawInjectableViewSubTheme } from '../raw/getRawInjectableViewSubTheme';
import { ListItemProps, ListItemTheme } from './';

export const rawInjectableListItemViewSubTheme = getRawInjectableViewSubTheme<
  ListItemProps
>();

export const rawListItemTheme: ListItemTheme = {
  container: rawInjectableListItemViewSubTheme,
};
