import Heading from '@/components/heading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const categories = [
  { name: 'Rings', image: '/img/category/rings.png' },
  { name: 'Earrings', image: '/img/category/earrings.png' },
  { name: 'Pendant', image: '/img/category/pendant.png' },
  { name: 'Bracelet', image: '/img/category/bracelet.png' }
];

export default function ShopByCategory() {
  return (
    <section className='container pt-10'>
      <Heading
        title='Shop by Category'
        subtitle='Your Imagination, Our Craftsmanship'
      />

      <div className='grid grid-cols-2 gap-4 sm:flex-row md:grid-cols-4 md:gap-6'>
        {categories.map(({ name, image }) => (
          <Link
            key={name}
            href='#'
            className='flex flex-col items-center text-center text-lg font-medium transition-all duration-200'
          >
            <div className='w-full overflow-hidden rounded-md'>
              <Image
                src={image}
                alt={`${name} category`}
                width={250}
                height={100}
                className='w-full rounded-md object-cover transition-transform duration-300 hover:scale-110'
              />
            </div>
            <p className='mt-2 text-xl'>{name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
