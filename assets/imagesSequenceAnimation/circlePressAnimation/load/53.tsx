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
    <Circle cx={400} cy={400} r={300} fill="#1D9114" fillOpacity={0.4} />
    <Circle
      cx={400}
      cy={400}
      r={365}
      stroke="#1D9114"
      strokeOpacity={0.3}
      strokeWidth={20}
    />
    <Circle
      cx={400}
      cy={400}
      r={338}
      stroke="#1D9114"
      strokeOpacity={0.2}
      strokeWidth={4}
    />
  </Svg>
)
export default SVGComponent
