import Image from 'next/image'

export default function WhomDoYouHelp () {
  const tileStyle = "bg-white rounded-md p-[2rem] flex flex-col gap-2 justify-center items-center w-full h-[21rem]"
  const textStyle = 'text-white text-center'

  return (
    <div
      className="bg-wine flex flex-col gap-[5rem] justify-center items-center p-[2rem]"
    >
      <div className="flex flex-col gap-2 text-white">
        <p 
          className="text-3xl font-bold"
          > Whom would you help?
        </p>
        <p className="text-sm">* SOMETHING ABOUT PALAK</p>
      </div>

      <div className='w-2/3 flex flex-col lg:flex-row gap-10 justify-center items-center'>

        <div className='w-full flex flex-col gap-2 justify-center items-center'>
          <div 
            className={tileStyle}>
              <p 
                className="font-bold text-2xl"
                >A Problem Solver
              </p>
              <Image
                src='/iDontHaveTime.png'
                alt="i don't have time for jokes"
                width={100}
                height={100}
                className="w-full h-2/3"
              />
          </div>
          <p
            className={textStyle}
          >
            A passionate developer creating delightful experiences on the web and making products that people love. I speak multiple languages, know more about at <span>GitHub</span>
          </p>
        </div>

        <div className='w-full flex flex-col gap-2 justify-center items-center'>
          <div className={tileStyle}>
            <p 
              className="font-bold text-2xl"
              > A Community Person
            </p>
            <Image
              src='/communityPerson.png'
              alt="i don't have time for jokes"
              width={100}
              height={100}
              className="w-full h-2/3"
            />
          </div>
          <p className={textStyle}>
            Strengthened tech @Google Developer Student Clubs at my university and building a community of designers @Figma J chapter. WAGMI! Know more at <span>LinkedIn</span>
          </p>
        </div>

        <div className='w-full flex flex-col gap-2 justify-center items-center'>
          <div className={tileStyle}>
            <p 
              className="font-bold text-2xl"
              > A Loyal Bhakt
            </p>
            <Image
              src='/bhakt.png'
              alt="i don't have time for jokes"
              width={100}
              height={100}
              className="w-full h-2/3"
            />
          </div>
          <p className={textStyle}>
            Wish to become the Arjuna to you (feat. Ayush as Shri Krishna)
          </p>
        </div>

      </div>
    </div>
  )
}