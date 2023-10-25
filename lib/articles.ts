import path from "path";
import fs from "fs";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "articles");

export type ArticleData = {
	id: string;
	title: string;
  date: string;
  thumbnail: string;
};

export const getArticlesData = (): ArticleData[] => {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data as {title: string, date: string, thumbnail: string},
    };
  });
  return allArticlesData;
}
