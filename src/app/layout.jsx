
import ContextFile from "./components/context/context";
import "./globals.css";


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
        </ContextFile>
      </body>


    </html>
  );
}
