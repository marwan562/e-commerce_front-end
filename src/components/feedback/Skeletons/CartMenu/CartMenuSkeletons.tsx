import ContentLoader from "react-content-loader";

const CartMenuSkeletons = () => {
  const renderSkeletons = Array(3)
    .fill(0)
    .map((_, inx) => {
      return (
        <div key={inx}>
          <ContentLoader
            speed={2}
            width={476}
            height={124}
            viewBox="0 0 476 124"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="8" y="23" rx="14" ry="14" width="58" height="52" />
            <rect x="80" y="32" rx="0" ry="0" width="93" height="8" />
            <rect x="86" y="48" rx="0" ry="0" width="79" height="8" />
            <rect x="84" y="63" rx="0" ry="0" width="66" height="8" />
            <rect x="198" y="42" rx="0" ry="0" width="68" height="9" />
            <rect x="274" y="28" rx="10" ry="10" width="34" height="33" />
          </ContentLoader>
        </div>
      );
    });
  return <>{renderSkeletons}</>;
};

export default CartMenuSkeletons;
