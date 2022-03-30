var APP_PATH = 'ionic-vue-pwa';

module.exports = {
  publicPath: APP_PATH,
  pwa: {
    manifestOptions: {
      start_url: `/${APP_PATH}/`
    }
  }
}
