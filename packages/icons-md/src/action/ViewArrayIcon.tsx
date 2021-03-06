import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ViewArrayIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'ViewArrayIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" />
    </Svg>
  </SvgIcon>
));
