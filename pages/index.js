import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { scroller } from "react-scroll";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import WhyUs from "../components/WhyUs";
import About from "../components/About";
import { useEffect } from "react";
import AOS from 'aos'; import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <title>Dunamis Solar</title>
        <meta
          name="description"
          content="Simplifying your life
and expediting project outcomes affordably and efficiently"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="" data-aos="fade-up"><Hero data-aos="fade-up" /></div>

      <div name="services" data-aos="fade-up">
        <div className="">
          <SectionTitle
            pretitle="Our Services"
            title="Why should you trust us?">
            At Dunamis, we prioritize trust and quality. With our experienced team and transparent pricing, we deliver reliable solar solutions tailored to your needs. Choose us for a trustworthy  experience.
          </SectionTitle>
        </div>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </div>
      <div name="about" data-aos="fade-up">
        <About />

      </div>
      <div name="why" data-aos="fade-up">
        <SectionTitle
          pretitle="Why us"
          title="Why We're Your Choice">
          At Dunamis Solar Energy, we pride ourselves on being the premier choice for streamlined
          solar project development. Here's why clients trust us.
        </SectionTitle>
        <WhyUs />
      </div>

      {/* <Video /> */}
      {/* <div name="testimonials" data-aos="fade-up">
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said">
          Discover the positive experiences shared by our satisfied clients about our reliable and efficient solar services"
        </SectionTitle>
        <Testimonials />

      </div> */}
      <div name="faq" data-aos="fade-up">
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Comprehensive answers to address your concerns and queries about our services, installation process, maintenance, and environmental benefits.
        </SectionTitle>
        <Faq />
      </div>

      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;