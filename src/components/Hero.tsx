import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function HeroSection () {
  return (
    <div className='h-[100vh] bg-wine flex grow flex-col gap-[5rem] justify-center items-center object-cover relative'>
      <Image 
        src='/heroImg.svg' 
        alt='bg-img'
        width={100}
        height={100}
        className='w-full h-full absolute bottom-0'
      />
      
      <Navbar />

      <div className='w-2/3 lg:w-1/2 text-center flex flex-col gap-8 justify-center items-center text-white z-30'>

        <p className='text-3xl lg:text-4xl font-bold'>
          Seeking your guidance to level up my job hunting game
        </p>

        <p className='text-xl'>
          Meet a full stack developer ready to <span className='underline italic'>work hard, have fun and make history</span>.
        </p>
        
        <Link 
          href='https://www.linkedin.com/in/palakjain9'>
          <button className='bg-red text-white p-[1rem] rounded-md'>
            Say Yes
          </button>
        </Link>

      </div>
    </div>
  )
}