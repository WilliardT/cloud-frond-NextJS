import React from "react";
import styles from "./Header.module.scss";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import * as Api from "@/api";

const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
    }
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerinner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Clouse Cloude
          </h2>
          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/dashboard", label: "Главная" },
              { key: "/dashboard/profile", label: "Профиль" },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          <Popover
            trigger={"click"}
            content={
              <Button type="primary" danger onClick={onClickLogout}>
                Выйти
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
