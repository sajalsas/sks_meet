import { ReactNode } from 'react';
import { Metadata } from 'next';
import StreamVideoProvider from '@/providers/StreamClientProvider';
export const metadata: Metadata = {
  title: "Hazel",
  description: "Video calling app",
  icons:{
    icon:'/icons/logo.svg'
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
