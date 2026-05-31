import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant POS Sales Forecaster",
  description: "Predict daily restaurant sales from weather and local events. ML-powered forecasts for restaurant owners and managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d443e658-ebb8-4b56-a9f0-c9e471eebacb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
