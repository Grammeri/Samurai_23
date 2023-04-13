import React from "react";
import { UserType } from "Redux/usersReducer";
import style from "./Users.module.css";
import Cat from "./../../assets/cat.jpg";
import { NavLink } from "react-router-dom";
import Paginator from "components/Paginator/Paginator";

const Users = ({
  users,
  follow,
  unfollow,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  followingInProgress,
}: {
  users: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  totalUsersCount: number;
  pageSize: any;
  currentPage: number;
  onPageChange: (page: number) => void;
  followingInProgress: Array<any>;
}) => {
  return (
    <div>
      <div>
        <Paginator
          currentPage={currentPage}
          onPageChange={onPageChange}
          users={users}
          follow={follow}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
        />
        {users.map((u: any) => (
          <div key={u.id}>
            <span className={style.userPhoto}>
              <div>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <NavLink to={"/profile/" + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : Cat} />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    onClick={() => {
                      //debugger
                      unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some((id) => id == u.id)}
                    onClick={() => {
                      follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"Hard code: u.location.city"}</div>
                <div>{"Hard code: u.location.country"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
