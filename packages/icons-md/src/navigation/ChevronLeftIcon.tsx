import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ChevronLeftIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'ChevronLeftIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </Svg>
  </SvgIcon>
));
