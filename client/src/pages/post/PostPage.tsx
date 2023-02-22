import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAxiosData } from "../../axios/axiosConfig";
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
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {postData && (
            <PostDetailContent
              // listComments={comments}
              postDetailData={postData}
              // postCategories={postCategories}
            />
          )}
        </div>
        <div className="col-lg-4">
          {/* <HomeSidebar userPosts={userPosts} /> */}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
