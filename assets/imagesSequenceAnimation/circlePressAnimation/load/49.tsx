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
    <Circle cx={400} cy={400} r={300} fill="#1D9114" fillOpacity={0.8} />
    <Circle
      cx={400}
      cy={400}
      r={385}
      stroke="#1D9114"
      strokeOpacity={0.54}
      strokeWidth={20}
    />
    <Circle
      cx={400}
      cy={400}
      r={358}
      stroke="#1D9114"
      strokeOpacity={0.36}
      strokeWidth={4}
    />
  </Svg>
)
export default SVGComponent
