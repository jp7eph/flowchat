const { contextBridge,ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('api', {
  on: (channel, callback) => ipcRenderer.on(channel,(event,arg)=>callback(event,arg))
})

