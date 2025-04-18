import Link from 'next/link';
import React from 'react';

interface LogoProps {
  title?: string;
  className?: string;
}

const Logo = ({ title, className }: LogoProps) => {
  return (
    <Link href={'/'}>
      <h1 className={`text-3xl font-extrabold uppercase ${className}`}>
        {title || 'Bloggers'}
      </h1>
    </Link>
  );
};

export default Logo;
