"use client";
import { TeamType } from "@/types/team";
import SingleTeam from "./SingleTeam";
import PersonModal from "./PersonModal";
import { useState } from "react";

const placeholder = "/images/team/placeholder.jpg";

// Core PI
const principalInvestigator: TeamType[] = [
  {
    id: 1,
    name: "Akshaya Nikumbh",
    designation: "Principal Investigator",
    image: "/images/team/akshaya.jpg",
    googleScholarLink: "https://scholar.google.com/citations?user=diJtYHoAAAAJ&hl=en",
    twitterLink: "https://x.com/akshaya_nikumbh",
    linkedinLink: "https://www.linkedin.com/in/akshaya-nikumbh-a77a5668/",
    emails: ["akshaya.nikumbh@iitb.ac.in"],
    bio:
      "I am an Assistant Professor at the Centre for Climate Studies, IIT Bombay. I joined IIT Bombay as an assistant professor in January 2024. Prior to joining IIT Bombay, I was a postdoctoral research associate at Princeton University from October 2021 to December 2023. I completed my BE in Electronics and Telecommunication from Pune University and my PhD in Atmospheric Science from IISc Bangalore.",
  },
];

// PhD students
const phdStudents: TeamType[] = [
  {
    id: 101,
    name: "Akash Devgan",
    designation: "PhD Student",
    image: "/images/team/akash.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "https://www.linkedin.com/in/therealakash/",
    emails: ["akashdevgan@iitb.ac.in", "lionexdevgan@gmail.com"],
    bio:
      "Hey! I’m Akash Devgan, a Ph.D. student at IIT Bombay, working with Prof. Akshaya Nikumbh on figuring out what controls the size of eddies and how they evolve over time. Basically, I spend my days staring at climate data, trying to decode the chaos in our atmosphere. I come from a small town Nagaon, Assam, a place that gets hammered by floods every year. In 2019, one of those floods displaced my family and community, and that hit me hard. That’s when I decided I’m going to study this stuff and do something about it. Fast forward a few years, I took the science route: B.Sc. in Physics from Cotton University (where I fell for atmospheric sciences), then an M.Sc. in Atmospheric Science at NIT Rourkela, where I bagged a Gold Medal for Best Postgraduate and a Silver Medal for being the Department Topper.\nDuring my M.Sc., I interned at ISRO’s Space Applications Centre (SAC), Ahmedabad, under Dr. Neerja Sharma. My research was figuring out how to measure ocean wind speeds using Synthetic Aperture Radar (SAR) even when it’s raining because rain seemed to mess it all up. And to keep things rolling, I cracked the CSIR-NET exam with an AIR 18 (LS) in Earth, Planetary, and Atmospheric Sciences.\nBut hey, it’s not all research and climate models. I’m crazy about football, played at club, district, and regional levels back then. And when I’m not chasing vortex systems, I’m dropping into battle royales. I’ve competed nationally in BGMI, made it to the ESL India Premiership Starter Cup finals, and won a bunch of state-level FPS tournaments in 2021-22.",
  },
  {
    id: 102,
    name: "Soumili Chakraborty",
    designation: "PhD Student",
    image: "/images/team/soumili.jpeg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "https://www.linkedin.com/in/soumili-chakraborty-08a569389/",
    emails: ["24d1235@iitb.ac.in", "soumilichakraborty.99@gmail.com"],
    bio:
      "I am Soumili Chakraborty, a Ph.D. student at the Centre for Climate Studies, IIT Bombay. I hold a B.Sc. in Physics (2021) and an M.Sc. in Atmospheric Science (2023) from Calcutta University, where I was awarded a gold medal for academic excellence. I have also qualified for GATE 2024. I joined my Ph.D. in 2024 under the guidance of Prof. Akshay Nikumbh. My research focuses on understanding convective aggregation and the spatial footprint of extreme precipitation events, with a particular interest in Indian monsoon and tropical convection. Outside of academia, I enjoy exploring artistic pursuits such as painting and crafts, appreciating films, and listening to music.",
  },
];

// Postdocs
const postdocs: TeamType[] = [
  {
    id: 201,
    name: "Dr. Tukaram Zore",
    designation: "Postdoctoral Researcher",
    image: "/images/team/Tukaram.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
    emails: ["tukaramzore9@gmail.com", "30006630@iitb.ac.in"],
    bio:
      "Hi, I’m Dr. Tukaram Zore, a Postdoctoral Researcher in the Atmospheric Convection and Dynamics Group at IIT Bombay, led by Prof. Akshaya Nikumbh. Currently my research focuses on uncovering the physical mechanisms driving changes in mean and extreme rainfall over India.\n\nI hold a Ph.D. in Atmospheric Science from IIT Bhubaneswar, where I investigated the influence of tropical subseasonal oscillations—including Convectively Coupled Equatorial Waves (CCEW), the Madden–Julian Oscillation (MJO), and the Boreal Summer Intraseasonal Oscillation (BSISO)—on heatwaves, heat stress, and tropical cyclones. My M.Tech is in Climate Science and Technology from IIT Bhubaneswar.\n\nMy expertise spans climate dynamics, climate modeling, weather and climate extremes, and teleconnections. Proficient in Python, MATLAB, and analysis tools such as NCL, CDO, and GrADS, I employ advanced statistical, machine learning, and dynamical models to improve long-range forecasts and enhance understanding of climate predictability over the Indian region.",
  },
  {
    id: 202,
    name: "Dr. Rosa V. Lyngwa",
    designation: "Postdoctoral Researcher",
    image: "/images/team/Rosa.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
    emails: ["20004193@iitb.ac.in", "rosavellosa18@gmail.com"],
    bio:
      "Before this, I researched the identification and impact of extreme weather phenomena known as \"Atmospheric Rivers\" (ARs) over South Asia, particularly in the Indian and the Himalayan region. My work primarily focused on investigating the role of ARs in major flood events in these areas, with an emphasis on understanding their association with extreme precipitation occurrences. I explored the atmospheric conditions leading up to and during AR events, aiming to uncover the underlying mechanisms driving these phenomena. I also tracked the moist air parcels that contributed to ARs, providing insights into the moisture sources and movement. Furthermore, I assessed the broader impacts of ARs on regional climate, including their effects on climatological precipitation patterns (both rainfall and snowfall), seasonal precipitation extremes, and the occurrence of floods in these regions. Through this work, I aim to improve our understanding of ARs, their significant role in shaping the hydroclimate across South Asia and the Himalaya.\nTaking a step further in my research interest in extreme weather events, I focus on improving weather forecasting through the integration of AI/ML. The first phase of this work involves assessing how effectively numerical weather prediction models capture extreme precipitation events. This will be achieved by examining the performance of various parameterization schemes, with the goal of identifying the most suitable ones for accurately simulating these events. Then enhance these forecasts by leveraging AI/ML techniques, ensuring more reliable forecasts of events. Through this approach, I hope to bridge the gap between traditional forecasting methods and modern AI-driven advancements, improving the predictability of extreme weather events in the future.",
  },
];

// Project staff
const projectStaff: TeamType[] = [
  {
    id: 301,
    name: "Shreeya Nadgowda",
    designation: "Project Staff",
    image: "/images/team/Shreeya.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
    emails: ["shreeyaanadgowda@gmail.com", "30006201@iitb.ac.in"],
    bio:
      "Hey! I am Shreeya Nadgowda, a project staff at the Centre for Climate Studies, IIT Bombay. I completed my Bachelor's degree in Physics at Fergusson College (2020), Pune, and a Master’s in Astrophysics at the University of Potsdam, Germany (2024). Currently, I am expanding my research scope by working on a climate science project focused on Mean-Extreme Monsoon Precipitation. My work aims to understand why extreme monsoon events are increasing while the mean monsoon is decreasing mainly over Central India, the core monsoon zone. To achieve this, I analyze both observational and model datasets, including CRU, GPCC, IMD, and CMIP6 model data. By examining historical components and the influence of greenhouse gases (GHG) and aerosols, I aim to study how anthropogenic factors contribute to these shifting monsoon patterns. Beyond research, I like reading fiction in my free time and do origami.",
  },
  {
    id: 302,
    name: "Disha Virmalwar",
    designation: "Project Research Assistant",
    image: "/images/team/Disha.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
    emails: ["disha.virmalwar31@gmail.com"],
    bio:
      "Hey! I am Disha, a Project Research Assistant at the Centre for Climate Studies, IIT Bombay, working with Prof. Akshaya Nikumbh on understanding the Extra-tropical Influence on Subseasonal Variability and its Implications on Predictability of Indian Summer Monsoon Rainfall. Currently my work focuses on characterizing frequency of Rossby Wave Breaking Events and their spatial and temporal evolution over the Indian region. I completed my Integrated Bachelor's and Master's in Physics at IIT Kanpur, where my Master's research aimed to understand Rayleigh Benard Convection and how small perturbations in initial conditions could lead to indeterministic outcomes. After a short stint in the industry to explore the product development cycle, I returned to research with a focus on large-scale atmospheric and oceanic flows, weather extremes, and their predictability. I am particularly interested in combining my research and industry experiences to translate scientific insights into practical tools for mitigation strategies during extreme events. Beyond research, I enjoy trekking, dancing, exploring the cities I reside in, discovering new food spots and hoping for art cafes, which have recently become my go to place.",
  },
  {
    id: 303,
    name: "Vishal Choudhary",
    designation: "Project Research Assistant",
    image: "/images/team/Vishal.png",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
    emails: ["vishalchoudharysre@gmail.com", "vishal.choudhary@students.iiserpune.ac.in"],
    bio:
      "Hey! I am Vishal Choudhary, a Project Research Assistant at the Centre for Climate Studies, IIT Bombay, working with Prof. Akshaya Nikumbh. I completed my BS–MS Dual Degree in 2024 from IISER Pune, where I developed an interest in climate dynamics and precipitation processes. My current work focuses on understanding the thermodynamic and dynamic processes that control the spatial footprints of extreme precipitation events over India. I aim to identify how these processes shape the size and distribution of heavy rainfall events using observational datasets, theoretical frameworks, and numerical simulations. As part of my research, I am developing an automated Python-based toolkit to detect and analyze spatial footprints of precipitation extremes and explore their seasonal variability and changing patterns. Beyond research, I enjoy reading fiction, watching world cinema, and taking long walks.",
  },
  {
    id: 304,
    name: "Anirudh Peri",
    designation: "Project Staff",
    image: placeholder,
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
    emails: ["p.anirudh190@gmail.com"],
    bio:
      "Hello, I’m Anirudh Peri, a master’s thesis student at the Extreme Precipitation Events Lab working on seasonal trends. I’m interested in Large Scale Natural Phenomena in the Atmosphere and Oceans. My passion stems from an intersection of interests in physics, nature and computers.  \n\nI’m from Visakhapatnam, Andhra Pradesh and the city had a vital role in my love for the oceans and nature. When I’m not out and about or playing some sport, I’m listening to music, or playing a video game. Or maybe reading a book. I’d like to think of myself as a jack of all trades with diverse interests so I might be doing something entirely new the next time you find me. BTW most people tend to forget my first name, they know and call me ‘Peri’ and I prefer that.",
  },
];

// Alumni
const alumni: TeamType[] = [
  {
    id: 401,
    name: "Dhyey Solanki",
    designation: "Alumni — Project Staff",
    image: "/images/team/Dhyey.png",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
    emails: ["dhyey.solanki1501@gmail.com"],
    bio:
      "I am Dhyey Solanki. I am a Project Research Assistant at the Centre for Climate Studies (CCS) at IIT Bombay. As an undergraduate, I studied Environmental Engineering at a state university college in Gujarat, where I got interested in climate and atmospheric science. This led me to pursue a master’s degree in Atmospheric Science at Colorado State University (CSU) in the US. At CSU, my research focused on radiative transfer for satellites, large-scale atmospheric dynamics, and Earth’s energy budget. My current work at CCS focuses on developing a physics-based understanding of the mean and extreme monsoon precipitation over India. In my free time, I enjoy cooking, reading - mostly non-fiction or historical fiction, but also classics, watching movies and documentaries, and going for long walks or hikes.",
  },
  {
    id: 402,
    name: "Eswari Lekhya Jarajapu",
    designation: "Alumni — Project Staff",
    image: "/images/team/placeholder.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
    emails: ["30006197@iitb.ac.in", "eswari.lekhya.jarajapu@gmail.com"],
    bio:
      "Hey there! I’m Eswari Lekhya Jarajapu, a Junior Research Fellow at the Centre for Climate Studies, IIT Bombay. After completing my Bachelors in Physics from Delhi University, I went on to pursue a Master's in Atmospheric Science from NIT Rourkela. My current research focuses on Rossby wave-breaking phenomena and its interaction with the tropics and how it influences the sub-seasonal variability in our Indian Summer Monsoon. When I’m not doing research, you’ll probably find me listening to Indie music, watching movies, or battling it out on a table tennis court. Social media isn’t my thing, but I do run a meme page for fun! If you’d like to connect, feel free to drop me an email.",
  },
];

// Masters Thesis
const mastersThesis: TeamType[] = [
  {
    id: 501,
    name: "Anish Patil",
    designation: "Masters Thesis (Ongoing)",
    image: "/images/team/placeholder.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
  },
  {
    id: 502,
    name: "Anirudh Peri",
    designation: "Masters Thesis (May 2024-2025)",
    image: "/images/team/placeholder.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "/#",
  },
  
];

const Team = () => {
  const [selected, setSelected] = useState<TeamType | null>(null);
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <h3 className="mb-6 text-center text-xl font-semibold text-dark dark:text-white">Principal Investigator</h3>
        <div className="-mx-4 mb-12 flex flex-wrap justify-center">
          {principalInvestigator.map((team, i) => (
            <SingleTeam key={`pi-${i}`} team={team} onOpen={() => setSelected(team)} />
          ))}
        </div>
        
        <h3 className="mb-6 text-center text-xl font-semibold text-dark dark:text-white">PhD Students</h3>
        <div className="-mx-4 mb-12 flex flex-wrap justify-center">
          {phdStudents.map((p, i) => (
            <SingleTeam key={`phd-${i}`} team={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        <h3 className="mb-6 text-center text-xl font-semibold text-dark dark:text-white">Postdocs</h3>
        <div className="-mx-4 mb-12 flex flex-wrap justify-center">
          {postdocs.map((p, i) => (
            <SingleTeam key={`postdoc-${i}`} team={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        <h3 className="mb-6 text-center text-xl font-semibold text-dark dark:text-white">Project Staff</h3>
        <div className="-mx-4 mb-12 flex flex-wrap justify-center">
          {projectStaff.map((p, i) => (
            <SingleTeam key={`proj-${i}`} team={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        <h3 className="mb-6 text-center text-xl font-semibold text-dark dark:text-white">Alumni</h3>
        <div className="-mx-4 mb-12 flex flex-wrap justify-center">
          {alumni.map((p, i) => (
            <SingleTeam key={`alumni-${i}`} team={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        <h3 className="mb-6 text-center text-xl font-semibold text-dark dark:text-white">Masters Thesis</h3>
        <div className="-mx-4 mb-12 flex flex-wrap justify-center">
          {mastersThesis.map((p, i) => (
            <SingleTeam key={`mt-${i}`} team={p} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </div>
      {selected && <PersonModal person={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Team;
