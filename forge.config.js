const {title,version} = require('./electron/config/config.js')
module.exports = {
  packagerConfig: {
    asar:true,
    name:title,
    appVersion:version,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
    },
  ],
};
