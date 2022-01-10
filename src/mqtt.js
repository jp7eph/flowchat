// const mqtt = require("mqtt")

// const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

// const connectUrl = `mqtt://localhost:1883`

// const options = {
//   keepalive: 30,
//   clientId: clientId,
//   protocolId: 'MQTT',
//   protocolVersion: 4,
//   clean: true,
//   reconnectPeriod: 1000,
//   connectTimeout: 30 * 1000,
//   will: {
//     topic: 'WillMsg',
//     payload: 'Connection Closed abnormally..!',
//     qos: 0,
//     retain: false
//   },
//   rejectUnauthorized: false
// }

// // Information about the mqtt module is available
// console.log(mqtt)

// console.log('connecting mqtt client')
// const client = mqtt.connect(connectUrl, options)

// client.on('error', (err) => {
//   console.log('Connection error: ', err)
//   client.end()
// })

// client.on('reconnect', () => {
//   console.log('Reconnecting...')
// })

// client.on('connect', () => {
//   console.log('Client connected:' + clientId)
//   client.subscribe('testtopic', {
//     qos: 0
//   })
//   // client.publish('testtopic/electron', 'Electron connection demo...!', {
//   //   qos: 0,
//   //   retain: false
//   // })
// })

// client.on('message', (topic, message, packet) => {
//   // console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)
//   mainwindows
// })

// // function send_text_to_render(text) {
  
// // }