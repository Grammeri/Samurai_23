/*
import React from "react";
import style from "./Users.module.css";
import { UserType } from "../../Redux/usersReducer";
import axios from "axios";
import Cat from "./../../assets/cat.jpg";

export type UsersPropsType = {
  users: Array<UserType>;
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: Array<UserType>) => void;
};

export const Users = (props: UsersPropsType) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u: any) => (
        <div key={u.id}>
          <span className={style.userPhoto}>
            <div>
              <img src={u.photos.small != null ? u.photos.small : Cat} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
  );
};

/!*
props.setUsers([
  {
    id: 1,
    followed: false,
    fullName: "Dmitry S.N.",
    status: "busy",
    location: { city: "Houston", country: "USA" },
    photo:
        "https://cdn.dribbble.com/users/3269914/screenshots/10847556/cat-with-a-piece-of-sausage_2x.jpg",
  },
  {
    id: 2,
    followed: false,
    fullName: "Sasha S.N.",
    status: "available",
    location: { city: "Penza", country: "Russia" },
    photo:
        "https://cdn.dribbble.com/users/3269914/screenshots/10847556/cat-with-a-piece-of-sausage_2x.jpg",
  },
  {
    id: 3,
    followed: true,
    fullName: "Liza D.N",
    status: "on vacation",
    location: { city: "Moscow", country: "Russia" },
    photo:
        "https://cdn.dribbble.com/users/3269914/screenshots/10847556/cat-with-a-piece-of-sausage_2x.jpg",
  },
]);*!/
*/
export {};
