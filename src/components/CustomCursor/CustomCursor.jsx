import { useEffect, useState } from "react"
import "./CustomCursor.css"

function CustomCursor({ containerRef }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleEnter = () => setVisible(true)
    const handleLeave = () => setVisible(false)

    container.addEventListener("mouseenter", handleEnter)
    container.addEventListener("mouseleave", handleLeave)
    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mouseenter", handleEnter)
      container.removeEventListener("mouseleave", handleLeave)
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [containerRef])

  return visible ? (
    <div
      className="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  ) : null
}

export default CustomCursor
