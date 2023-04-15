import React from "react";
import { Post } from "./Post/Post";
import style from "./MyPosts.module.css";
import { ProfilePageType } from "../../../Redux/profileReducer";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../components/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";

export type MyPostsType = {
  profilePage: ProfilePageType;
  addNewPost: (message: string) => void;
  //newPostText: string;
  //onPostChangeHandler: (newPostText: string) => void;
  //dispatch: (action: ActionsTypes) => void;
};

export const MyPosts = React.memo((props: MyPostsType) => {
  console.log("Render!");
  let postsElements = props.profilePage.postsData.map((el) => (
    <Post key={el.id} message={el.message} likesCount={el.likesCount} />
  ));

  let addNewPost = (values: any) => {
    props.addNewPost(values.newPostPageText);
  };
  return (
    <div className={style.myPosts}>
      <h2>My posts</h2>
      <div className={style.textareaAndBtn}>
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>

      {postsElements}
    </div>
  );
});

type AddPostFormType = {
  handleSubmit: any;
};

const maxLength50 = maxLengthCreator(50);

export const AddPostForm = (props: AddPostFormType) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.messageTextarea}>
      <div className={style.textarea}>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          placeholder="Enter your message"
          name="newPostPageText"
        />
      </div>
      <div className={style.button}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: "addPostMessageForm",
})(AddPostForm);
