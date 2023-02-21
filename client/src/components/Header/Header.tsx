import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";
import "./header.scss";
import avatar from "../../assets/images/google-logo.png";
import { logout } from "../../axios/axiosConfig";

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
          <nav>
            <ul className="ass1-header__menu">
              <li>
                <a href="#">Danh mục</a>
                <div className="ass1-header__nav" style={{ display: "none" }}>
                  <div className="container">
                    <ul>
                      <li>
                        <a href="index.html">Funny</a>
                      </li>
                      <li>
                        <a href="index.html">Animals</a>
                      </li>
                      <li>
                        <a href="index.html">Anime &amp; Mâng</a>
                      </li>
                      <li>
                        <a href="index.html">Awesome</a>
                      </li>
                      <li>
                        <a href="index.html">Basketball</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">Car</a>
                      </li>
                      <li>
                        <a href="index.html">Comic</a>
                      </li>
                      <li>
                        <a href="index.html">Cosplay</a>
                      </li>
                      <li>
                        <a href="index.html">Countryballs</a>
                      </li>
                      <li>
                        <a href="index.html">Classical Art Memes</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">Girl</a>
                      </li>
                      <li>
                        <a href="index.html">History</a>
                      </li>
                      <li>
                        <a href="index.html">K-POP</a>
                      </li>
                      <li>
                        <a href="index.html">V-POP</a>
                      </li>
                      <li>
                        <a href="index.html">Pokémon</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">School</a>
                      </li>
                      <li>
                        <a href="index.html">Star war</a>
                      </li>
                      <li>
                        <a href="index.html">Coder</a>
                      </li>
                      <li>
                        <a href="index.html">Travel</a>
                      </li>
                      <li>
                        <a href="index.html">Sport</a>
                      </li>
                    </ul>
                  </div>
                  <div className="ass1-header__menu-transition" />
                </div>
              </li>
              <li className="active">
                <a href="index.html">Hot</a>
                <div className="ass1-header__nav" style={{ display: "none" }}>
                  <div className="container">
                    <ul>
                      <li>
                        <a href="index.html">Funny</a>
                      </li>
                      <li>
                        <a href="index.html">Animals</a>
                      </li>
                      <li>
                        <a href="index.html">Anime &amp; Mâng</a>
                      </li>
                      <li>
                        <a href="index.html">Awesome</a>
                      </li>
                      <li>
                        <a href="index.html">Basketball</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">Car</a>
                      </li>
                      <li>
                        <a href="index.html">Comic</a>
                      </li>
                      <li>
                        <a href="index.html">Cosplay</a>
                      </li>
                      <li>
                        <a href="index.html">Countryballs</a>
                      </li>
                      <li>
                        <a href="index.html">Classical Art Memes</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">Girl</a>
                      </li>
                      <li>
                        <a href="index.html">History</a>
                      </li>
                      <li>
                        <a href="index.html">K-POP</a>
                      </li>
                      <li>
                        <a href="index.html">V-POP</a>
                      </li>
                      <li>
                        <a href="index.html">Pokémon</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">School</a>
                      </li>
                      <li>
                        <a href="index.html">Star war</a>
                      </li>
                      <li>
                        <a href="index.html">Coder</a>
                      </li>
                      <li>
                        <a href="index.html">Travel</a>
                      </li>
                      <li>
                        <a href="index.html">Sport</a>
                      </li>
                    </ul>
                  </div>
                  <div className="ass1-header__menu-transition" />
                </div>
              </li>
            </ul>
          </nav>
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
                  <img src={avatar} alt="avatar" />
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
