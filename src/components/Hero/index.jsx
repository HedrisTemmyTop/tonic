import styles from "./Index.module.css";
import HeroImg from "./../../assets/HeroGraphics.svg";
import boldo from "./../../assets/Logo (1).svg";
import presto from "./../../assets/Logo (2).svg";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <main className={styles.main}>
        <div className={styles.heroText}>
          <div className={styles.bigText}>
            Save time by building fast with Boldo Template
          </div>
          <div className={styles.smallText}>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </div>
          <div className={styles.buttons}>
            <button>
              <span>Buy template</span>
            </button>
            <button>
              <span>Explore</span>
            </button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={HeroImg} alt="hero" />
        </div>
      </main>
      <div className={styles.brands}>
        <img src={boldo} alt="boldo" />
        <img src={presto} alt="presto" />
        <img src={boldo} alt="boldo" />
        <img src={presto} alt="presto" />
        <img src={boldo} alt="boldo" />
        <img src={presto} alt="presto" />
      </div>
    </section>
  );
};

export default Hero;
