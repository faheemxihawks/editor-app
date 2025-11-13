

import type { ReactNode } from 'react';
import Footer from '../ui/common/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;