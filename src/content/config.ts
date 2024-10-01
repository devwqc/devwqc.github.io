import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
