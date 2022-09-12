const path = require('path')

const root = path.resolve('./')

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [require.resolve('@babel/plugin-proposal-class-properties')],
    [require.resolve('@babel/plugin-proposal-object-rest-spread')],
    [require.resolve('@babel/plugin-proposal-private-methods')],
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
