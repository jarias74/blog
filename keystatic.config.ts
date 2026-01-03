// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Artículos',
      slugField: 'title',
      path: 'src/content/posts/*', // Glob pattern para tus archivos MD/MDX actuales
      format: { contentField: 'content' }, // Separa frontmatter del body
      schema: {
        title: fields.slug({ 
          name: { label: 'Título' },
          slug: {
            label: 'Slug URL',
            description: 'Define la URL del post (ej: hola-mundo)',
          },
        }),
        description: fields.text({ 
          label: 'Descripción', 
          multiline: true,
          description: 'Usado para SEO y preview en el listado.' 
        }),
        pubDate: fields.date({ 
          label: 'Fecha de Publicación',
          defaultValue: { kind: 'today' } 
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Etiquetas',
            itemLabel: (props) => props.value,
          }
        ),
        content: fields.mdx({
          label: 'Contenido Markdown',
          options: {
            image: {
              // Las imágenes se guardan en public para acceso directo
              directory: 'public/images/posts',
              publicPath: '/images/posts/',
            },
          },
        }),
      },
    }),
  },
});