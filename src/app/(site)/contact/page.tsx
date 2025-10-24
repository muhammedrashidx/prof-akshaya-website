import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Join Us | Atmospheric Convection and Dynamics Group",
  description: "Join the Atmospheric Convection and Dynamics Group at IIT Bombay. Explore opportunities for research collaboration, PhD positions, and academic partnerships.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Join Us" />

      <Contact />
    </>
  );
};

export default ContactPage;
