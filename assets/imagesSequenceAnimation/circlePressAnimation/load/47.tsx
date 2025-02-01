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
    <Circle cx={400} cy={400} r={300} fill="#1D9114" />
    <Circle
      cx={400}
      cy={400}
      r={390}
      stroke="#1D9114"
      strokeOpacity={0.6}
      strokeWidth={20}
    />
    <Circle
      cx={400.05}
      cy={400.05}
      r={363.05}
      stroke="#1D9114"
      strokeOpacity={0.4}
      strokeWidth={4}
    />
  </Svg>
)
export default SVGComponent
