/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from './PaletteColorVariant';
// tslint:disable-next-line:max-line-length
import { PaletteColorVariantFactoryInput } from './PaletteColorVariantFactoryInput';

export type PaletteColorVariantFactory = (
  config: PaletteColorVariantFactoryInput,
) => PaletteColorVariant;
