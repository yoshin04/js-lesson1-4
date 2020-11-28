'use strict';
const title = '==============================\n現在持っているタスクの一覧\n==============================';
const tasks = [
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
const pushTask = (job, type) => tasks.push({ content: job, genre: type });
const taskLists = () => {
  console.log(title);
  tasks.forEach((task) => console.log(`[内容] ${task.content} [ジャンル] ${task.genre}`));
}
taskLists();
let job = prompt('タスクを入力して下さい。');
let type = prompt('ジャンルを入力して下さい。');
pushTask(job, type);
alert('新しいタスクを入力しました。');
taskLists();
