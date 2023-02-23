import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postAxiosData, useFetch } from "../../axios/axiosConfig";
import { useParams } from "react-router-dom";
import { PostDetailForm } from "../../components/PostDetailForm";
import { PostDetailSidebar } from "../../components/PostDetailSidebar";
import { selectAuth } from "../../features/auth/authSlice";
import { setPostsRedux } from "../../features/post/postSlice";

type Props = {};

const postDataValue = {
  url_image: "",
  post_content: "",
  category: [],
};

const PostId = (props: Props) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const { accessToken } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [postData, setPostData] = useState(postDataValue);

  const { data } = useFetch(`/api/posts/${id}`, accessToken, dispatch);

  useEffect(() => {
    if (data) {
      setPostData(data.post);
    }
  }, [data]);

  const onChangeDetailForm = (key: string, value: any) => {
    setPostData({
      ...postData,
      [key]: value,
    });
  };

  const handleSubmitPost = async () => {
    if (!id) {
      const { resData, reFetchData } = (await postAxiosData(
        "/api/posts/create",
        accessToken,
        postData,
        dispatch,
        "/api/posts"
      )) as any;
      if (resData && reFetchData) {
      }
      dispatch(setPostsRedux(reFetchData.data.posts));
    } else {
      const { resData, reFetchData } = (await postAxiosData(
        `/api/posts/${id}`,
        accessToken,
        postData,
        dispatch,
        "/api/posts"
      )) as any;
      if (resData && reFetchData) {
        dispatch(setPostsRedux(reFetchData.data.posts));
      }
    }
    navigate("/home");
    setPostData(postDataValue);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostDetailForm
            url_image={postData.url_image}
            post_content={postData.post_content}
            onChangeDetailForm={onChangeDetailForm}
          />
        </div>
        <div className="col-lg-4">
          <PostDetailSidebar
            category={postData.category}
            onChangeDetailForm={onChangeDetailForm}
            handleSubmitPost={handleSubmitPost}
          />
        </div>
      </div>
    </div>
  );
};

export default PostId;
