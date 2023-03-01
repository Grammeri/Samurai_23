import React from "react";
import Picture from "./../../assets/depositphotos_122169906-stock-photo-old-village-in-sebria.jpg";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div>
      <div>
        <img src={Picture} />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};
