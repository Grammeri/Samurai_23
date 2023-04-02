import React from "react";
import {UserType} from "../../Redux/usersReducer";
import style from "./Users.module.css";
import Cat from "./../../assets/cat.jpg";
import {NavLink} from "react-router-dom";

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
    followingInProgress: Array<any>

};

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //Создаем массив
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
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
                {props.users.map((u: any) => (
                    <div key={u.id}>
            <span className={style.userPhoto}>
              <div>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                  <NavLink to={"/profile/" + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : Cat}/>
                </NavLink>
              </div>
              <div>
                {u.followed
                    ? (<button disabled={props.followingInProgress.some(id => id === u.id)}
                               onClick={() => {
                                   //debugger
                                   props.unfollow( u.id)
                               }}>Unfollow</button>)
                    : (<button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>)}
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
