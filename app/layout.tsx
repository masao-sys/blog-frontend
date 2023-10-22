import { ReactNode } from 'react';
import '/styles/globals.css'

export const metadata = {
  title: 'まさお ブログ',
  description: 'まさおのブログです。',
};

type Props = {
  children: ReactNode;
};

const name = 'まさお ブログ';

export default function Layout({ children }: Props) {
  return (
    <html>
      <body className="max-w-screen-xl mt-12 mx-auto mb-24">
        <header className="flex flex-col items-center">
          <img src="/images/my_icon.png" alt="logo" className="w-16 h-16 rounded-full" />
          <h1 className="text-4xl leading-tight font-extrabold tracking-tighter mt-4 mb-0">{name}</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
