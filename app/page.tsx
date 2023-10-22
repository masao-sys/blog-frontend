import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <section className="text-lg leading-6 text-center">
        <p>まさおによるブログです。</p>
      </section>

      <section className="text-lg leading-normal text-center pt-1">
        <h2>📝エンジニアのブログ</h2>

        <div className={styles.homeGridCols}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="text-black font-medium">title</a>
            </Link>
            <br />
            <small className="text-inherit">
              2023/02/01
            </small>
          </article>

          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="text-black font-medium">title</a>
            </Link>
            <br />
            <small className="text-inherit">
              2023/02/01
            </small>
          </article>

          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="text-black font-medium">title</a>
            </Link>
            <br />
            <small className="text-inherit">
              2023/02/01
            </small>
          </article>

          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="text-black font-medium">title</a>
            </Link>
            <br />
            <small className="text-inherit">
              2023/02/01
            </small>
          </article>
        </div>
      </section>
    </div>
  );
}
