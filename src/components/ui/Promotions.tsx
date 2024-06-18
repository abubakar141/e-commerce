"use client";
import Image from 'next/image'
import image2 from '/public/image2.webp'
import mani from "/public/mani.png"
import image3 from "/public/image3.webp"
import  Link  from 'next/link';

const Promotions = () => {
  return (
    <div>
      <h2 className='text-center text-blue-700 font-semibold'>
      PROMOTIONS
      </h2>
      <h1 className='text-center mt-4 text-3xl font-extrabold'>
      Our Promotions Events
      </h1>
    
      <div className="flex flex-wrap items-center justify-center md:justify-between">
       <Link href={"/Man"}> 
    <div className="w-full md:w-auto">
      <Image src={image2} alt="image2" height={350} width={350} className="bg-gray-200 mt-2" />
    <h1>
      
    </h1>
    </div>
    </Link> 
    <div className="w-full md:w-auto">
      <Image src={mani} height={350} width={350}   alt="image 3"className='mt-2' />
      
    </div>
    <div className="w-full md:w-auto">
      <Image src={image3} alt="image 3" height={350} width={350} className='bg-neutral-300 mt-2'/>
      
    </div>
  
  </div>

    </div>
    
  )
}

export default Promotions
