import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full px-2 md:w-1/2 lg:w-1/4">
      <div className="wow fadeInUp group mb-6" data-wow-delay='.15s'>
        <div className="relative z-10 mb-4 flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-white shadow-sm">
          <Image
            src={icon}
            alt={title}
            width={36}
            height={36}
            className="h-9 w-auto object-contain"
          />
        </div>
        <h3 className="mb-2 text-base font-semibold break-words text-dark dark:text-white">
          {title}
        </h3>
        <p className="mb-4 text-sm text-body-color dark:text-dark-6 whitespace-pre-line">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
