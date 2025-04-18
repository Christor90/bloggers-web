import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Image } from 'sanity';

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: SanityImageSource;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  description: string;
  image: Image; // ✅ not mainImage
  name: string;
  slug: Slug;
}

// interface Image {
//   _type: 'image';
//   asset: Reference;
// }

// interface Reference {
//   _type: 'slug';
//   current: string;
// }

// type SanityImageAsset = {
//   _type: 'image';
//   asset: {
//     _ref: string;
//     _type: 'reference';
//   };
// };

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'bloackquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}
