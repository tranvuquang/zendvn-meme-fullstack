import { useState } from "react";
import { IPost } from "../../features/post/types";
import { PostItem } from "../PostItem";

type PropsType = {
  listPosts: IPost[];
};


const PostListItem: React.FC<PropsType> = (props) => {
  const [listPosts, ] = useState(props.listPosts);

  return (
    <div className="ass1-section__list">
      {listPosts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}

      {/* <Button
        isLoading={loading}
        onClick={handleLoadMore}
        className="load-more ass1-btn"
      >
        Xem thêm
      </Button> */}
    </div>
  );
};

export default PostListItem;
