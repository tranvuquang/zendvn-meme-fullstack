import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";

type Props = {
  category: any[];
  onChangeDetailForm: (key: string, value: string[]) => void;
  handleSubmitPost: () => void;
};

const PostDetailSidebar = ({
  category = [],
  onChangeDetailForm,
  handleSubmitPost,
}: Props) => {
  const { categories } = useAppSelector(selectAuth);

  const handleOnChange = (e: any) => {
    const isCheck = e.target.checked;
    const value = e.target.value;
    const findIdx = category.findIndex((cateId) => cateId === value);
    const isExisting = findIdx !== -1;
    if (!isExisting && isCheck) {
      onChangeDetailForm("category", [...category, value]);
    } else if (!isCheck) {
      onChangeDetailForm(
        "category",
        category.filter((id) => id !== value)
      );
    }
  };
  return (
    <aside className="ass1-aside ass1-aside__edit-post">
      <div>
        <button className="ass1-btn" onClick={handleSubmitPost}>
          Đăng bài
        </button>
      </div>
      <div className="ass1-aside__edit-post-head">
        <span style={{ display: "block", width: "100%", marginBottom: "10px" }}>
          Chọn danh mục
        </span>

        {categories.map((cate) => {
          return (
            <label className="ass1-checkbox" key={cate._id}>
              <input
                type="checkbox"
                name="state-post"
                value={cate._id}
                checked={category.indexOf(cate._id.toString()) !== -1}
                onChange={handleOnChange}
              />
              <span />
              <p>{cate.text}</p>
            </label>
          );
        })}
      </div>
      <div className="ass1-aside__get-code">
        <p>Share Link</p>
      </div>
      <div className="ass1-aside__social">
        <a href="/" className="ass1-btn-social__facebook ass1-btn-social">
          <i className="fa fa-facebook" aria-hidden="true" />f
        </a>
        <a href="/" className="ass1-btn-social__twitter ass1-btn-social">
          <i className="fa fa-twitter" aria-hidden="true" />t
        </a>
        <a href="/" className="ass1-btn-social__google ass1-btn-social">
          <i className="fa fa-google-plus" aria-hidden="true" />g
        </a>
      </div>
    </aside>
  );
};

export default PostDetailSidebar;
