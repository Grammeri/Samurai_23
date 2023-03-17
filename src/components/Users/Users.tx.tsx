import React from "react";
import {UserType} from "../../Redux/usersReducer";
import style from "./Users.module.css";
import Cat from "./../../assets/cat.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: Array<UserType>;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: Array<UserType>) => void;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    setCurrentPage: (pageNumber: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    onPageChange: (page: number) => void;
    isFetching: boolean;
    setPreloader: (isFetching: boolean) => void;
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
                    ? (<button onClick={() => {

                        /*axios
                            .delete(
                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers:{"API-KEY" : "b32b3a07-7742-4225-abe5-a0ff18d69199"}
                                }
                            )*/
                            usersAPI.deleteFollow(u.id).then((response) => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            });
                    }}>Unfollow</button>)
                    : (<button onClick={() => {
/*                        axios
                            .post(
                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers:{"API-KEY" : "b32b3a07-7742-4225-abe5-a0ff18d69199"}
                                }
                            )*/
                            usersAPI.postFollow(u.id).then((response) => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            });
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
