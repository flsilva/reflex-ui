/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { InteractionType } from '../../interaction';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { ButtonProps, OptionalButtonProps } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';
import { getButtonVariantColorTheme } from './getButtonVariantColorTheme';

// prettier-ignore
export const withDefaultButtonProps = (
  WrappedComponent: React.ComponentType<ButtonProps>,
): React.ComponentType<OptionalButtonProps> =>
  reflexComponent<OptionalButtonProps>({
    name: 'WithDefaultButtonProps',
    wrapped: WrappedComponent,
  })(props => (
    <PaletteThemeContext.Consumer>
      {paletteTheme => (
        <ColorThemeContext.Consumer>
          {colorTheme => (
            <ComponentsThemeContext.Consumer>
              {(componentsTheme) => {
                const variant: ButtonVariant =
                  props.variant || ButtonVariant.DEFAULT;

                const marginHorizontal: Size | number =
                  variant === ButtonVariant.FAB ||
                  variant === ButtonVariant.XFAB ||
                  variant === ButtonVariant.ICON
                    ? 0
                    : Size.M;

                const marginVertical: Size | number =
                    variant === ButtonVariant.FAB ||
                    variant === ButtonVariant.XFAB ||
                    variant === ButtonVariant.ICON
                      ? 0
                      : Size.S;

                const propsWithDefaults: ButtonProps = {
                  colorTheme: colorTheme || getButtonVariantColorTheme(variant),
                  interactionState: {
                    type: InteractionType.ENABLED,
                  },
                  /*
                   * marginHorizontal and marginVertical are more specific
                   * than margin, so we check it here to avoid overriding
                   * users' margin when provided.
                   */
                  marginHorizontal: props.margin ? undefined : marginHorizontal,
                  marginVertical: props.margin ? undefined : marginVertical,
                  /**/
                  paletteTheme,
                  size: Size.M,
                  theme: componentsTheme.button[variant],
                  variant,
                  ...props,
                };

                return <WrappedComponent {...propsWithDefaults} />;
              }}
            </ComponentsThemeContext.Consumer>
          )}
        </ColorThemeContext.Consumer>
      )}
    </PaletteThemeContext.Consumer>
  ));
