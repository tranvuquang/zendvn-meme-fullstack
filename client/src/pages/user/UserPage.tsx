import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postAxiosData } from "../../axios/axiosConfig";
import { selectAuth, setUserRedux } from "../../features/auth/authSlice";
import { file2Base64 } from "../../ultis/file";

type Props = {};

const UserPage = (props: Props) => {
  let navigate = useNavigate();
  const { accessToken } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);
  const [userInfo, setUserInfo] = useState(user);
  const { profilepicture, username, gender, description, _id } = userInfo;

  const handleOnChange = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const inputFileEl = useRef(null);

  const handleClickSelectFile = () => {
    const current = inputFileEl.current as any;
    current.click();
  };
  const handleChangeFile = async (e: any) => {
    const listFiles = e.target.files;
    if (listFiles.length === 0) return;
    const file = listFiles[0] as File;
    const base64 = await file2Base64(file);
    setUserInfo({ ...userInfo, profilepicture: base64 as string });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      _id,
      profilepicture,
      gender,
      description,
      username,
    };
    const { resData, reFetchData } = (await postAxiosData(
      `/api/auth/update`,
      accessToken,
      data,
      dispatch,
      `/api/auth/${_id}`
    )) as any;
    if (resData && reFetchData) {
      dispatch(setUserRedux(reFetchData.data.user));
      navigate(`/users/${_id}`);
    }
  };

  return (
    <div className="ass1-login">
      <div className="ass1-login__content">
        <p>Profile</p>
        <div className="ass1-login__form">
          <div className="avatar" onClick={handleClickSelectFile}>
            <img src={profilepicture} alt="" />
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Tên..."
              required
              value={username}
              name="username"
              onChange={handleOnChange}
            />
            <select
              className="form-control"
              value={gender}
              name="gender"
              onChange={handleOnChange}
            >
              <option value={"nam"}>Nam</option>
              <option value={"nu"}>Nữ</option>
            </select>
            <input
              type="file"
              name="avatar"
              placeholder="Ảnh đại diện"
              className="form-control"
              ref={inputFileEl}
              style={{ display: "none" }}
              onChange={handleChangeFile}
            />
            <textarea
              className="form-control"
              cols={30}
              rows={5}
              placeholder="Mô tả ngắn ..."
              value={description}
              name="description"
              onChange={handleOnChange}
            />
            <div className="ass1-login__send justify-content-center">
              <button type="submit" className="ass1-btn">
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
