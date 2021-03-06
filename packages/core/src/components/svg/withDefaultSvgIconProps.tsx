/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

// tslint:disable-next-line
import { InteractionStateContext } from '../../interaction/InteractionStateContext';
import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { FlexSvgProps, FlexSvgPropsOptional } from './FlexSvgProps';

export const withDefaultSvgIconProps = (
  WrappedComponent: React.ComponentType<FlexSvgProps>,
): React.ComponentType<FlexSvgPropsOptional> =>
  reflexComponent<FlexSvgPropsOptional>({
    name: 'WithDefaultSvgIconProps',
    wrapped: WrappedComponent,
  })(props => (
    <PaletteThemeContext.Consumer>
      {paletteTheme => (
        <ColorThemeContext.Consumer>
          {colorTheme => (
            <ComponentsThemeContext.Consumer>
              {componentsTheme => (
                <InteractionStateContext.Consumer>
                  {interactionState => {
                    const propsWithDefaults: FlexSvgProps = {
                      colorTheme: colorTheme || ColorTheme.SecondaryNormal,
                      interactionState,
                      paletteTheme,
                      size: Size.M,
                      theme: componentsTheme.svg.svgIcon,
                      ...props,
                    };

                    return <WrappedComponent {...propsWithDefaults} />;
                  }}
                </InteractionStateContext.Consumer>
              )}
            </ComponentsThemeContext.Consumer>
          )}
        </ColorThemeContext.Consumer>
      )}
    </PaletteThemeContext.Consumer>
  ));
