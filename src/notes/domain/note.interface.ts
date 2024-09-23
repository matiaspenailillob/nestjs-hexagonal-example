export interface Note {
    id?: number;
    userId?: number;
    title: string;
    content: string;
    createAt?: Date;
    updateAt?: Date;
    tags?: any[];
}