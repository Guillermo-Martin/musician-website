import { defineField, defineType } from "sanity";

export const pianistType = defineType({
  name: "pianistPage",
  title: "Pianist",
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
      initialValue: { current: "pianist" }
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
    // array type:  https://www.sanity.io/docs/studio/array-type
    defineField({
      name: "performances",
      title: "Performances",
      description: "Add the links to your YouTube videos here.",
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
              name: 'youtube_share_link',
              title: 'YouTube share link',
              type: 'url'
            },
          ]
        }
      ]
    }),
    defineField({
      name: "cds",
      title: "CDs",
      description: "Add your CDs here.",
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
              name: 'cd_image',
              title: 'CD image',
              type: 'image',
              fields: [
                {
                  name: "alt_text",
                  type: "string"
                }
              ]
            },
            {
              name: "songs",
              title: "Songs",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Song",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "audio",
                      title: "Audio",
                      type: "file",
                      options: {
                        accept: "audio/*"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
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