import About from "@/components/about";
import Appreciation from "@/components/appreciation";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Intro from "@/components/intro";
import OtherProjects from "@/components/others";
import Projects from "@/components/projects";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div className="px-12">
      <Header />
      <Intro />
      <About />
      <Projects />
      <OtherProjects />
      <Contact />
      <Appreciation />
      <Socials />
    </div>
  );
}
