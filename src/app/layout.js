import localFont from "next/font/local";
import Head from "next/head"; // Import Head component
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Updated metadata for SEO
export const metadata = {
  title: "egniol",
  description: "WE ARE EGNIOL Your dedicated partners in business growth. Experts in Taxes, Funding, and Marketing success",
  keywords: "EGNIOL, SEO, business growth, Funding",
  author: "Ak",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href="https://egniol-website-assignment.vercel.app/" />
        {/* Add structured data if necessary */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: metadata.title,
            description: metadata.description,
            url: "https://yourdomain.com", // Change this to your actual URL
          })}
        </script>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="mainBack">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
