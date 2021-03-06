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
  getInlayColorByInteraction,
} from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { LabelButtonCollection } from './LabelButtonCollection';

const getButtonProps: ButtonSubPropsGetter = ({
  interactionState: { type: interactionType },
}): ButtonSubProps => {
  const backgroundColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.color
      : // prettier-ignore
        getInlayColorByInteraction({
          color: '#c70ad0',
          type: interactionType,
        });

  const textColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#fff';

  return {
    container: {
      style: { backgroundColor },
    },
    leadingIcon: { fill: textColor },
    text: {
      style: { color: textColor },
    },
    trailingIcon: { fill: textColor },
  };
};

const ScaleButton1: React.SFC<ButtonPropsOptional> = (props): JSX.Element => (
  <Button {...props}>OK</Button>
);

const ScaleButton2: React.SFC<ButtonPropsOptional> = (props): JSX.Element => (
  <Button leadingIcon={<FavoriteIcon />} {...props}>
    Favorite
  </Button>
);

const HighlightedButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    customCollections={[
      {
        colorTheme: ColorTheme.PrimaryNormal,
        getSubProps: getButtonProps,
        surfaceColorTheme: ColorTheme.SurfaceNormal,
        title: 'custom',
        variant: ButtonVariant.Highlighted,
      },
    ]}
    scaleButtons={[ScaleButton1, ScaleButton2]}
    title="Button: Highlighted"
    variant={ButtonVariant.Highlighted}
  />
);

HighlightedButtonShowcaseScreen.displayName = 'HighlightedButtonShowcaseScreen';

export { HighlightedButtonShowcaseScreen };
