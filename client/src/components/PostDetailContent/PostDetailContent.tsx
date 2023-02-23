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
import { PostCommentForm } from "../PostCommentForm";
import { PostCommentList } from "../PostCommentList";
import { PostItem } from "../PostItem";
import "./PostDetailContent.css";
// import Link from "next/link";
// import { PostCommentForm } from "../PostCommentForm"
// import { PostCommentList } from "../PostCommentList"
// import { PostItem } from "../PostItem";
// import { PostType } from "../../pages";
// import { TypeCategory, TypeComment } from "../../pages/posts/[postId]";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useGlobalState } from "../../state";
// import postService from "../../services/postService";

type PropsType = {
  // listComments: TypeComment[];
  postDetailData: any;
  // postCategories: TypeCategory[];
};

const PostDetailContent: React.FC<PropsType> = ({
  postDetailData,
  // postCategories,
  // listComments: initListComments
}) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const { accessToken } = useAppSelector(selectAuth);
  const { comments } = useAppSelector(selectComment);
  const dispatch = useAppDispatch();
  const { data } = useFetch(`/api/comments/${id}`, accessToken, dispatch);

  useEffect(() => {
    if (data) {
      dispatch(setCommentsRedux(data.comments));
    }
  }, [data, dispatch]);

  // const router = useRouter();
  // const postId = router.query.postId as string;
  // const [token] = useGlobalState("token");
  // const [listComments, setListComments] = useState(initListComments);

  // const handleSubmitForm = async (commentValue: string, callback: (e?: Error) => void) => {
  //     try {
  //         const result = await postService.postComment(postId, commentValue, token);
  //         if(result.status !== 200) throw new Error("Dang binh luan khong thanh cong!");

  //         const listCmtRes = await postService.getCommentByPostId(postId);

  //         if(result.status === 200) {
  //             setListComments(listCmtRes.comments);
  //             callback();
  //         }

  //     } catch(e) {
  //         callback(e)
  //         // Khi throw new Error chay vao trong catch
  //     }

  // postService
  //     .postComment(postId, commentValue, token)
  //     .then(async (res) => {
  //         if(res.status === 200) {
  //             const commentsPos = await postService.getCommentByPostId(postId);
  //         } else {
  //             // Bao Loi
  //         }
  //     })
  // }

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
          {postDetailData.category.map((cate: any, index: number) => {
            return (
              <li key={index}>
                <Link to="/categories/[cateId]">{cate}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <PostCommentForm handleSubmitForm={handleSubmitForm} />

             */}
      <PostCommentForm />
      <PostCommentList listComments={comments} />
    </div>
  );
};

export default PostDetailContent;
