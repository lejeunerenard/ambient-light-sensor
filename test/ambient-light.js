const AmbientLight = require('../')
const { EventEmitter } = require('events')
const assert = require('assert')

describe('AmbientLight', () => {
  it('is an EventEmitter', () => {
    let ambientLight = new AmbientLight()
    ambientLight.close()
    assert.ok(ambientLight instanceof EventEmitter)
  })

  it('has device property', () => {
    let ambientLight = new AmbientLight()
    ambientLight.close()
    assert.ok('device' in ambientLight)
  })

  it('has close function', () => {
    let ambientLight = new AmbientLight()
    assert.ok('device' in ambientLight)
    assert.doesNotThrow(ambientLight.close.bind(ambientLight))
  })
})
