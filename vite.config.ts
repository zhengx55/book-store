import { CommonServerOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import dotenv, { DotenvParseOutput } from "dotenv";

export default defineConfig((mode) => {
  const curMode: string = mode.mode;
  const curFileName: string = `.env.${mode.mode}`;
  let server: CommonServerOptions = {};
  const envData = fs.readFileSync(curFileName);
  const envMap: DotenvParseOutput = dotenv.parse(envData);
  // if (curMode === "development") {
  //   server = {
  //     host: "127.0.0.1/",
  //     port: 5000,
  //     proxy: {
  //       "/dang": {
  //         target: "http://127.0.0.1:5173/",
  //       },
  //     },
  //   };
  //   console.log("development mode", server);
  // }
  // else if(curMode === "production") {}
  return {
    plugins: [vue()],
    server,
  };
});
