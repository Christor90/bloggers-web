// components/RichText.tsx

import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';

// Register languages
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('json', json);

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center">
          <Image
            src={urlForImage(value).url()}
            alt="Post image"
            width={700}
            height={700}
            className="object-contain py-6"
          />
        </div>
      );
    },
    code: ({ value }: any) => {
      return (
        <div className="my-6">
          <SyntaxHighlighter
            language={value.language || 'javascript'}
            style={atomOneLight}
            showLineNumbers
            customStyle={{
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              padding: '1rem',
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
  },
  number: ({ children }: any) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-blue-600 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <Link href={value.href} rel={rel} className="underline">
          {children}
        </Link>
      );
    },
  },
};

// import { urlForImage } from '@/sanity/lib/image';
// import Image from 'next/image';
// import Link from 'next/link';

// export const RichText = {
//   types: {
//     image: ({ value }: any) => {
//       return (
//         <div className="flex items-center justify-center">
//           <Image
//             src={urlForImage(value).url()}
//             alt="Post image"
//             width={700}
//             height={700}
//             className="object-contain py-6"
//           />
//         </div>
//       );
//     },
//   },
//   list: {
//     bullet: ({ children }: any) => (
//       <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
//     ),
//   },
//   number: ({ children }: any) => (
//     <ol className="mt-lg list-decimal">{children}</ol>
//   ),
//   block: {
//     h1: ({ children }: any) => (
//       <h1 className="text-4xl py-10 font-bold">{children}</h1>
//     ),
//     h2: ({ children }: any) => (
//       <h2 className="text-3xl py-10 font-bold">{children}</h2>
//     ),
//     h3: ({ children }: any) => (
//       <h3 className="text-2xl py-10 font-bold">{children}</h3>
//     ),
//     h4: ({ children }: any) => (
//       <h4 className="text-2xl py-10 font-bold">{children}</h4>
//     ),
//     blockquote: ({ children }: any) => (
//       <blockquote className="border-l-blue-600 border-l-4 pl-5 py-5 my-5">
//         {children}
//       </blockquote>
//     ),
//   },
//   marks: {
//     link: ({ children, value }: any) => {
//       const rel = !value.href.startsWith('/')
//         ? 'noreferrer noopener'
//         : undefined;

//       return (
//         <Link href={value.href} rel={rel} className="underline">
//           {children}
//         </Link>
//       );
//     },
//   },
// };
