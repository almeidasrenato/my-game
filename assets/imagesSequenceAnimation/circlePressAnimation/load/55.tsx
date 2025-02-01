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
    <Circle cx={400} cy={400} r={300} fill="#1D9114" fillOpacity={0.2} />
    <Circle
      cx={400}
      cy={400}
      r={328}
      stroke="#1D9114"
      strokeOpacity={0.12}
      strokeWidth={4}
    />
    <Circle
      cx={400}
      cy={400}
      r={355}
      stroke="#1D9114"
      strokeOpacity={0.18}
      strokeWidth={20}
    />
  </Svg>
)
export default SVGComponent
