import {defineField, defineType} from 'sanity'

export const statusType = defineType({
  name: 'status',
  title: 'Status',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'OK', value: 'OK'},
          {title: 'NG', value: 'NG'},
          {title: 'Maybe', value: 'Maybe'},
        ],
        layout: 'radio',
      },
      initialValue: 'OK',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      rows: 3,
    }),
  ],
})
