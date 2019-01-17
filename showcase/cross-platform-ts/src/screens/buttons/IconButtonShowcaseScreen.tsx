/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ButtonSubProps,
  ButtonSubPropsGetter,
  ButtonVariant,
  ColorTheme,
  InteractivityType,
  Row,
  Surface,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  getOverlayColorByInteractivity,
} from '@reflex-ui/material-design';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { IconButtonCollection } from './IconButtonCollection';

const getButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: {
      backgroundColor: getOverlayColorByInteractivity({
        color: '#c70ad0',
        type: props.interactivityState.type,
      }),
    },
  },
  icon: {
    style: {
      color:
        props.interactivityState.type === InteractivityType.DISABLED
          ? disabledGrey300_500.normal.onColor
          : '#c70ad0',
    },
  },
});

const IconButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={IconButtonCollection}
    title="Button: Icon"
    variant={ButtonVariant.ICON}
  >
    <Row>
      <Surface>
        <IconButtonCollection
          colorTheme={ColorTheme.PRIMARY_NORMAL}
          getSubProps={getButtonProps}
          title="Custom color"
          variant={ButtonVariant.ICON}
        />
      </Surface>
    </Row>
  </ButtonShowcaseScreen>
);

IconButtonShowcaseScreen.displayName = 'IconButtonShowcaseScreen';

export { IconButtonShowcaseScreen };