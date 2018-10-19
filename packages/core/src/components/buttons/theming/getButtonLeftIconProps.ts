import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { InteractivityType } from '../../../interactivity';
import { createRegisteredTextStyle, TextPropsGetter } from '../../typography';
import { SpecialButtonProps } from '../SpecialButtonProps';

export const getButtonLeftIconProps: TextPropsGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
): TextProps => {
  // tslint:disable-next-line:no-shadowed-variable
  const buttonTheme = props.theme.components.button;
  const interactivityType: InteractivityType = props.interactivityState
    ? props.interactivityState.type
    : InteractivityType.ENABLED;

  const { size, variant } = props;
  const userProps = props.getTextProps ? props.getTextProps(props) : {};

  const textProps = merge(
    {},
    /* allVariants && allSizes && allStates */
    buttonTheme.allVariants.allSizes.allStates.leftIcon.props,
    buttonTheme.allVariants.allSizes.allStates.leftIcon.getProps(props),
    /* allVariants && allSizes && state */
    buttonTheme.allVariants.allSizes[interactivityType].leftIcon.props,
    buttonTheme.allVariants.allSizes[interactivityType].leftIcon.getProps(
      props,
    ),
    /* allVariants && size && allStates */
    buttonTheme.allVariants[size].allStates.leftIcon.props,
    buttonTheme.allVariants[size].allStates.leftIcon.getProps(props),
    /* allVariants && size && state */
    buttonTheme.allVariants[size][interactivityType].leftIcon.props,
    buttonTheme.allVariants[size][interactivityType].leftIcon.getProps(props),
    /* variant && allSizes && allStates */
    buttonTheme[variant].allSizes.allStates.leftIcon.props,
    buttonTheme[variant].allSizes.allStates.leftIcon.getProps(props),
    /* variant && allSizes && state */
    buttonTheme[variant].allSizes[interactivityType].leftIcon.props,
    buttonTheme[variant].allSizes[interactivityType].leftIcon.getProps(props),
    /* variant && size && allStates */
    buttonTheme[variant][size].allStates.leftIcon.props,
    buttonTheme[variant][size].allStates.leftIcon.getProps(props),
    /* variant && size && state */
    buttonTheme[variant][size][interactivityType].leftIcon.props,
    buttonTheme[variant][size][interactivityType].leftIcon.getProps(props),
    /* user props */
    userProps,
  );

  const textStyle: TextStyle = textProps.style as TextStyle;
  textProps.style = createRegisteredTextStyle(textStyle || {}).style;

  return textProps;
};
