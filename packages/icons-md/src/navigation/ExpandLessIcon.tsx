import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ExpandLessIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'ExpandLessIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </Svg>
  </SvgIcon>
));
