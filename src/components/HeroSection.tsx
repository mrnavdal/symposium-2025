'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/animations'

export function HeroSection() {
  return (
    <motion.div 
      className="relative h-[50vh] min-h-[350px] w-full"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/images/hero-image.jpg"
        alt="Conference hall"
        fill
        priority
        className="object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-black/40 rounded-2xl" />
      <motion.div 
        className="absolute inset-0 flex items-center justify-center text-white"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="text-center space-y-4 p-4">
          <motion.img
            src="/images/header_logo_white.png"
            alt="Symposium logo"
            width={500}
            height={100}
            className="text-4xl md:text-6xl font-bold drop-shadow-2xl"
            variants={fadeIn}
          />
          <motion.p 
            className="text-xl md:text-2xl font-semibold drop-shadow-lg"
            variants={fadeIn}
          >
            Změnou k úspěchu
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
} 