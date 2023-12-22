import styles from "./Index.module.css";
import { blogs } from "./Data";
// import {IoArrowForwardOutline}
const Blog = () => {
  return (
    <section className={styles.blogs}>
      <div className={styles.container}>
        <div className={styles.body}>
          <header>
            <div className={styles.cap}>Our Blog</div>
            <div className={styles.title}>
              Value proposition accelerator product management venture{" "}
            </div>
          </header>
          <main className={styles.main}>
            <div className={styles.boxes}>
              {blogs.map((item) => (
                <div className={styles.box} key={item.id}>
                  <img
                    src={item.img}
                    alt="cool-feature"
                    className={styles.boxImg}
                  />
                  <div className={styles.date}>
                    <span>Category</span>
                    <span>{item.date}</span>
                  </div>
                  <div className={styles.content}>{item.content}</div>
                  <div className={styles.author}>
                    <img src={item.author.img} alt={item.author.name} />
                    <span>{item.author.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.button}>
              <button className={styles.btn}>
                <span>Load more</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Blog;
