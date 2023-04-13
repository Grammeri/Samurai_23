import React from "react";
import { UserType } from "Redux/usersReducer";
import style from "components/Users/Users.module.css";

export type UsersPropsType = {
  users: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  followingInProgress: Array<any>;
};

export type PaginatorPropsType = {};

const Paginator = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  //Создаем массив
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page ? style.selectedPage : ""}
              onClick={(e) => {
                props.onPageChange(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Paginator;
