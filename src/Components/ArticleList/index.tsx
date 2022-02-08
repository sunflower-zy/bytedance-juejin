// @ts-nocheck
import ArticleListItem from "../ArticleListItem";

import { getArticles } from "../../fake-api";
import { useContext, useEffect, useState } from "react";
interface ArticleListProps {
  categoryId: number;
  sortBy: string | null;
}

function ArticleList(props: ArticleListProps) {
  const historyList = useContext(historyListContext);
  const { categoryId, sortBy } = props;
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    const getDataSource = async () => {
      const response = await getArticles(categoryId, sortBy, offset, limit);
      setArticleList((articleList) => [
        ...articleList,
        ...response.data.articles,
      ]);
      console.log(response.data.articles);
    };

    getDataSource();
    return () => {
      setArticleList([]);
    };
  }, [categoryId, sortBy, offset, limit]);

  return (
    <>
      {sortBy !== "history"
        ? articleList.map((item) => {
            return <ArticleListItem key={item.article_id} article={item} />;
          })
        : historyList.map((item) => {
            return (
              <ArticleListItem
                key={item.article_id}
                article={item}
                setHistoryList
              />
            );
          })}
    </>
  );
}

export default ArticleList;
