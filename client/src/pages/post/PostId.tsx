import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAxiosData, postAxiosData } from "../../axios/axiosConfig";
import { useParams } from "react-router-dom";
import { PostDetailForm } from "../../components/PostDetailForm";
import { PostDetailSidebar } from "../../components/PostDetailSidebar";
import { selectAuth } from "../../features/auth/authSlice";

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

  useEffect(() => {
    const asyncThunk = async () => {
      if (id) {
        const { resData } = (await getAxiosData(
          `/api/posts/${id}`,
          accessToken,
          dispatch
        )) as any;
        if (resData) {
          setPostData(resData.data.post);
        }
      }
    };
    asyncThunk();
  }, [accessToken, dispatch, id]);

  const onChangeDetailForm = (key: string, value: any) => {
    setPostData({
      ...postData,
      [key]: value,
    });
  };

  const handleSubmitPost = async () => {
    if (!id) {
      const { resData } = (await postAxiosData(
        "/api/posts/create",
        accessToken,
        postData,
        dispatch,
        "/api/posts"
      )) as any;
      if (resData) {
        navigate("/home");
      }
    } else {
      const { resData } = (await postAxiosData(
        `/api/posts/${id}`,
        accessToken,
        postData,
        dispatch,
        "/api/posts"
      )) as any;
      if (resData) {
        navigate("/home");
      }
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {/* <PostDetailForm
            url_image={postData.url_image}
            post_content={postData.post_content}
            obj_image={postData.obj_image}
            onChangeDetailForm={onChangeDetailForm}
          /> */}
          <PostDetailForm
            url_image={postData.url_image}
            post_content={postData.post_content}
            onChangeDetailForm={onChangeDetailForm}
          />
        </div>
        <div className="col-lg-4">
          {/* <PostDetailSidebar
            loading={loading}
            category={postData.category}
            handleSubmitPost={handleSubmitPost}
            onChangeDetailForm={onChangeDetailForm}
          /> */}
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
