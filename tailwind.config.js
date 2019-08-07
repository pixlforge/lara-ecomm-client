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
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
    borderColor: ['responsive', 'hover', 'focus', 'disabled'],
    boxShadow: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['disabled'],
    display: ['responsive', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'disabled']
  }
}
