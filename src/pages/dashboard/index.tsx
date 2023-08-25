import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import RootLayout from "@/layouts/layout";

import * as Api from "@/api";
import { FileItem } from "@/api/dto/files.dto";
import FileList from "@/components/FileList";
import { DashboardLayout } from "@/layouts/DashbouadrLayout";

interface Props {
  items: FileItem[];
}

const DashboardPage: NextPage<Props> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
} = ({ items }) => {
  return (
    <DashboardLayout>
      <FileList items={items} />
    </DashboardLayout>
  );
};

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <RootLayout title="Dashboard / Главная">{page}</RootLayout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll();
    return {
      props: {
        items,
      },
    };
  } catch (error) {
    console.log("error DashboardPage | getServerSideProps", error);
    return {
      props: {
        items: [],
      },
    };
  }
};

export default DashboardPage;
