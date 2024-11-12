type Range<
  N extends number,
  Result extends number[] = []
> = Result['length'] extends N
  ? Result[number]
  : Range<N, [...Result, Result['length']]>

export type ShowObject = {
  id: number //! id
  show: number //! time of show
  click: boolean //! click
  positionLeft: Range<101> //! positionLeft of showObject in percent from left side of screen (0-100)
  miss: boolean //! miss
}

export const showObjectArray: ShowObject[] = [
  // {
  //   id: 0,
  //   show: 12594,
  //   click: false,
  //   positionLeft: 17,
  //   miss: false,
  // },
  //!----
  {
    id: 0,
    show: 12624,
    click: false,
    positionLeft: 83,
    miss: false,
  },
  {
    id: 1,
    show: 15781,
    click: false,
    positionLeft: 51,
    miss: false,
  },
  {
    id: 2,
    show: 18956,
    click: false,
    positionLeft: 14,
    miss: false,
  },
  {
    id: 3,
    show: 22030,
    click: false,
    positionLeft: 52,
    miss: false,
  },
  {
    id: 4,
    show: 25403,
    click: false,
    positionLeft: 86,
    miss: false,
  },
  {
    id: 5,
    show: 28558,
    click: false,
    positionLeft: 50,
    miss: false,
  },
  {
    id: 6,
    show: 31728,
    click: false,
    positionLeft: 13,
    miss: false,
  },
  {
    id: 7,
    show: 35064,
    click: false,
    positionLeft: 51,
    miss: false,
  },
  {
    id: 8,
    show: 38184,
    click: false,
    positionLeft: 89,
    miss: false,
  },
  {
    id: 9,
    show: 41320,
    click: false,
    positionLeft: 55,
    miss: false,
  },
  {
    id: 10,
    show: 47773,
    click: false,
    positionLeft: 82,
    miss: false,
  },
  {
    id: 11,
    show: 49890,
    click: false,
    positionLeft: 82,
    miss: false,
  },
  {
    id: 12,
    show: 51874,
    click: false,
    positionLeft: 81,
    miss: false,
  },
  {
    id: 13,
    show: 53842,
    click: false,
    positionLeft: 80,
    miss: false,
  },
  {
    id: 14,
    show: 55859,
    click: false,
    positionLeft: 81,
    miss: false,
  },
  {
    id: 15,
    show: 57811,
    click: false,
    positionLeft: 81,
    miss: false,
  },
  {
    id: 16,
    show: 59962,
    click: false,
    positionLeft: 80,
    miss: false,
  },
]
