import styles from "./Index.module.css";
import Logo from "./../../assets/Logo.svg";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}`}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className={`${styles.links} ${show ? styles.show : styles.hide}`}>
          <ul>
            <li>
              <div>
                <span>Product</span>
              </div>
            </li>
            <li>
              <div>
                <span>Services</span>
              </div>
            </li>
            <li>
              <div>
                <span>About</span>
              </div>
            </li>
            <li className={styles.login}>
              <div>
                <span>Log In</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.menu} onClick={() => setShow((prev) => !prev)}>
        <FiMenu />
      </div>
      <div className={styles.label}></div>
    </header>
  );
};

export default Header;
