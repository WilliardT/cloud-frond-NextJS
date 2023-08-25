import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import RootLayout from "@/layouts/layout";
import styles from "@/styles/Home.module.scss";
import { Menu } from "antd";
import { useRouter } from "next/router";
import { DeleteOutlined, FileImageOutlined, FileOutlined } from "@ant-design/icons";
import UploadButton from "@/components/uploadButton";

interface DashboardPageProps {}

const DashboardPage: NextPage<DashboardPageProps> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
} = () => {

    const router = useRouter();
    const selectedMenu = router.pathname

  return (
    <main className={styles.dashboardContainer}>
        <div className={styles.sidebar}>
            <UploadButton />
            <Menu
                className={styles.menu}
                mode="inline"
                selectedKeys={[selectedMenu]}
                items={[
                    {
                        key: "/dashboard",
                        icon: <FileOutlined />,
                        label: "Файлы",
                        onClick: () => {
                            router.push("/dashboard")
                        }
                    },
                    {
                        key: "/dashboard/photos",
                        icon: <FileImageOutlined />,
                        label: "Фото",
                        onClick: () => {
                            router.push("/dashboard/photos")
                        }
                    },
                    {
                        key: "/dashboard/trash",
                        icon: <DeleteOutlined />,
                        label: "Корзина",
                        onClick: () => {
                            router.push("/dashboard/trash")
                        }
                    },
                ]}
            />
        </div>

        <div className="container"></div>
    </main>
  );
};

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <RootLayout title="Dashboard / Главная">{page}</RootLayout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
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
