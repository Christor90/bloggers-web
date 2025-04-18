import Link from 'next/link';
import React from 'react';
import { IoReturnDownBack } from 'react-icons/io5';
import Logo from './Logo';

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-blue-700 text-gray-w00 flex items-center justify-between">
        <Link
          href={'/'}
          className="flex items-center gap-3 font-semibold hover:text-blue-300 duration-200"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
        {/* <Logo
          title="Bloggers Studio"
          className="text-2xl hidden md:inline-flex"
        /> */}
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
