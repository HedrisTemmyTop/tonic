import styles from "./Index.module.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { testimonial } from "./Data";
import "./../../index.css";

const Agile = () => {
  return (
    <section className={styles.agile}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.body}>
          <header>
            <div className={styles.heading}>
              An enterprise template to ramp up your company website
            </div>
            <div className={styles.arrows}>
              <button>
                <FiArrowLeft />
              </button>
              <button>
                <FiArrowRight />
              </button>
            </div>
          </header>
          <main className={styles.main}>
            <div className={styles.boxes}>
              {testimonial.map((item) => (
                <div className={styles.box} key={item.id}>
                  <div className={styles.boxText}>{item.content}</div>
                  <div className={styles.boxAuthor}>
                    <img src={item.author.img} alt={item.author.name} />
                    <div className={styles.author}>
                      <div>{item.author.name}</div>
                      <div>{item.author.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Agile;
