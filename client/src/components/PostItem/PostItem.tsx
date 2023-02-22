import { Link } from "react-router-dom";
import { IPost, postDefaultData } from "../../features/post/types";

type PropsType = {
  post?: IPost;
};

const PostItem: React.FC<PropsType> = ({ post = postDefaultData }) => {
  if (!post) return null;
  return (
    <div className="ass1-section__item">
      <div className="ass1-section">
        <div className="ass1-section__head">
          <Link
            to={`/users/${post.USERID}`}
            className="ass1-section__avatar ass1-avatar"
          >
            <img src={post.profilepicture} alt="" />
          </Link>
          <div>
            <Link to={`/users/${post.USERID}`} className="ass1-section__name">
              {post.email}
            </Link>
            <span className="ass1-section__passed">{post.createdAt}</span>
          </div>
        </div>
        <div className="ass1-section__content">
          <p>{post.post_content}</p>
          <div className="ass1-section__image">
            <Link to={`/posts/${post._id}`}>
              <img src={post.url_image} alt="" />
            </Link>
          </div>
        </div>
        <div className="ass1-section__footer">
          <button className="ass1-section__btn-comment ass1-btn-icon">
            <i className="icon-Comment_Full" />
            <span>{post.count}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
