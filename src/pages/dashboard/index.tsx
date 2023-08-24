import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import nookies from "nookies";
import axios from "@/core/axios";
import * as Api from "@/api";

const DashboardPage: NextPage = () => {
  return <div>DashboardPage</div>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
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

export default DashboardPage;
