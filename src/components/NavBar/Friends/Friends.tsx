import React from "react";
import style from "./Friends.module.css";
import { Friend } from "./Friend/Friend";
import { FriendType } from "../../../Redux/dialogReducer";

type FriendsPropsType = {
  friends: Array<FriendType>;
};

export const Friends = (props: FriendsPropsType) => {
  let myFriends = props.friends.map((friends) => (
    <Friend name={friends.name} id={friends.id} />
  ));
  return (
    <div className={style.friends}>
      <h2 className={style.friends}>Friends</h2>
      {myFriends}
    </div>
  );
};
