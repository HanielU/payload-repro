import type { Field } from "payload/types";

const Hero: Field = {
  name: "hero",
  label: false,
  type: "group",
  fields: [
    {
      name: "content",
      type: "richText",
    },
  ],
};

export default Hero;
