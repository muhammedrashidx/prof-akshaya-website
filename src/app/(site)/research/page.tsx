import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Research | Atmospheric Convection and Dynamics Group",
  description: "Research activities and projects of the Atmospheric Convection and Dynamics Group at IIT Bombay",
};

const ResearchPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Research" />
      
      {/* First Research Section - Text Left, Image Right */}
      <section className="bg-gray-1 pb-8 pt-16 dark:bg-dark-2 sm:pb-12 sm:pt-20 lg:pb-[70px] lg:pt-[120px]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-0 sm:px-2 lg:w-1/2 lg:px-4">
                <div className="mb-8 max-w-[540px] sm:mb-10 lg:mb-0">
                  <h2 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-white sm:mb-5 sm:text-3xl lg:text-[40px] lg:leading-[1.2]">
                  Intense convection
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-dark-6 sm:mb-8 sm:text-base">
                  Our group works on various forms of intense atmospheric convection ranging from isolated thunderstorms to organized mesoscale convective systems that span 100&apos;s of km. We particularly focus on tropical convection that leads to heavy rainfall events. Recently, we have started working on lightning in a collaborative project with Prof. S. Ravichandran.
                  </p>
                </div>
              </div>

              <div className="w-full px-0 sm:px-2 lg:w-1/2 lg:px-4">
                <div className="relative h-[250px] sm:h-[350px] lg:h-[500px]">
                  <Image
                    src="/images/research/intense_convection_lightening.jpg"
                    alt="Atmospheric Dynamics Research"
                    fill
                    className="h-full w-full rounded-lg object-cover object-center"
                  />
                </div>
                <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 sm:text-sm lg:text-base">
                Lightning from an Isolated Storm over Cannes Bay. <a href="https://www.rmets.org/metmatters/how-does-climate-change-affect-thunderstorms" target="_blank" rel="noopener noreferrer">Image credits: Serge Zaka</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Research Section - Light Background, Image Left, Text Right */}
      <section className="bg-white pb-8 pt-16 dark:bg-dark sm:pb-12 sm:pt-20 lg:pb-[70px] lg:pt-[120px]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-0 sm:px-2 lg:w-1/2 lg:order-1 lg:px-4">
                <div className="relative h-[250px] sm:h-[350px] lg:h-[500px]">
                  <Image
                    src="/images/research/jupiter.png"
                    alt="Climate Extremes Research"
                    fill
                    className="h-full w-full rounded-lg object-cover object-center"
                  />
                </div>
                <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 sm:text-sm lg:text-base">
                A photo Jupiter&apos;s Great Red Spot captured by NASA&apos;s Hubble Space Telescope. You can find more details <a href="https://www.jpl.nasa.gov/news/jupiters-great-red-spot-is-smaller-than-ever-measured/" target="_blank" rel="noopener noreferrer">here</a>
                </p>
              </div>

              <div className="w-full px-0 sm:px-2 lg:w-1/2 lg:order-2 lg:px-4">
                <div className="mb-8 max-w-[540px] sm:mb-10 lg:mb-0">
                  <h2 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-white sm:mb-5 sm:text-3xl lg:text-[40px] lg:leading-[1.2]">
                  Spatial extent of weather systems
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-dark-6 sm:mb-8 sm:text-base">
                  Jupiter&apos;s trademark Great Red Spot -- a swirling storm feature larger than Earth -- has shrunken to its smallest size ever measured. Astronomers have followed this downsizing since the 1930s. However, this mystery has not been solved yet. Similarly we have a very few studies on the size of weather systems on the earth. Our group is looking at what controls the size of precipitation systems on the Earth and weather systems such as monsoon low-pressure systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Research Section - Text Left, Image Right */}
      <section className="bg-gray-1 pb-8 pt-16 dark:bg-dark-2 sm:pb-12 sm:pt-20 lg:pb-[70px] lg:pt-[120px]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-0 sm:px-2 lg:w-1/2 lg:px-4">
                <div className="mb-8 max-w-[540px] sm:mb-10 lg:mb-0">
                  <h2 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-white sm:mb-5 sm:text-3xl lg:text-[40px] lg:leading-[1.2]">
                  Simulation of tropical convection
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-dark-6 sm:mb-8 sm:text-base">
                  State of the art global scale climate models have horizontal resolutions of the order of tens of kilometers. However, these resolutions are much lower than the scales required to resolve tropical convection o(1 km). We use process-based diagnostics such as the precipitation scaling diagnostic developed by O’Gorman and Schneider (2009), and Moist static energy variance based phase-plane dignostic (Maithel and Back, Thesis link) to investigate the simulations of tropical rainfall and convection. 
                  </p>
                </div>
              </div>

              <div className="w-full px-0 sm:px-2 lg:w-1/2 lg:px-4">
                <div className="relative h-[250px] sm:h-[350px] lg:h-[500px]">
                  <video
                    className="h-full w-full rounded-lg object-cover object-center"
                    controls
                    muted
                    loop
                    playsInline
                    autoPlay
                    poster="/images/research/condlin_tq_v2_poster.jpg"
                  >
                    <source src="/images/research/condlin_tq_v2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 sm:text-sm lg:text-base">
                  The peak of the 2008 hurricane season is simulated using GFDL&apos;s High Resolution Atmosphere Model (HiRAM), at 12.5 km resolution. Please find more details at <a href="https://www.gfdl.noaa.gov/visualization/visualizations-hurricanes" target="_blank" rel="noopener noreferrer">here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Research Section - Light Background, Image Left, Text Right */}
      <section className="bg-white pb-8 pt-16 dark:bg-dark sm:pb-12 sm:pt-20 lg:pb-[70px] lg:pt-[120px]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-0 sm:px-2 lg:w-1/2 lg:order-1 lg:px-4">
                <div className="relative h-[250px] sm:h-[350px] lg:h-[500px]">
                  <Image
                    src="/images/research/500_ray_path1_3.png"
                    alt="Climate Modeling Research"
                    fill
                    className="h-full w-full rounded-lg object-cover object-center"
                  />
                </div>
                <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 sm:text-sm lg:text-base">
                Rossby wave ray paths at 500 hPa for rays starting with initial k = 4. Red markers indicate the starting point (forcing location) for a given ray. Black (orange) markers indicate the position at day 5 (15) of integration. Contours indicate climatological zonal wind distribution while color shading indicates the same for meridional wind. Only those trajectories are shown for which the Rossby rays come over the Indian subcontinent. You can find more details <a href="https://journals.ametsoc.org/view/journals/atsc/80/7/JAS-D-22-0185.1.xml" target="_blank" rel="noopener noreferrer">here</a>
                </p>
              </div>

              <div className="w-full px-0 sm:px-2 lg:w-1/2 lg:order-2 lg:px-4">
                <div className="mb-8 max-w-[540px] sm:mb-10 lg:mb-0">
                  <h2 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-white sm:mb-5 sm:text-3xl lg:text-[40px] lg:leading-[1.2]">
                  Tropical-extratropical interactions
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-dark-6 sm:mb-8 sm:text-base">
                  The extratropical influence on the break of the Indian summer monsoon has been reported at least since 1950&apos;s. However, the earlier theoretical work suggests that the Rossby wave propagation occurs mainly in westerly ducts where the upper-level mean zonal winds are westerly, but not in the easterly trade wind regions owing to the critical layer theory. As the monsoon flow has a strong easterly jet at upper levels, the pathways for tropical-extratropical interactions during Asian summer monsoon are not clear. Using a simple ray-tracing technique for two-dimensional flow, we show that it is possible for extratropical waves to intrude over the Indian latitudes at mid-levels (Figure 1) during the summer monsoon.
                  </p>
                  <p className="mb-0 text-sm leading-relaxed text-body-color dark:text-dark-6 sm:mb-8 sm:text-base">
                  This intrusion at mid-levels follows approximately a great circle route. However, the waves at the upper level do not intrude following this same route as the flow is different. The widely used existing tools based on potential vorticity or Rossby wave packets tracking have limitations in analyzing the extratropical influence during the summer monsoon as they mainly track features of the upper-level flow. We are testing the utility of the available tools for the monsoon flow, explore possible modifications required for tracking the mid- and low-level, and propose a new automated diagnostic tool. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchPage;
