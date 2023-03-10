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
};

class UsersClassComponent extends React.Component<UsersPropsType, []> {
  constructor(props: UsersPropsType) {
    super(props); //передаем конструирование родительской компоненте React.Component
    /*if (this.props.users.length === 0) {*/
    alert("New!!!"); //Создаля новый объект, потом реакт обращается к этому обдъекту и просит у него JSX
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
    /* }*/
  }
  getUsers = () => {
    /*    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }*/
  };
  render() {
    return (
      <div>
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
