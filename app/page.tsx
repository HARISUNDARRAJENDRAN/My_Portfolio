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
      <main className="relative isolate mx-auto flex min-h-screen w-full max-w-5xl flex-col overflow-hidden px-5 pb-28 pt-12 sm:px-8 md:ml-24 md:px-12 md:pt-16 lg:px-16">
        <div className="fixed inset-0 z-0 pointer-events-none light-mode-fade-bottom" />
        <div className="relative z-10">
          <CustomDock />

          <div className="flex flex-col gap-8 md:gap-10">
            <section id="home" className="scroll-mt-24">
              <Intro />
            </section>

            <div className="section-divider" />

            <section id="experience" className="scroll-mt-24 section-accent rounded-2xl">
              <WorkExperience />
            </section>

            <section id="education" className="scroll-mt-24">
              <Education />
            </section>

            <div className="section-divider" />

            <section id="skills" className="scroll-mt-24 section-accent rounded-2xl">
              <Skills />
            </section>

            <section id="about" className="scroll-mt-24">
              <AboutMe />
            </section>

            <div className="section-divider" />

            <section id="personal-life" className="scroll-mt-24 section-accent rounded-2xl">
              <PersonalLife />
            </section>

            <section id="projects" className="scroll-mt-24">
              <Projects />
            </section>

            <div className="section-divider" />

            <section id="blogs" className="scroll-mt-24 section-accent rounded-2xl">
              <FeaturedBlogs />
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
