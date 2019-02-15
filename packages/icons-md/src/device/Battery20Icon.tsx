import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const Battery20Icon = reflexComponent<OptionalFlexSvgProps>({
  name: 'Battery20Icon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z" />
      <Path
        fillOpacity={0.3}
        d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"
      />
    </Svg>
  </SvgIcon>
));
