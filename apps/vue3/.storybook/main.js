const postCss = require("postcss");
module.exports = {
  "stories": [
    "../../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",

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
  "framework": "@storybook/vue3"
}
