import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {  useFetch } from "../../axios/axiosConfig";
import { PostDetailContent } from "../../components/PostDetailContent";
import { selectAuth } from "../../features/auth/authSlice";

type Props = {};

const postDataValue = {
  url_image: "",
  post_content: "",
  category: [],
};

const PostPage = (props: Props) => {
  let { id } = useParams();
  const { accessToken } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [postData, setPostData] = useState(postDataValue);

  const { data } = useFetch(`/api/posts/${id}`, accessToken, dispatch);
  useEffect(() => {
    if (data) {
      setPostData(data.post);
    }
  }, [data]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {postData && <PostDetailContent postDetailData={postData} />}
        </div>
        <div className="col-lg-4">
          {/* <HomeSidebar userPosts={userPosts} /> */}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
