import axios from "@/core/axios";
import {
  LoginFormDTO,
  LoginResponceDTO,
  RegisterFormDTO,
  RegisterResponceDTO,
  User,
} from "./dto/auth.dto";

export const login = async (
  values: LoginFormDTO
): Promise<LoginResponceDTO> => {
  return (await axios.post("/auth/login", values)).data;
};

export const register = async (
  values: RegisterFormDTO
): Promise<RegisterResponceDTO> => {
  return (await axios.post("/auth/register", values)).data;
};

export const getMe = async(): Promise<User> => {
  return (await axios.get("/auth/me")).data;
}
