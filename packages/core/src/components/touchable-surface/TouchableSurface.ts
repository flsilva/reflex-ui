/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { withInteractionState } from '../../interaction';
// tslint:disable-next-line:max-line-length
import { withResponsivenessProps } from '../../responsiveness/withResponsivenessProps';
import { SimpleTouchableSurface } from './SimpleTouchableSurface';
import { TouchableSurfacePropsOptional } from './TouchableSurfaceProps';
// tslint:disable-next-line:max-line-length
import { withDefaultTouchableSurfaceProps } from './withDefaultTouchableSurfaceProps';

export const TouchableSurface: React.ComponentType<
  TouchableSurfacePropsOptional
> = withInteractionState(
  withResponsivenessProps(
    withDefaultTouchableSurfaceProps(SimpleTouchableSurface),
  ),
);
