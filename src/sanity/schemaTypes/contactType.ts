import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contactPage",
  title: "Contact",
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
      initialValue: { current: "contact" }
      // options: {source: "page_title"},
      // validation: (rule) => rule
      //   .required()
      //   .error(`Required to generate a page on the website`),
    }),
    defineField({
      name: "short_description",
      type: "string",
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