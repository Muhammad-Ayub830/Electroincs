
import "./globals.css";


export const metadata = {
  title: "Haq Electronics",
  description: "The World of Electronics With Haq Electronics",
  icons:{
    icon: "/logo.png",
    apple:"logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
              <script
  type="module"
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
></script>
      </body>


    </html>
  );
}
