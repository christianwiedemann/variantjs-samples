import {
  CSSRawClassesList,
  CSSClass, Variants, VariantsWithClassesList, WithVariantProps, WithVariantPropsAndClassesList, Data,
} from '@variantjs/core';

import { ComponentPropsOptions, PropType } from 'vue-demi';

type VariantJSProps<ComponentOptions extends WithVariantProps<Data> = {
  classes?: CSSClass;
  fixedClasses?: CSSClass;
  variants?: Variants<Data>;
  variant?: string;
  class?: string;
}, PropsOptions extends Readonly<ComponentPropsOptions> = {
  classes: {
    type: PropType<CSSClass>;
    default: undefined;
  },
  fixedClasses: {
    type: PropType<CSSClass>;
    default: undefined;
  },
  variants: {
    type: PropType<Variants<ComponentOptions>>;
    default: undefined;
  },
  variant: {
    type:PropType<string | undefined>;
    default: undefined;
  },
}> = PropsOptions & {
  classes: {
    type: PropType<CSSClass>;
    default: undefined;
  },
  fixedClasses: {
    type: PropType<CSSClass>;
    default: undefined;
  },
  variants: {
    type: PropType<Variants<ComponentOptions>>;
    default: undefined;
  },
  variant: {
    type:PropType<string | undefined>;
    default: undefined;
  },
};

type VariantJSWithClassesListProps<
  ClassesKeys extends string,
  ComponentOptions extends WithVariantPropsAndClassesList<Data, ClassesKeys> = WithVariantPropsAndClassesList<Data, ClassesKeys>,
  PropsOptions extends Readonly<ComponentPropsOptions> = {
    classes: {
      type: PropType<CSSRawClassesList<ClassesKeys>>;
      default: undefined;
    },
    fixedClasses: {
      type: PropType<CSSRawClassesList<ClassesKeys>>;
      default: undefined;
    },
    variants: {
      type: PropType<VariantsWithClassesList<ComponentOptions, ClassesKeys>>;
      default: undefined;
    },
    variant: {
      type:PropType<string | undefined>;
      default: undefined;
    },
  }> = PropsOptions & {
    classes: {
      type: PropType<CSSRawClassesList<ClassesKeys>>;
      default: undefined;
    },
    fixedClasses: {
      type: PropType<CSSRawClassesList<ClassesKeys>>;
      default: undefined;
    },
    variants: {
      type: PropType<VariantsWithClassesList<ComponentOptions, ClassesKeys>>;
      default: undefined;
    },
    variant: {
      type:PropType<string | undefined>;
      default: undefined;
    },
  };

type VariantJSConfiguration = {
  [key: string]: any
};

export { VariantJSConfiguration, VariantJSProps, VariantJSWithClassesListProps };
