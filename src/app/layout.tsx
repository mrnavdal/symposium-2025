import type { Metadata } from "next";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import "@/styles/globals.css";
import '@/styles/calendar.css'
import { ClientAnimatePresence } from "@/components/ClientAnimatePresence";
export const metadata: Metadata = {
  title: "Symposium 2025",
  description: "Webová brožura pro konferenci Symposium 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans`}>
        <div 
          className="fixed inset-0 w-full h-full -z-10"
          style={{
            backgroundImage: "url('/images/hero-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="fixed inset-0 bg-black/40" />
        </div>
        
        <ClientAnimatePresence>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
              <Navigation />
              <div className="md:ml-[280px] pt-4">
                <main className="w-full">
                  {children}
                </main>
              </div>
            </div>
          </ThemeProvider>
        </ClientAnimatePresence>
      </body>
    </html>
  );
}
