
import { useContext } from "react";
import ContextFile, { NavContext } from "./components/context/context";
import Footer from "./components/footer";
import "./globals.css";
import Clientlayout from "./components/clientlayout";
import WebNav from "./components/webNav";


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
          <WebNav />
          {children}
          <Clientlayout />
        
         
        </ContextFile>
      </body>


    </html>
  );
}
