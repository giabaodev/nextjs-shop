import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Newest() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Newest Products</h2>
          <Link href={'/all'} className="text-primary flex items-center gap-x-1">
            See All
            <span>
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
        {/* <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            <div className='group relative'>
                <div className='aspect-square w-full overflow-hidden'>
                    <Image src={'/a'} alt='as'/>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
}
