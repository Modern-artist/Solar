import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/manSolar.svg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap py-16 sm:py-32">
        <div className="flex  w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 md:mt-4">
            <h1 className="text-4xl  leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
             Dunamis Solar, get your solar permit hassle-free.
            </h1>
            <p className="py-5  font-thin leading-normal text-gray-500    ">
              Allow us to navigate the intricate details of your solar permit package, simplifying your life
              and expediting project outcomes affordably and efficiently.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-md ">
                Get Started
              </a>
             
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            {/* <img src="../public/img/home.svg" /> */}
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              // placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Hero;