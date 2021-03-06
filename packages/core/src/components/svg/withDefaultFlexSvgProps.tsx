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
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { FlexSvgProps, FlexSvgPropsOptional } from './FlexSvgProps';

export const withDefaultFlexSvgProps = (
  WrappedComponent: React.ComponentType<FlexSvgProps>,
): React.ComponentType<FlexSvgPropsOptional> =>
  reflexComponent<FlexSvgPropsOptional>({
    name: 'WithDefaultFlexSvgProps',
    wrapped: WrappedComponent,
  })(props => (
    <PaletteThemeContext.Consumer>
      {paletteTheme => (
        <ColorThemeContext.Consumer>
          {colorTheme => (
            <ComponentsThemeContext.Consumer>
              {componentsTheme => {
                const propsWithDefaults: FlexSvgProps = {
                  colorTheme: colorTheme || ColorTheme.SecondaryNormal,
                  paletteTheme,
                  size: Size.M,
                  theme: componentsTheme.svg.flexSvg,
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
