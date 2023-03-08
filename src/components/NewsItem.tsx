import React from "react";

type NewsItemProps = {
  title: string;
  description: string;
  imgUrl: string;
  newsId: string;
  author: string;
  date: Date | string;
  source: string;
};

const NewsItem = (props: NewsItemProps) => {
  let { title, description, imgUrl, newsId, author, date, source } = props;
  return (
    <div className="py-3">
      <div className="card mx-1">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              <>
                By {author} on {date}
              </>
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsId}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
