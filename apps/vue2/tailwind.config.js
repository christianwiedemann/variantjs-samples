const tailwindBaseConfig = require('../../tailwind.config');
const config = {
  ...tailwindBaseConfig,
  purge: ["../../src/**/*.{vue,js,ts,jsx,tsx}"],

};
console.log(config);
module.exports = config;
