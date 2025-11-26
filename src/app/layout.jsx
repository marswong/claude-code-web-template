import '@/styles/globals.css';
import { Suspense } from 'react';
import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
