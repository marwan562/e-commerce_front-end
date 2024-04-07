import { Header, Footer } from "../../components/common";
import styles from "./style.module.css";

const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <main className={container}>
      <Header />
      <div className={wrapper}></div>
      <Footer />
    </main>
  );
};

export default MainLayout;
