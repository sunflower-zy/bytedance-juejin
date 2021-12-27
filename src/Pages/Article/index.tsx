import { useLocation, useSearchParams } from "react-router-dom";
import ArticleList from "../../Components/ArticleList";

function Article() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const categoryId = location.state;

    const sortBy =
        searchParams.get("sort") != null ? searchParams.get("sort") : "hot";

    return (
        <>
            <ArticleList categoryId={categoryId} sortBy={sortBy} />
        </>
    );
}

export default Article;
