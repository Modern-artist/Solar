import React from 'react'
import aboutImg from "../public/img/Solar.svg";
import Image from 'next/image';
import Container from "./container";


const About = () => {
  return (
      <Container className="flex flex-wrap py-16 sm:py-32">
      {/* <div className="flex flex-wrap p-16"> */}
              <div className="flex items-center w-full lg:w-1/2">
                  <div className="max-w-2xl mb-8">
                      <h1 className="text-4xl   leading-snug tracking-tight text-gray-100 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
                      About Dunamis Solar Energy
                      </h1>
                      <p className="py-5  leading-normal text-gray-400 ">
                      We're Dunamis    Solar Energy - the go-to solar permitting company for installers all across the
                      USA. Our mission? To make solar installation smoother, easier, and faster for everyone
                      involved.
                      <br />
                      <br />
                      We're not just any solar permitting company. We're the best because we understand the ins
                      and outs of the solar industry like nobody else. We know how to navigate complex
                      regulations, streamline processes, and get permits approved quickly. With us on your side,
                      you can focus on what you do best - installing solar panels - while we handle the paperwork.
                      <br/>
                      <br/>
                      Our mission is simple
                       to revolutionize the way solar projects are permitted in the USA.
                      We're here to break down barriers, cut through red tape, and make solar energy more
                      accessible to everyone. Because we believe that a brighter, cleaner future is within reach -
                      and we're committed to making it a reality, one permit at a time.
                      </p>

                      {/* <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                          <a
                              href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                              target="_blank"
                              rel="noopener"
                              className="px-8 py-4 text-lg font-medium text-center text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-md ">
                              Download for Free
                          </a>
                          <a
                              href="https://github.com/web3templates/nextly-template/"
                              target="_blank"
                              rel="noopener"
                              className="flex items-center space-x-2 text-gray-400     text-gray-400">
                              <svg
                                  role="img"
                                  width="24"
                                  height="24"
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <title>GitHub</title>
                                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg>
                              <span> View on Github</span>
                          </a>
                      </div> */}
                  </div>
              </div>
              <div className="flex items-center justify-center w-full lg:w-1/2">
                  <div className="">
                      {/* <img src="../public/img/home.svg" /> */}
                      <Image
                      src={aboutImg}
                          width="616"
                          height="617"
                          className={"object-cover"}
                          alt="Hero Illustration"
                          loading="eager"
                      // placeholder="blur"
                      />
                  </div>
              </div>
          {/* </div> */}
      </Container>
  )
}

export default About