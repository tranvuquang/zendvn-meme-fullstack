import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../features/auth/authSlice";

type Props = {
  userDetailInfo: any;
};

const UserDetailInfo = ({ userDetailInfo }: Props) => {
  const { user } = useAppSelector(selectAuth);
  const { profilepicture, email, description, _id } = userDetailInfo;
  return (
    <div className="ass1-head-user">
      <div className="ass1-head-user__content">
        <div className="ass1-head-user__image">
          <img src={profilepicture} alt="" />
        </div>
        <div className="ass1-head-user__info">
          <div className="ass1-head-user__info-head">
            <div className="ass1-head-user__name">
              <span>{email}</span>
              <i>
                <img src="/fonts/emotion/svg/Verified.svg" alt="" />
              </i>
            </div>
            <div className="w-100" />
            {user._id !== _id ? (
              <p
                className="ass1-head-user__btn-follow ass1-btn"
                style={{ color: "unset" }}
              >
                Theo dõi
              </p>
            ) : (
              <>
                <Link
                  to="/users/password"
                  className="ass1-head-user__btn-follow ass1-btn"
                >
                  Đổi mật khẩu
                </Link>
                <Link
                  to="/users/profile"
                  className="ass1-head-user__btn-follow ass1-btn"
                >
                  Profile
                </Link>
              </>
            )}

            {/* <a href="#" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> */}
          </div>
          <div className="ass1-head-user__info-statistic">
            <div className="ass1-btn-icon">
              <i className="icon-Post" />
              <span>Bài viết: 9999</span>
            </div>
            <div className="ass1-btn-icon">
              <i className="icon-Followers" />
              <span>Theo dõi: 99999</span>
            </div>
            <div className="ass1-btn-icon">
              <i className="icon-Following" />
              <span>Đang theo dõi: 999</span>
            </div>
            {/* <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> */}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailInfo;
