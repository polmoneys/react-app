import type React from 'react'
import { useState } from 'react'

interface ChartPanProps {
  children: React.ReactNode
  onPan?: (deltaX: number, deltaY: number) => void
}

const ChartPan: React.FC<ChartPanProps> = ({ children, onPan }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [lastPosition, setLastPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true)
    setLastPosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging && lastPosition != null) {
      const deltaX = event.clientX - lastPosition.x
      const deltaY = event.clientY - lastPosition.y
      setTranslate(prev => ({ x: prev.x + deltaX, y: prev.y + deltaY }))
      setLastPosition({ x: event.clientX, y: event.clientY })
      onPan?.(deltaX, deltaY)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setLastPosition(null)
  }

  return (
    <div
      className="chart-pan"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div
        style={{ transform: `translate(${translate.x}px, ${translate.y}px)` }}
      >
        {children}
      </div>
    </div>
  )
}

export default ChartPan
