"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const [renderedRows, setRenderedRows] = useState(10)
  const [renderedCols, setRenderedCols] = useState(10)
  const totalRows = 70
  const totalCols = 60

  const colors = ["#a855f7", "#eab308", "#f97316"]

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  useEffect(() => {
    const incrementRender = () => {
      setRenderedRows(prev => Math.min(prev + 10, totalRows))
      setRenderedCols(prev => Math.min(prev + 10, totalCols))
    }

    const interval = setInterval(incrementRender, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        transform: `translate(-30%,-40%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn("absolute -left-1/2 p-4 top-0 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0", className)}
      {...rest}
    >
      {Array(renderedRows).fill(1).map((_, i) => (
        <motion.div key={`row` + i} className="w-16 h-8 border-border relative">
          {Array(renderedCols).fill(1).map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-20 h-8 border-r border-t border-border/20 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-muted-foreground stroke-[1px] pointer-events-none"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export const Boxes = React.memo(BoxesCore)
