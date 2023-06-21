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
    isFriendsPage,
    onTogglePageType
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
  isFriendsPage: boolean
  onTogglePageType:(event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.usersBlock}>
      <div className={styles.controls}>

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

          <label className={styles.radioLabel}>
           <div className={styles.radioButton}>
            <input type="radio" value="all" checked={!isFriendsPage} onChange={onTogglePageType} className={styles.radioInput}/>
            <h2>All Users</h2>
           </div>
          </label>
          <label className={styles.radioLabel}>
              <div className={styles.radioButton}>
            <input type="radio" value="friends" checked={isFriendsPage} onChange={onTogglePageType} className={styles.radioInput} />
            <h2>My Friends</h2>
              </div>
          </label>

      </div>
      {/* Change here: Add the new class to this div */}
      <div className={styles.userContainer}>
        {users.map((u) => (
            /* Change here: Add the new class to the User component */
            <User
                className={styles.user}
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
