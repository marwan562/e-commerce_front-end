import ContentLoader from "react-content-loader";

const CartSkeletons = () => {
  const renderSkeleton = Array(4)
    .fill(0)
    .map((_, inx) => {
      return (
        <div key={inx} className="mx-auto max-w-3xl">
          <ContentLoader
            speed={2}
            width={650}
            height={124}
            viewBox="0 0 650 124"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="8" y="23" rx="14" ry="14" width="58" height="52" />
            <rect x="80" y="32" rx="0" ry="0" width="93" height="8" />
            <rect x="86" y="48" rx="0" ry="0" width="79" height="8" />
            <rect x="84" y="63" rx="0" ry="0" width="66" height="8" />
            <rect x="472" y="47" rx="0" ry="0" width="68" height="9" />
            <rect x="551" y="34" rx="10" ry="10" width="34" height="33" />
            <rect x="594" y="42" rx="0" ry="0" width="13" height="17" />
          </ContentLoader>
        </div>
      );
    });
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {renderSkeleton}
    </div>
  );
};

export default CartSkeletons;
