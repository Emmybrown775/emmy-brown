import { FaTwitter, FaTiktok, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="w-svw flex items-center justify-between border-t-2   border-line-colour">
        <div className="flex items-center">
          <div className="px-5 py-4 border-e-2 border-line-colour">
            <h3 className="text-text-colour">find me in: </h3>
          </div>

          <button className="px-5 py-5 border-e-2 border-line-colour text-text-colour hover:text-text-white ">
            <FaTwitter className="" />
          </button>

          <button className="px-5 py-5 border-e-2 border-line-colour text-text-colour hover:text-text-white ">
            <FaTiktok className="" />
          </button>
        </div>

        <button className="flex items-center gap-3 px-5 py-4 border-x-2 border-line-colour text-text-colour hover:text-text-white ">
            <h3 className="md:block  hidden">@Emmybrown775</h3>
            <FaGithub className=""/>
        </button>
      </div>
    </>
  );
}

export default Footer;
