/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../sizing/Size';

export interface MarginProps {
  readonly margin?: Size;
  readonly marginBottom?: Size;
  readonly marginEnd?: Size;
  readonly marginHorizontal?: Size;
  readonly marginStart?: Size;
  readonly marginTop?: Size;
  readonly marginVertical?: Size;
}
