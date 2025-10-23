import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
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
      <About />
      <Team />
    </main>
  );
};

export default ResearchPage;
