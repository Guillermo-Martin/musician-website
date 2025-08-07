import { defineField, defineType } from "sanity";

export const ethnomusicologyType = defineType({
  name: "ethnomusicologyPage",
  title: "Ethnomusicology",
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
      initialValue: { current: "ethnomusicology" }
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
      title: "Hero image",
      type: "image",
      fields: [
        {
          name: "alt_text",
          type: "string"
        }
      ]
    }),
    defineField({
      name: "section_1",
      title: "Section #1 Title",
      type: "string",
    }),
    // array type:  https://www.sanity.io/docs/studio/array-type
    defineField({
      name: "works_1",
      title: "Section #1 works",
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
              name: 'description',
              title: 'Description',
              type: 'text'
            },
          ]
        }
      ]
    }),
    defineField({
      name: "section_2",
      title: "Section #2 Title",
      type: "string",
    }),
    // array type:  https://www.sanity.io/docs/studio/array-type
    defineField({
      name: "works_2",
      title: "Section #2 works",
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
              name: 'description',
              title: 'Description',
              type: 'text'
            },
          ]
        }
      ]
    }),
    defineField({
      name: "section_3",
      title: "Section #3 Title",
      type: "string",
    }),
    // array type:  https://www.sanity.io/docs/studio/array-type
    defineField({
      name: "works_3",
      title: "Section #3 works",
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
              name: 'description',
              title: 'Description',
              type: 'text'
            },
          ]
        }
      ]
    }),
    defineField({
      name: "section_4",
      title: "Section #4 Title",
      type: "string",
    }),
    // array type:  https://www.sanity.io/docs/studio/array-type
    defineField({
      name: "works_4",
      title: "Section #4 works",
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
              name: 'description',
              title: 'Description',
              type: 'text'
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