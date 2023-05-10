import React from "react";
import { UserType } from "Redux/usersReducer";
import Paginator from "components/Paginator/Paginator";
import { User } from "components/Users/User";
import styles from "./Users.module.css"

const Users = ({
  users,
  follow,
  unfollow,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  followingInProgress,
  portionSize,
}: {
  users: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  totalUsersCount: number;
  pageSize: any;
  currentPage: number;
  onPageChange: (page: number) => void;
  followingInProgress: Array<any>;
  portionSize: number;
}) => {
  return (
    <div className={styles.usersBlock}>
      <Paginator
        currentPage={currentPage}
        onPageChange={onPageChange}
        users={users}
        follow={follow}
        unfollow={unfollow}
        followingInProgress={followingInProgress}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        portionSize={portionSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
