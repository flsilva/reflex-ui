/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteColorInteraction,
  createPaletteColorUsingColorOnly,
  createPaletteColorUsingOnColorOnly,
  invertPaletteColor,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
import { createContainedPaletteColorVariant } from '../../createContainedPaletteColorVariant';
// tslint:disable-next-line:max-line-length
import { createUncontainedPaletteColorVariant } from '../../createUncontainedPaletteColorVariant';
import { disabledGrey300_500 } from '../disabled/contained/disabledGrey300_500';
import { disabledGrey500 } from '../disabled/uncontained/disabledGrey500';
// tslint:disable-next-line:max-line-length
import { disabledGrey500_500_700 } from '../disabled/uncontained/disabledGrey500_500_700';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { red900 } from './red900';

export const mdRed900: MaterialPaletteColorItem = {
  color: {
    inverted: {
      contained: createPaletteColorInteraction({
        color: invertPaletteColor(red900),
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        color: createPaletteColorUsingColorOnly(red900),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey500,
      }),
    },
    regular: {
      contained: createPaletteColorInteraction({
        color: red900,
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        color: createPaletteColorUsingOnColorOnly(red900),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey500_500_700,
      }),
    },
  },
  name: 'Red',
  tone: '900',
};
