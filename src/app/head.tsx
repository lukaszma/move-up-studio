import { LocalBusiness } from "./structured-data";
import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>
        Zajęcia Pole Dance & Aerial Hoop | Move Up Studio Częstochowa
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Szukasz zajęć Pole Dance lub Aerial Hoop w Częstochowie? Nie szukaj dalej niż Move Up Studio! Oferujemy zajęcia z obu dyscyplin dla wszystkich poziomów doświadczenia."
      />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      ></meta>
       <meta name="keywords" content="pole, dance, poledance, aerial, hoop, sport, częstochowa, aktywność, zajęcia, ruch, taniec"></meta>

      <meta
        property="og:title"
        content="Zajęcia Pole Dance & Aerial Hoop | Move Up Studio"
      />
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:description"
        content="Szukasz zajęć Pole Dance lub Aerial Hoop w Częstochowie? Nie szukaj dalej niż Move Up Studio! Oferujemy zajęcia z obu dyscyplin dla wszystkich poziomów doświadczenia."
      />
      <meta property="og:image" content="/android-chrome-192x192.png" />
      <meta property="og:url" content="https://moveupstudio.pl/"></meta>
      <meta property="og:site_name" content="Move Up Studio"></meta>

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href="https://moveupstudio.pl/"></link>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={LocalBusiness()}
      />
    </>
  );
}
