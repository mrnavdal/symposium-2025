import { Calendar } from '@/components/Calendar'
import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { SlidoButton } from '@/components/SlidoButton'
import { events } from '@/data/events'

export default function SchedulePage() {
  return (
    <PageTransition>
                <Container className="h-[calc(100vh-6rem)] md:h-[calc(100vh-2rem)] flex flex-col md:pt-5 pb-24 md:pb-10">

            <div className="flex justify-between items-center mb-4 flex-shrink-0">
                <h1 className="text-2xl font-semibold text-foreground">Časový rozvrh</h1>
                <SlidoButton />
            </div>
            <div className="flex-1 min-h-0 rounded-lg overflow-auto border bg-card/50">
                <Calendar events={events} />
            </div>
        </Container>
    </PageTransition>
  )
}