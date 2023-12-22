import styles from "./Index.module.css";
import img from "./../../assets/Rectangle 1270 (5).svg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { customer } from "./Data";
import "./../../index.css";
const Customer = () => {
  return (
    <section className={[styles.customer, "container"].join(" ")}>
      <img src={img} alt="customer" />
      <main className={styles.main}>
        <div className={styles.head}>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </div>
        <div className={styles.boxes}>
          {customer.map((item) => (
            <div className={styles.box} key={item.id}>
              <div className={styles.boxText}>{item.text}</div>
              <IoIosArrowDropdownCircle className={styles.icon} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Customer;
