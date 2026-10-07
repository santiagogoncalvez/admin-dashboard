import { inter } from "./ui/fonts";
import "./ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: {
      template: "%s | Admin Dashboard",
      default: "Admin Dashboard",
   },
   description:
      "Aplicación full-stack de administración de Santiago Goncalvez",
   metadataBase: new URL("https://santiagogoncalvez.com"),
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="es" className={`${inter.className} antialiased`}>
         <body>
            {children}
         </body>
      </html>
   );
}
