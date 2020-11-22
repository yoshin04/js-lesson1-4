'use strict';
const title = '==============================\n現在持っているタスクの一覧\n==============================';
// let task = {
//   content: '',
//   genre: ''
// };
let taskLists = [
  {
    content: '机を片付ける',
    genru: '掃除'
  },
  {
    content: '牛乳を買う',
    genru: '掃除'
  },
  {
    content: '散歩する',
    genru: '運動'
  },
];
let taskPush = function(job, type)  {
  return taskLists.push( {content:job, genru:type} );
}
taskLists.forEach( function(taskList) {
  console.log('[内容]' + taskList.content + '[ジャンル]' + taskList.genru);
});
let job = prompt('タスクを入力して下さい。');
let type = prompt('ジャンルを入力して下さい。');
while(job, type) {
  taskPush(job, type);
  alert('新しいタスクを入力しました。');
  taskLists.forEach( function(taskList) {
    console.log('[内容]' + taskList.content + '[ジャンル]' + taskList.genru);
  });
  job = prompt('タスクを入力して下さい');
  type = prompt('ジャンルを入力しました。');
} 
