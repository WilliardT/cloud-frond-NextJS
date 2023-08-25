import React from "react";
import styles from "./FileAction.module.scss";
import { Button, Popconfirm } from "antd";

interface FileActionProps {
  onClickRemove: VoidFunction;
  onClickShare: VoidFunction;
  isActive: boolean;
}

export const FileActions: React.FC<FileActionProps> = ({
  onClickRemove,
  onClickShare,
  isActive,
}) => {
  return ( 
    <div className={styles.root}>
        <Button onClick={onClickShare} disabled={!isActive}>Поделится</Button>
        <Popconfirm
            title="Удалить?"
            description="Файлы будут перемещены в корзину"
            okText="Да"
            cancelText="Нет"
            disabled={!isActive}
            onConfirm={onClickRemove}
        >
            <Button onClick={onClickRemove} disabled={!isActive} type="primary">Удалить</Button>
        </Popconfirm>
    </div>
  )
};
