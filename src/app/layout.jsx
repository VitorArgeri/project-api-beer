import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/page.jsx";
import Footer from "../Components/Footer/page.jsx";

export const metadata = {
  title: "Beer App",
  description: "Aplicativo para visualizar informações sobre cervejas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
