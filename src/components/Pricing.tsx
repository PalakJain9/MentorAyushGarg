export default function Pricing () {
  return (
    <div 
      className="pt-[5rem] flex flex-col gap-10 justify-center items-center"
    >
      <p 
        className="text-3xl font-bold"
      >
        Ready for the epic collaboration?
      </p>

      <div
        className="bg-wine w-1/3 p-[2rem] flex flex-col gap-8 justify-center items-center text-white"
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
        <button
          className="bg-white text-blue-500 p-[1rem] rounded-md"
        > Mentor Palak</button>
      </div>
    </div>
  )
}