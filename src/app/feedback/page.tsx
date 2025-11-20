import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { FeedbackLink } from './components/FeedbackLink'
import { AnimatedCard } from '@/components/ui/animated-card'

export default function FeedbackPage() {
  return (
    <PageTransition>
      <Container className="pb-20 md:pb-10  md:pt-5 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Zpětná vazba</h1>
          
          <div className="space-y-6">
            <AnimatedCard delay={0.1} className="bg-white">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Vaše zpětná vazba</h2>
                <p>
                  Vaše zpětná vazba je pro nás velmi cenná a pomáhá nám konference i další akce neustále zlepšovat. Budeme rádi, když se s námi podělíte o své dojmy, nápady a doporučení prostřednictvím krátkého formuláře.
                </p>
                <p>
                  Jako poděkování za váš čas se můžete zapojit do soutěže o <strong>speciální dárek od našeho sponzora Ofigo</strong>. Stačí vyplnit formulář se zpětnou vazbou a uvést svůj e-mail, abychom vás mohli zařadit do losování. Na konci konference vylosujeme jednoho výherce.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="text-center bg-white">
              <FeedbackLink />
            </AnimatedCard>
          </div>
        </div>
      </Container>
    </PageTransition>
  )
} 