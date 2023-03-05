export type MessageType = {
  id: number;
  message: string;
};

export type DialogType = {
  id: number;
  name: string;
};

export type PostType = {
  id?: number;
  message: string;
  likesCount: number;
};

export type FriendType = {
  id: number;
  name: string;
};

export type FriendsType = {
  friends: Array<FriendType>;
};

export type ProfilePageType = {
  postsData: Array<PostType>;
  newPostText: string;
};

export type MessagePageType = {
  dialogsData: Array<DialogType>;
  messageData: Array<MessageType>;
};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: MessagePageType;
  stateBar: FriendsType;
};

export type StoreType = {
  state: RootStateType;
  callSubscriber: (store: StoreType) => void;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
  subscribe: (observer: (store: StoreType) => void) => void;
  getState: () => RootStateType;
  /*profilePage: ProfilePageType;
  dialogsPage: MessagePageType;
  stateBar: FriendsType;*/
};

export let store: StoreType = {
  state: {
    profilePage: {
      postsData: [
        { id: 1, message: "How are you?", likesCount: 15 },
        { id: 2, message: "I am good!", likesCount: 20 },
      ],
      newPostText: "NewPostText message",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Kolya" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Valera" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Dima" },
      ],
      messageData: [
        { id: 1, message: "Good morning!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],
    },
    stateBar: {
      friends: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Sveta" },
      ],
    },
  },

  getState() {
    return this.state;
  },
  callSubscriber(store: StoreType) {
    //rerenderEntireTree
    console.log("State changed");
  },

  addPost() {
    let newPost: PostType = {
      id: 3,
      message: this.state.profilePage.newPostText,
      likesCount: 0,
    };
    this.state.profilePage.postsData.push(newPost);
    this.state.profilePage.newPostText = "";
    this.callSubscriber(this); //(store)
  },

  updateNewPostText(newText: string) {
    this.state.profilePage.newPostText = newText;
    this.callSubscriber(store);
  },

  subscribe(observer) {
    this.callSubscriber = observer; //patern == addEventListener == publisher subscriber
  },
};

// @ts-ignore
window.store = store;
