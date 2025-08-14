import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const ContactSection = () => {
  const { t } = useLanguage();

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const data = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    empresa: formData.get("empresa"),
    situacion: formData.get("situacion")
  };

  try {
    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (res.ok) alert("Mensaje enviado correctamente");
    else alert("❌ " + result.message);
  } catch (err) {
    alert("❌ Error al enviar el mensaje");
    console.error(err);
  }
};


  return (
    <section id="contacto" className="py-16 border-t">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <header className="mb-8">
            <h2 className="text-2xl font-semibold">{t("contact.title")}</h2>
            <p className="text-muted-foreground">{t("contact.description")}</p>
          </header>

          <form className="grid gap-6 sm:grid-cols-2" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="nombre">{t("contact.name")}</Label>
              <Input id="nombre" name="nombre" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="empresa">{t("contact.company")}</Label>
              <Input id="empresa" name="empresa" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="situacion">{t("contact.message")}</Label>
              <Textarea id="situacion" name="situacion" rows={5} />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full sm:w-auto">
                {t("contact.send")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

