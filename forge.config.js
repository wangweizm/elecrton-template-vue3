const {title,appVersion} = require('./electron/config/config.js')
module.exports = {
  packagerConfig: {
    name:title,
    appVersion
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
    },
  ],
};
