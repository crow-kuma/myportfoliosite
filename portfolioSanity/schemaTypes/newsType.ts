import {defineField, defineType} from 'sanity'

export const newsType = defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      type: 'date',
      initialValue: new Date().toISOString().slice(0, 10),
    }),
    defineField({
      name: 'article',
      type: 'text',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'public',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
