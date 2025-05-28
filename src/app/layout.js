import "./globals.css";
import { Metadata } from "next";

// import localFont from "next/font/local";

const geistSans = ({
  // src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = ({
  // src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Adventure Activities in Khajjiar Dalhousie | Mini Switzerland India | Adventures Heaven",
  description: "Experience thrilling paragliding, hot air balloon & ziplining in Khajjiar - Mini Switzerland of India. Book adventure activities in Dalhousie with Adventures Heaven. Call +91 98174 04544",
  keywords: [
    "paragliding Khajjiar Dalhousie",
    "paragliding in Khajjiar",
    "Khajjiar adventure activities",
    "Dalhousie paragliding",
    "Mini Switzerland India",
    "Hot air balloon Khajjiar",
    "Adventure sports Himachal Pradesh",
    "Best paragliding in Khajjiar Dalhousie",
    "Ziplining adventure activities Khajjiar",
    "Things to do in Khajjiar Dalhousie",
    "Adventure tourism Himachal Pradesh",
    "Khajjiar tourism",
    "Adventures Heaven Dalhousie"
  ],
  authors: [{ name: "Adventures Heaven" }],
  creator: "Adventures Heaven",
  publisher: "Adventures Heaven",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adventuresheaven.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Adventure Activities in Khajjiar Dalhousie | Mini Switzerland India",
    description: "Experience thrilling paragliding, hot air balloon & ziplining in Khajjiar - Mini Switzerland of India. Book with Adventures Heaven.",
    url: 'https://adventuresheaven.com',
    siteName: 'Adventures Heaven',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adventure Activities in Khajjiar Dalhousie - Mini Switzerland of India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adventure Activities in Khajjiar Dalhousie | Adventures Heaven',
    description: 'Experience paragliding, hot air balloon & ziplining in Mini Switzerland of India',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://adventuresheaven.com/#business",
        "name": "Adventures Heaven Dalhousie",
        "description": "Leading adventure tourism company in Khajjiar and Dalhousie offering paragliding, hot air balloon, and ziplining activities in Mini Switzerland of India",
        "url": "https://adventuresheaven.com",
        "telephone": "+91-9817404544",
        "priceRange": "₹1000-₹3500",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Khajjiar",
          "addressLocality": "Dalhousie",
          "addressRegion": "Himachal Pradesh",
          "postalCode": "176314",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.5499,
          "longitude": 76.0455
        },
        "openingHours": [
          "Mo-Su 06:00-19:00"
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 32.5499,
            "longitude": 76.0455
          },
          "geoRadius": "50000"
        },
        "areaServed": [
          "Khajjiar",
          "Dalhousie",
          "Dharamshala",
          "Himachal Pradesh"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Adventure Activities",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Paragliding in Khajjiar",
                "description": "Professional tandem paragliding experience in Mini Switzerland of India"
              },
              "price": "1500",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hot Air Balloon Khajjiar",
                "description": "First hot air balloon experience in Khajjiar with panoramic views"
              },
              "price": "1500",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ziplining Adventure",
                "description": "High-speed ziplining through dense forests of Khajjiar"
              },
              "price": "1000",
              "priceCurrency": "INR"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "89",
          "bestRating": "5",
          "worstRating": "1"
        },
        "image": [
          "https://adventuresheaven.com/images/paragliding-khajjiar.jpg",
          "https://adventuresheaven.com/images/hot-air-balloon-khajjiar.jpg",
          "https://adventuresheaven.com/images/ziplining-khajjiar.jpg"
        ],
        "sameAs": [
          "https://www.instagram.com/adventures_heaven_dalhousie",
          "https://www.facebook.com/adventuresheaven",
          "https://wa.me/9817404544"
        ]
      },
      {
        "@type": "TouristDestination",
        "@id": "https://adventuresheaven.com/#destination",
        "name": "Khajjiar - Mini Switzerland of India",
        "description": "Picturesque hill station in Himachal Pradesh known for adventure activities and natural beauty",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.5499,
          "longitude": 76.0455
        },
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Himachal Pradesh",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        },
        "touristType": [
          "Adventure Enthusiasts",
          "Nature Lovers",
          "Photography Enthusiasts",
          "Thrill Seekers"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://adventuresheaven.com/#website",
        "url": "https://adventuresheaven.com",
        "name": "Adventures Heaven",
        "description": "Best adventure activities in Khajjiar Dalhousie - Mini Switzerland of India",
        "publisher": {
          "@id": "https://adventuresheaven.com/#business"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://adventuresheaven.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://adventuresheaven.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://adventuresheaven.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Adventure Activities",
            "item": "https://adventuresheaven.com/activities"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Khajjiar Adventures",
            "item": "https://adventuresheaven.com/khajjiar"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://adventuresheaven.com" />
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Khajjiar, Dalhousie" />
        <meta name="geo.position" content="32.5499;76.0455" />
        <meta name="ICBM" content="32.5499, 76.0455" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
