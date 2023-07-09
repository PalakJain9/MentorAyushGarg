export default function Navbar () {
  return (
    <div className="w-full flex flex-row justify-between items-center absolute top-0 p-[2rem]">
      <p className="text-white text-base">Ayush Garg X Palak Jain</p>
      <div className="flex flex-row gap-5 justify-center items-center text-white">
        <p>Whom do you help?</p>
        <p>Pricing</p>
      </div>
    </div>
  )
}