import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteAxiosData, useFetch } from "../../axios/axiosConfig";
import { selectAuth } from "../../features/auth/authSlice";
import {
  selectComment,
  setCommentsRedux,
} from "../../features/comment/commentSlice";
import { setPostsRedux } from "../../features/post/postSlice";
import { categoryId2Text } from "../../helpers/category";
import { PostCommentForm } from "../PostCommentForm";
import { PostCommentList } from "../PostCommentList";
import { PostItem } from "../PostItem";
import "./PostDetailContent.css";

type PropsType = {
  postDetailData: any;
};

const PostDetailContent: React.FC<PropsType> = ({
  postDetailData,
}) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const { accessToken, categories } = useAppSelector(selectAuth);
  const { comments } = useAppSelector(selectComment);
  const dispatch = useAppDispatch();
  const { data } = useFetch(`/api/comments/${id}`, accessToken, dispatch);

  useEffect(() => {
    if (data) {
      dispatch(setCommentsRedux(data.comments));
    }
  }, [data, dispatch]);

  const onDeletePost = async () => {
    const { resData, reFetchData } = (await deleteAxiosData(
      `/api/posts/delete`,
      accessToken,
      {
        id,
      },
      dispatch,
      `/api/posts`
    )) as any;
    if (resData && reFetchData) {
      dispatch(setPostsRedux(reFetchData.data.posts));
      navigate("/home");
    }
  };

  return (
    <div className="ass1-section__list">
      <PostItem post={postDetailData} />

      <div
        className="ass1-section__footer"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          variant="warning"
          onClick={() => {
            navigate(`/posts/${id}/update`);
          }}
        >
          Update
        </Button>
        <Button
          variant="danger"
          style={{ color: "unset" }}
          onClick={onDeletePost}
        >
          Delete
        </Button>
      </div>

      <div className="list-categories">
        <h5>
          <strong>Danh mục: </strong>
        </h5>
        <ul>
          {postDetailData.category.length > 0 &&
            postDetailData.category.map((cate: any, index: number) => {
              return (
                <li key={index}>
                  <Link to="/categories/[cateId]">
                    {categoryId2Text(cate, categories)}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      <PostCommentForm />
      <PostCommentList listComments={comments} PID={id} />
    </div>
  );
};

export default PostDetailContent;
