import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
const SVGComponent = (props) => (
  <Svg
    width={800}
    height={802}
    viewBox="0 0 800 802"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M257.672 408.934C253.946 405.062 253.946 398.938 257.672 395.066L383.794 263.996C390.036 257.51 401 261.928 401 270.93L401 533.07C401 542.072 390.036 546.491 383.794 540.004L257.672 408.934Z"
      fill="#148B91"
    />
    <Path
      d="M545.328 408.934C549.054 405.062 549.054 398.938 545.328 395.066L419.206 263.996C412.964 257.51 402 261.928 402 270.93L402 533.07C402 542.072 412.964 546.491 419.206 540.004L545.328 408.934Z"
      fill="#148B91"
    />
    <Path
      d="M544.968 395.413L418.845 264.343C412.916 258.181 402.5 262.378 402.5 270.93L402.5 533.07C402.5 541.622 412.916 545.819 418.845 539.657L544.968 408.587C548.507 404.909 548.507 399.091 544.968 395.413Z"
      stroke="#148B91"
      strokeOpacity={0.9}
    />
    <Rect
      width={168.741}
      height={168.741}
      rx={35}
      transform="matrix(0.708196 -0.706016 0.708196 0.706016 282.996 402)"
      fill="#63FFCE"
    />
    <Rect
      x={0.708196}
      width={167.741}
      height={167.741}
      rx={34.5}
      transform="matrix(0.708196 -0.706016 0.708196 0.706016 283.203 402.5)"
      stroke="#148B91"
      strokeOpacity={0.9}
    />
    <Path
      d="M339 295.385L339 287L229 402L339 517L339 508.615"
      stroke="#148B91"
      strokeOpacity={0.9}
      strokeWidth={20}
    />
    <Path
      d="M462 508.615L462 517L572 402L462 287L462 295.385"
      stroke="#148B91"
      strokeOpacity={0.9}
      strokeWidth={20}
    />
    <Path
      d="M284 328.724L284 323L209 401.5L284 480L284 474.276"
      stroke="#148B91"
      strokeOpacity={0.9}
      strokeWidth={4}
    />
    <Path
      d="M517 474.276L517 480L592 401.5L517 323L517 328.724"
      stroke="#148B91"
      strokeOpacity={0.9}
      strokeWidth={4}
    />
  </Svg>
)
export default SVGComponent
