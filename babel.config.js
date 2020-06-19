module.exports = {
  plugins: ["@babel/plugin-proposal-class-properties"],
  presets: [
    "solid",
    ['@babel/preset-env', {}, ],
    '@babel/preset-typescript',
  ],
};
