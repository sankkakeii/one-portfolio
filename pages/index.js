import Navbar from "@/components/landing-general/Navbar";
import Footer from "@/components/landing-general/Footer";
import Banner from "@/components/landing-page-components/Banner";
import AboutMe from "@/components/landing-page-components/About";
import Projects from "@/components/landing-page-components/Projects";
import TechStackSection from "@/components/landing-page-components/TechStackSpinner";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-items-center dark:bg-gradient-to-b dark:from-black dark:to-yellow-600"
    >
      {/* NAVBAR */}
      <Navbar />

      {/* BANNER and SERVICES */}
      <Banner />

      {/* ABOUT ME */}
      <AboutMe />

      {/* TECH STACK */}
      <TechStackSection />

      {/* PROJECTS */}
      <Projects />


      {/* FOOTER */}
      <Footer />
    </section>
  );
}
