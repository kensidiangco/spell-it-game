import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

function Skips({ skipWord }) {
  return (
    <>
        <AnimatePresence>
            {skipWord > 0 && skipWord < 3 &&
                <motion.p 
                    initial="hidden" 
                    animate="visible" 
                    variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                    },
                    }}
                    className="text-xl border-2 border-red-600 px-2 text-red-600 rounded-md"
                >
                    <p>Skips: {skipWord}</p>
                </motion.p>
            }
              {skipWord > 2 && 
                <motion.div
                  animate={{
                    rotate: [-1, 1.4, 1],
                  }}
                  transition={{
                    delay: Math.random() * 0.7 + 0.05,
                    repeat: Infinity,
                    duration: Math.random() * 0.07 + 0.23
                  }}
                >
                  <p className="text-xl border-2 border-red-600 px-2 text-red-600 rounded-md">Skips: {skipWord}</p>
                </motion.div>
              }
            </AnimatePresence>
        </>
  )
}

export default Skips