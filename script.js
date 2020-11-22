'use strict';
const title = '==============================\n現在持っているタスクの一覧\n==============================';
let tasks = [
  {
    content: '机を片付ける',
    genre: '掃除'
  },
  {
    content: '牛乳を買う',
    genre: '買い物'
  },
  {
    content: '散歩する',
    genre: '運動'
  },
];
let pushTask = (job, type) => tasks.push({ content: job, genre: type });
tasks.forEach(function (task) {
  console.log('[内容]' + task.content + '[ジャンル]' + task.genre);
});
let job = prompt('タスクを入力して下さい。');
let type = prompt('ジャンルを入力して下さい。');
while (job, type) {
  pushTask(job, type);
  alert('新しいタスクを入力しました。');
  tasks.forEach((task) => console.log('[内容]' + task.content + '[ジャンル]' + task.genre));
  job = prompt('タスクを入力して下さい');
  type = prompt('ジャンルを入力しました。');
} 
