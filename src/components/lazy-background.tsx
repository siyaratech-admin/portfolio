"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { BoxesCore } from "./background-boxes"

export const LazyBackground: React.FC<{ className?: string }> = ({ className }) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    setShouldRender(true)
  }, [])

  if (!shouldRender) {
    return (
      <div
        className={`absolute -left-1/2 p-4 top-0 w-full h-full z-0 opacity-50 bg-gradient-to-r text-white ${className}`}
      />
    )
  }

  return <BoxesCore className={className} />
}

