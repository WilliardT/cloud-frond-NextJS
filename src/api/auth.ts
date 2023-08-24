import axios from "@/core/axios";
import { LoginFormDTO, LoginResponceDTO } from "./dto/auth.dto";

export const login = async (
  values: LoginFormDTO
): Promise<LoginResponceDTO> => {
  return (await axios.post("/auth/login", values)).data;
};
