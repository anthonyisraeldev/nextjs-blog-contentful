// import * as contentful from "contentful";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_DELIVERY_API || "",
});

export const fetchEntries = async (contentType: string) => {
  const entries = await client.getEntries({ content_type: contentType });
  return entries;
};
