export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    createAt?: Date;
    updateAt?: Date;
}