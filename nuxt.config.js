require('dotenv/config');

const { resolve } = require('path');

module.exports = {
  // mode: 'universal',

  /**
   * Specify application header defaults
   */
  head: {
    title: 'Nuxt TS Starter',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'We love using Nuxt & Typescript 💚💙'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/styles/index.scss'],
  /**
   * Customize application loading bar
   */
  loading: { color: '#ff4081' },
  /**
   * Specify build directory
   */
  buildDir: 'build/client',
  /**
   * Specify nuxt source directory
   */
  srcDir: 'client',
  /**
   * Configure & extend Webpack build
   */
  build: {
    // analyze: true,
    maxChunkSize: 300000,
    vendor: [
      'nuxt-class-component',
      'vee-validate',
      'vue-class-component',
      'vue-property-decorator',
      'vuex-class',
    ]
  },
  /**
   * Specify additional nuxt plugins
   */
  plugins: [],
  /**
   * Specify additional nuxt modules
   */
  modules: [
    ['@nuxtjs/dotenv', { path: resolve('.') }],
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy'],
    ['nuxtjs-extensions/filters'],
    ['nuxtjs-extensions/vee-validate'],
    [
      'nuxtjs-extensions/typescript',
      {
        tsconfig: resolve(__dirname, 'client', 'tsconfig.json'),
        tslint: resolve(__dirname, 'tslint.json')
      }
    ],
  ]
};
