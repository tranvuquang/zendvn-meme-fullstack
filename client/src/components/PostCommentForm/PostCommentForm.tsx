import { useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postAxiosData } from "../../axios/axiosConfig";
import { selectAuth } from "../../features/auth/authSlice";
import { selectComment } from "../../features/comment/commentSlice";

type PropsType = {};

const PostCommentForm: React.FC<PropsType> = () => {
  const { id } = useParams();
  const { accessToken } = useAppSelector(selectAuth);
  const { comments } = useAppSelector(selectComment);
  const dispatch = useAppDispatch();
  const [commentValue, setCommentValue] = useState("");

  const handleChangeComment = (e: any) => {
    if (e.target.value.length <= 180) {
      setCommentValue(e.target.value);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { resData, reFetchData } = postAxiosData(
      `/api/comments/create`,
      accessToken,
      { comment_content: commentValue, PID: id },
      dispatch,
      `/api/comments/${id}`
    ) as any;
    if (resData && reFetchData) {
      console.log(reFetchData);
    }
  };
  return (
    <div className="ass1-add-comment">
      <form action="#" onSubmit={handleSubmit}>
        <input
          value={commentValue}
          onChange={handleChangeComment}
          type="text"
          className="form-control ttg-border-none"
          placeholder="Thêm một bình luận"
        />
      </form>
      <div className="ass1-add-comment__content">
        <a href="/" className="ass1-add-comment__btn-save ass1-btn-icon">
          <i className="icon-Submit_Tick" />
          <button onClick={handleSubmit}>send</button>
        </a>
      </div>
    </div>
  );
};

export default PostCommentForm;
