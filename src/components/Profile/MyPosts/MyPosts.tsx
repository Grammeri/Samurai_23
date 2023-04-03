import React from "react";
import {Post} from "./Post/Post";
import style from "./MyPosts.module.css";
import {ProfilePageType} from "../../../Redux/profileReducer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../components/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";



export type MyPostsType = {
    profilePage: ProfilePageType;
    addNewPost: (message: string) => void;
    //newPostText: string;
    //onPostChangeHandler: (newPostText: string) => void;
    //dispatch: (action: ActionsTypes) => void;
};

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.profilePage.postsData.map((el) => (
        <Post message={el.message} likesCount={el.likesCount}/>
    ));

    //let newPostElement = React.createRef<HTMLTextAreaElement>();

    /*  let onAddPost = () => {
        props.addNewPost();
        //let text = newPostElement.current?.value as string
        /!*props.dispatch(AddPostActionCreator());*!/
      };*/

    /*  let onPostChangeHandler = () => {
        props.onPostChangeHandler(newPostElement.current?.value as string);
        /!*    let newPost = newPostElement.current?.value as string;
        props.dispatch(UpdateNewPostActionCreator(newPost));*!/
      };*/
    let addNewPost = (values: any) => {
        props.addNewPost(values.newPostPageText);
    }
    return (
        <div className={style.myPosts}>

            <h2>My posts</h2>
            <div className={style.textareaAndBtn}>

                <AddPostFormRedux onSubmit={addNewPost}/>

            </div>

            {postsElements}
        </div>
    );
};

//const maxLength10 = maxLengthCreator(10)

type AddPostFormType = {
    handleSubmit: any
}


const maxLength50 = maxLengthCreator(50);

export const AddPostForm = (props: AddPostFormType) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.messageTextarea}>
            <div className={style.textarea}>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    placeholder="Enter your message" name="newPostPageText"/>
            </div>
            <div className={style.button}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: "addPostMessageForm"

})(AddPostForm)

