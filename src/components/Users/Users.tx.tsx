import React from "react";
import { UserType } from "Redux/usersReducer";
import Paginator from "components/Paginator/Paginator";
import { User } from "components/Users/User";

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
