import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number(),
    icon: z.string(),
    draft: z.boolean().default(false),
    lastUpdated: z.string().optional(),
  }),
});

export const collections = { wiki };
