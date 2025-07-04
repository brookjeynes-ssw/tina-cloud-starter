import type { Collection } from "tinacms";

const Author: Collection = {
  label: "Authors",
  name: "author",
  path: "content/authors",
  format: "md",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Nickname",
      name: "nickname",
    },
    {
      type: "image",
      label: "Avatar",
      name: "avatar",
      // @ts-ignore
      uploadDir: () => "authors",
    },
  ],
};
export default Author;
