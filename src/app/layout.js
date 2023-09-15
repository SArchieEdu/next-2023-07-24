import { Header } from "@/components/Header/component";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
        <header>footer</header>
      </body>
    </html>
  );
}
