import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Atmospheric Convection and Dynamics Group",
  description:
    "Useful links for satellite imagery, real-time global weather, and other atmospheric science resources.",
};

const resources = [
  {
    title: "Satellite images",
    items: [
      { label: "https://www.mosdac.gov.in/", href: "https://www.mosdac.gov.in/" },
      { label: "https://www.cira.colostate.edu/", href: "https://www.cira.colostate.edu/" },
      { label: "https://dss.imd.gov.in/dwr_img/GIS/cyclone.html", href: "https://dss.imd.gov.in/dwr_img/GIS/cyclone.html" },
    ],
  },
  {
    title: "Real-time global weather",
    items: [
      { label: "https://earth.nullschool.net/", href: "https://earth.nullschool.net/" },
      { label: "https://zoom.earth/", href: "https://zoom.earth/" },
      { label: "windy.com", href: "https://windy.com" },
    ],
  },
  {
    title: "Misc",
    items: [
      { label: "Animations Library for The Atmospheric General Circulation, Wallace et al. (2023)", href: "#" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <Breadcrumb pageName="Resources" />
      <section className="min-h-[50vh] bg-emerald-50 pb-12 pt-10 dark:bg-dark lg:pb-[70px] lg:pt-[50px]">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Useful links</h2>
          <div className="space-y-10">
            {resources.map((group, idx) => (
              <div key={idx}>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {idx + 1}. {group.title}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-[15px]">
                  {group.items.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline break-words"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
