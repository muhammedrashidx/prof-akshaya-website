import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | Atmospheric Convection and Dynamics Group",
  description: "Publications and research papers from the Atmospheric Convection and Dynamics Group at IIT Bombay.",
};

const PublicationPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Publications" />
      
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[800px] text-center">
                  <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                    Publications
                  </h1>
                  <p className="text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed">
                    Research publications and papers from the Atmospheric Convection and Dynamics Group at Centre for Climate Studies, IIT Bombay.
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

export default PublicationPage;
