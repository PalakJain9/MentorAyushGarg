import Link from "next/link";

export default function Pricing () {
  return (
    <div 
      id="pricing"
      className="pt-[5rem] flex flex-col gap-10 justify-center items-center"
    >
      <p 
        className="text-3xl font-bold"
      >
        Ready for the epic collaboration?
      </p>

      <div
        className="bg-wine w-2/3 lg:w-1/3 p-[2rem] flex flex-col gap-8 justify-center items-center text-white rounded-md"
      >
        <p
          className="text-3xl font-bold"
        > King</p>
        <div
        className="flex flex-col gap-1 justify-start items-start">
          <p>* 0 spams</p>
          <p>* 100% dedication</p>
          <p>* Extraordinary web apps</p>
          <p>* Creative Content</p>
          <p>* Lifetime membership</p>
        </div>

        <Link href='https://www.linkedin.com/in/palakjain9'>
          <button
          className="bg-white text-blue-500 p-[1rem] rounded-md"
          > Mentor Palak
          </button>
        </Link>
        </div>
    </div>
  )
}