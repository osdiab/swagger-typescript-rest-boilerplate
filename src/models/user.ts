export interface User {
    id: string;
    username: string;
    createdAt: Date;
}

export interface UserCreateRequest {
    username: string;
}

export interface UserUpdateRequest {
    username: string;
}
