const path = require('path')

const root = path.resolve('./')

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [require.resolve('@babel/plugin-transform-class-properties')],
    [require.resolve('@babel/plugin-transform-object-rest-spread')],
    [require.resolve('@babel/plugin-transform-private-methods')],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [root],
        alias: {
          '@': './src',
          '@test': './test'
        }
      }
    ]
  ]
}
