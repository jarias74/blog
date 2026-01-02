// src/config.ts

// ¡OJO AQUÍ! NO uses 'export default'.
// Debe ser 'export const PandaConfig' para que los otros archivos lo encuentren.

export const PandaConfig = {
  title: "Javi Arias",
  description: "Ingeniería, vida y código.",
  start: "2024",
  site: "https://javiarias.es",
  defaultLocale: "es", // Esta es la línea que estaba dando el error de "undefined"
  navbar: [
    { title: "Posts", url: "/" },
    { title: "About", url: "/about" },
  ],
  footer: [
    { title: "RSS", url: "/rss.xml" },
    { title: "GitHub", url: "https://github.com/tu-usuario" }, // Cambia esto por tu user real
  ]
};

// Algunos archivos del tema pueden buscar una exportación por defecto 'SITE'.
// Para evitar errores, añadimos esto también por compatibilidad:
export const SITE = PandaConfig;