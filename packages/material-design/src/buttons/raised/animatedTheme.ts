import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { raisedAnimatedButtonContainerTheme } from './animatedContainer';
import { raisedButtonTheme } from './theme';

export const partialAnimatedRaisedButtonTheme: OptionalButtonTheme = {
  container: raisedAnimatedButtonContainerTheme,
};

export const raisedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, raisedButtonTheme, partialAnimatedRaisedButtonTheme);
