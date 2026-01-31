// "use client";

import "./globals.css";


import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

// export const metadata = {
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
// };
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PureTollano Refinery",
    template: "%s | PureTollano Refinery",
  },

  description:
    "PureTollano Refinery is a modern petroleum refining company delivering high-quality refined products with a focus on efficiency, safety, and environmental responsibility.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "PureTollano Refinery",
    description:
      "A modern petroleum refinery committed to delivering high-quality refined products through advanced technology, safety standards, and sustainable operations.",
    url: "https://puretollano.com", // change if different
    siteName: "PureTollano Refinery",
    images: [
      {
        url: "/og-image.png", // put this in /public
        width: 1200,
        height: 630,
        alt: "PureTollano Refinery – Modern Petroleum Refining",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PureTollano Refinery",
    description:
      "Delivering high-quality petroleum products through innovation, efficiency, and responsible refining.",
    images: ["/og-image.png"],
  },

  keywords: [
    "PureTollano Refinery",
    "petroleum refinery",
    "oil and gas",
    "refined petroleum products",
    "energy industry",
    "fuel refining",
    "sustainable refining",
  ],

  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 


  return (
    <html lang="en">
      <head>
          <title>Home Page</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
  

      </head>
      <body
        // className={geistSans.className}
      >
     
   {/* <RecoilRoot> */}

       <Suspense fallback={  <div className="flex items-center justify-center py-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        <span className="ml-2"> ...</span>
      </div>}>
        {children}
   </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
   {/* </RecoilRoot> */}
    
      </body>
    </html>
  );
}
