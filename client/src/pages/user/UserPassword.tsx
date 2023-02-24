import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postAxiosData } from "../../axios/axiosConfig";
import { selectAuth } from "../../features/auth/authSlice";

type FormData = {
  oldPassword: string;
  password: string;
  rePassword: string;
};
const formDataDefault = {
  oldPassword: "123456",
  password: "123456",
  rePassword: "123456",
};

type Props = {};

const UserPassword = (props: Props) => {
  let navigate = useNavigate();
  const { accessToken, user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>(formDataDefault);
  const { oldPassword, password, rePassword } = formData;
  const handleOnChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { resData } = (await postAxiosData(
      `/api/auth/password`,
      accessToken,
      formData,
      dispatch,
      ""
    )) as any;
    if (resData) {
      navigate(`/users/${user._id}`);
    }
  };
  return (
    <div className="ass1-login">
      <div className="ass1-login__content">
        <p>Đổi mật khẩu</p>
        <div className="ass1-login__form">
          <form action="#" onSubmit={handleSubmit}>
            <input
              name="oldPassword"
              value={oldPassword}
              onChange={handleOnChange}
              className="form-control"
              placeholder="Mật khẩu cũ"
              required
            />
            <input
              name="password"
              value={password}
              onChange={handleOnChange}
              className="form-control"
              placeholder="Mật khẩu mới"
              required
            />
            <input
              name="rePassword"
              value={rePassword}
              onChange={handleOnChange}
              className="form-control"
              placeholder="Xác nhận mật khẩu mới"
              required
            />
            <div className="ass1-login__send justify-content-center">
              <button type="submit" className="ass1-btn">
                Gửi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPassword;
