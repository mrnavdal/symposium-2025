import { SocialLinks } from '@/components/SocialLinks'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/ui/container'
import { PageTransition } from '@/components/PageTransition'
import { AnimatedCard } from '@/components/ui/animated-card'
import '@/styles/globals.css'; 
import '@/styles/calendar.css';


export default function HomePage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Content */}
        <div className="relative">
          <Container className="min-h-screen">
            {/* Logo and Title */}
            <div className="pt-16 md:pt-24 pb-12 md:pb-16 text-center">
              <img
                src="/images/header_logo_white.png"
                alt="Symposium logo"
                className="mx-auto mb-6 max-w-md w-full px-4"
              />
              <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg">
                Změnou k úspěchu
              </p>
            </div>

            <main className="px-2 pb-20 space-y-6">
              <AnimatedCard className="max-w-3xl mx-auto text-center bg-white" delay={0.2}>
                <h2 className="text-3xl font-bold mb-4">Vítej na Symposiu</h2>
                <p className="text-lg">
                   Přidej se k nám na celý den plný přednášek, workshopů a networkingu s významnými lidmi z oblasti businessu.
                </p>
              </AnimatedCard>

              {/* Logistika */}
              <div className="max-w-4xl mx-auto space-y-4">
                <AnimatedCard delay={0.3} className="bg-white">
                  <h2 className="text-2xl font-bold mb-4">Parkování</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Vlněná</h3>
                      <p className="mb-2">
                        Placené parkoviště pro veřejnost s kapacitou 128 parkovacích míst se nachází v 1. podzemním podlaží garáží Vlněna Business Park a je přístupné 24/7.
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Prvních 30 minut: ZDARMA</li>
                        <li>Každá další hodina: 60 Kč</li>
                      </ul>
                      <a 
                        href="https://ctp.eu/cs/vlnena/parking-vlnena-in-brno/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-block mt-2"
                      >
                        Více informací →
                      </a>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Vaňkovka Brno</h3>
                      <p className="mb-2">
                        Na střeše Galerie Vaňkovka se nachází 1.000 parkovacích míst. Platit můžete hotově i kartou.
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Prvních 15 minut zdarma</li>
                        <li>První 2 hodiny parkování 30 Kč</li>
                        <li>Každá další hodina 30 Kč</li>
                      </ul>
                      <a 
                        href="https://www.galerie-vankovka.cz/o-centru/navigace-a-parkovani/parkovani/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-block mt-2"
                      >
                        Více informací →
                      </a>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.4} className="bg-white">
                  <h2 className="text-2xl font-bold mb-3">Veřejná doprava</h2>
                  <p className="mb-3">
                    Do Clubca se dostanete z hlavního nádraží tramvají č.12, ze zastávky Úzká, nebo tramvají č.8 a č.9 ze zastávky Vlhká.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/s5TEe1A83m6zmEni9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-block"
                  >
                    Zobrazit na mapě →
                  </a>
                </AnimatedCard>
              </div>

              <SocialLinks />
            </main>
          </Container>
        </div>
      </div>
    </PageTransition>
  )
}
