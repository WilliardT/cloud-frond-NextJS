import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import Header from "@/components/header";

const DashboardPage: NextPage = () => {
  return (
    <main>
      <Header />
      <h1>Dashboard</h1>
    </main>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  return {
    props: {},
  };
};

export default DashboardPage;
