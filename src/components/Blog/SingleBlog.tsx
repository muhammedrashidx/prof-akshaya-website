import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug } = blog;

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded">
        <Link href={`/news/${slug}`} aria-label="blog cover" className="block">
          <Image
            src={coverImage!}
            alt="image"
            className="w-full transition-transform duration-300 group-hover:scale-110"
            width={408}
            height={272}
          />
        </Link>
      </div>
      <div>
        <h3>
          <Link
            href={`/news/${slug}`}
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">
          <span className="font-bold">{format(new Date(date), "MMMM dd, yyyy")}</span> | {excerpt}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
