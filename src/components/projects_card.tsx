import { ExternalLink, Github } from "@deemlol/next-icons";
import Image from "next/image";
import github from "../assets/github.png";

export default function ProjectsCard({ className = "" }) {
  return (
    <div className={`${className}`}>
      <div className="relative  rounded shadow-[4px_4px_10px_rgba(0,0,0,0.1)] shadow-primary-light md:hidden">
        <div className="absolute inset-0 rounded  bg-[url('/images/github.png')] bg-cover bg-center opacity-10 z-0" />

        {/* Optional Color Tint Overlay */}
        <div className="absolute rounded inset-0 bg-secondary opacity-10 z-10" />
        <div className="relative space-y-7 opacity-100 z-50 px-5 py-6">
          <div>
            <h3 className="font-mono text-secondary text-sm">
              Featured Project
            </h3>
            <h1 className="font-sans font-bold text-lg">Halcyon Theme</h1>
          </div>
          <div>
            <p className="font-sans">
              A minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm
              and more Available on VSCode more.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm">
              VSCode Sublime Text Atome iTerm2 Hyper
            </h3>

            <div className="flex gap-5">
              <Github />
              <ExternalLink />
            </div>
          </div>
        </div>
      </div>
      <div className=" grid-cols-12 hidden md:grid gap-4 text-end">
        <div className="relative col-span-7 aspect-[16/9]">
          <Image
            src={github}
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 md:bg-secondary transition-all duration-300 opacity-65 mix-blend-normal hover:opacity-0"></div>
        </div>

        <div className="col-span-5 z-10 ">
          <h3 className="text-sm font-mono pb-1 text-secondary">
            Featured Project
          </h3>
          <h2 className="text-2xl font-bold font-sans text-header">
            Halcyon Theme
          </h2>
          <div className="bg-primary-light py-4 px-3 pl-10 -ml-24 z-[100] my-7 rounded shadow-[4px_4px_10px_rgba(0,0,0,0.1)] shadow-text">
            <p className="text-lg font-sans text-text text-start">
              A minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm
              and more. Available on VSCode too.
            </p>
          </div>
          <h4 className="font-sans text-sm">
            VS Code · Sublime Text · Atom · iTerm2 · Hyper
          </h4>
          <div className="flex justify-end pt-6 gap-5">
            <Github className="hover:text-secondary transition-colors duration-150" />
            <ExternalLink className="hover:text-secondary transition-colors duration-150" />
          </div>
        </div>
      </div>
    </div>
  );
}
