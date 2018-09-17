import * as Color from 'color';
import merge from 'lodash/merge';
import * as React from 'react';
import {
  Platform,
  RegisteredStyle,
  // StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { InteractivityState } from '../../interactivity/InteractivityState';
// prettier-ignore
import {
  ThemedVisualButtonProps,
} from '../../widgets/buttons/label-button/StyledLabelButton';
import { FontWeight } from '../FontWeight';
import { getFontWeight } from '../getFontWeight';
import { getThemedColor } from './getThemedColor';
import { withRaiseEffect } from './withRaiseEffect';
import { withRippleEffect } from './withRippleEffect';

interface PaletteColor {
  readonly color: string;
  readonly onColor: string;
}

interface PaletteColorVariant {
  readonly dark: PaletteColor;
  readonly light: PaletteColor;
  readonly normal: PaletteColor;
}

interface ThemePalette {
  readonly background: PaletteColor;
  readonly error: PaletteColor;
  readonly primary: PaletteColorVariant;
  readonly secondary: PaletteColorVariant;
  readonly surface: PaletteColor;
}

interface TypographyComponents {
  readonly caption: TextStyle;
  readonly headline1: TextStyle;
  readonly headline2: TextStyle;
  readonly headline3: TextStyle;
  readonly headline4: TextStyle;
  readonly headline5: TextStyle;
  readonly headline6: TextStyle;
  readonly overline: TextStyle;
  readonly paragraph1: TextStyle;
  readonly paragraph2: TextStyle;
  readonly subtitle1: TextStyle;
  readonly subtitle2: TextStyle;
}

type ViewStyleGetter<P> = (props: P) => ViewStyle;

type RegisteredViewStyleGetter<P> = (
  props: P,
) => { view: RegisteredStyle<ViewStyle> };

interface ViewStyleObj {
  view: ViewStyle;
}

type TextStyleGetter<P> = (props: P) => TextStyle;

interface TextStyleObj {
  text: TextStyle;
}

type RegisteredTextStyleGetter<P> = (
  props: P,
) => { text: RegisteredStyle<TextStyle> };

export type ButtonViewProps = ThemedVisualButtonProps & ViewProps;

export type ButtonTextProps = ThemedVisualButtonProps & TextProps;

export type ButtonView = React.ComponentType<ButtonViewProps>;

export type Touchable<
  T extends TouchableWithoutFeedbackProps
> = React.ComponentType<T>;

export type ButtonText = React.ComponentType<ButtonTextProps>;

/* BEGIN OPTIONAL BUTTON STUFF */

interface OptionalViewTheme<P> {
  readonly getDynamicCustomStyle?: ViewStyleGetter<P>;
  readonly getDynamicStyle?: ViewStyleGetter<P>;
  readonly style?: ViewStyle;
}

interface OptionalTextTheme<P> {
  readonly getDynamicCustomStyle?: TextStyleGetter<P>;
  readonly getDynamicStyle?: TextStyleGetter<P>;
  readonly style?: TextStyle;
}

interface OptionalButtonTheme {
  readonly view?: OptionalViewTheme<ThemedVisualButtonProps>;
  readonly text?: OptionalTextTheme<ThemedVisualButtonProps>;
}

interface OptionalButtonStateTheme {
  readonly allStates?: OptionalButtonTheme;
  readonly disabled?: OptionalButtonTheme;
  readonly enabled?: OptionalButtonTheme;
  readonly focused?: OptionalButtonTheme;
  readonly hovered?: OptionalButtonTheme;
  readonly pressed?: OptionalButtonTheme;
}

interface OptionalSizedButtonTheme {
  readonly allSizes?: OptionalButtonStateTheme;
  readonly large?: OptionalButtonStateTheme;
  readonly regular?: OptionalButtonStateTheme;
  readonly small?: OptionalButtonStateTheme;
  readonly Text?: ButtonText;
  readonly Touchable?: Touchable<TouchableWithoutFeedbackProps>;
  readonly View?: ButtonView;
  readonly xlarge?: OptionalButtonStateTheme;
  readonly xsmall?: OptionalButtonStateTheme;
}

interface OptionalButtonVariantTheme {
  readonly allVariants?: OptionalSizedButtonTheme;
  readonly contained?: OptionalSizedButtonTheme;
  readonly containedRaised?: OptionalSizedButtonTheme;
  readonly default?: OptionalSizedButtonTheme;
  readonly outlined?: OptionalSizedButtonTheme;
}

/* END OPTIONAL BUTTON STUFF */

export interface ViewTheme<P> {
  readonly getDynamicCustomStyle: ViewStyleGetter<P>;
  readonly getDynamicStyle: ViewStyleGetter<P>;
  readonly style: ViewStyle;
}

export interface TextTheme<P> {
  readonly getDynamicCustomStyle: TextStyleGetter<P>;
  readonly getDynamicStyle: TextStyleGetter<P>;
  readonly style: TextStyle;
}

interface ButtonTheme {
  readonly text: TextTheme<ThemedVisualButtonProps>;
  readonly view: ViewTheme<ThemedVisualButtonProps>;
}

interface ButtonStateTheme {
  readonly allStates: ButtonTheme;
  readonly disabled: ButtonTheme;
  readonly enabled: ButtonTheme;
  readonly focused: ButtonTheme;
  readonly hovered: ButtonTheme;
  readonly pressed: ButtonTheme;
}

interface SizedButtonTheme {
  readonly allSizes: ButtonStateTheme;
  readonly large: ButtonStateTheme;
  readonly regular: ButtonStateTheme;
  readonly small: ButtonStateTheme;
  readonly Text: ButtonText;
  readonly Touchable: Touchable<TouchableWithoutFeedbackProps>;
  readonly View: ButtonView;
  readonly xlarge: ButtonStateTheme;
  readonly xsmall: ButtonStateTheme;
}

interface ButtonVariantTheme {
  readonly allVariants: SizedButtonTheme;
  readonly contained: SizedButtonTheme;
  readonly containedRaised: SizedButtonTheme;
  readonly default: SizedButtonTheme;
  readonly outlined: SizedButtonTheme;
}

interface ThemeComponents {
  readonly button: ButtonVariantTheme;
  readonly typography: TypographyComponents;
}

export interface Theme {
  readonly components: ThemeComponents;
  readonly palette: ThemePalette;
}

/*
interface IThemeCollection {
  readonly [name: string]: Theme;
}
*/

type FontFamilyGetter = () => string;

const getFontFamily: FontFamilyGetter = (): string => 'System';

const getButtonViewStyle: ViewStyleGetter<ThemedVisualButtonProps> = ({
  fullWidth,
}) => ({
  flexDirection: fullWidth ? 'column' : 'row',
  flexGrow: fullWidth ? 1 : undefined,
});

const getOutlinedContainerCommonStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = ({ colorVariant, theme }): ViewStyle => ({
  borderColor: getThemedColor({ colorVariant, theme }),
});

const getDisabledContainedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = ({ colorVariant, theme }) => ({
  backgroundColor: getThemedColor({ colorVariant, theme }),
});

const getEnabledContainedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = ({ colorVariant, theme }) => ({
  backgroundColor: getThemedColor({ colorVariant, theme }),
});

const getFocusedContainedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = ({ colorVariant, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .lighten(0.35)
    .toString(),
});

const getHoveredContainedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = ({ colorVariant, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .lighten(0.12)
    .toString(),
});
/*
const getPressedContainedContainerStyle: ViewStyleGetter = ({
  colorVariant,
  theme,
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .lighten(0.6)
    .toString(),
});
*/

// tslint:disable-next-line:max-line-length
const getPressedContainedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getHoveredContainedContainerStyle(props),
});

// tslint:disable-next-line:max-line-length
const getDisabledContainedRaisedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getDisabledContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

// tslint:disable-next-line:max-line-length
const getEnabledContainedRaisedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getEnabledContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

// tslint:disable-next-line:max-line-length
const getFocusedContainedRaisedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getFocusedContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

// tslint:disable-next-line:max-line-length
const getHoveredContainedRaisedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getHoveredContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

// tslint:disable-next-line:max-line-length
const getPressedContainedRaisedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getPressedContainedContainerStyle(props),
  // ...getContainerElevationStyle(props),
});

const getDisabledDefaultContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

const getEnabledDefaultContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

const getFocusedDefaultContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = ({ colorVariant, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .fade(0.89)
    .toString(),
});

const getHoveredDefaultContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = ({ colorVariant, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .fade(0.94)
    .toString(),
});

const getPressedDefaultContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = ({ colorVariant, theme }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorVariant, theme }))
    .fade(0.81)
    .toString(),
});

const getDisabledOutlinedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = (props: ThemedVisualButtonProps) => ({
  ...getDisabledDefaultContainerStyle(props),
});

const getEnabledOutlinedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = (props: ThemedVisualButtonProps) => ({
  ...getEnabledDefaultContainerStyle(props),
});

const getFocusedOutlinedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getFocusedDefaultContainerStyle(props),
});

const getHoveredOutlinedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getHoveredDefaultContainerStyle(props),
});

const getPressedOutlinedContainerStyle: ViewStyleGetter<
  ThemedVisualButtonProps
> = props => ({
  ...getPressedDefaultContainerStyle(props),
});

const getContainedLabelStyle: TextStyleGetter<ThemedVisualButtonProps> = ({
  colorVariant,
  theme,
}) => ({
  color: getThemedColor({ colorVariant, theme, onColor: true }),
});

const getContainedRaisedLabelStyle: TextStyleGetter<ThemedVisualButtonProps> = (
  props: ThemedVisualButtonProps,
) => ({
  ...getContainedLabelStyle(props),
});

const getDefaultLabelStyle: TextStyleGetter<ThemedVisualButtonProps> = ({
  colorVariant,
  theme,
}) => ({
  color: getThemedColor({ colorVariant, theme, onColor: false }),
});

const getOutlinedLabelStyle: TextStyleGetter<ThemedVisualButtonProps> = (
  props: ThemedVisualButtonProps,
) => ({
  ...getDefaultLabelStyle(props),
});

type TextStyleFromThemeGetter<TextThemeProps> = (
  textTheme: TextTheme<TextThemeProps>,
  props: TextThemeProps,
) => TextStyle;

const getTextButtonStyleFromTheme: TextStyleFromThemeGetter<
  ThemedVisualButtonProps
> = (textTheme, props): TextStyle => ({
  ...textTheme.style,
  ...textTheme.getDynamicStyle(props),
  ...textTheme.getDynamicCustomStyle(props),
});

export const getTextStyle: TextStyleGetter<ThemedVisualButtonProps> = (
  props: ThemedVisualButtonProps,
): TextStyle => {
  // tslint:disable-next-line:no-shadowed-variable
  const buttonTheme = props.theme.components.button;
  const state: InteractivityState = props.interactivityState;

  return {
    /* allVariants && allSizes && allStates */
    ...getTextButtonStyleFromTheme(
      buttonTheme.allVariants.allSizes.allStates.text,
      props,
    ),
    /* allVariants && allSizes && state */
    ...getTextButtonStyleFromTheme(
      buttonTheme.allVariants.allSizes[state].text,
      props,
    ),
    /* allVariants && size && allStates */
    ...getTextButtonStyleFromTheme(
      buttonTheme.allVariants[props.size].allStates.text,
      props,
    ),
    /* allVariants && size && state */
    ...getTextButtonStyleFromTheme(
      buttonTheme.allVariants[props.size][state].text,
      props,
    ),
    /* variant && allSizes && allStates */
    ...getTextButtonStyleFromTheme(
      buttonTheme[props.variant].allSizes.allStates.text,
      props,
    ),
    /* variant && allSizes && state */
    ...getTextButtonStyleFromTheme(
      buttonTheme[props.variant].allSizes[state].text,
      props,
    ),
    /* variant && size && allStates */
    ...getTextButtonStyleFromTheme(
      buttonTheme[props.variant][props.size].allStates.text,
      props,
    ),
    /* variant && size && state */
    ...getTextButtonStyleFromTheme(
      buttonTheme[props.variant][props.size][state].text,
      props,
    ),
  };
};

export const getRegisteredTextStyle: RegisteredTextStyleGetter<
  ThemedVisualButtonProps
> = props =>
  StyleSheet.create<TextStyleObj>({
    text: getTextStyle(props),
  });

type ViewStyleFromThemeGetter<ViewThemeProps> = (
  viewTheme: ViewTheme<ViewThemeProps>,
  props: ViewThemeProps,
) => ViewStyle;

const getViewStyleFromTheme: ViewStyleFromThemeGetter<
  ThemedVisualButtonProps
> = (viewTheme, props): ViewStyle => ({
  ...viewTheme.style,
  ...viewTheme.getDynamicStyle(props),
  ...viewTheme.getDynamicCustomStyle(props),
});

export const getViewStyle: ViewStyleGetter<ThemedVisualButtonProps> = (
  props: ThemedVisualButtonProps,
): ViewStyle => {
  // tslint:disable-next-line:no-shadowed-variable
  const buttonTheme = props.theme.components.button;
  const state: InteractivityState = props.interactivityState;

  return {
    /* allVariants && allSizes && allStates */
    ...getViewStyleFromTheme(
      buttonTheme.allVariants.allSizes.allStates.view,
      props,
    ),
    /* allVariants && allSizes && state */
    ...getViewStyleFromTheme(
      buttonTheme.allVariants.allSizes[state].view,
      props,
    ),
    /* allVariants && size && allStates */
    ...getViewStyleFromTheme(
      buttonTheme.allVariants[props.size].allStates.view,
      props,
    ),
    /* allVariants && size && state */
    ...getViewStyleFromTheme(
      buttonTheme.allVariants[props.size][state].view,
      props,
    ),
    /* variant && allSizes && allStates */
    ...getViewStyleFromTheme(
      buttonTheme[props.variant].allSizes.allStates.view,
      props,
    ),
    /* variant && allSizes && state */
    ...getViewStyleFromTheme(
      buttonTheme[props.variant].allSizes[state].view,
      props,
    ),
    /* variant && size && allStates */
    ...getViewStyleFromTheme(
      buttonTheme[props.variant][props.size].allStates.view,
      props,
    ),
    /* variant && size && state */
    ...getViewStyleFromTheme(
      buttonTheme[props.variant][props.size][state].view,
      props,
    ),
  };
};

export const getRegisteredViewStyle: RegisteredViewStyleGetter<
  ThemedVisualButtonProps
> = props =>
  StyleSheet.create<ViewStyleObj>({
    view: getViewStyle(props),
  });

const DefaultInnerContainer: ButtonView = ({
  children,
  colorVariant,
  customStyle,
  fullWidth,
  interactivityState,
  leftIcon,
  rightIcon,
  size,
  theme,
  variant,
  /*
   * This is necessary to fix this issue with TouchableWithoutFeedback:
   * https://github.com/facebook/react-native/issues/1352
   * It's still an issue. Ref:
   * https://github.com/facebook/react-native/issues/10180
   */
  ...buttonProps
}: /**/
ThemedVisualButtonProps) => (
  <View {...buttonProps} pointerEvents="box-only">
    {children}
  </View>
);

const DefaultButton: Touchable<
  TouchableWithoutFeedbackProps
> = TouchableWithoutFeedback;

const DefaultText: ButtonText = (props: ButtonTextProps) => (
  <Text style={props.style}>{props.children}</Text>
);

const emptyButtonTheme: ButtonTheme = {
  text: {
    getDynamicCustomStyle: () => ({}),
    getDynamicStyle: () => ({}),
    style: {},
  },
  view: {
    getDynamicCustomStyle: () => ({}),
    getDynamicStyle: () => ({}),
    style: {},
  },
};

const emptyButtonStateTheme: ButtonStateTheme = {
  allStates: emptyButtonTheme,
  disabled: emptyButtonTheme,
  enabled: emptyButtonTheme,
  focused: emptyButtonTheme,
  hovered: emptyButtonTheme,
  pressed: emptyButtonTheme,
};

const emptySizedButtonTheme: SizedButtonTheme = {
  Text: DefaultText,
  Touchable: DefaultButton,
  View: DefaultInnerContainer,
  allSizes: emptyButtonStateTheme,
  large: emptyButtonStateTheme,
  regular: emptyButtonStateTheme,
  small: emptyButtonStateTheme,
  xlarge: emptyButtonStateTheme,
  xsmall: emptyButtonStateTheme,
};

const emptyButtonVariantTheme: ButtonVariantTheme = {
  allVariants: emptySizedButtonTheme,
  contained: emptySizedButtonTheme,
  containedRaised: emptySizedButtonTheme,
  default: emptySizedButtonTheme,
  outlined: emptySizedButtonTheme,
};

const typographyComponentsTheme: TypographyComponents = {
  caption: {
    fontFamily: getFontFamily(),
    fontSize: 12,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.4,
  },
  headline1: {
    fontFamily: getFontFamily(),
    fontSize: 96,
    fontWeight: getFontWeight(FontWeight.LIGHT),
    letterSpacing: -1.5,
  },
  headline2: {
    fontFamily: getFontFamily(),
    fontSize: 60,
    fontWeight: getFontWeight(FontWeight.LIGHT),
    letterSpacing: -0.5,
  },
  headline3: {
    fontFamily: getFontFamily(),
    fontSize: 48,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0,
  },
  headline4: {
    fontFamily: getFontFamily(),
    fontSize: 34,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.25,
  },
  headline5: {
    fontFamily: getFontFamily(),
    fontSize: 24,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0,
  },
  headline6: {
    fontFamily: getFontFamily(),
    fontSize: 20,
    fontWeight: getFontWeight(FontWeight.MEDIUM),
    letterSpacing: 0.15,
  },
  overline: {
    fontFamily: getFontFamily(),
    fontSize: 10,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  paragraph1: {
    fontFamily: getFontFamily(),
    fontSize: 16,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.5,
  },
  paragraph2: {
    fontFamily: getFontFamily(),
    fontSize: 14,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.25,
  },
  subtitle1: {
    fontFamily: getFontFamily(),
    fontSize: 16,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: getFontFamily(),
    fontSize: 14,
    fontWeight: getFontWeight(FontWeight.MEDIUM),
    letterSpacing: 0.1,
  },
};

const themePalette: ThemePalette = {
  background: {
    color: '#ffffff',
    onColor: '#000000',
  },
  error: {
    color: '#b00020',
    onColor: '#ffffff',
  },
  primary: {
    dark: {
      color: '#0400ba',
      onColor: '#ffffff',
    },
    light: {
      color: '#9e47ff',
      onColor: '#ffffff',
    },
    normal: {
      color: '#6200ee',
      // color: 'rgb(98,0,238)',
      onColor: '#ffffff',
    },
  },
  secondary: {
    dark: {
      color: '#00a895',
      onColor: '#000000',
    },
    light: {
      color: '#66fff8',
      onColor: '#000000',
    },
    normal: {
      color: '#03dac5',
      onColor: '#000000',
    },
  },
  surface: {
    color: '#ffffff',
    onColor: '#000000',
  },
};

const buttonTheme: OptionalButtonVariantTheme = {
  allVariants: {
    allSizes: {
      allStates: {
        text: {
          style: {
            fontFamily: getFontFamily(),
            fontWeight: getFontWeight(FontWeight.MEDIUM),
            position: 'relative',
            textTransform: 'uppercase',
            ...Platform.select({
              web: {
                MozOsxFontSmoothing: 'grayscale',
                WebkitFontSmoothing: 'antialiased',
                userSelect: 'none',
              },
            }),
          },
        },
        view: {
          getDynamicStyle: getButtonViewStyle,
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            ...Platform.select({
              web: {
                cursor: 'pointer',
                outline: 'none',
              },
            }),
          },
        },
      },
      disabled: {
        view: {
          style: {
            ...Platform.select({
              web: {
                cursor: 'not-allowed',
              },
            }),
          },
        },
      },
    },
    large: {
      allStates: {
        text: {
          style: {
            fontSize: 15,
            letterSpacing: 1,
          },
        },
        view: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
    regular: {
      allStates: {
        text: {
          style: {
            fontSize: 14,
            letterSpacing: 0.75,
          },
        },
        view: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
    small: {
      allStates: {
        text: {
          style: {
            fontSize: 13,
            letterSpacing: 0.5,
          },
        },
        view: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        text: {
          style: {
            fontSize: 16,
            letterSpacing: 1.25,
          },
        },
        view: {
          style: {
            borderRadius: 4,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        text: {
          style: {
            fontSize: 12,
            letterSpacing: 0.25,
          },
        },
        view: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
  },
  contained: {
    View: withRippleEffect(DefaultInnerContainer),
    allSizes: {
      allStates: {
        text: {
          getDynamicStyle: getContainedLabelStyle,
        },
      },
      disabled: {
        view: {
          getDynamicStyle: getDisabledContainedContainerStyle,
        },
      },
      enabled: {
        view: {
          getDynamicStyle: getEnabledContainedContainerStyle,
        },
      },
      focused: {
        view: {
          getDynamicStyle: getFocusedContainedContainerStyle,
        },
      },
      hovered: {
        view: {
          getDynamicStyle: getHoveredContainedContainerStyle,
        },
      },
      pressed: {
        view: {
          getDynamicStyle: getPressedContainedContainerStyle,
        },
      },
    },
    large: {
      allStates: {
        view: {
          style: {
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 72,
            paddingHorizontal: 20,
          },
        },
      },
    },
    regular: {
      allStates: {
        view: {
          style: {
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    small: {
      allStates: {
        view: {
          style: {
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        view: {
          style: {
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 82,
            paddingHorizontal: 28,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        view: {
          style: {
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 8,
          },
        },
      },
    },
  },
  containedRaised: {
    View: withRippleEffect(withRaiseEffect(DefaultInnerContainer)),
    allSizes: {
      allStates: {
        text: {
          getDynamicStyle: getContainedRaisedLabelStyle,
        },
      },
      disabled: {
        view: {
          getDynamicStyle: getDisabledContainedRaisedContainerStyle,
        },
      },
      enabled: {
        view: {
          getDynamicStyle: getEnabledContainedRaisedContainerStyle,
        },
      },
      focused: {
        view: {
          getDynamicStyle: getFocusedContainedRaisedContainerStyle,
        },
      },
      hovered: {
        view: {
          getDynamicStyle: getHoveredContainedRaisedContainerStyle,
        },
      },
      pressed: {
        view: {
          getDynamicStyle: getPressedContainedRaisedContainerStyle,
        },
      },
    },
    large: {
      allStates: {
        view: {
          style: {
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 72,
            paddingHorizontal: 20,
          },
        },
      },
    },
    regular: {
      allStates: {
        view: {
          style: {
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    small: {
      allStates: {
        view: {
          style: {
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        view: {
          style: {
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 82,
            paddingHorizontal: 28,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        view: {
          style: {
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 8,
          },
        },
      },
    },
  },
  default: {
    allSizes: {
      allStates: {
        text: {
          getDynamicStyle: getDefaultLabelStyle,
        },
      },
      disabled: {
        view: {
          getDynamicStyle: getDisabledDefaultContainerStyle,
        },
      },
      enabled: {
        view: {
          getDynamicStyle: getEnabledDefaultContainerStyle,
        },
      },
      focused: {
        view: {
          getDynamicStyle: getFocusedDefaultContainerStyle,
        },
      },
      hovered: {
        view: {
          getDynamicStyle: getHoveredDefaultContainerStyle,
        },
      },
      pressed: {
        view: {
          getDynamicStyle: getPressedDefaultContainerStyle,
        },
      },
    },
    large: {
      allStates: {
        view: {
          style: {
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 8,
          },
        },
      },
    },
    regular: {
      allStates: {
        view: {
          style: {
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 8,
          },
        },
      },
    },
    small: {
      allStates: {
        view: {
          style: {
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 8,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        view: {
          style: {
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 70,
            paddingHorizontal: 12,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        view: {
          style: {
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 4,
          },
        },
      },
    },
  },
  outlined: {
    allSizes: {
      allStates: {
        text: {
          getDynamicStyle: getOutlinedLabelStyle,
        },
        view: {
          getDynamicStyle: getOutlinedContainerCommonStyle,
        },
      },
      disabled: {
        view: {
          getDynamicStyle: getDisabledOutlinedContainerStyle,
        },
      },
      enabled: {
        view: {
          getDynamicStyle: getEnabledOutlinedContainerStyle,
        },
      },
      focused: {
        view: {
          getDynamicStyle: getFocusedOutlinedContainerStyle,
        },
      },
      hovered: {
        view: {
          getDynamicStyle: getHoveredOutlinedContainerStyle,
        },
      },
      pressed: {
        view: {
          getDynamicStyle: getPressedOutlinedContainerStyle,
        },
      },
    },
    large: {
      allStates: {
        view: {
          style: {
            borderWidth: 2,
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 72,
            paddingHorizontal: 20,
          },
        },
      },
    },
    regular: {
      allStates: {
        view: {
          style: {
            borderWidth: 2,
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 14,
          },
        },
      },
    },
    small: {
      allStates: {
        view: {
          style: {
            borderWidth: 2,
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 14,
          },
        },
      },
    },
    xlarge: {
      allStates: {
        view: {
          style: {
            borderWidth: 3,
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 82,
            paddingHorizontal: 24,
          },
        },
      },
    },
    xsmall: {
      allStates: {
        view: {
          style: {
            borderWidth: 1,
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 6,
          },
        },
      },
    },
  },
};

const mergedButtonTheme: ButtonVariantTheme = merge<
  {},
  ButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, emptyButtonVariantTheme, buttonTheme);

export const PurpleTealTheme: Theme = {
  components: {
    button: mergedButtonTheme,
    typography: typographyComponentsTheme,
  },
  palette: themePalette,
};
