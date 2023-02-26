import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";

export default function HeaderMenu() {
  const { categories } = useAppSelector(selectAuth);
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="warning"
        id="dropdown-basic"
        style={{
          color: "unset",
          border: "none",
          backgroundColor: "transparent",
        }}
      >
        Danh muc
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((cate) => {
          return (
            <Dropdown.Item href="#/action-1" key={cate._id}>
              <Link to={`/posts/categories/${cate._id}`}>{cate.text}</Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
