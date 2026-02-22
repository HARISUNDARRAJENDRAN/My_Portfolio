import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import { CustomDock } from "@/components/CustomDock";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import PersonalLife from "@/components/PersonalLife";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative isolate mx-auto flex min-h-screen w-full max-w-5xl flex-col overflow-hidden px-5 pb-28 pt-12 sm:px-8 md:px-12 md:pt-16 lg:px-16">
      <div className="fixed inset-0 z-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom" />
      <div className="relative z-10">
      <CustomDock />

      <div className="flex flex-col gap-10 md:gap-12">
      <section id="home" className="scroll-mt-24">
        <Intro />
      </section>
      <section id="experience" className="scroll-mt-24">
        <WorkExperience />
      </section>
      <section id="education" className="scroll-mt-24">
        <Education />
      </section>
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="about" className="scroll-mt-24">
        <AboutMe />
      </section>
      <section id="blogs" className="scroll-mt-24">
        <FeaturedBlogs />
      </section>
      <section id="personal-life" className="scroll-mt-24">
        <PersonalLife />
      </section>
      <section id="contact" className="scroll-mt-24">
        <ContactMe />
      </section>
      </div>
      </div>
      </main>
    </>
  );
}