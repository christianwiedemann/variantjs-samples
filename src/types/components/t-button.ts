import { WithVariantPropsAndClassesList, Data } from '@variantjs/core';

export declare const TButtonConfig: {
  classes: {
    default: string;
    size: string;
    color: string;
  };
};

export type TButtonClassesValidKeys = keyof typeof TButtonConfig.classes;

export type TButtonOptions = WithVariantPropsAndClassesList<{
}  & Data, TButtonClassesValidKeys>;
