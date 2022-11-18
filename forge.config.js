const {title,version} = require('./electron/config/config.js')
module.exports = {
  packagerConfig: {
    asar:true,
    name:title,
    appVersion:version,
  },
  publishers: [
    {
      name: '@electron-forge/publisher-nucleus',
      config: {
        host: 'xxx',//你的服务器
        appId: 1,
        channelId: 'abcdefg',
        token: process.env.TOKEN // string
      }
    }
  ],
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
    },
  ],
};
