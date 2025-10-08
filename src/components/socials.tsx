import { Github, Twitter } from "@deemlol/next-icons";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="md:fixed  md:bottom-0 md:w-min left-0 flex md:justify-between md:flex-row flex-col items-center md:items-end gap-4 ">
      <div className="flex md:pl-6 lg:pl-9 justify-evenly w-1/2  md:w-max md:flex-col md:items-center md:space-y-10">
        <Link href={"https://github.com/Emmybrown775"}>
          <Github className="hover:text-secondary transition-all duration-150" />
        </Link>
        <Link href={"https://x.com/EmmyCodes775"}>
          <Twitter className="hover:text-secondary transition-all duration-150" />
        </Link>
        <div className="w-px h-24 bg-secondary md:block hidden"></div>
      </div>
    </div>
  );
}
