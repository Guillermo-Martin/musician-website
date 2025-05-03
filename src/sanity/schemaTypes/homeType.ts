import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "short_description",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image"
    }),
    defineField({
      name: "audio",
      title: "Audio",
      type: "file",
      options: {
        accept: "audio/*"
      }
    }),
  ],
})