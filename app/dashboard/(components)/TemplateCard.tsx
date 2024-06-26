import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className='h-72 w-80 md:w-72 lg:w-64 xl:w-72 p-5 shadow-lg rounded-xl border bg-orange-100 flex flex-col gap-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl'>
        <div className='flex items-center justify-center h-16'>
          <Image src={item.icon} alt='icon' width={50} height={50} className='rounded-full' />
        </div>
        <div className='flex-grow flex flex-col items-center justify-center text-center'>
          <h2 className='font-semibold text-black text-lg'>{item.name}</h2>
          <p className='text-gray-600 text-sm mt-2 line-clamp-3'>{item.desc}</p>
        </div>
        <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white to-transparent rounded-b-xl'></div>
      </div>
    </Link>
  );
}

export default TemplateCard;
