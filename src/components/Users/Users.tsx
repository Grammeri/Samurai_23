import React from "react";
import style from "./Users.module.css";

export type UsersPropsType = {
  users: any;
  follow: any;
  unfollow: any;
  setUsers: any;
};

export const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
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
    ]);
  }

  return (
    <div>
      {props.users.map((u: any) => (
        <div key={u.id}>
          <span className={style.userPhoto}>
            <div>
              <img src={u.photo} />
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
