# ambient-light-sensor
Access the ambient light sensor on a Macbook.

This currently is hardcoded to work with the ambient light sensor in the MacBook Pro 16" 2019. Contributions welcomed to add other ambient light sensors.

## Usage

```js
const AmbientLight = require('ambient-light-sensor')
const ambientLight = new AmbientLight()

ambientLight.on('data', ({ brightness }) => {
  console.log('brightness', brightness)
})
```

## Test

```sh
npm test
```
