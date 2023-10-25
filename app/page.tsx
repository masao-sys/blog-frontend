import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getArticlesData } from "../lib/articles";
import type { ArticleData } from '../lib/articles';

export const getData = async () => {
	const articles: ArticleData[] = getArticlesData();
	return articles;
};

export default async function Home() { 
  const articles = await getData();
  return (
    <div>
      <section className="text-lg leading-6 text-center">
        <p>まさおによるブログです。</p>
      </section>

      <section className="text-lg leading-normal text-center pt-1">
        <h2>📝エンジニアのブログ</h2>

        <div className={styles.homeGridCols}>
          {articles.map((article) => (
            <article key={article.id}>
              <Link href={`/article/${article.id}`}>
                <img src={`${article.thumbnail}`} className={styles.thumbnailImage}/>
              </Link>
              <Link href={`/blog/${article.id}`} legacyBehavior>
                <a className="text-black font-medium">{article.title}</a>
              </Link>
              <br />
              <small className="text-inherit">
                {article.date}
              </small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
