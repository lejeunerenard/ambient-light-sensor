const HID = require('node-hid')

let vendorId = 0x05ac
let productId = 0x8262
let ambientLight = new HID.HID(vendorId, productId)

console.log('logging data')
ambientLight.on('error', (err) => {
  console.error('err', err)
})
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
  console.log('brightness', brightness, new Date())
})
