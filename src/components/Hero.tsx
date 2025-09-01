import { Button } from "@/components/ui/button";
import { PiggyBank, Banknote, Building2, CreditCard, LineChart, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DecoIcon = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`absolute text-hero-foreground/25 ${className}`}>{children}</div>
);

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      <div className="bg-hero-gradient">
        <div className="container py-20 md:py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-hero-foreground md:text-6xl">
              {t('hero.title.part1')}
              <span className="font-black underline">{t('hero.title.rentable')}</span>
              {t('hero.title.part2')}
              <span className="font-black underline">{t('hero.title.estrategia')}</span>
              {t('hero.title.part3')}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-hero-foreground/80">
              {t('hero.subtitle')}
            </p>

            {/* Botones CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {/* Botón de consultoría */}
              <Button
                size="xl"
                asChild
                aria-label={t('hero.cta')}
                className="bg-white text-hero hover:bg-white/90 shadow-lg font-bold px-8 py-4 text-lg border-2 border-white"
              >
                <a href="#contacto">{t('hero.cta')}</a>
              </Button>

              {/* Botón de WhatsApp */}
              <Button
                size="xl"
                asChild
                aria-label={t('hero.whatsapp')}
                className="bg-green-500 text-white hover:bg-green-600 shadow-lg font-bold px-10 py-4 text-lg rounded-xl w-[260px]"
              >
                <a
                   href={`https://wa.me/34657169972?text=${encodeURIComponent(t('hero.whatsappMessage'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('hero.whatsapp')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating icons */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <DecoIcon className="right-8 top-12 float-slow"><PiggyBank size={40} /></DecoIcon>
        <DecoIcon className="right-24 top-40 float-slow"><Banknote size={36} /></DecoIcon>
        <DecoIcon className="right-10 top-72 float-slow"><CreditCard size={38} /></DecoIcon>
        <DecoIcon className="right-28 top-[28rem] float-slow"><Building2 size={44} /></DecoIcon>
        <DecoIcon className="right-8 top-[36rem] float-slow"><LineChart size={40} /></DecoIcon>
        <DecoIcon className="right-32 top-[44rem] float-slow"><Briefcase size={40} /></DecoIcon>
      </div>
    </section>
  );
};

export default Hero;

