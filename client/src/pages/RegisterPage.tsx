import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { register } from "../axios/axiosConfig";
import { selectAuth } from "../features/auth/authSlice";
import { useAuthen } from "../helpers/useAuthen";

type FormData = {
  email: string;
  password: string;
};
const formDataDefault = {
  email: "user01@gmail.com",
  password: "123456",
};

type Props = {};

const RegisterPage = (props: Props) => {
  useAuthen();
  const [formData, setFormData] = useState<FormData>(formDataDefault);
  const { email, password } = formData;
  const { loading } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleClick = async (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    register(formData, dispatch);
  };
  return (
    <div className="ass1-login">
      <div className="ass1-login__logo">
        <Link to="/home" className="ass1-logo">
          ZendVn Meme
        </Link>
      </div>
      <div className="ass1-login__content">
        <p>Đăng ký một tài khoản</p>
        <div className="ass1-login__form">
          <form action="#" onSubmit={handleClick}>
            <input
              //   type="email"
              className="form-control"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              //   type="password"
              className="form-control"
              placeholder="Mật khẩu"
              required
              name="password"
              value={password}
              onChange={handleChange}
            />

            <div className="ass1-login__send">
              <Link to="/login">Đăng nhập</Link>
              <button type="submit" className="ass1-btn" disabled={loading}>
                Đăng ký{" "}
                {loading && (
                  <Spinner animation="border" size="sm" className="ms-2" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
