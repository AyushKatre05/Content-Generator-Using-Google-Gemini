import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

const TemplateCard = (item:TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
      <div className='h-64 w-80 md:w-56 md:h-64 lg:w-64 lg:h-64 p-5 shadow-md rounded-xl border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all '>
        <Image src={item.icon} alt='icon' width={50} height={50}/>
        <h2 className='font-sm text-black text-lg'>{item.name}</h2>
        <p className='text-gray-600 line-clamp-3 overflow-hidden'>{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
