import ContentLoader from "react-content-loader";

const CategoriesSkeletons = () => {
  return (
    <div className="mb-6 px-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-3 gap-[40px]">
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="15" y="14" rx="14" ry="14" width="251" height="376" />
      </ContentLoader>
    </div>
  );
};

export default CategoriesSkeletons;
