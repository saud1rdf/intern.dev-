import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'intern.dev – Technical tasks for CS interns',
  description: 'Onboarding and technical training platform for interns',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
