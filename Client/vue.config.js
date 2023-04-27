const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  devServer: {
    proxy: 'http://localhost:8000/'
  }
}

module.exports = {
  vue: {
    configure: {
      experiments: {
        topLevelAwait: true,
      },
    },
  },
};