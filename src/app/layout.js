import "./globals.css";

export const metadata = {
  title: "Netflix",
  description: "Vous adorez les tanukis?",
  manifest: "/manifest.webmanifest",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

