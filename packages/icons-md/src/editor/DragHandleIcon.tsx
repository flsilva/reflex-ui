import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const DragHandleIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'DragHandleIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </Svg>
  </SvgIcon>
));
