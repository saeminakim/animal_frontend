module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      overrideEndpoint: false,
      region: 'ap-northeast-2',
      bucket: 'animal-vueapp',
      createBucket: false,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: true,
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5,
      cloudfrontId: 'E3NOPK7WSZVYX2',
      cloudfrontMatchers: '/index.html'
    }
  }
}
