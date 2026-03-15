
import { useContext } from "react";
import ContextFile, { NavContext } from "./components/context/context";
import Footer from "./components/footer";
import "./globals.css";
import Clientlayout from "./components/clientlayout";
import WebNav from "./components/webNav";
import Clientlayout2 from "./components/clientlayout2";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Haq Electronics",
  description: "The World of Electronics With Haq Electronics",
  icons: {
    icon: "/logo.png",
    apple: "logo.png"
  }
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body>
        <ContextFile>
          <Clientlayout2 />
          {children}
                  <Toaster position="top-right" reverseOrder={false} />

          <Clientlayout />
        
         
        </ContextFile>
      </body>


    </html>
  );
}
