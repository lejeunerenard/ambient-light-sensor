const { EventEmitter } = require('events')
const HID = require('node-hid')

class AmbientLight extends EventEmitter {
  constructor () {
    super()
    let vendorId = 0x05ac
    let productId = 0x8262
    let ambientLight = new HID.HID(vendorId, productId)

    ambientLight.on('error', (err) => this.emit('error', err))
    ambientLight.on('data', (data) => {
      // -- Potential slices of data --
      // Static data
      let column1Data = data.slice(0, 2)

      let column2Data = data.slice(2, 4)
      let column2LE = column2Data.readInt16LE(0)

      // All zeros
      let column3Data = data.slice(4, 6)

      let column4Data = data.slice(6, 8)
      let column4LE = column4Data.readInt16LE(0)

      // All zeros
      let column5Data = data.slice(8, 10)

      let column6Data = data.slice(10, 17)

      // Static as '02'
      let column7Data = data.slice(17, 18)

      // Derived answers
      let brightness = column4LE
      this.emit('data', { brightness })
    })
    this.device = ambientLight
  }

  close () {
    this.device.close()
  }
}

module.exports = AmbientLight
