import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAxiosData } from "../../axios/axiosConfig";
import { selectAuth } from "../../features/auth/authSlice";
import { selectPost } from "../../features/post/postSlice";
import { IPost } from "../../features/post/types";
import { PostItem } from "../PostItem";

type PropsType = {
  listPosts: IPost[];
};

const pageSize = 3;

const PostListItem: React.FC<PropsType> = (props) => {
  const { loading } = useAppSelector(selectAuth);
  const { posts } = useAppSelector(selectPost);
  const dispatch = useAppDispatch();
  const [currPage, setCurrPage] = useState(1);
  const [listPosts, setListPosts] = useState(props.listPosts);

  useEffect(() => {
    setListPosts(posts);
  }, [posts]);

  const handleLoadMore = async () => {
    const resData = await getAxiosData(
      `/api/posts/getPostListPagination?pageSize=${pageSize}&currentPage=${
        currPage + 1
      }`,
      "",
      dispatch
    );
    if (resData) {
      setListPosts([...listPosts, ...resData.data.posts]);
      setCurrPage(currPage + 1);
    }
  };

  return (
    <div className="ass1-section__list">
      {listPosts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}

      <button
        className="load-more ass1-btn"
        onClick={handleLoadMore}
        disabled={loading}
      >
        <span>Xem thêm</span>
      </button>
    </div>
  );
};

export default PostListItem;
