// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      fill: theme => ({
        gray: {
          '500': theme('colors.gray.500'),
          '700': theme('colors.gray.700')
        }
      }),
      minWidth: {
        '64': '16rem'
      }
    }
  },
  variants: {
    display: ['responsive', 'group-hover']
  }
}
