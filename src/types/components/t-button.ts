import { WithVariantPropsAndClassesList, Data } from '@variantjs/core';

export declare const TButtonConfig: {
  size: string;
  color: string;
  classes: {
    default: string;
    size: string;
    color: string;
  };
};

export type TButtonClassesValidKeys = keyof typeof TButtonConfig.classes;

export type TButtonOptions = WithVariantPropsAndClassesList<{
  color:string
}  & Data, TButtonClassesValidKeys>;
