import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { AnimatedCard } from '@/components/ui/animated-card'
import { partners, getCategoryLabel, Partner } from '@/data/partners'
import Link from 'next/link'
import Image from 'next/image'

export default function PartnersPage() {
  const categories: Partner['category'][] = ['generalni_partner', 'cestny_partner', 'medialni_partner', 'sponzor']
  
  const getPartnersByCategory = (category: Partner['category']) => {
    return partners.filter(p => p.category === category)
  }

  return (
    <PageTransition>
      <Container className="pb-20 md:pb-10 md:pt-5 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Partneři a Sponzoři</h1>
        
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryPartners = getPartnersByCategory(category)
            if (categoryPartners.length === 0) return null
            
            return (
              <div key={category}>
                <h2 className="text-2xl font-semibold mb-6">{getCategoryLabel(category)}</h2>
                
                <div className={`grid gap-6 ${
                  category === 'generalni_partner' || category === 'cestny_partner' 
                    ? 'md:grid-cols-1 lg:grid-cols-2' 
                    : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {categoryPartners.map((partner, index) => (
                    <Link key={partner.id} href={`/partners/${partner.id}`}>
                      <AnimatedCard 
                        delay={index * 0.05} 
                        className="h-full cursor-pointer hover:border-primary transition-colors bg-white"
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className={`relative ${
                            category === 'generalni_partner' || category === 'cestny_partner'
                              ? 'w-48 h-48'
                              : 'w-32 h-32'
                          } rounded-lg overflow-hidden`}>
                            <Image
                              src={partner.logo}
                              alt={partner.name}
                              fill
                              className="object-contain p-4"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold">{partner.name}</h3>
                            
                            <p className="text-sm line-clamp-3">
                              {partner.description}
                            </p>
                          </div>
                        </div>
                      </AnimatedCard>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </PageTransition>
  )
}

