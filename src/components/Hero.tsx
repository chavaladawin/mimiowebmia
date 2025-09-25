import { Button } from "@/components/ui/button";
import { PiggyBank, Banknote, Building2, CreditCard, LineChart, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DecoIcon = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`absolute text-hero-foreground/25 ${className}`}>{children}</div>
);

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container py-16 md:py-24 text-center mx-auto px-4 sm:px-0">
        {/* TÍTULO LIBRE (centrado y ajustado específicamente en móviles) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-hero-foreground max-w-[85%] sm:max-w-[90%] md:max-w-none mx-auto text-center">
          <span className="block">
            {t("hero.title.part1")}
            <span className="underline font-black">{t("hero.title.rentable")}</span>
          </span>
          <span
            className="block"
            dangerouslySetInnerHTML={{ __html: t("hero.title.estrategia") }}
          />
        </h1>
        {/* SUBTÍTULO Y CTA ENCAJONADOS */}
        <div className="max-w-2xl mx-auto mt-6">
          <p className="text-sm md:text-lg uppercase tracking-[0.1em] text-hero-foreground/80 text-center">
            {t("hero.subtitle")}
          </p>
          {/* Botones CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              asChild
              aria-label={t("hero.cta")}
              className="bg-white text-hero hover:bg-white/90 shadow-lg font-bold px-8 py-4 text-lg border-2 border-white w-full sm:w-auto"
            >
              <a href="#contacto">{t("hero.cta")}</a>
            </Button>
            <Button
              size="xl"
              asChild
              aria-label={t("hero.whatsapp")}
              className="bg-green-500 text-white hover:bg-green-600 shadow-lg font-bold px-10 py-4 text-lg rounded-xl w-full sm:w-[260px]"
            >
              <a
                href={`https://wa.me/34657169972?text=${encodeURIComponent(
                  t("hero.whatsappMessage")
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.whatsapp")}
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative floating icons */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute text-hero-foreground/25 right-8 top-12 float-slow">
          <PiggyBank size={40} />
        </div>
        <div className="absolute text-hero-foreground/25 right-24 top-40 float-slow">
          <Banknote size={36} />
        </div>
        <div className="absolute text-hero-foreground/25 right-10 top-72 float-slow">
          <CreditCard size={38} />
        </div>
        <div className="absolute text-hero-foreground/25 right-28 top-[28rem] float-slow">
          <Building2 size={44} />
        </div>
        <div className="absolute text-hero-foreground/25 right-8 top-[36rem] float-slow">
          <LineChart size={40} />
        </div>
        <div className="absolute text-hero-foreground/25 right-32 top-[44rem] float-slow">
          <Briefcase size={40} />
        </div>
      </div>
    </section>
  );
};

export default Hero;