const {app, BrowserWindow} = require('electron')

module.exports = class FormWindow {
  constructor() {
    this.window = null
    this.start()
  }
  
  start() {
    app.on('ready', () => {
      this.createWindow()
    })
  }
  
  createWindow() {
    this.window = new BrowserWindow({
      title: 'tweet',
      center: true,
      // resizable: false,
      minimuizable: false,
      maximizable: false,
      width: 300,
      height: 250
    })
    this.window.loadURL(`file://${__dirname}/../../html/form.html`)
  }
}
