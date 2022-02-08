// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../../fake-api";
import "./index.css";

function Article() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const getArticleDetail = async () => {
      const response = await getArticleById(id);
      if (response.data) {
        setContent(response.data.article.article_content);
      }

      console.log(response.data);
    };
    getArticleDetail();
  }, [id]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const getComments = async (id: number) => {
      const response = await getCommentsByArticleId(id);
      console.log(response.data.comments);
      if (response.data) {
        setComment(response.data.comments);
      }
    };
    if (id) {
      getComments(+id);
    }
  }, [id]);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      {comment.map((item) => {
        return (
          <div className="article_comment_item" key={item.comment_id}>
            <div className="article_comment_user_info">
              <img
                className="article_comment_avatar"
                src={item.user_info.avatar_large}
                alt=""
              />
              <span>{item.user_info.user_name}</span>
            </div>

            <span className="article_comment_content">
              {item.comment_info.comment_content}
            </span>
            <div className="article_comment_reply_item">
              {item.comment_info.comment_replys &&
                item.comment_info.comment_replys.map((item) => (
                  <div className="article_comment_reply" key={item.reply_id}>
                    {item.user_id} 回复{item.reply_to_user_id}: <br />
                    <span className="article_comment_reply_content">
                      {item.reply_content}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Article;
