import { TeamType } from "@/types/team";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Akshaya Nikumbh",
    designation: "Principal Investigator",
    image: "/images/team/akshaya.jpg",
    googleScholarLink: "https://scholar.google.com/citations?user=diJtYHoAAAAJ&hl=en",
    twitterLink: "https://x.com/akshaya_nikumbh",
    linkedinLink: "https://www.linkedin.com/in/akshaya-nikumbh-a77a5668/",  
  },
  {
    id: 1,
    name: "Akash Devgan",
    designation: "PhD Student",
    image: "/images/team/akash.jpg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "https://www.linkedin.com/in/therealakash/",
  },
  {
    id: 2,
    name: "Soumili Chakraborty",
    designation: "PhD Student",
    image: "/images/team/soumili.jpeg",
    googleScholarLink: "/#",
    twitterLink: "/#",
    linkedinLink: "https://www.linkedin.com/in/soumili-chakraborty-08a569389/",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
