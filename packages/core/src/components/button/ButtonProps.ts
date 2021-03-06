/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { InteractionProps } from '../../interaction';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { SizingProps } from '../../sizing/SizingProps';
import { MarginProps } from '../../spacing/MarginProps';
import { ButtonSubPropsGetter } from './ButtonSubPropsGetter';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps
  extends InteractionProps,
    MarginProps,
    PaletteThemeProps,
    SizingProps {
  readonly children?: React.ReactNode;
  readonly fullWidth?: boolean;
  readonly getSubProps?: ButtonSubPropsGetter;
  readonly leadingIcon?: JSX.Element;
  readonly theme: ButtonTheme;
  readonly trailingIcon?: JSX.Element;
  readonly variant: ButtonVariant;
}

export type ButtonPropsOptional = Partial<ButtonProps>;
