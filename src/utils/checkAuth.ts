
import nookies from "nookies";
import axios from "@/core/axios";
import * as Api from "@/api";
import { NextPageContext } from "next";

export const checkAuth = async (ctx: NextPageContext) => {
    const { _token } = nookies.get(ctx);
  
    axios.defaults.headers.Authorization = `Bearer ${_token}`;
  
    try {
      await Api.auth.getMe();
      
      return {
        props: {},
      };

    } catch (error) {

      return {
        redirect: {
          destination: "/dashboard/auth",
          permanent: false,
        },
      };
    }
  };