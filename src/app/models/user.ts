export enum UserRole {
    admin,
    read,
    write,
}

export interface User {
    id: string;
    name: string;
    role: UserRole;
}
