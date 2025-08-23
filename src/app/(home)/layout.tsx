import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
import "../../app/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-row gap-5 items-start">
          <Sidebar />
          <section className="grow mt-5 m-5 relative space-y-10 ml-[250px]">
            <Navbar />
            <div className="w-[calc(100%-1rem)]"> {children}</div>
          </section>
        </section>
      </body>
    </html>
  );
}
