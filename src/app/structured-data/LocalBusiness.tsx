export const LocalBusiness = () => ({
  __html: `{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Move Up Studio",
    "image": "https://moveupstudio.pl/_next/image?url=%2Fandroid-chrome-192x192.png&w=256&q=75",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Maja 21",
      "addressLocality": "Częstochowa",
      "postalCode": "42-217",
      "addressCountry": "PL"
    },
    "priceRange": "$$",
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Łukasz"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.79863113105372,
      "longitude": 19.116222930685222
    },
    "url": "https://moveupstudio.pl",
    "telephone": "721 829 352",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Friday"],
        "opens": "16:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday"],
        "opens": "16:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday", "Thursday"],
        "opens": "16:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "13:00"
      }
    ],
    "acceptsReservations": "True"
  }`
});
