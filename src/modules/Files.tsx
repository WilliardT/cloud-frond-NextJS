import { FileItem } from "@/api/dto/files.dto";
import { FileActions } from "@/components/FileAction";
import FileList, { FileSelectType } from "@/components/FileList";
import { Empty } from "antd";
import React from "react";
import * as Api from "@/api";

interface FileProps {
  items: FileItem[];
  withActions?: boolean;
}

export const Files: React.FC<FileProps> = ({ items, withActions }) => {
  const [files, setFiles] = React.useState<FileItem[]>(items || []);
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    Api.files.remove(selectedIds);
  };

  const onClickShare = () => {
    alert('Поделится файлами "в разработке"');
  };

  return (
    <div>
      {files.length ? (
        <>
          {withActions && (
            <FileActions
              isActive={selectedIds.length > 0}
              onClickRemove={onClickRemove}
              onClickShare={onClickShare}
            />
          )}
          <FileList items={files} onFileSelect={onFileSelect} />
        </>
      ) : (
        <Empty className="empty-block" description="Нет файлов" />
      )}
    </div>
  );
};
