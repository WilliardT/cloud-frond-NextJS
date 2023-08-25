export interface LoginFormDTO {
    email: string;
    password: string;
}

export interface LoginResponceDTO {
    token: string;
}

export type RegisterFormDTO = LoginFormDTO & {fullName: string};
export type RegisterResponceDTO = LoginResponceDTO;

export interface User {
    id: number;
    email: string;
    fullName: string;
}
