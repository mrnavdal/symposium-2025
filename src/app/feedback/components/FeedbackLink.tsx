'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const FEEDBACK_FORM_URL = 'https://form.typeform.com/to/av75ObeW'

export function FeedbackLink() {
  const openFeedbackForm = () => {
    window.open(FEEDBACK_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="space-y-4">
      <Button 
        onClick={openFeedbackForm}
        size="lg"
        className="group"
      >
        Vyplnit zpětnou vazbu
        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  )
} 