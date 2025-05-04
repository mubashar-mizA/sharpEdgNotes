import "./globals.css";
import SessionWraper from "./components/SessionWraper";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <SessionWraper>
          <div>
            <Navigation />
          </div>
          {children}

        </SessionWraper>
      </body>
    </html>
  );
}