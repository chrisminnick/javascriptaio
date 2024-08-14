const config = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = () => {
  return config;
};
