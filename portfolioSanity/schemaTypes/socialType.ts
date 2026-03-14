import {defineField, defineType} from 'sanity'

export const socialType = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'illustration', value: 'illustration'},
          {title: 'tech', value: 'tech'},
          {title: 'other', value: 'other'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'illustration',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],
})
