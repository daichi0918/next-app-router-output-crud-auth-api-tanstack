import { FC, ReactNode } from 'react';

import { Navigation } from '@/shared/components/layout/Navigation';

type BaseLayoutProps = {
  children: ReactNode;
  title: string;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children, title }) => (
  <div>
    <header className="w-full">
      <Navigation />
    </header>
    <main className="w-[90%] mx-auto min-[960px]:w-1/2">
      <h1 className="text-center font-['Times New Roman',Times,serif] text-white text-[48px]">
        {title}
      </h1>
      {children}
    </main>
  </div>
);
