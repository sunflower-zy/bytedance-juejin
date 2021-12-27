import ArticleListItem from "../ArticleListItem";

import { getArticles } from "../../fake-api";
import { useEffect, useState } from "react";
interface ArticleListProps {
    categoryId: number;
    sortBy: string | null;
}

interface Article {}

function ArticleList(props: ArticleListProps) {
    const { categoryId, sortBy } = props;
    const [limit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [article, setArticle] = useState<any>([]);
    useEffect(() => {
        const getDataSource = async () => {
            const response = await getArticles(
                categoryId,
                sortBy,
                offset,
                limit
            );
            setArticle((article: any) => [...article, response.data.articles]);
        };
        getDataSource();
    }, [offset, limit]);

    return (
        <>
            {article
                .slice(offset, offset + limit + 1)
                .map((item: any, index: number) => {
                    return <ArticleListItem />;
                })}
        </>
    );
}

export default ArticleList;
