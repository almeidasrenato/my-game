import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'
const SVGComponent = (props) => (
  <Svg
    width={800}
    height={800}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={400} cy={400} r={289.5} fill="#1D9114" fillOpacity={0.925} />

    {/* <Circle cx={400} cy={400} r={289.5} fill="red" fillOpacity={0.925} /> */}
  </Svg>
)
export default SVGComponent
