
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const InfoOafArticle = ({ articles }) => {
  const [articleInfo, setArticleInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { title } = useParams();
  console.log("useparams", title);
 
    const getTheArticle = async () => {
      const res = await articles.find((el) => el.title === title);
      setArticleInfo(res)
      setLoading(false);
    };
    getTheArticle();


  return (
    <div className="info">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        articleInfo && (
          <div>
            <h1>{articleInfo.title}</h1>
            <img src={articleInfo.urlToImage} alt={articleInfo.title} width="40%" />
            <p className="text">
            {articleInfo.content}
            </p>
            {/* <Button variant="link">Read More</Button> */}
            <a href={articleInfo.url}>  Read the article</a>
          </div>
        )
      )}
<Link to="/"> <Button variant="primary">Primary</Button>{' '}</Link>    </div>
  );
};

export default InfoOafArticle;
