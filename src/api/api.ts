import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{"API-KEY" : "b32b3a07-7742-4225-abe5-a0ff18d69199"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(
                `users?page=${currentPage}&count=${pageSize}`
            )
            .then(response => response.data)
    },
    getAuth() {
        return instance
            .get(
                `auth/me`
            )
    },
    getProfile(userId:number){
        return instance.get(
            `profile/` + userId
        )
    },
    deleteFollow(userId:number){
        return instance.delete(
            `follow/${userId}`
        )
    },
    postFollow(userId:number){
        return instance.post(
            `follow/${userId}`
        )
    }
}




