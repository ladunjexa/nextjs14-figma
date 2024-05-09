import React from "react";
import type { Metadata } from "next";
import { Work_Sans as WorkSans } from "next/font/google";

import "./globals.css";
import RoomProvider from "@/providers/room-provider";

const workSans = WorkSans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figma — The Collaborative Interface Design Tool",
  description:
    "Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single platform.",
  // A minimalistic Figma Clone using Fabric.js and Liveblocks for real-time collaboration
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <RoomProvider>{children}</RoomProvider>
      </body>
    </html>
  );
}
