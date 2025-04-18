import React from 'react';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <Logo title="Bloggers" className="text-white" />

      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link href={'/'} target="_blank" rel="noopener noreferrer">
          <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={'/'} target="_blank" rel="noopener noreferrer">
          <BsFacebook className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={'/'} target="_blank" rel="noopener noreferrer">
          <BsInstagram className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={'/'} target="_blank" rel="noopener noreferrer">
          <BsGithub className="text-2xl hover:text-red-500 duration-200" />
        </Link>
      </div>

      <p className="text-sm text-gray-300">
        © CHris Blog 2025. All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;
