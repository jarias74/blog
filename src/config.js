// src/config.ts

// NOTA: No cambies el nombre de esta variable 'PandaConfig',
// porque utils/locale.ts depende de ella.
export const PandaConfig = {
  title: "Tu Nombre Blog",
  description: "Ingeniería, vida y código.",
  start: "2024",
  site: "https://tu-blog-futuro.com", // Pon tu URL o localhost temporalmente
  defaultLocale: "es", // IMPORTANTE: Esto arregla el error del 'defaultLocale' undefined
  navbar: [
    { title: "Posts", url: "/" }, // En Panda, el home suele ser la lista de posts
    { title: "About", url: "/about" },
  ],
  footer: [
    { title: "RSS", url: "/rss.xml" },
    { title: "GitHub", url: "https://github.com/tu-usuario" },
  ]
};