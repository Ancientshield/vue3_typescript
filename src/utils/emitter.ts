// 安裝並引入 mitt
// npm i mitt
import mitt from 'mitt';

// 调用mitt得到emitter，emitter能：绑定事件、触发事件
const emitter = mitt();

/* // 绑定事件
emitter.on('test1',()=>{
  console.log('test1被調用了')
})
emitter.on('test2',()=>{
  console.log('test2被被調用了')
})

// 觸發事件
setInterval(() => {
  emitter.emit('test1')
  emitter.emit('test2')
}, 1000);

// 解綁事件
setTimeout(() => {
  // emitter.off('test1')
  // emitter.off('test2')
  emitter.all.clear()
}, 3000); */

// 暴露 emitter
export default emitter;
