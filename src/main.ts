import { createApp } from "vue";
import App from "./App.vue";
import { ImgUtil } from "./utils/imgUtils";
ImgUtil.storageImgList();
createApp(App).mount("#app");
