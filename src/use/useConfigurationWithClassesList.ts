import {
  computed, getCurrentInstance, reactive, watch,
} from 'vue-demi';
import { WithVariantProps, Data, parseVariantWithClassesList } from '@variantjs/core';
import { useConfigurationParts } from './useConfiguration';

export default function useConfigurationWithClassesList<ComponentOptions extends WithVariantProps<Data>>(defaultConfiguration: WithVariantProps<Data>, classesListKeys: string[]): {
  configuration: ComponentOptions,
} {
  const vm = getCurrentInstance()!;
  const { propsValues, componentGlobalConfiguration } = useConfigurationParts<ComponentOptions>();
  parseVariantWithClassesList(
    propsValues.value,
    classesListKeys,
    componentGlobalConfiguration,
    defaultConfiguration,
  );
  const computedConfiguration = computed(() => ({
    ...vm.props,
    ...parseVariantWithClassesList(
      propsValues.value,
      classesListKeys,
      componentGlobalConfiguration,
      defaultConfiguration,
    ),
  }));

  const configuration = reactive(computedConfiguration.value);
  const variant = propsValues.value.variant;
  // @ts-ignore
  const { preset, variants } = componentGlobalConfiguration;
  const mergedPreset = {...preset};
  if (variants && variants[variant]) {
    const variantPreset = variants[variant];
    if (variantPreset.preset) {
      Object.keys(variantPreset.preset).forEach((key)=>{
        mergedPreset[key] = variantPreset.preset[key];
      })
    }
  }
  Object.keys(propsValues.value).forEach((key)=>{
    if (mergedPreset[key] && mergedPreset[key][propsValues.value[key]]) {
      // @ts-ignore
     configuration.classesList[key] = mergedPreset[key][propsValues.value[key]];
    }
  });
  watch(computedConfiguration, (newValue) => {
    console.log('WATCH')
    // @ts-ignore
    if (newValue.classesList) {
      // @ts-ignore
      configuration.classesList = newValue.classesList;
    }
    // @ts-ignore
    Object.keys(newValue).forEach((key) => {

      // @ts-ignore
      if (mergedPreset[key] && mergedPreset[key][newValue[key]]) {
        // @ts-ignore
        configuration.classesList[key] = mergedPreset[key][newValue[key]];
      } else if (key !== 'classesList') {
        // @ts-ignore
        configuration[key] = newValue[key];
      }
    });
  });

  return {
    configuration: configuration as ComponentOptions,
  };
}
