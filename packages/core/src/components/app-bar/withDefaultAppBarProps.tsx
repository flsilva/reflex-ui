/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { AppBarProps, AppBarPropsOptional } from './AppBarProps';
import { AppBarVariant } from './AppBarVariant';

export const withDefaultAppBarProps = (
  WrappedComponent: React.ComponentType<AppBarProps>,
): React.ComponentType<AppBarPropsOptional> =>
  reflexComponent<AppBarPropsOptional>({
    name: 'WithDefaultAppBarProps',
    wrapped: WrappedComponent,
  })(props => (
    <DimensionsContext.Consumer>
      {dimensionsProps => (
        <PaletteThemeContext.Consumer>
          {paletteTheme => (
            <ComponentsThemeContext.Consumer>
              {componentsTheme => {
                const colorTheme: ColorTheme =
                  props.colorTheme || ColorTheme.PrimaryNormal;

                const variant: AppBarVariant =
                  props.variant || AppBarVariant.Default;

                const propsWithDefaults: AppBarProps = {
                  ...dimensionsProps,
                  colorTheme,
                  contained: true,
                  paletteTheme,
                  theme: componentsTheme.appBar[variant],
                  variant,
                  ...props,
                };

                return (
                  <ColorThemeContext.Provider value={colorTheme}>
                    <WrappedComponent {...propsWithDefaults} />
                  </ColorThemeContext.Provider>
                );
              }}
            </ComponentsThemeContext.Consumer>
          )}
        </PaletteThemeContext.Consumer>
      )}
    </DimensionsContext.Consumer>
  ));
