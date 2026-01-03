// src/config.ts

export const PandaConfig = {
  title: "Javi Arias",
  description: "photo | web | media",
  start: "2024",
  site: "https://javiarias.es",
  defaultLocale: "es", 
  navbar: [
    { title: "About", url: "/about" },
  ],
  footer: [
    { title: "RSS", url: "/rss.xml" },
    { title: "GitHub", url: "https://github.com/jarias74" }, 
  ]
};

// Algunos archivos del tema pueden buscar una exportación por defecto 'SITE'.
// Para evitar errores, añadimos esto también por compatibilidad:
export const SITE = PandaConfig;