// import Link from "next/link";
// import dayjs from "dayjs";
// import viLocal from "dayjs/locale/vi";
// import relativeTime from "dayjs/plugin/relativeTime";
// import { TypeComment } from "../../pages/posts/[postId]";

import { Link } from "react-router-dom";

// dayjs.extend(relativeTime);

type PropsType = {
  listComments: any[];
};

const PostCommentList: React.FC<PropsType> = ({ listComments }) => {
  return (
    <div className="ass1-comments">
      <div className="ass1-comments__head">
        <div className="ass1-comments__title">
          {listComments?.length || 0} Bình luận
        </div>
        <div className="ass1-comments__options">
          <span>Sắp xếp theo:</span>
          <a href="/" className="ass1-comments__btn-upvote ass1-btn-icon">
            <i className="icon-Upvote" />
          </a>
          <a href="/" className="ass1-comments__btn-down ass1-btn-icon">
            <i className="icon-Downvote" />
          </a>
          <a href="/" className="ass1-comments__btn-expand ass1-btn-icon">
            <i className="icon-Expand_all" />
          </a>
        </div>
      </div>
      {/*comment*/}

      {listComments.map((comment) => {
        const { _id, email, USERID, createdAt, comment_content } = comment;
        return (
          <div key={_id} className="ass1-comments__section">
            <Link to={`/users/${USERID}`}>
              <p className="ass1-comments__avatar ass1-avatar">
                <img
                  src={comment.profilepicture || "/images/avatar-02.png"}
                  alt=""
                />
              </p>
            </Link>
            <div className="ass1-comments__content">
              <Link to={`/users/${USERID}`}>
                <p className="ass1-comments__name">{email}</p>
              </Link>
              <span className="ass1-comments__passed">{createdAt}</span>
              <p>{comment_content}</p>

              <div className="ass1-comments__info">
                <a href="/" className="ass1-comments__btn-upvote ass1-btn-icon">
                  <i className="icon-Upvote" />
                  <span>901</span>
                </a>
                <a href="/" className="ass1-comments__btn-down ass1-btn-icon">
                  <i className="icon-Downvote" />
                  <span>36</span>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCommentList;
