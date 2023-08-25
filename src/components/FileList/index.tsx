import { FileItem } from "@/api/dto/files.dto";
import React from "react";
import styles from "./FileList.module.scss";
import { FileCard } from "../FileCard";

interface FileListProps {
  items: FileItem[];
}

const FileList: React.FC<FileListProps> = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <div className='file' key={item.id}>
          <FileCard filename={item.filename} originalName={item.originalName} />
        </div>
      ))}
    </div>
  );
};

export default FileList;
