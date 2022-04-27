<template>
  <div
      :class="[configuration?.classesList.default, configuration?.classesList.size, configuration?.classesList.color]">
      <slot :configuration="configuration">
        {{ text }}
      </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue-demi';
const defaultConfig = {classes: {default: ''}};
import { TButtonClassesValidKeys, TButtonOptions } from '../../types/index';
import useConfigurationWithClassesList from '../../use/useConfigurationWithClassesList';
import { getVariantPropsWithClassesList } from '../../utils/getVariantProps';

export const TButtonClassesKeys = Object.keys(defaultConfig.classes);

export default defineComponent({
  name: 'TButton',
  compatConfig: {
    MODE: 3,
  },
  props: {
    text: {
      type: String,
      default: 'Button Text'
    },
    size: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: 'primary'
    },
    ...getVariantPropsWithClassesList<TButtonOptions, TButtonClassesValidKeys>(),
  },
  setup() {
    const { configuration } = useConfigurationWithClassesList<TButtonOptions>(defaultConfig, TButtonClassesKeys);
    return { configuration };
  },
});

</script>

