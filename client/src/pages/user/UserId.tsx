import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useFetch } from "../../axios/axiosConfig";
import { UserDetailInfo } from "../../components/UserDetailInfo";
import { selectAuth } from "../../features/auth/authSlice";
import { userDefaultData } from "../../features/auth/types";
// import { UserDetailPosts } from "../../components/UserDetailPosts";

type Props = {};

const UserId = (props: Props) => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(selectAuth);
  const { id } = useParams();
  const { data } = useFetch(`/api/auth/${id}`, accessToken, dispatch);
  const [userInfo, setUserInfo] = useState(userDefaultData);
  useEffect(() => {
    if (data) {
      setUserInfo(data.user);
    }
  }, [data]);

  return (
    <div className="container">
      {userInfo && <UserDetailInfo userDetailInfo={userInfo} />}

      {/* <UserDetailPosts /> */}
    </div>
  );
};

export default UserId;
