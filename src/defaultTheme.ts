import {VariantJSConfiguration} from "./types";

export const theme: VariantJSConfiguration = {
  'TButton': {
    preset: {
      size: {
        large: 'p-20',
        default: 'p-10'
      },
      color: {
        primary: 'bg-blue-500',
        secondary: 'bg-yellow-500'
      },
    },
    variants: {
      outline: {
        preset: {
          color: {
            primary: 'border-blue-500',
            secondary: 'border-yellow-500'
          },
        },
        classes: {
          default: 'border border-solid'
        }
      }
    },
    fixedClasses: {
      default: 'btn'
    },
  }
}
