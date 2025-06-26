import { defineField, defineType } from "sanity";

export const compositionsType = defineType({
  name: "compositionsPage",
  title: "Compositions",
  type: "document",
  fields: [
    defineField({
      name: "page_title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      readOnly: true,
      initialValue: { current: "compositions" }
      // options: {source: "page_title"},
      // validation: (rule) => rule
      //   .required()
      //   .error(`Required to generate a page on the website`),
    }),
    defineField({
      name: "short_description",
      type: "string",
    }),
    defineField({
      name: "hero_image",
      type: "image",
      fields: [
        {
          name: "alt_text",
          type: "string"
        }
      ]
    }),
    defineField({
      name: "subsection1_title",
      type: "string",
    }),
    defineField({
      name: "subsection1_description",
      type: "text",
    }),
    // array type:  https://www.sanity.io/docs/studio/array-type
    defineField({
      name: "works",
      title: "Works",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string'
            },
            {
              name: 'audio_file',
              title: 'Audio file',
              type: 'file',
              options: {
                accept: 'audio/*'
              }
            },
          ]
        }
      ]
    }),
    // * the defineField below is for being able to query all pages to make links
    defineField({
      name: "pageType",
      type: "string",
      readOnly: true,
      hidden: true,
      initialValue: "page"
    })
  ],
});