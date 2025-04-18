'use client';

import React, { useEffect, useState } from 'react';
import { Post } from 'types';
import Container from './Container';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Spinner from './Spinner';

interface BlogContentProps {
  posts: Post[];
}

const BlogContent = ({ posts }: BlogContentProps) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading state when posts change
  useEffect(() => {
    if (posts && posts.length > 0) {
      setLoading(false);
    }
  }, [posts]);

  return (
    <Container className="bg-gray-100 py-20 px-10 flex flex-col gap-10">
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <Spinner />
        </div>
      ) : (
        posts.map((post) => (
          <Link
            href={{
              pathname: `/post/${post?.slug?.current}`,
              query: { slug: post?.slug?.current },
            }}
            key={post._id}
          >
            <div className="flex flex-col md:flex-row gap-10 bg-white rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200">
              <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative">
                <Image
                  src={urlForImage(post?.mainImage).url()}
                  width={500}
                  height={500}
                  alt="Blog post Image"
                  className="w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
                />
                <div className="absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200" />
                <div className="absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200">
                  <p className="text-lg font-semibold">Click to Read</p>
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {post?.categories?.map((category) => (
                      <p
                        key={category?._id}
                        className="text-xs uppercase text-blue-600 font-semibold"
                      >
                        | {category?.title}
                      </p>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold hover:text-orange-600 duration-200 cursor-pointer">
                    {post?.title}
                  </h2>
                  <p className="text-gray-500">{post?.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-500">
                    {new Date(post?._createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src={urlForImage(post?.author?.image).url()}
                      width={200}
                      height={200}
                      alt="Author Image"
                      className="rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-sm font-medium text-gray-500">
                      {post?.author?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </Container>
  );
};

export default BlogContent;
