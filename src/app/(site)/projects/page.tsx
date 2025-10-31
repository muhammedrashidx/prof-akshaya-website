import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Atmospheric Convection and Dynamics Group",
  description:
    "Ongoing and recent research projects led by Akshaya Nikumbh and collaborators at IIT Bombay, including DST, MOES, and sustainability funded initiatives.",
};

const projectCards = [
  {
    title:
      "Thermodynamic and Dynamic processes controlling the spatial footprints of precipitation extremes over India",
    investigators: "(PI: Akshaya Nikumbh)",
    funding: "Funded under ANRF by DST",
  },
  {
    title:
      "Multiscale atmospheric variability tracking tool for precursors of extreme events over India (MAITRI)",
    investigators:
      "(PI: Akshaya Nikumbh, CoPIs: Prof. Nirupam Karmakar (IITBBS), Prof. Vishal Dixit (IITB))",
    funding: "Funded by MOES",
  },
  {
    title:
      "Urban Climate Extremes: Early Warning and Impact Assessment",
    investigators:
      "Joint PI: Prof. S. Karmakar, Co-PIs: Prof. S. Gosh (IITB), Prof. Trupti Mishra (IITB), Prof. S. Ravichandran (IITB), Prof. Vishal Dixit (IITB), Prof. Amit Agrawal (IITB), Prof. Aparna Phadake (Mumbai University)",
    funding: "Funded by Department of Science and Technology",
  },
  {
    title:
      "Extra-tropical Influence on the Subseasonal Variability and its Implications on Predictability of Indian Summer Monsoon Rainfall",
    investigators:
      "(PI: Prof. Venu (IISc), Co-PIs: Profs. Jai Sukhatme (IISc), Akshaya Nikumbh (IITB))",
    funding: "Funded under Monsoon Mission III by MOES",
  },
  {
    title:
      "Towards a physics-based understanding of opposing trends of seasonal and extreme monsoon rainfall for their reliable projections",
    investigators: "(PI: Akshaya Nikumbh, CoPI: Prof. Angshuman Modak (IITB))",
    funding: "Funded by Green Energy and Sustainability Hub, IITB.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Breadcrumb pageName="Projects" />
      <section className="min-h-[50vh] bg-emerald-50 pb-12 pt-10 dark:bg-dark lg:pb-[70px] lg:pt-[50px]">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectCards.map((proj, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-md transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-dark"
              >
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {proj.title}
                </h2>
                <div className="mb-2 text-[15px] font-medium text-gray-600 dark:text-gray-200">
                  {proj.investigators}
                </div>
                <div className="text-sm font-semibold text-primary dark:text-yellow-200">
                  {proj.funding}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
