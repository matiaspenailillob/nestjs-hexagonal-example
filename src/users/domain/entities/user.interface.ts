export interface User {
    id?: number;
    username: string;
    email: string;
    passwordHash: string;
    createAt?: Date;
    updateAt?: Date;
}