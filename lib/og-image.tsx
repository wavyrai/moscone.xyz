import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

export type OgImageProps = {
  title: string;
  subtitle?: string;
};

export function ogImageExports(title: string) {
  return {
    alt: title,
    size: OG_SIZE,
    contentType: "image/png" as const,
  };
}

async function fetchGoogleFont(fontFamily: string, weight: number) {
  const API = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(" ", "+")}:wght@${weight}&display=swap`;

  const css = await fetch(API, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
    },
  }).then((res) => res.text());

  const fontUrl = css.match(/src: url\((.+?)\)/)?.[1];
  if (!fontUrl) {
    throw new Error(`Could not find font URL for ${fontFamily}`);
  }

  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export function generateOgImage(props: OgImageProps) {
  const { title, subtitle } = props;

  return async function Image() {
    const [serifRegular, serifBold] = await Promise.all([
      fetchGoogleFont("Libre Baskerville", 400),
      fetchGoogleFont("Libre Baskerville", 700),
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px 80px",
            backgroundColor: "#ffffff",
            fontFamily: "Libre Baskerville",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: title.length > 30 ? 56 : 72,
                fontWeight: 700,
                color: "#000000",
                lineHeight: 1.1,
                maxWidth: "1000px",
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  fontSize: 28,
                  color: "#666666",
                  fontWeight: 400,
                  maxWidth: "800px",
                  lineHeight: 1.4,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>
        </div>
      ),
      {
        ...OG_SIZE,
        fonts: [
          {
            name: "Libre Baskerville",
            data: serifRegular,
            style: "normal",
            weight: 400,
          },
          {
            name: "Libre Baskerville",
            data: serifBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  };
}
