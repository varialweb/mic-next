import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#02071D] text-white p-4 py-8 lg:py-12 grid items-center text-center gap-8">
      <div className="flex justify-center gap-8">
        <Link href="https://www.facebook.com/massiveimpactcoaching">
          <Image 
            src="/img/icon_facebook.svg"
            alt="Facebook"
            width="36"
            height="36"
          />
        </Link>
        <Link href="https://www.instagram.com/benjaminjohnmic/">
          <Image 
            src="/img/icon_instagram.svg"
            alt="Instagram"
            width="36"
            height="36"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/benjamin-john-771a48216/">
          <Image 
            src="/img/icon_linkedin.svg"
            alt="LinkedIn"
            width="36"
            height="36"
          />
        </Link>
        <Link href="https://www.youtube.com/channel/UCQuFC4nCBYwWAc7wTbefnFA">
          <Image 
            src="/img/icon_youtube.svg"
            alt="Youtube"
            width="36"
            height="36"
          />
        </Link>
      </div>
      ©2023 Massive Impact Coaching
    </footer>
  )
}