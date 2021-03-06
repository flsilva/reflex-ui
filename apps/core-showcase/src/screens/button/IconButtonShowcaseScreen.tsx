/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  ButtonPropsOptional,
  ButtonSubProps,
  ButtonSubPropsGetter,
  ButtonVariant,
  ColorTheme,
  InteractionType,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  getOverlayColorByInteraction,
} from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { IconButtonCollection } from './IconButtonCollection';

const getButtonProps: ButtonSubPropsGetter = ({
  interactionState: { type: interactionType },
}): ButtonSubProps => {
  const backgroundColor = getOverlayColorByInteraction({
    color: '#c70ad0',
    type: interactionType,
  });

  const iconColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#c70ad0';

  return {
    container: {
      style: { backgroundColor },
    },
    icon: { fill: iconColor },
  };
};

const ScaleButton: React.SFC<ButtonPropsOptional> = (props): JSX.Element => (
  <Button {...props}>
    <FavoriteIcon />
  </Button>
);

const IconButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={IconButtonCollection}
    customCollections={[
      {
        colorTheme: ColorTheme.PrimaryNormal,
        getSubProps: getButtonProps,
        surfaceColorTheme: ColorTheme.SurfaceNormal,
        title: 'custom',
        variant: ButtonVariant.Icon,
      },
    ]}
    scaleButtons={[ScaleButton]}
    title="Button: Icon"
    variant={ButtonVariant.Icon}
  />
);

IconButtonShowcaseScreen.displayName = 'IconButtonShowcaseScreen';

export { IconButtonShowcaseScreen };
