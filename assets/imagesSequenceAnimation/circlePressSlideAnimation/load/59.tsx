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
    <G opacity={0.04}>
      <Path
        d="M270 293.385L270 285L160 400L270 515L270 506.615"
        stroke="#148B91"
        strokeWidth={20}
      />
      <Path
        d="M530 506.615L530 515L640 400L530 285L530 293.385"
        stroke="#148B91"
        strokeWidth={20}
      />
      <Path
        d="M215 326.724L215 321L140 399.5L215 478L215 472.276"
        stroke="#148B91"
        strokeWidth={4}
      />
      <Path
        d="M585 472.276L585 478L660 399.5L585 321L585 326.724"
        stroke="#148B91"
        strokeWidth={4}
      />
    </G>
    <G opacity={0.04}>
      <Path
        d="M256.672 406.934C252.946 403.062 252.946 396.938 256.672 393.066L382.794 261.996C389.036 255.51 400 259.928 400 268.93L400 531.07C400 540.072 389.036 544.491 382.794 538.004L256.672 406.934Z"
        fill="#148B91"
      />
      <Path
        d="M543.968 393.413L417.845 262.343C411.916 256.181 401.5 260.378 401.5 268.93L401.5 531.07C401.5 539.622 411.916 543.819 417.845 537.657L543.968 406.587C547.507 402.909 547.507 397.091 543.968 393.413Z"
        fill="#148B91"
        stroke="#148B91"
      />
      <Rect
        x={0.708196}
        width={167.741}
        height={167.741}
        rx={34.5}
        transform="matrix(0.708196 -0.706016 0.708196 0.706016 282.207 400.5)"
        fill="#63FFCE"
        stroke="#148B91"
      />
    </G>
  </Svg>
)
export default SVGComponent
