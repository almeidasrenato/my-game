import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
const SVGComponent = (props) => (
  <Svg
    width={800}
    height={800}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={400} cy={400} r={300} fill="#1D9114" fillOpacity={0.1} />
    <Path
      d="M723 400C723 578.388 578.388 723 400 723C221.612 723 77 578.388 77 400C77 221.612 221.612 77 400 77C578.388 77 723 221.612 723 400Z"
      stroke="#1D9114"
      strokeOpacity={0.08}
      strokeWidth={4}
    />
    <Circle
      cx={400}
      cy={400}
      r={350}
      stroke="#1D9114"
      strokeOpacity={0.12}
      strokeWidth={20}
    />
  </Svg>
)
export default SVGComponent
