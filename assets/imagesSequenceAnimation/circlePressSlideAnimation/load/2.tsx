import * as React from 'react'
import Svg, { G, Path, Rect } from 'react-native-svg'
const SVGComponent = (props) => (
  <Svg
    width={800}
    height={800}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.175}>
      <Path
        d="M257.672 406.934C253.946 403.062 253.946 396.938 257.672 393.066L383.794 261.996C390.036 255.51 401 259.928 401 268.93L401 531.07C401 540.072 390.036 544.491 383.794 538.004L257.672 406.934Z"
        fill="#148B91"
      />
      <Path
        d="M545.328 406.934C549.054 403.062 549.054 396.938 545.328 393.066L419.206 261.996C412.964 255.51 402 259.928 402 268.93L402 531.07C402 540.072 412.964 544.491 419.206 538.004L545.328 406.934Z"
        fill="#148B91"
      />
      <Rect
        width={150.232}
        height={150.232}
        rx={35}
        transform="matrix(0.708196 -0.706016 0.708196 0.706016 294.576 400)"
        fill="#63FFCE"
      />
    </G>
  </Svg>
)
export default SVGComponent
