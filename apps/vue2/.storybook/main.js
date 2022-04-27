const postCss = require('postcss');

module.exports = {
  "stories": [
    "../../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postCss,
        },
      },
    },
    '@storybook/addon-essentials',
  ],
  "framework": "@storybook/vue",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.forEach((item)=>{

      if (item.test == '/\\.vue$/') {
        item.options = {
          compiler: require('vue-template-babel-compiler')
        };
      }
    })
    return config;
  }

}

