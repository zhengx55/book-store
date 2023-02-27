import goodStorage from "good-storage";
export class ImgUtil {
  static imgList: Record<string, string> = {};
  static storageImgList() {
    this.imgList = goodStorage.get("imgList") || {};
    console.log(this.imgList);
    if (this.isStorageEmpty()) {
      this.loadAllImg();
      goodStorage.set("imgList", this.imgList);
    }
  }
  static isStorageEmpty() {
    return !Object.getOwnPropertyNames(this.imgList).length;
  }
  static loadAllImg() {
    const imgMap = import.meta.glob("../assets/img/**", { eager: true });
    let absPath: string = "";
    for (let relativePath in imgMap) {
      absPath = imgMap[relativePath].default;
      if (absPath) {
        const imgName = absPath.substring(absPath.lastIndexOf("/") + 1);
        this.imgList[imgName] = absPath;
      }
    }
  }
}
