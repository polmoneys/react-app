import React, { useRef } from 'react'

export type ExportFormat = 'svg' | 'png' | 'jpeg'

interface ChartExportProps {
  children: React.ReactNode
  filename?: string
  format?: ExportFormat
  onExport?: (format: ExportFormat) => void
  buttonLabel?: string
  buttonStyle?: React.CSSProperties
  buttonComponent?: React.ReactElement
}

const ChartExport: React.FC<ChartExportProps> = ({
  children,
  filename = 'chart',
  format = 'svg',
  onExport,
  buttonLabel = 'Export',
  buttonStyle,
  buttonComponent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const exportChart = async () => {
    const svgElement = containerRef.current?.querySelector('svg')
    if (svgElement == null) return

    if (format === 'svg') {
      const serializer = new XMLSerializer()
      const source =
        '<?xml version="1.0" standalone="no"?>\r\n' +
        serializer.serializeToString(svgElement)
      const url =
        'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source)

      download(url, `${filename}.svg`)
    } else {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const svgData = new XMLSerializer().serializeToString(svgElement)
      const img = new Image()

      img.onload = () => {
        if (ctx != null) {
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)

          canvas.toBlob(blob => {
            if (blob != null) {
              const url = URL.createObjectURL(blob)
              download(url, `${filename}.${format}`)
            }
          }, `image/${format}`)
        }
      }

      img.src =
        'data:image/svg+xml;base64,' +
        btoa(unescape(encodeURIComponent(svgData)))
    }

    onExport?.(format)
  }

  const download = (url: string, filename: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
  }

  const renderButton = () => {
    if (buttonComponent != null) {
      return React.cloneElement(buttonComponent, { onClick: exportChart })
    }

    return (
      <button
        onClick={() => {
          void (async () => {
            try {
              await exportChart()
            } catch (error) {
              console.error('Failed to export chart:', error)
            }
          })()
        }}
        style={buttonStyle}
      >
        {buttonLabel}
      </button>
    )
  }

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {children}
      {renderButton()}
    </div>
  )
}

export default ChartExport
