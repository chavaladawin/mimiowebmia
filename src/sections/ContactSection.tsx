import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      empresa: formData.get('empresa'),
      situacion: formData.get('situacion')
    };
    
    // Create mailto link
    const subject = encodeURIComponent('Consulta desde web - Nuovo Finance');
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmail: ${data.email}\nEmpresa: ${data.empresa}\n\nSituación:\n${data.situacion}`
    );
    window.location.href = `mailto:ers.iesvalles@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-16 border-t">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <header className="mb-8">
 	     <h2 className="text-2xl font-semibold">{t('contact.title')}</h2>
 	     <p className="text-muted-foreground">{t('contact.description')}</p>
	  </header>
          <form className="grid gap-6 sm:grid-cols-2" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="nombre">{t('contact.name')}</Label>
              <Input id="nombre" name="nombre" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('contact.email')}</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="empresa">{t('contact.company')}</Label>
              <Input id="empresa" name="empresa" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="situacion">{t('contact.message')}</Label>
              <Textarea id="situacion" name="situacion" rows={5} />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full sm:w-auto">{t('contact.send')}</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
