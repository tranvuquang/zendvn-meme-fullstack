import React, { useState } from "react";

import Spinner from "react-bootstrap/Spinner";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { login } from "../axios/axiosConfig";
import { selectAuth } from "../features/auth/authSlice";
import { useAuthen } from "../helpers/useAuthen";

type FormData = {
  email: string;
  password: string;
};
const formDataDefault = {
  email: "admin@gmail.com",
  password: "123456",
};

type Props = {};

const LoginPage = (props: Props) => {
  useAuthen()
  const [formData, setFormData] = useState<FormData>(formDataDefault);
  const { email, password } = formData;
  const { loading } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleClick = async (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    login(formData, dispatch);
  };
  return (
    <div className="ass1-login">
      <div className="ass1-login__logo">
        <a href="index.html" className="ass1-logo">
          ZendVn Meme
        </a>
      </div>
      <div className="ass1-login__content">
        <p>Đăng nhập</p>
        <div className="ass1-login__form">
          <form onSubmit={handleClick}>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
            <div className="ass1-input-copy">
              <input
                // type="password"
                className="form-control"
                placeholder="Mật khẩu"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="ass1-login__send">
              <a href="dang-ky.html">Đăng ký một tài khoản</a>
              <button type="submit" className="ass1-btn" disabled={loading}>
                Đăng nhập{" "}
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

export default LoginPage;
