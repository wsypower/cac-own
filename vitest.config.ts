/*
 * @Description:
 * @Author: wsy
 * @Date: 2022-07-09 17:30:00
 * @LastEditTime: 2022-07-09 17:45:44
 * @LastEditors: wsy
 */
import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vitest"],
    }),
  ],
  test: {
    includeSource: ["packages/*"],
  },
});
