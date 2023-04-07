/*

interface CustomShape extends Area {
  label: string;
}

const customData: CustomArea[] = [
  { value: 10, label: 'A' },
  { value: 20, label: 'B' },
  { value: 30, label: 'C' },
];

<Areas<CustomArea> datum={customData} />

*/
export interface Area {
  value: number
}

interface AreasProps<T extends Area> {
  datum: T[]
  minHeight?: string
  direction?: 'column' | 'row'
  padding?: number
  colors?: string[]
  fontSize?: number
  legend?: {
    x: string
    y: string
  }
}

const defaultColors = [
  'rgba(0,0,0,.2)',
  'rgba(0,0,0,.4)',
  'rgba(0,0,0,.6)',
  'rgba(0,0,0,.8)',
  'rgba(0,0,0,.9)',
]

const Areas = <T extends Area>(props: AreasProps<T>): JSX.Element => {
  const {
    datum,
    minHeight = '10%',
    direction = 'column',
    padding = 0,
    colors = defaultColors,
    fontSize = 14,
    legend,
  } = props
  const totalValue = datum.reduce((acc, item) => acc + item.value, 0)
  const flexDimension = direction === 'column' ? 'height' : 'width'

  const normalizedValues = datum.map(item => {
    const baseValue = parseFloat(minHeight)
    const normalizedValue =
      (item.value / totalValue) * (100 - baseValue * datum.length)
    return baseValue + normalizedValue
  })

  const totalNormalizedValue = normalizedValues.reduce(
    (acc, value) => acc + value,
    0,
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {legend !== undefined && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'absolute',
            top: legend.y ?? 0,
            left: legend.x ?? '-40px',
          }}
        >
          {datum.map((item, index) => {
            const ratio = (normalizedValues[index] / totalNormalizedValue) * 100
            const percentage = (item.value / totalValue) * 100

            return (
              <div
                key={index}
                style={{
                  height: `${ratio}%`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <rect
                    height="2"
                    width="10"
                    style={{ fill: colors[index % colors.length] }}
                  ></rect>
                  <p style={{ margin: '0', fontSize: `${fontSize}px` }}>
                    {item.value} ({percentage.toFixed(0)}%)
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {datum.map((item, index) => {
        const ratio = (normalizedValues[index] / totalNormalizedValue) * 100
        const backgroundColor = colors[index % colors.length]
        const dimensionStyle = {
          [flexDimension]: `${ratio}%`,
        }

        return (
          <div
            key={index}
            style={{
              ...dimensionStyle,
              backgroundColor,
              padding: `${padding}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: `${fontSize}px`,
            }}
          >
            {item.value}
          </div>
        )
      })}
    </div>
  )
}

export default Areas
