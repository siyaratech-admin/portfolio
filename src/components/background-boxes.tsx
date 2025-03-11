"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(70).fill(1)
  const cols = new Array(60).fill(1)

  // Use actual color codes instead of CSS variables
  const colors = ["#a855f7", "#eab308", "#f97316"]

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    
    <div
      style={{
        transform: `translate(-30%,-40%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn("absolute -left-1/2 p-4 top-0 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ", className)}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="w-16 h-8 border-border relative">
          {cols.map((_, j) => (
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

