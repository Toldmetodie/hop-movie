import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layouts/header";

export const metadata: Metadata = {
  title: {
    template: "MovieZ - %s",
    default: "MovieZ - Discover Your Favorite Movies",
  },
  description:
    "Welcome to MovieZ, the ultimate destination for movie enthusiasts. Explore the latest films, trailers, reviews, and more.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="sytem"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
