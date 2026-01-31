"use client";

import "./globals.css";

import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import { Suspense, useEffect } from "react";

// export const metadata = {
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
// };


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
