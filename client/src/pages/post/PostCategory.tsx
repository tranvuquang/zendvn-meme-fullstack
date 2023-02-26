import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAxiosData } from "../../axios/axiosConfig";
import { PostItem } from "../../components/PostItem";
import { selectAuth } from "../../features/auth/authSlice";
import { selectPost, setPostsRedux } from "../../features/post/postSlice";
import { categoryId2Text } from "../../helpers/category";

type Props = {};

const PostCategory = (props: Props) => {
  const { id } = useParams();
  const { categories } = useAppSelector(selectAuth);
  const { posts } = useAppSelector(selectPost);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const asyncThunk = async () => {
      if (id) {
        const resData = await getAxiosData(
          `/api/posts/category/${id}`,
          "",
          dispatch
        );
        if (resData) {
          dispatch(setPostsRedux(resData.data.posts));
        }
      }
    };
    asyncThunk();
  }, [dispatch, id]);
  return (
    <div className="container">
      <div className="header-search" style={{ padding: "30px 0" }}>
        <h3>
          Từ khóa tìm kiếm:{" "}
          <strong>{id && categoryId2Text(id, categories)}</strong>
        </h3>
        <p>Tìm kiếm được: {posts.length} kết quả</p>
      </div>

      <div className="ass1-section__list">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostCategory;
