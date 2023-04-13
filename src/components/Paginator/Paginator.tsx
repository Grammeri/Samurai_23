import React from "react";
import { UserType } from "Redux/usersReducer";
import style from "components/Users/Users.module.css";

export type UsersPropsType = {
  users: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  //setUsers: (users: Array<UserType>) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  //setCurrentPage: (pageNumber: number) => void;
  //setTotalUsersCount: (totalCount: number) => void;
  onPageChange: (page: number) => void;
  //isFetching: boolean;
  //setPreloader: (isFetching: boolean) => void;
  //toggleFollowingProgress: (Array: any, userId: number) => void;
  followingInProgress: Array<any>;
};

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
