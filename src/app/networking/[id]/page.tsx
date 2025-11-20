import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { AnimatedCard } from '@/components/ui/animated-card'
import { speakers } from '@/data/speakers'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Instagram, Globe, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SpeakerDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function SpeakerDetailPage({ params }: SpeakerDetailPageProps) {
  const { id } = await params
  const speaker = speakers.find(s => s.id === id)
  
  if (!speaker) {
    notFound()
  }

  const getIconForSocialLink = (type: string) => {
    switch (type) {
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />
      case 'instagram':
        return <Instagram className="h-5 w-5" />
      case 'web':
        return <Globe className="h-5 w-5" />
      default:
        return <Globe className="h-5 w-5" />
    }
  }

  return (
    <PageTransition>
      <Container className="pb-20 md:pb-10 md:pt-5 min-h-screen">
        <Link href="/networking">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zpět na seznam
          </Button>
        </Link>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Left column - Image and basic info */}
          <div className="md:col-span-1">
            <AnimatedCard delay={0.1} className="bg-white">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h1 className="text-2xl font-bold text-center">{speaker.name}</h1>
                
                {speaker.isWorkshop && (
                  <span className="inline-block px-4 py-2 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
                    Workshop
                  </span>
                )}

                {speaker.socialLinks && speaker.socialLinks.length > 0 && (
                  <div className="flex gap-3 pt-4">
                    {speaker.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-secondary transition-colors"
                      >
                        {getIconForSocialLink(link.type)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedCard>
          </div>

          {/* Right column - Details */}
          <div className="md:col-span-2 space-y-6">
            <AnimatedCard delay={0.2} className="bg-white">
              <h2 className="text-xl font-bold mb-4">O speakerovi</h2>
              <p className="whitespace-pre-line">{speaker.bio}</p>
            </AnimatedCard>

            {speaker.keynote && (
              <AnimatedCard delay={0.3} className="bg-white">
                <h2 className="text-xl font-bold mb-4">
                  {speaker.isWorkshop ? 'Workshop' : 'Keynote'}
                </h2>
                <p className="font-semibold text-lg mb-2">{speaker.keynote}</p>
                {speaker.annotation && (
                  <p className="whitespace-pre-line">{speaker.annotation}</p>
                )}
              </AnimatedCard>
            )}
          </div>
        </div>
      </Container>
    </PageTransition>
  )
}

export async function generateStaticParams() {
  return speakers.map((speaker) => ({
    id: speaker.id,
  }))
}

