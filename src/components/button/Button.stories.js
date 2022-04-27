import Button from "./Button.vue";
import {theme} from '../../defaultTheme';

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    size: {
      options: ['default', 'large'],
      control: {type: 'radio'},
    },
    color: {
      options: ['primary', 'secondary'],
      control: {type: 'radio'},
    },
  },
};

export const Default = (args, {argTypes}) => ({
  components: { Button },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `<Button  :size="size" :color="color" :text="text" v-bind="args"></Button>`,
  provide() {
    return {theme}
  }
});
export const Outline = (args, {argTypes}) => ({
  components: { Button },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `<Button variant="outline" :size="size" :color="color" :text="text" v-bind="args" ></Button>`,
  provide() {
    return {theme}
  }
});
