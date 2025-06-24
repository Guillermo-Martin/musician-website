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
    defineField({
      name: "song1_title",
      title: "Song #1 title",
      type: "string",
    }),
    defineField({
      name: "song1_date",
      title: "Song #1 date",
      type: "string",
    }),
    defineField({
      name: "song1_audio_file",
      title: "Song #1 audio file",
      type: "file",
      options: {
        accept: "audio/*"
      }
    }),
    defineField({
      name: "song2_title",
      title: "Song #2 title",
      type: "string",
    }),
    defineField({
      name: "song2_date",
      title: "Song #2 date",
      type: "string",
    }),
    defineField({
      name: "song2_audio_file",
      title: "Song #2 audio file",
      type: "file",
      options: {
        accept: "audio/*"
      }
    }),
    defineField({
      name: "song3_title",
      title: "Song #3 title",
      type: "string",
    }),
    defineField({
      name: "song3_date",
      title: "Song #3 date",
      type: "string",
    }),
    defineField({
      name: "song3_audio_file",
      title: "Song #3 audio file",
      type: "file",
      options: {
        accept: "audio/*"
      }
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