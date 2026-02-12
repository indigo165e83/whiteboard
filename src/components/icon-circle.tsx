import React from 'react';

type IconCircleProps = {
  size: number
}

export default function IconCircle(props: IconCircleProps) {
  const { size } = props
  const displaySize = Math.max(size * 0.5, 6)

  return (
    <div
      className="rounded-full bg-white"
      style={{
        width: `${displaySize}px`,
        height: `${displaySize}px`,
      }}
    />
  )
}
