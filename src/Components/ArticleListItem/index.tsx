import { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

function ArticleListItem(props: any) {
  const { article, setHistoryList } = props;
  const [isError, setIsError] = useState(false);
  return (
    <Link
      to={`/article/${article.article_id}`}
      className="juejin_articleList_item"
      onClick={() => {
        setHistoryList((historyList: any) => [...historyList, article]);
      }}
    >
      <div className="juejin_article_item_top">
        <span>{article.author_user_info.user_name}</span>
        <span>
          {Object.values(article.category_info).map(
            (item) => typeof item === "string" && item
          )}
        </span>
      </div>
      <div className="juejin_article_item_middle">
        <div className="juejin_article_item_middle_left">
          <span className="juejin_article_item_title">
            {article.article_info.title}
          </span>
          <br />
          <span className="juejin_article_item_brief">
            {article.article_info.brief_content}
          </span>
          <div className="juejin_article_item_bottom">
            <span>
              <i className="juejin_article_item_icon juejin_article_item_view_icon"></i>
              {article.article_info.view_count}
            </span>
            <span>
              <i className="juejin_article_item_icon juejin_article_item_like_icon"></i>
              {article.article_info.digg_count}
            </span>
            <span>
              <i className="juejin_article_item_icon juejin_article_item_commet_icon"></i>
              {article.article_info.comment_count}
            </span>
          </div>
        </div>
        <img
          src={article.article_info.cover_image}
          className={`juejin_articleList_item_coverImage${
            isError ? "_error" : ""
          }`}
          onError={() => {
            setIsError(true);
          }}
          alt=""
        />
      </div>
    </Link>
  );
}

export default ArticleListItem;
