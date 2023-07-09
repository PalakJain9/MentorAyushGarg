import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function HeroSection () {
  return (
    <div className='bg-wine flex grow flex-col gap-[5rem] justify-center items-center object-cover'>
      <Image 
        src='/heroImg.svg' 
        alt='bg-img'
        width={100}
        height={100}
        className='w-full h-full absolute bottom-0'
      />
      
      <Navbar />
      <div className='w-2/3 lg:w-1/2 text-center flex flex-col gap-8 justify-center items-center text-white'>

        <p className='text-3xl lg:text-4xl font-bold'>
          Seeking your guidance to level up my job hunting game
        </p>

        <p className='text-xl'>
          Meet a full stack developer ready to <span className='underline italic'>work hard, have fun and make history</span>.
        </p>

        <button
          className='w-[11rem] bg-red hover:bg-rose-700 p-[1rem] rounded-md'
        > Say Yes</button>

      </div>
    </div>
  )
}