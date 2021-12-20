import { useState, useEffect } from "react";
import ArticleList from "../../Components/ArticleList";

import type { Article } from "../../types";

import {getArticles} from "../../fake-api"


function Recommend() {
    const [recommendArticle, setRecommendArticle] = useState<Article>([]);

    useEffect(() => {
        const getRecommendArticle = async () => {};
    });

    return (
        <>
            <ArticleList />
        </>
    );
}

export default Recommend;
