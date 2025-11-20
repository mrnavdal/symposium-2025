import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { AnimatedCard } from '@/components/ui/animated-card'
import { partners, getCategoryLabel } from '@/data/partners'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PartnerDetailPageProps {
  params: {
    id: string
  }
}

export default function PartnerDetailPage({ params }: PartnerDetailPageProps) {
  const partner = partners.find(p => p.id === params.id)
  
  if (!partner) {
    notFound()
  }

  return (
    <PageTransition>
      <Container className="pb-20 md:pb-10 md:pt-5 min-h-screen">
        <Link href="/partners">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zpět na seznam
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <AnimatedCard delay={0.1} className="bg-white">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Left column - Logo */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                
                <span className="inline-block px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full">
                  {getCategoryLabel(partner.category)}
                </span>
              </div>

              {/* Right column - Details */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-4">{partner.name}</h1>
                  <p className="text-lg whitespace-pre-line">
                    {partner.description}
                  </p>
                </div>

                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Navštívit web
                </a>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </Container>
    </PageTransition>
  )
}

export async function generateStaticParams() {
  return partners.map((partner) => ({
    id: partner.id,
  }))
}

