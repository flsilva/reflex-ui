import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabStaticButtonTheme } from '../fab/staticTheme';
import { xfabStaticButtonContainerTheme } from './container';
import {
  xfabStaticButtonLeadingIconContainerTheme,
  xfabStaticButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  xfabStaticButtonLeadingIconTheme,
  xfabStaticButtonTrailingIconTheme,
} from './sideIcons';

export const partialXFabStaticButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: xfabStaticButtonContainerTheme,
  [ButtonSubName.LEADING_ICON]: xfabStaticButtonLeadingIconTheme,
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.LEADING_ICON_CONTAINER]: xfabStaticButtonLeadingIconContainerTheme,
  [ButtonSubName.TRAILING_ICON]: xfabStaticButtonTrailingIconTheme,
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.TRAILING_ICON_CONTAINER]: xfabStaticButtonTrailingIconContainerTheme,
};

export const xfabStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, fabStaticButtonTheme, partialXFabStaticButtonTheme);