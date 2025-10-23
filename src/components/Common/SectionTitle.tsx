const SectionTitle = ({
  subtitle,
  title,
  paragraph,
  width = "635px",
  center,
}: {
  subtitle?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) => {
  // Convert width to responsive classes
  const getResponsiveWidth = (width: string) => {
    if (width === "900px") {
      return "max-w-4xl"; // 896px equivalent
    }
    return "max-w-2xl"; // 672px equivalent for default
  };

  return (
    <div className="-mx-4 flex flex-wrap">
      <div
        className={`wow fadeInUp w-full px-4 ${getResponsiveWidth(width)} ${
          center ? "mx-auto text-center" : ""
        }`}
        data-wow-delay=".1s"
      >
        {subtitle && (
          <span className="mb-2 block text-lg font-semibold text-primary">
            {subtitle}
          </span>
        )}
        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }}>
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
