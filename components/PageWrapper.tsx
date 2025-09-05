
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl sm:tracking-tight lg:text-6xl">{title}</h1>
            {subtitle && <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">{subtitle}</p>}
          </div>
        </div>
      </div>
      <div className="-mt-12 sm:-mt-16 pb-12 sm:pb-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
         </div>
      </div>
    </div>
  );
};

export default PageWrapper;
