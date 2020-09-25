import { storage } from "firebase";

export const downloadImage = (path: string): Promise<any> => {
  return new Promise((res, rej) => {
    storage()
      .ref()
      .child(path)
      .getDownloadURL()
      .then((url) => {
        res(url);
      })
      .catch((e) => {
        rej(e);
      });
  });
};
