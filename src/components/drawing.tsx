"use client"
import { useState, useEffect } from 'react';

type DrawingProps = {
  headerHeight: number
  currentSize: number
  currentColor: string
  toggleDelete: boolean
}

export default function Drawing(props: DrawingProps) {
  const {headerHeight, currentSize, currentColor, toggleDelete} = props
  const [isDrawing, setIsDrawing] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; size: number; color: string }[]>([]);

  useEffect(() => {
    setTrail([])
  }, [toggleDelete]);

  const handlePointerMove = ((e: React.PointerEvent<HTMLDivElement>) => {
    if (isDrawing) {
      if (e.clientY > headerHeight) {
        setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY, size: currentSize, color: currentColor }]);
      }
    }
  });

  const handlePointerDown = ((e: React.PointerEvent<HTMLDivElement>) => {
    setIsDrawing(true)
  });

  const handlePointerUp = ((e: React.PointerEvent<HTMLDivElement>) => {
    setIsDrawing(false)
  });

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="cursor-crosshair select-none"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #fafbff 0%, #f1f5f9 50%, #f8fafc 100%)',
      }}>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {trail.map((point, index) => {
        if (index === 0) {
          return null;
        }

        const prevPoint = trail[index - 1];

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              backgroundColor: prevPoint.color,
              borderRadius: '50%',
              width: `${prevPoint.size * 0.8}px`,
              height: `${prevPoint.size * 0.8}px`,
              transform: prevPoint ? `translate(${prevPoint.x}px, ${prevPoint.y - headerHeight}px)` : undefined,
              transition: 'transform 0.01s ease-out',
            }}
          />
        );
      })}

    </div>
  )
}
