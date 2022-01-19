const { app, BrowserWindow, Menu, Tray, nativeTheme } = require('electron');
const { MqttClient } = require('mqtt');
const path = require('path')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const mainWindow = null

const createWindow = () => {
  var mqtt_client = MqttClient
  mqtt_client = connect_mqtt();

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    left: 0,
    top: 0,
    frame: false,
    show: true,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mqtt_client.on('message', (_topic, message, _packet) => {
    mainWindow.webContents.send('chat', message.toString());
  })

  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.maximize();
};

// トレイアイコンを生成する
let tray = null;
const createTrayIcon = () => {
  let imgFilePath;
  // Windows
  if (process.platform === 'win32') {
    imgFilePath = path.dirname(path.basename(__dirname)) + '/assets/tasktray_icon/flowchaat_tasktray.ico';
  }
  // macOS
  else {
    imgFilePath = path.dirname(path.basename(__dirname)) + '/assets/tasktray_icon/flowchaat_tasktray_mac.png';
    // ダークテーマ対応
    if (nativeTheme.shouldUseDarkColors === true) {
      isDarkTheme = true;
      imgFilePath = path.dirname(path.basename(__dirname)) + '/assets/tasktray_icon/flowchaat_tasktray_mac_dark.png';
    }
  }
  const contextMenu = Menu.buildFromTemplate([
    { label: '終了', role: 'quit' }
  ]);
  tray = new Tray(imgFilePath);
  tray.setToolTip(app.name);
  tray.setContextMenu(contextMenu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  createTrayIcon();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
function connect_mqtt() {
  const mqtt = require('mqtt');
  const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

  const connectUrl = `mqtts://mqtt.techin.jp7eph.net:8883`
  const options = {
    keepalive: 30,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    },
    rejectUnauthorized: false
  }

  // Information about the mqtt module is available
  const client = mqtt.connect(connectUrl, options)

  client.on('error', (err) => {
    // console.log('Connection error: ', err)
    client.end()
  })

  client.on('reconnect', () => {
    // console.log('Reconnecting...')
  })

  client.on('connect', () => {
    client.subscribe('techin/techin15', {
      qos: 0
    })
  })

  return client
}
