import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import "./header.scss";
import avatar from "../../assets/images/google-logo.png";
import { logout } from "../../axios/axiosConfig";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const { user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  return (
    <header>
      <div className="ass1-header">
        <div className="container">
          <Link to="/" className="ass1-logo">
            ZendVn Meme
          </Link>
          <HeaderMenu />
          <div className="ass1-header__search">
            <form action="#">
              <label>
                <input
                  type="search"
                  name="search-text"
                  className="form-control"
                  placeholder="Nhập từ khóa ..."
                />
                <i className="icon-Search" />
              </label>
            </form>
          </div>
          <Link to="/posts/create" className="ass1-header__btn-upload ass1-btn">
            <i className="icon-Upvote" /> Upload
          </Link>
          {user.USERID ? (
            <div className="wrapper-user">
              <Link to={`/users/${user.USERID}`} className="user-header">
                <span className="avatar">
                  <img src={user.profilepicture || avatar} alt="avatar" />
                </span>
                <span className="email">{user.email}</span>
              </Link>
              <div onClick={() => logout(dispatch)} className="logout">
                Logout
              </div>
            </div>
          ) : (
            <Link to="/login" className="ass1-header__btn-upload ass1-btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
