import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useFetch } from "../axios/axiosConfig";
import { PostListItem } from "../components/PostListItem";
import { selectPost, setPostsRedux } from "../features/post/postSlice";

type Props = {};

const HomePage = (props: Props) => {
  const { posts } = useAppSelector(selectPost);
  const dispatch = useAppDispatch();
  const { data } = useFetch("/api/posts", "", dispatch);
  useEffect(() => {
    if (data) {
      dispatch(setPostsRedux(data.posts));
    }
  }, [data, dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {posts.length > 0 && <PostListItem listPosts={posts} />}
        </div>
        <div className="col-lg-4">
          {/* <HomeSidebar userPosts={userPosts} /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
