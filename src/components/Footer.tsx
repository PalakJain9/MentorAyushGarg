import { LinkedinIcon, GithubIcon, Edit3Icon, MailCheckIcon } from "lucide-react"
import Link from "next/link"

export default function Footer () {
  let iconStyle = "w-[1.2rem] h-[1.2rem]"

  return (
    <div
      className="w-full flex flex-col gap-3 justify-center items-center p-[2rem] pt-[5rem]"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        <p
          className="text-3xl font-bold"
        > Ayush Garg X Palak Jain</p>

        <div className="flex flex-col gap-1 justify-center items-start lg:justify-end lg:items-end">
        <div
          className="pt-[1rem] flex flex-row gap-2 justify-start items-center"
        >
          <p className="pr-[1rem]">{`built with ❤ by Palak Jain`}</p>
          <Link
            href='mailto:palakb188@gmail.com'
          ><MailCheckIcon className={iconStyle} /></Link>

          <Link
            href='https://www.linkedin.com/in/palakjain9'
          ><LinkedinIcon className={iconStyle} /></Link>

          <Link
            href='https://github.com/PalakJain9'
          ><GithubIcon className={iconStyle} /></Link>

          <Link
            href='https://palakjain.hashnode.dev/'
          ><Edit3Icon className={iconStyle} /></Link>
        </div>
        <Link
          href='https://github.com/PalakJain9/MentorAyushGarg'
          ><p>check source code here ⚡</p></Link>

        </div>
      </div>

      <p
      className="text-sm"
      > This website is built by taking inspiration from https://memefy.dorik.io/</p>

    </div>
  )
}