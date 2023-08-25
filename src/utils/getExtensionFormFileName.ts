import { Extension } from "./getColorByExtensions";

export const getExtensionFormFileName = (filename: string) => {
    return filename.split('.').pop() as Extension;
}