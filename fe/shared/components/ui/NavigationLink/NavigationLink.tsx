'use client';
import { FC } from 'react';
import Link from 'next/link';

type NavigationLinkProps = {
  title: string;
  linkPath: string;
};

export const NavigationLink: FC<NavigationLinkProps> = ({ title, linkPath }) => (
  <li className="text-center list-none">
    <Link
      className="transition duration-300 block bg-white no-underline text-[#008080] text-2xl font-bold px-5 py-2.5 rounded-[10px] hover:bg-[#d8d8d8]"
      href={linkPath}
    >
      {title}
    </Link>
  </li>
);
