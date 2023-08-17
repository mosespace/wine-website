import "../styles/main.scss";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import { Context } from "./context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wine | Website ",
  description: "Under construction by Desishub",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Context>
        <body className={inter.className}>
          <Navbar />
          <MobileNav />
          {children}
          {/* FOoter Section */}
          <Footer />
        </body>
      </Context>
    </html>
  );
}
