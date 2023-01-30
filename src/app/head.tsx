import { LocalBusiness } from "./structured-data";

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
        property="og:title"
        content="Zajęcia Pole Dance & Aerial Hoop | Move Up Studio"
      />
      <meta
        property="og:description"
        content="Szukasz zajęć Pole Dance lub Aerial Hoop w Częstochowie? Nie szukaj dalej niż Move Up Studio! Oferujemy zajęcia z obu dyscyplin dla wszystkich poziomów doświadczenia."
      />
      <meta property="og:image" content="/android-chrome-192x192.png" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* <script
        type="application/ld+json"
        key="structured-data"
        dangerouslySetInnerHTML={{__html: ''}}
      /> */}
    </>
  );
}
