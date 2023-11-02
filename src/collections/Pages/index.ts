import type { CollectionConfig } from "payload/types";
import Hero from "./hero.field";

const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    // create: () => true,
    read: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Page Title",
      required: true,
    },
    // {
    //   type: "tabs",
    //   tabs: [
    //     {
    //       label: "Hero",
    //       fields: [Hero],
    //     },
    //     // {
    //     //   label: "Page Layout",
    //     //   fields: [
    //     //     {
    //     //       name: "layout",
    //     //       type: "blocks",
    //     //       blocks: [RichtextBlock],
    //     //     },
    //     //   ],
    //     // },
    //   ],
    // },
  ],
};

export default Pages;
