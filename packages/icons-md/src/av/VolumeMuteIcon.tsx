import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const VolumeMuteIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'VolumeMuteIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 9v6h4l5 5V4l-5 5H7z" />
    </Svg>
  </SvgIcon>
));
