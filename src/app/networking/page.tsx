import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { AnimatedCard } from '@/components/ui/animated-card'
import { SlidoButton } from '@/components/SlidoButton'
import { speakers } from '@/data/speakers'
import Link from 'next/link'
import Image from 'next/image'

export default function NetworkingPage() {
  return (
    <PageTransition>
      <Container className="pb-20 md:pb-10 md:pt-5 min-h-screen">
        <div className="mb-6 flex justify-center">
          <SlidoButton />
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Speakeři</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <Link key={speaker.id} href={`/networking/${speaker.id}`}>
              <AnimatedCard 
                delay={index * 0.05} 
                className="h-full cursor-pointer hover:border-primary transition-colors bg-white"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{speaker.name}</h3>
                    
                    {speaker.isWorkshop && (
                      <span className="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
                        Workshop
                      </span>
                    )}
                    
                    <p className="text-sm line-clamp-3">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </Container>
    </PageTransition>
  )
} 