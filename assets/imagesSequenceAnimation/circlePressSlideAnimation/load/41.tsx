import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
const SVGComponent = (props) => (
  <Svg
    width={800}
    height={800}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M257.672 406.934C253.946 403.062 253.946 396.938 257.672 393.066L383.794 261.996C390.036 255.51 401 259.928 401 268.93L401 531.07C401 540.072 390.036 544.491 383.794 538.004L257.672 406.934Z"
      fill="#148B91"
    />
    <Path
      d="M544.968 393.413L418.845 262.343C412.916 256.181 402.5 260.378 402.5 268.93L402.5 531.07C402.5 539.622 412.916 543.819 418.845 537.657L544.968 406.587C548.507 402.909 548.507 397.091 544.968 393.413Z"
      fill="#148B91"
      stroke="#148B91"
    />
    <Rect
      x={0.708196}
      width={149.232}
      height={149.232}
      rx={34.5}
      transform="matrix(0.708196 -0.706016 0.708196 0.706016 294.781 400.5)"
      fill="#63FFCE"
      stroke="#148B91"
    />
    <Path
      d="M314 293.385L314 285L204 400L314 515L314 506.615"
      stroke="#148B91"
      strokeWidth={20}
    />
    <Path
      d="M490 506.615L490 515L600 400L490 285L490 293.385"
      stroke="#148B91"
      strokeWidth={20}
    />
    <Path
      d="M225 326.724L225 321L150 399.5L225 478L225 472.276"
      stroke="#148B91"
      strokeWidth={4}
    />
    <Path
      d="M575 472.276L575 478L650 399.5L575 321L575 326.724"
      stroke="#148B91"
      strokeWidth={4}
    />
  </Svg>
)
export default SVGComponent
