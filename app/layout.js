import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Akshit Agrawal | Developer",
  description: "A frontend developer, who loves to build things for web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <header className="">
          <Navbar />
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
