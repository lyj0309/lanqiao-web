// 返回条件为真的新数组
Array.prototype.myarray = function (cb) {
  // TODO：待补充代码
//   category: "werewolf"
// id: 1
// name: "小狼人"
let arr = []
for (const item of this) {
  if (cb(item)){
    arr.push(item)
  }
}
// console.log(this)
// console.log(cb(this))
return arr
};
