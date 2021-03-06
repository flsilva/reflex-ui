/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const deepPurple500: PaletteColor = {
  dark: {
    color: '#320b86',
    onColor: white,
  },
  light: {
    color: '#9a67ea',
    onColor: black,
  },
  normal: {
    color: '#673ab7',
    onColor: white,
  },
};
