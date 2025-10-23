import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logo, logoWhite } = client;
  return (
    <div className="ud-single-logo mb-5 mr-2 max-w-[150px]">
      <Link href={link} target="_blank" rel="nofollow noopner">
        <Image
          src={logo}
          alt={title}
          className="dark:hidden h-16 w-auto object-contain"
          width={150}
          height={64}
        />
        <Image
          src={logoWhite}
          alt={title}
          className="hidden dark:block h-16 w-auto object-contain"
          width={150}
          height={64}
        />
      </Link>
    </div>
  );
};

export default SingleClient;
