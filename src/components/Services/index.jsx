import styles from "./Index.module.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import { services } from "./Data";
import "./../../index.css";
const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.body}>
          <header>
            <div className={styles.cap}>Our Services</div>
            <div className={styles.title}>
              Handshake infographic mass market crowdfunding iteration.
            </div>
          </header>
          <main className={[styles.main, "container"].join(" ")}>
            <div className={styles.boxes}>
              {services.map((item) => (
                <div className={styles.box} key={item.id}>
                  <img src={item.img} alt="cool-feature" />
                  <div>{item.title}</div>

                  <button>
                    <span>Explore page</span>
                    <IoArrowForwardOutline />
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Services;
