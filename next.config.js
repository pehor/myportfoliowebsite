const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')

module.exports = withFonts(withSass({
  exportTrailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev }) {
    // This causes skipping overriding the paths, which breaks dev mode
    // This way we can test i18n in dev mode.
    if (dev) return {}

    const simplePaths = {
      '/': { page: '/' },
      '/old': { page: '/old' },
      '/maintenance': { page: '/maintenance' }
    }

    return simplePaths
  },
  cssModules: true
}))
