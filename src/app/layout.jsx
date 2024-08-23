import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google"
export const metadata = {
  title: "DescuentApp",
  description: "La app que te da los mejores descuentos en los negocios de tu zona"
};

const poppins = Poppins({
  weight: '400', // o '700' si necesitas la fuente en negrita
  subsets: ['latin'], // Especifica los subconjuntos que necesitas
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`w-full h-screen bg-custom-red ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
