import * as React from 'react'
import Svg, { G, Path, Rect } from 'react-native-svg'
const SVGComponent = (props) => (
  <Svg
    width={800}
    height={802}
    viewBox="0 0 800 802"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.3}>
      <Path
        d="M256.672 408.934C252.946 405.062 252.946 398.938 256.672 395.066L382.794 263.996C389.036 257.51 400 261.928 400 270.93L400 533.07C400 542.072 389.036 546.491 382.794 540.004L256.672 408.934Z"
        fill="#148B91"
      />
      <Path
        d="M543.968 395.413L417.845 264.343C411.916 258.181 401.5 262.378 401.5 270.93L401.5 533.07C401.5 541.622 411.916 545.819 417.845 539.657L543.968 408.587C547.507 404.909 547.507 399.091 543.968 395.413Z"
        fill="#148B91"
        stroke="#148B91"
      />
      <Rect
        x={0.708196}
        width={167.741}
        height={167.741}
        rx={34.5}
        transform="matrix(0.708196 -0.706016 0.708196 0.706016 282.207 402.5)"
        fill="#63FFCE"
        stroke="#148B91"
      />
    </G>
    <G opacity={0.3}>
      <Path
        d="M300 295.385L300 287L190 402L300 517L300 508.615"
        stroke="#148B91"
        strokeWidth={20}
      />
      <Path
        d="M500 508.615L500 517L610 402L500 287L500 295.385"
        stroke="#148B91"
        strokeWidth={20}
      />
      <Path
        d="M245 328.724L245 323L170 401.5L245 480L245 474.276"
        stroke="#148B91"
        strokeWidth={4}
      />
      <Path
        d="M555 474.276L555 480L630 401.5L555 323L555 328.724"
        stroke="#148B91"
        strokeWidth={4}
      />
    </G>
  </Svg>
)
export default SVGComponent
