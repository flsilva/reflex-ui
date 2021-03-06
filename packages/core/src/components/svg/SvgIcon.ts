/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { FlexSvgPropsOptional } from './FlexSvgProps';
import { SimpleFlexSvg } from './SimpleFlexSvg';
import { withDefaultSvgIconProps } from './withDefaultSvgIconProps';

const SvgIcon: React.ComponentType<
  FlexSvgPropsOptional
> = withDefaultSvgIconProps(SimpleFlexSvg);

export { SvgIcon };
