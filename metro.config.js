// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// const globalCssPath = path.resolve(__dirname, './global.css');
// config.watchFolders.push(path.resolve(__dirname, '../verb-expo-app'));
// config.resolver.nodeModulesPaths.push(path.resolve(__dirname, ''));
// Add wasm asset support
config.resolver.assetExts.push('wasm');

// Add COEP and COOP headers to support SharedArrayBuffer
config.server.enhanceMiddleware = (middleware) => {
   return (req, res, next) => {
      res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      middleware(req, res, next);
   };
};

// module.exports = withNativeWind(config, { input: globalCssPath });
module.exports = config;
