import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-black min-h-screen flex items-center pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] lg:mx-0 text-center lg:text-left"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                ATMOSPHERIC CONVECTION AND DYNAMICS GROUP
                </h1>
                <p className="mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                The Atmospheric Convection and Dynamics Group at CCS, IIT Bombay focuses on understanding diverse atmospheric phenomena elucidated by atmospheric dynamics and thermodynamics. This includes weather and climate extremes, the South-Asian summer monsoon and tropical-extratropical interactions. 
                </p>
                    <Link
                  href="#research"
                  className="group inline-flex items-center gap-4 text-base font-medium text-white transition duration-300 hover:-translate-y-2"
                >
                  <span className="hover:text-primary">ABOUT ACDG</span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white transition duration-300 group-hover:border-primary group-hover:bg-primary">
                    <svg
                      className="w-5 h-5 fill-none stroke-white transition duration-300 group-hover:stroke-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-0 lg:-mt-10">
                  <Image
                    src="/images/hero/hero_image.jpg"
                    alt="hero"
                    className="mx-auto w-full rounded-lg"
                    width={845}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
