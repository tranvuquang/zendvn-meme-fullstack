import moment from "moment";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { deleteAxiosData } from "../../axios/axiosConfig";
import { selectAuth } from "../../features/auth/authSlice";
import { setCommentsRedux } from "../../features/comment/commentSlice";

type PropsType = {
  listComments: any[];
  PID?: string;
};

const PostCommentList: React.FC<PropsType> = ({ listComments, PID = "" }) => {
  const { accessToken } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const onDeleteComment = async (id: string) => {
    const { resData, reFetchData } = (await deleteAxiosData(
      `/api/comments/delete`,
      accessToken,
      {
        id,
      },
      dispatch,
      `/api/comments/${PID}`
    )) as any;
    if (resData && reFetchData) {
      dispatch(setCommentsRedux(reFetchData.data.comments))
    }
  };
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
              <span className="ass1-comments__passed">{moment(createdAt, "YYYYMMDD").fromNow()}</span>
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
            <Button
              variant="danger"
              style={{ color: "unset" }}
              onClick={() => onDeleteComment(_id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default PostCommentList;
