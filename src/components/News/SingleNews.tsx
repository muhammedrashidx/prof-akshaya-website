import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SingleNews = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug, externalUrl } = blog;
  const hasExternalUrl = !!externalUrl;

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded">
        {hasExternalUrl ? (
          <Link href={externalUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Image
              src={coverImage!}
              alt="image"
              className="w-full transition-transform duration-300 group-hover:scale-110"
              width={408}
              height={272}
            />
          </Link>
        ) : (
          <div className="block opacity-60">
            <Image
              src={coverImage!}
              alt="image"
              className="w-full transition-transform duration-300 group-hover:scale-110"
              width={408}
              height={272}
            />
          </div>
        )}
      </div>
      <div>
        {hasExternalUrl ? (
          <h3>
            <Link
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {title}
            </Link>
          </h3>
        ) : (
          <h3 className="mb-4 inline-block text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl opacity-60">
            {title}
          </h3>
        )}
        <p className="text-base text-body-color dark:text-dark-6">
          <span className="font-bold">{format(new Date(date), "MMMM dd, yyyy")}</span> | {excerpt}
        </p>
      </div>
    </div>
  );
};

export default SingleNews;
