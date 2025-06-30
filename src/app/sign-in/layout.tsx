import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nearby users demo",
  description: "Demo to test if users are nearby",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
