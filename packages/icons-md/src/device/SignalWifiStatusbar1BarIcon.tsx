import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalWifiStatusbar1BarIcon = reflexComponent<
  OptionalFlexSvgProps
>({
  name: 'SignalWifiStatusbar1BarIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path d="M13 21.99l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95L13 21.99z" />
      <Path
        fillOpacity={0.3}
        d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"
      />
    </Svg>
  </SvgIcon>
));