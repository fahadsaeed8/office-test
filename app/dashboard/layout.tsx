import React from "react";
import type { Metadata } from "next";
// import "./globals.css"; // Keep your global styles if necessary
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
      <div className="bg-white p-5">
      </div>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 p-6 bg-[#F7F8FA] h-[1220px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
