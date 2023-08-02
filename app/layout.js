import "../styles/main.scss";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        {children}
        {/* FOoter Section */}
        <Footer />
      </body>
    </html>
  );
}
