import { defineField, defineType } from "sanity";

export const eventsType = defineType({
  name: "eventsPage",
  title: "Events",
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
      initialValue: { current: "events" }
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
      name: "upcoming_events",
      title: "Upcoming events",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: 'date',
              title: 'Date',
              type: 'date',
              options: {
                dateFormat: 'MM-DD-YYYY',
              }
            },
            {
              name: 'time',
              title: 'Time',
              type: 'string'
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'link',
              title: 'Where to buy tickets (if applicable)',
              type: 'url',
              description: 'Enter the URL where people can buy tickets.  Otherwise, leave this blank.'
            }
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