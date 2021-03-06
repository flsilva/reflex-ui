/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBarProps,
  AppBarTheme,
  AppBarThemeOptional,
  AppBarVariantsTheme,
  getThemedColor,
  rawAppBarTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

/*
 * COMMON STYLES
 */

export const getCommonAppBarCenterAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  flexDirection: 'row',
  flexGrow: 1,
  flexShrink: 1,
  marginStart: 20,
});

export const getCommonAppBarContainerAreaStyle: ViewStyleGetter<
  AppBarProps
> = props => ({
  alignItems: 'center',
  backgroundColor: getThemedColor(props),
  flex: 1,
  flexDirection: 'row',
  overflow: 'hidden',
  paddingHorizontal: 4,
  paddingVertical: 4,
});

export const getCommonAppBarLeadingAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  flexDirection: 'row',
});

export const getCommonAppBarTrailingAreaStyle: ViewStyleGetter<
  AppBarProps
> = () => ({
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

/*
 * AppBarVariant.DEFAULT
 */

export const getDefaultAppBarContainerAreaStyle: ViewStyleGetter<
  AppBarProps
> = props => ({
  ...getCommonAppBarContainerAreaStyle(props),
  flexWrap: 'nowrap',
  height:
    props.dimensions.window.width <= props.breakpoints.largeTablet ? 56 : 64,
});

export const partialDefaultAppBarTheme: AppBarThemeOptional = {
  centerArea: {
    getStyle: getCommonAppBarCenterAreaStyle,
  },
  container: {
    getStyle: getDefaultAppBarContainerAreaStyle,
  },
  leadingArea: {
    getStyle: getCommonAppBarLeadingAreaStyle,
  },
  trailingArea: {
    getStyle: getCommonAppBarTrailingAreaStyle,
  },
};

export const defaultAppBarTheme: AppBarTheme = merge(
  {},
  rawAppBarTheme,
  partialDefaultAppBarTheme,
);

/*
 * AppBarVariant.DENSE
 */

export const getDenseAppBarContainerAreaStyle: ViewStyleGetter<
  AppBarProps
> = props => ({
  ...getCommonAppBarContainerAreaStyle(props),
  height: 48,
  paddingVertical: 0,
});

export const partialDenseAppBarTheme: AppBarThemeOptional = {
  centerArea: {
    getStyle: getCommonAppBarCenterAreaStyle,
  },
  container: {
    getStyle: getDenseAppBarContainerAreaStyle,
  },
  leadingArea: {
    getStyle: getCommonAppBarLeadingAreaStyle,
  },
  trailingArea: {
    getStyle: getCommonAppBarTrailingAreaStyle,
  },
};

export const denseAppBarTheme: AppBarTheme = merge(
  {},
  rawAppBarTheme,
  partialDenseAppBarTheme,
);

/*
 * PROMINENT STYLES
 */

export const getProminentAppBarCenterAreaStyle: ViewStyleGetter<
  AppBarProps
> = props => ({
  ...getCommonAppBarCenterAreaStyle(props),
  alignSelf: 'flex-end',
  marginBottom: 10,
});

export const getProminentAppBarContainerAreaStyle: ViewStyleGetter<
  AppBarProps
> = props => ({
  ...getCommonAppBarContainerAreaStyle(props),
  alignItems: 'flex-start',
  height: 128,
});

export const partialProminentAppBarTheme: AppBarThemeOptional = {
  centerArea: {
    getStyle: getProminentAppBarCenterAreaStyle,
  },
  container: {
    getStyle: getProminentAppBarContainerAreaStyle,
  },
  leadingArea: {
    getStyle: getCommonAppBarLeadingAreaStyle,
  },
  trailingArea: {
    getStyle: getCommonAppBarTrailingAreaStyle,
  },
};

export const prominentAppBarTheme: AppBarTheme = merge(
  {},
  rawAppBarTheme,
  partialProminentAppBarTheme,
);

/*
 * AppBarVariant.PROMINENT_DENSE
 */

export const getProminentDenseAppBarContainerAreaStyle: ViewStyleGetter<
  AppBarProps
> = props => ({
  ...getProminentAppBarContainerAreaStyle(props),
  height: 98,
});

export const partialProminentDenseAppBarTheme: AppBarThemeOptional = {
  container: {
    getStyle: getProminentDenseAppBarContainerAreaStyle,
  },
};

export const prominentDenseAppBarTheme: AppBarTheme = merge(
  {},
  prominentAppBarTheme,
  partialProminentDenseAppBarTheme,
);

/*
 * AppBarVariantsTheme
 */

export const appBarVariantsTheme: AppBarVariantsTheme = {
  default: defaultAppBarTheme,
  dense: denseAppBarTheme,
  prominent: prominentAppBarTheme,
  prominentDense: prominentDenseAppBarTheme,
};
