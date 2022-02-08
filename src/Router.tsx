import { Routes, Route } from "react-router-dom";
import BasicLayout from "./Layouts/BasicLayout";
import ArticleListPage from "./Pages/ArticleListPage";
import Article from "./Pages/Article";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<ArticleListPage />}></Route>
        <Route path="article">
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="recommend" element={<ArticleListPage />}></Route>
        <Route path="backend" element={<ArticleListPage />}></Route>
        <Route path="frontend" element={<ArticleListPage />}></Route>
        <Route path="Android" element={<ArticleListPage />}></Route>
        <Route path="IOS" element={<ArticleListPage />}></Route>
        <Route path="*" element={<ArticleListPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
