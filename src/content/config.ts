import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Equipe Conecta Phone'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const conserto = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    device: z.string(),
    generation: z.string(),
    models: z.array(z.string()),
    services: z.array(z.string()),
    heroText: z.string(),
  }),
});

export const collections = { blog, conserto };
