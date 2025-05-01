import { Github, Twitter, Instagram } from "@deemlol/next-icons";

export default function Socials() {
  return (
    <div className="md:fixed md:bottom-0 w-min left-0 flex md:justify-between md:flex-row flex-col items-center md:items-end gap-4 ">
      <div className="flex md:pl-6 lg:pl-9 justify-evenly w-1/2  md:w-max md:flex-col md:items-center md:space-y-10">
        <Github />
        <Twitter />
        <Instagram />
        <div className="w-px h-24 bg-secondary md:block hidden"></div>
      </div>
    </div>
  );
}
