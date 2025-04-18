import Container from '@/components/Container';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { groq, PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import { Post } from 'types';

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import Link from 'next/link';
import { RichText } from '@/components/RichText';

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = `*[_type == "post"]{
      slug 
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params: { slug } }: SlugPageProps) => {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
      ...,
      body,
        author->,
      
    }`;

  const post: Post = await client.fetch(query, { slug });
  //   console.log(post);
  //   console.log(slug);
  return (
    <Container className="mb-10 mt-5 p-10 md:max-w-5xl mx-auto bg-gray-100 rounded-md shadow-md">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          <Image
            src={urlForImage(post?.mainImage).url()}
            width={500}
            height={500}
            alt="main image"
            className="object-cover w-full"
          />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image
            src={urlForImage(post?.author?.image).url()}
            width={200}
            height={200}
            alt="Author Image"
            className="w-20 h-20 rounded-full object-cover"
          />
          <p className="text-3xl text-[#5442ae] font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-center tracking-wide text-sm">
            {post?.description}
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={'/'}
              target="blank"
              className="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaYoutube />
            </Link>
            <Link
              href={'/'}
              target="blank"
              className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaGithub />
            </Link>
            <Link
              href={'/'}
              target="blank"
              className="w-10 h-10 bg-[#3e5b98] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={'/'}
              target="blank"
              className="w-10 h-10 bg-[#bc1888] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href={'/'}
              target="blank"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h2 className="text-3xl text-[#5442ae] p-4 font-bold mb-2 text-center">
          {post?.title}
        </h2>
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default SlugPage;
