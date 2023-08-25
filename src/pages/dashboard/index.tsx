import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import RootLayout from "@/layouts/layout";

interface DashboardPageProps {}

const DashboardPage: NextPage<DashboardPageProps> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
} = () => {
  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
};

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <RootLayout title="Dashboard / Главная">{page}</RootLayout>;
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const authProps = await checkAuth(ctx);

    if ("redirect" in authProps) {
      return authProps;
    }

    return {
      props: {},
    };
  } catch (error) {
    console.log("error DashboardPage | getServerSideProps", error);
    // return {
    //   props: {},
    // };
  }
};

export default DashboardPage;
