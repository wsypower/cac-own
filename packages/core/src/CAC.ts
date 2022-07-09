/*
 * @Description:
 * @Author: wsy
 * @Date: 2022-07-09 17:58:39
 * @LastEditTime: 2022-07-09 18:12:41
 * @LastEditors: wsy
 */

interface CACTypes {
  name: string;
}

class CAC implements CACTypes {
  public name!: string;
  constructor(name: string) {
    this.name = name;
  }
}

export default CAC;
