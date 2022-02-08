import { useLocation, useSearchParams } from "react-router-dom";
import ArticleList from "../../Components/ArticleList";

function ArticleListPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const categoryId = typeof location.state === "number" ? location.state : 0;

  const sortBy =
    searchParams.get("sort") !== null ? searchParams.get("sort") : "hot";

  return <ArticleList categoryId={categoryId} sortBy={sortBy} />;
}

export default ArticleListPage;
