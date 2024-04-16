import ContentLoader from "react-content-loader";



const ProductSkeleton = () => {
  const renderSkeletons = Array(4)
    .fill(0)
    .map((_, inx) => {
      return (
        <div key={inx} className="">
          <ContentLoader
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="15" y="14" rx="14" ry="14" width="216" height="261" />
            <circle cx="198" cy="315" r="21" />
            <rect x="31" y="302" rx="0" ry="0" width="48" height="28" />
            <rect x="31" y="351" rx="0" ry="0" width="119" height="8" />
            <rect x="31" y="364" rx="0" ry="0" width="89" height="8" />
            <rect x="32" y="380" rx="0" ry="0" width="78" height="9" />
            <rect x="29" y="400" rx="26" ry="26" width="194" height="37" />
          </ContentLoader>
        </div>
      );
    });
  return (
    <div className="mb-6 px-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-3 gap-[40px]">
      {" "}
      {renderSkeletons}
    </div>
  );
};

export default ProductSkeleton;
