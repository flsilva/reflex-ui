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
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { SimpleText } from './SimpleText';
import { OptionalTypographyProps, TypographyProps } from './TypographyProps';

// prettier-ignore
export const Headline5 = reflexComponent<OptionalTypographyProps>({
  name: 'Headline5',
})((props: OptionalTypographyProps) => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ColorThemeContext.Consumer>
        {colorTheme => (
          <ComponentsThemeContext.Consumer>
            {(componentsTheme) => {
              const propsWithDefaults: TypographyProps = {
                colorTheme: props.colorTheme || colorTheme ||
                  ColorTheme.SurfaceNormal,
                paletteTheme,
                theme: componentsTheme.typography.headline5,
                ...props,
              };

              return <SimpleText {...propsWithDefaults} />;
            }}
          </ComponentsThemeContext.Consumer>
        )}
      </ColorThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
));