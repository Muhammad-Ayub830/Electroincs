
import "./globals.css";


export const metadata = {
  title: "Haq Electronics",
  description: "The World of Electronics With Haq Electronics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
