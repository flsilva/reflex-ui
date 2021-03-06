/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  PaletteColorVariant,
  PaletteColorVariantFactory,
  PaletteColorVariantFactoryInput,
} from '@reflex-ui/core';

import { getInlayColorByInteraction } from './getInlayColorByInteraction';

export const createContainedPaletteColorVariant: PaletteColorVariantFactory = (
  config: PaletteColorVariantFactoryInput,
): PaletteColorVariant => ({
  color: getInlayColorByInteraction({
    color: config.color.color,
    type: config.interactionType,
  }),
  onColor: config.color.onColor,
});
