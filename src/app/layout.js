import { Figtree } from "next/font/google";
import "./globals.css";
import ClientOnly from "./../components/ClientsOnly/ClientsOnly";
import toast, { Toaster } from 'react-hot-toast';

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata = {
  title: "My App",
  description: "Next.js + Tailwind Design System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable}`}>
      <body>
        <ClientOnly>{children}</ClientOnly>
        <Toaster />
      </body>
    </html>
  );
}
