import SingleNews from "@/components/News/SingleNews";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Atmospheric Convection and Dynamics Group",
  description: "Latest news and updates from the Atmospheric Convection and Dynamics Group at Centre for Climate Studies, IIT Bombay",
};

const NewsPage = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "externalUrl"]);

  return (
    <>
      <Breadcrumb pageName="News" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleNews blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
