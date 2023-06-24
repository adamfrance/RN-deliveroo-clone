import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const sanityClient = createClient({
  projectId: "jes6nrtm",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-10-19",
});

const builder = ImageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export default sanityClient;
