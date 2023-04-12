
/*import {
  AddPostActionCreator,
  deletePost,
  InitialStateType,
  profileReducer,
} from "Redux/profileReducer";

let state = {
  postsData: [
    { id: 1, message: "How are you?", likesCount: 15 },
    { id: 2, message: "I am good!", likesCount: 20 },
  ],
};

it("length of postsData should increment", () => {
  let action = AddPostActionCreator("It-kamasutra");

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(3);
});

it("message should changed", () => {
  let action = AddPostActionCreator("It-kamasutra");

  let newState = profileReducer(state, action);

  expect(newState.postsData[2].message).toBe("It-kamasutra");
});

it("after deleting length of messaged should decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(1);
});

it("after deleting length of messaged shouldn't decrement if id is incorrect", () => {
  let action = deletePost(6);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(2);
});*/
export {}