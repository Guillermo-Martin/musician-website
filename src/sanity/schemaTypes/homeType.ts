import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "page",
  title: "Homepage",
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
      initialValue: { current: "/" }
    }),
    defineField({
      name: "short_description",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt_text",
          type: "string"
        }
      ]
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
});

// adding alt text for images:  https://www.sanity.io/answers/best-practice-for-specifying-alt-text-for-images-in-block-text-using-sanity