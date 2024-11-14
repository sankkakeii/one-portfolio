import Navbar from "@/components/landing-general/Navbar";
import Footer from "@/components/landing-general/Footer";
import Banner from "@/components/landing-page-components/Banner";
import AboutMe from "@/components/landing-page-components/About";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-items-center"
    >
      {/* NAVBAR */}
      <Navbar />

      {/* BANNER and SERVICES */}
      <Banner />

      {/* ABOUT ME */}
      <AboutMe />


      {/* FOOTER */}
      <Footer />
    </section>
  );
}
