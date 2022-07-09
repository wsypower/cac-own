/*
 * @Description:
 * @Author: wsy
 * @Date: 2022-07-09 17:30:19
 * @LastEditTime: 2022-07-09 18:19:48
 * @LastEditors: wsy
 */
import cac, { CAC } from "../src";

describe("cac init", () => {
  beforeEach(() => {});
  describe("new cac", () => {
    it("happy path", () => {
      const cli: CAC = cac("wsy");

      expect(cli).toBeInstanceOf(CAC);
      expect(cli).toHaveProperty("name");
      expect(cli.name).toBe("wsy");
      expect(cli).toMatchInlineSnapshot(`
        CAC {
          "name": "wsy",
        }
      `);
    });
  });
});
