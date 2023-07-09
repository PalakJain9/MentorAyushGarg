import Link from "next/link";

export default function Navbar () {
  return (
    <div className="w-full flex flex-row justify-between items-center absolute top-0 py-[2rem] lg:px-[5rem] px-[1rem]">
      <p className="text-white text-base">Ayush Garg X Palak Jain</p>
      <div className="flex flex-row gap-5 justify-center items-center md:text-white text-transparent">
        <Link
          href='#whomDoYouHelp'
        ><p>Whom do you help?</p></Link>
        <Link
          href='#pricing'
        ><p>Pricing</p></Link>
      </div>
    </div>
  )
}