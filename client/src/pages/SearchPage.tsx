import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useFetch } from "../axios/axiosConfig";
import { PostItem } from "../components/PostItem";
import { selectPost, setPostsRedux } from "../features/post/postSlice";

type Props = {};

const SearchPage = (props: Props) => {
  let [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { posts } = useAppSelector(selectPost);
  const dispatch = useAppDispatch();
  const { data } = useFetch(`/api/posts/search?query=${query}`, "", dispatch);
  useEffect(() => {
    if (data) {
      dispatch(setPostsRedux(data.posts));
    }
  }, [data, dispatch]);

  return (
    <div className="container">
      <div className="header-search" style={{ padding: "30px 0" }}>
        <h3>
          Từ khóa tìm kiếm: <strong>{query}</strong>
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

export default SearchPage;
