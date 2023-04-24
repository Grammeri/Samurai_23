import React from "react";
import style from "./Users.module.css";
import Cat from "./../../assets/cat.jpg";
import {NavLink} from "react-router-dom";

export const User = ({
  user,
  follow,
  unfollow,
  followingInProgress,
}: {
  user: any
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  followingInProgress: Array<any>;
}) => {
  return (
    <div>
      <span className={style.userPhoto}>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img src={user.photos.small != null ? user.photos.small : Cat} />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id == user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"Hard code: user.location.city"}</div>
          <div>{"Hard code: user.location.country"}</div>
        </span>
      </span>
    </div>
  );
};
