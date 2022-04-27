import {
  computed,  inject,  getCurrentInstance, ComponentInternalInstance, ComputedRef, watch, reactive, isVue2
} from 'vue-demi';
const camelize = require('camelize');
import {
  Data, get, parseVariantWithClassesList
} from '@variantjs/core';
import { VariantJSConfiguration } from '../types/index';

export const extractDefinedProps = (vm: ComponentInternalInstance): string[] => {
  const validProps = Object.keys(vm.props);
  const propsKeys = isVue2 ? Object.keys(vm.vnode.componentOptions?.propsData || {}): Object.keys(vm?.vnode?.props || {});
  const definedProps = propsKeys
    .map((propName) => camelize(propName))
    .filter((propName) => validProps.includes(propName) && propName !== 'modelValue');
  return definedProps;
};

export function useConfigurationParts<ComponentOptions extends Data>(): {
  componentGlobalConfiguration?: ComponentOptions
  propsValues: ComputedRef<Data>
} {
  const vm = getCurrentInstance()!;

  const variantGlobalConfiguration = inject<VariantJSConfiguration>('theme', {});

  const componentGlobalConfiguration = get<VariantJSConfiguration, ComponentOptions>(variantGlobalConfiguration, vm?.type.name as keyof VariantJSConfiguration, {});
  const propsValues = computed(() => {
    const values: Data = {};
    console.log(vm.props);
    extractDefinedProps(vm).forEach((attributeName) => {
      const normalizedAttribute = camelize(attributeName);
      values[normalizedAttribute] = vm.props[normalizedAttribute];
    });
    console.log('values')
    console.log(values)
    return values;
  });
  return {
    componentGlobalConfiguration,
    propsValues: propsValues as ComputedRef<Data>,
  };
}

