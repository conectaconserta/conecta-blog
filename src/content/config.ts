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
    heroTitle: z.string().optional(),
    // Texto curto da garantia (ex.: "3 a 6 meses", "3 meses"). Linhas como JBL têm prazo próprio.
    warranty: z.string().default('3 a 6 meses'),
    // Coleta e entrega em Recife. JBL não tem (decisão do dono, 25/08/2026).
    pickup: z.boolean().default(true),
    // Título do CTA final, quando "Seu <aparelho> precisa de reparo?" não soa bem.
    ctaTitle: z.string().optional(),
    heroText: z.string(),
  }),
});

export const collections = { blog, conserto };
