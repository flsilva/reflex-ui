import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const PhotoSizeSelectActualIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'PhotoSizeSelectActualIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z" />
    </Svg>
  </SvgIcon>
));
