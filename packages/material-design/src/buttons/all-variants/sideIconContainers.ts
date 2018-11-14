import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalViewTheme,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
export const allVariantsStaticButtonLeadingIconContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          marginEnd: 10,
          marginStart: -6,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          marginEnd: 8,
          marginStart: -4,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          marginEnd: 7,
          marginStart: -3,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          marginEnd: 12,
          marginStart: -8,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          marginEnd: 6,
          marginStart: -2,
        },
      },
    },
  },
};

// tslint:disable-next-line:max-line-length
export const allVariantsStaticButtonTrailingIconContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          marginEnd: -6,
          marginStart: 10,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          marginEnd: -4,
          marginStart: 8,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          marginEnd: -3,
          marginStart: 7,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          marginEnd: -8,
          marginStart: 12,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          marginEnd: -2,
          marginStart: 6,
        },
      },
    },
  },
};
