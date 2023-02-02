const config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
};

module.exports = () => {
  return config;
};
