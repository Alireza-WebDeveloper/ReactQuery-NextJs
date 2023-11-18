import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryPvorider from './StateManagement/Provider';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryPvorider>{props.children}</ReactQueryPvorider>
      </body>
    </html>
  );
}
