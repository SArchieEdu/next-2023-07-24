import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>header</header>
        <div>{children}</div>
        <header>footer</header>
      </body>
    </html>
  );
}
