/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {pagify, MyPage} from 'base/'

// 把这个 class 转化成 微信的 Page 参数，并且注入全局 store
@pagify()
export default class extends MyPage {
  data = {  // 颠倒一下 selectData2 和 selectData1 查看效果
    selectData2: {
      type: '单选',
      item: ['选项一', '选项二', '选项三', '选项四', '选项五', '选项六']
    },
    selectData1: {
      type: '多选',
      item: ['选项一', '选项二', '选项三', '选项四', '选项五', '选项六']
    },
    multSelected: []  // 用来记录多选里面的已选择的选项
  }

  clickSelect(e) {  // 单选选择时候出发的事件（也就是会判断当前选项从而跳转到相应的下一个选项里面）
    let currentItem = e.currentTarget.dataset.item;
    let currentIndex = e.currentTarget.dataset.index;
    console.log(`当前点击的item是：${currentItem}`);
    console.log(`当前点击的index是：${currentIndex}`);
    // TODO 跳转判断逻辑
  }

  clickMultSelect(e) {  // 多选选择适合触发的事件（给 multselected 赋值）
    let currentItem = e.currentTarget.dataset.item;
    let multSelected = this.data.multSelected || []
    multSelected.push(currentItem)
    this.setDataSmart({
      multSelected: multSelected
    })
  }

  clickConfirm() {  // 多选后点击确认后跳转到相应的页面
    // TODO 跳转判断逻辑
  }

  restart() {
    console.log('重新开始');
  }
}
