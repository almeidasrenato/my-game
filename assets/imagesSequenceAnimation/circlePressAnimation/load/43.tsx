import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'
const SVGComponent = (props) => (
  <Svg
    width={801}
    height={801}
    viewBox="0 0 801 801"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={400} cy={400} r={300} fill="#1D9114" />
    <Circle
      cx={401}
      cy={401}
      r={338}
      stroke="#1D9114"
      strokeOpacity={0.4}
      strokeWidth={4}
    />
    <Circle
      cx={401}
      cy={401}
      r={390}
      stroke="#1D9114"
      strokeOpacity={0.15}
      strokeWidth={20}
    />
  </Svg>
)
export default SVGComponent
