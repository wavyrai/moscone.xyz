import { generateOgImage, ogImageExports } from "@/lib/og-image";

export const { alt, size, contentType } = ogImageExports("Moscone Holding B.V.");

export default generateOgImage({
  title: "Moscone Holding B.V.",
  subtitle: "A technology investment company",
});
