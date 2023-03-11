import React from "react";
import style from "./Users.module.css";
import { UserType } from "../../Redux/usersReducer";
import axios from "axios";
import Cat from "./../../assets/cat.jpg";

export type UsersPropsType = {
  users: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
};

class UsersClassComponent extends React.Component<UsersPropsType, []> {
  /*  constructor(props: UsersPropsType) {
    super(props); //передаем конструирование родительской компоненте React.Component
    if (this.props.users.length === 0) {
      alert("New!!!"); //Создаля новый объект, потом реакт обращается к этому обдъекту и просит у него JSX
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }*/
  /*  getUsers = () => {
        if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };*/

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                className={
                  this.props.currentPage === page ? style.selectedPage : ""
                }
                onClick={(e) => {
                  this.onPageChange(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
        {/*<button onClick={this.getUsers}>Get Users</button>*/}
        {this.props.users.map((u: any) => (
          <div key={u.id}>
            <span className={style.userPhoto}>
              <div>
                <img src={u.photos.small != null ? u.photos.small : Cat} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default UsersClassComponent;
