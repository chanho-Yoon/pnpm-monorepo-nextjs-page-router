/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@web/shared-ui'],

  compiler: {
    styledComponents: true,
    displayName: process.env.NEXT_PUBLIC_MODE !== 'production',
    removeConsole: process.env.NEXT_PUBLIC_MODE === 'production',
    emotion: {
      sourceMap: true,
      // default is 'dev-only'.
      autoLabel: 'dev-only',
      // default is '[local]'.
      // Allowed values: `[local]` `[filename]` and `[dirname]`
      // This option only works when autoLabel is set to 'dev-only' or 'always'.
      // It allows you to define the format of the resulting label.
      // The format is defined via string where variable parts are enclosed in square brackets [].
      // For example labelFormat: "my-classname--[local]",
      // where [local] will be replaced with the name of the variable the result is assigned to.
      labelFormat: '[local]',
    },
  },
};

module.exports = nextConfig;
