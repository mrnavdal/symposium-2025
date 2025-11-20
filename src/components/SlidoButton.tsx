'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const SLIDO_URL = 'https://app.sli.do/event/sr3Ftdf77pB8frASuWCaLQ/live/questions'

export function SlidoButton() {
  const openSlido = () => {
    window.open(SLIDO_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button 
      onClick={openSlido}
      size="lg"
      className="group"
    >
      Zeptejte se našich speakerů
      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  )
}

