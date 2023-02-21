import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAxiosData } from "../../axios/axiosConfig";
import { selectAuth, setUserRedux } from "../../features/auth/authSlice";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Menu from "../Menu/Menu";

type Props = {};

const Layout = (props: Props) => {
  const { user, accessToken } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const asyncFunction = async () => {
      if (user && accessToken && user.USERID) {
        const { resData } = (await getAxiosData(
          `/api/auth/${user.USERID}`,
          accessToken,
          dispatch
        )) as any;
        if (resData) {
          dispatch(setUserRedux(resData.data.user));
        }
      }
    };
    asyncFunction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, dispatch]);

  return (
    <div>
      <Menu />
      <hr />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
