const { app } = require('electron')
const isMac = process.platform === 'darwin'
module.exports =  [
  ...(isMac ? [{
    label: 'demo',
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  {
    label: '帮助',
    submenu: [
      {
        label: '关于vue兴趣交流组',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://jq.qq.com/?_wv=1027&k=QjmJ5Y0x')
        }
      }
    ]
  }
]
