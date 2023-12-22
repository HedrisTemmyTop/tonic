import styles from "./Index.module.css";
import ImageLogo from "./../../assets/Logo.svg";
import "./../../index.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={[styles.container, "container"].join(" ")}>
        <div className={styles.body}>
          <div>
            <div className={styles.text}>
              An enterprise template to ramp up your company website
            </div>
            <form className={styles.form}>
              <input
                className={styles.input}
                placeholder="Your email address"
              />
              <button className={styles.startbtn}>
                <span>Start now</span>
              </button>
            </form>
          </div>
        </div>
        <main>
          <div className={styles.footerContainer}>
            <div className={styles.Logo}>
              <img src={ImageLogo} alt="Logo" />
              <p>
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
              <span>All rights reserved.</span>
            </div>
            <div className={styles.Footerlist}>
              <div className={styles.listContainer}>
                <div className={styles.footerheader}>Landings</div>
                <ul>
                  <li>Home</li>
                  <li>Products</li>
                  <li>Services</li>
                </ul>
              </div>
              <div className={styles.listContainer}>
                <div className={styles.footerheader}>Company</div>
                <ul>
                  <li>Home</li>
                  <li>Careers</li>
                  <li>Services</li>
                </ul>
              </div>
              <div className={styles.listContainer}>
                <div className={styles.footerheader}>Resources</div>
                <ul>
                  <li>Blog</li>
                  <li>Products</li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className={styles.footerContainer}>
            <div className={styles.footerCon}>
              <div className={styles.Logo}>
                <img src={ImageLogo} alt="Logo" />
                <p>
                  Social media validation business model canvas graphical user
                  interface launch party creative facebook iPad twitter.
                </p>
                <span>All rights reserved.</span>
              </div>
              <div className={styles.Footerlist}>
                <button>Hiring!</button>
                {Data.map((item) => (
                  <div key={item.id} className={styles.footListCon}>
                    <span className={styles.footheader}>{item.land}</span>
                    <div className={styles.footList}>
                      <span>{item.home}</span>
                      <span>{item.Products}</span>
                      <span>{item.Services}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        */}
        </main>
      </section>
    </footer>
  );
};

export default Footer;
