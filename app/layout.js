import "../styles/main.scss";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wine | Website ",
  description: "Under construction by Desishub",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <MobileNav />
        {children}
        {/* FOoter Section */}
        <Footer />
      </body>
    </html>
  );
}
