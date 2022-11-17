
const { app,Menu, BrowserWindow } = require('electron')
const isMac = process.platform === 'darwin'
const {
  title,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHieght,
  titleBarStyle,
  backgroundColor,
  titleBarOverlay
} = require('./config/config.js')
const menu = require('./config/menu.js')
const path = require('path')
const isDev = process.env.IS_DEV == 'dev' ? true : false;
/* 设置系统名 */
app.setName(title)
const createWindow = () => {
    const win = new BrowserWindow({
      show: false,
      webPreferences:{
        nodeIntegration:true, // 注入node模块
      },
      title,
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
      maxHieght,
      titleBarStyle,
      backgroundColor,
      titleBarOverlay
    })
    if(isMac){
      /* 隐藏红绿灯 */
      win.setWindowButtonVisibility(false)
    }
    // 优雅地显示窗口
    win.once('ready-to-show', () => {
      win.show()
    })
    if(isDev){
      win.loadURL('http://127.0.0.1:9999')
      // win.webContents.openDevTools()
    }else{
      win.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
    }
    
  }
  app.whenReady().then(() => {
    /* 自定义菜单栏 */
    const menuData = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(menuData)
    /* 创建渲染进程 */
    createWindow()
    app.on('activate',function(){
      if(BrowserWindow.getAllWindows().length===0) createWindow()
    })
  })
  app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
      app.quit()
    }
  })