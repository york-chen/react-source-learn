module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '49',
          ios: '10',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-flow',
      {
        allowDeclareFields: true,
        all: true,
        experimental_useHermesParser: true,
      },
    ],
  ];
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
        helpers: true,
      },
    ],
    'babel-plugin-syntax-hermes-parser',
    process.env.PROJECT_MODE === 'development' && 'react-refresh/babel',
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
