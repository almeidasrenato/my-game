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
}

export const showObjectArray: ShowObject[] = [
  {
    id: 15,
    show: 10334,
    click: false,
    positionLeft: 12,
  },
  {
    id: 16,
    show: 11385,
    click: false,
    positionLeft: 54,
  },
  {
    id: 17,
    show: 12185,
    click: false,
    positionLeft: 86,
  },
  {
    id: 18,
    show: 13419,
    click: false,
    positionLeft: 16,
  },
  {
    id: 19,
    show: 14586,
    click: false,
    positionLeft: 53,
  },
  {
    id: 20,
    show: 15387,
    click: false,
    positionLeft: 89,
  },
  {
    id: 21,
    show: 16621,
    click: false,
    positionLeft: 14,
  },
  {
    id: 22,
    show: 17688,
    click: false,
    positionLeft: 53,
  },
  {
    id: 23,
    show: 18505,
    click: false,
    positionLeft: 89,
  },
  {
    id: 24,
    show: 19838,
    click: false,
    positionLeft: 15,
  },
  {
    id: 25,
    show: 20889,
    click: false,
    positionLeft: 52,
  },
  {
    id: 26,
    show: 21706,
    click: false,
    positionLeft: 91,
  },
  {
    id: 27,
    show: 22923,
    click: false,
    positionLeft: 15,
  },
  {
    id: 28,
    show: 23957,
    click: false,
    positionLeft: 55,
  },
  {
    id: 29,
    show: 24824,
    click: false,
    positionLeft: 91,
  },
  {
    id: 30,
    show: 26241,
    click: false,
    positionLeft: 15,
  },
  {
    id: 31,
    show: 27174,
    click: false,
    positionLeft: 53,
  },
  {
    id: 32,
    show: 28058,
    click: false,
    positionLeft: 91,
  },
  {
    id: 33,
    show: 29325,
    click: false,
    positionLeft: 16,
  },
  {
    id: 34,
    show: 30475,
    click: false,
    positionLeft: 55,
  },
  {
    id: 35,
    show: 31408,
    click: false,
    positionLeft: 90,
  },
  {
    id: 36,
    show: 32542,
    click: false,
    positionLeft: 17,
  },
  {
    id: 37,
    show: 33775,
    click: false,
    positionLeft: 58,
  },
  {
    id: 38,
    show: 34258,
    click: false,
    positionLeft: 95,
  },
  {
    id: 39,
    show: 34692,
    click: false,
    positionLeft: 16,
  },
]
