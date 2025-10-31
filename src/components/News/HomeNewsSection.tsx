import SingleNews from "./SingleNews";
import Link from "next/link";

const HomeNewsSection = ({ posts }: any) => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px] flex items-center justify-between">
          <div className="wow fadeInUp" data-wow-delay=".1s">
            <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              News
            </h2>
          </div>
          <Link
            href="/news"
            className="group flex items-center gap-3 text-sm font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <span className="text-right text-xs sm:text-sm">
              READ MORE ATMOSPHERIC<br />
              CONVECTION AND DYNAMICS<br />
              GROUP NEWS<br />
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary transition duration-300 group-hover:bg-primary">
              <svg
                className="h-5 w-5 stroke-primary transition duration-300 group-hover:stroke-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleNews blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNewsSection;
