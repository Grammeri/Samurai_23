import React, { useState } from "react";
import { UserType } from "Redux/usersReducer";
import cn from "classnames";
import styles from "./Paginator.module.css";

export type UsersPropsType = {
  users: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  followingInProgress: Array<any>;
};

let Paginator = ({
                   follow,
                   unfollow,
                   users,
                   followingInProgress,
                   totalItemsCount,
                   pageSize,
                   currentPage,
                   onPageChange,
                   portionSize = 10,
                 }: {
  totalItemsCount: number;
  pageSize: number;
  portionSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  users: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  followingInProgress: Array<any>;
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
      <div className={styles.paginator}>
        {portionNumber > 1 && (
            // Replaced button text with Unicode arrow
            <button
                className={styles.arrowButton}
                onClick={() => {
                  setPortionNumber(portionNumber - 1);
                }}
            >
              &laquo;
            </button>
        )}

        {pages
            .filter(
                (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((p) => {
              return (
                  <span
                      className={cn(
                          {
                            [styles.selectedPage]: currentPage === p,
                          },
                          styles.pageNumber
                      )}
                      key={p}
                      onClick={(e) => {
                        onPageChange(p);
                      }}
                  >
              {p}
            </span>
              );
            })}

        {portionCount > portionNumber && (
            // Replaced button text with Unicode arrow
            <button
                className={styles.arrowButton}
                onClick={() => {
                  setPortionNumber(portionNumber + 1);
                }}
            >
              &raquo;
            </button>
        )}
      </div>
  );
};

export default Paginator;
