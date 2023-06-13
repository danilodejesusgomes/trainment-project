import React from 'react';
import './globals.css';

export const metadata = {
  title: 'AWSimulate',
  description: 'Seus serviços AWS favoritos, sem a AWS',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 text-blue-500">{children}</body>
    </html>
  );
}
