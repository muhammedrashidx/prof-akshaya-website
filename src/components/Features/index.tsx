import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="MEET THE PI"
          title="Akshaya Nikumbh, PhD"
          paragraph="Assistant Professor, Centre for Climate Studies, IIT Bombay<br/><br/><span class='text-black dark:text-white'>The ATMOSPHERIC CONVECTION AND DYNAMICS GROUP at Centre for Climate Studies, IIT Bombay, is led by Akshaya Nikumbh. She joined IIT Bombay as an assistant professor in January, 2024. Prior to joing IIT Bombay, she was a postdoctoral research associate at Princeton University from October 2021- December 2023. She completed her BE in Electronics and Telecommunication from Pune University and her PhD in Atmospheric Science from IISc Bangalore.</span>"
          width="900px"
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
