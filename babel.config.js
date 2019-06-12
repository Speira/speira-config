module.exports = function(api) {
  api.cache(false);
  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
        },
      ],
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: true,
        },
      ],
    ],
  };
};
