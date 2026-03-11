
import { useContext } from "react";
import ContextFile, { NavContext } from "./components/context/context";
import Footer from "./components/footer";
import "./globals.css";
import Clientlayout from "./components/clientlayout";


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
          {children}
          <Clientlayout />
        
         
        </ContextFile>
      </body>


    </html>
  );
}
