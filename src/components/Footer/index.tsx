import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Section */}
      <div className="py-6">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left Column - Logo and Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="mb-2 inline-block">
                <Image
                  src="/images/logo/logo.svg"
                  alt="ACDG Logo"
                  width={160}
                  height={32}
                  className="max-w-full"
                />
              </Link>
              <p className="text-gray-600 text-xs max-w-md leading-relaxed">
                The Atmospheric Convection and Dynamics Group, IIT Bombay.
              </p>
            </div>

            {/* Center Column - Navigation Links */}
            <div className="lg:col-span-1 flex flex-col items-center space-y-3">
              <div>
                <Link href="/people" className="text-primary hover:text-primary/80 text-sm font-medium mr-4">
                  People
                </Link>
                <span className="text-gray-400 text-sm">|</span>
                <Link href="/research" className="text-primary hover:text-primary/80 text-sm font-medium mx-4">
                  Research
                </Link>
                <span className="text-gray-400 text-sm">|</span>
                <Link href="/news" className="text-primary hover:text-primary/80 text-sm font-medium ml-4">
                  News
                </Link>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <Link
                  aria-label="Google Scholar"
                  href="https://scholar.google.com/citations?user=diJtYHoAAAAJ&hl=en"
                  className="text-primary hover:text-primary/80"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                  </svg>
                </Link>
                <Link
                  aria-label="X (Twitter)"
                  href="https://x.com/akshaya_nikumbh"
                  className="text-primary hover:text-primary/80"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/akshaya-nikumbh-a77a5668/"
                  className="text-primary hover:text-primary/80"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Institution Logos */}
            <div className="lg:col-span-1 flex justify-end">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/brands/IITB.svg"
                  alt="IIT Bombay"
                  width={90}
                  height={45}
                  className="h-14 w-auto object-contain"
                />
                <Image
                  src="/images/brands/ccs.svg"
                  alt="Centre for Climate Studies"
                  width={90}
                  height={45}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Light Grey Background */}
      <div className="bg-gray-100 py-2">
        <div className="container">
          <div className="text-center">
            <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium mr-4">
              Developed By
            </Link>
            <span className="text-gray-400 text-sm">|</span>
            <Link href="www.muhammedrashid.in" className="text-primary hover:text-primary/80 text-sm font-medium mx-4">
              Muhammed Rashid
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
