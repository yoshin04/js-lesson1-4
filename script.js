'use strict';
const title = '==============================\n現在持っているタスクの一覧\n==============================';
let task_list = {
  tasks:['机を片付ける', '牛乳を買う','散歩する'],
  genrus:['掃除', '買い物','運動'],
} 
let taskPush = function(job)  {
  return task_list.tasks.push(job);
}
let genruPush = function(item) {
  return task_list.genrus.push(item);
}
for(let i = 0; i < task_list.tasks.length; i++) {
  console.log(i, task_list.tasks[i], task_list.genrus[i]);
}

let job = prompt('タスクを入力して下さい。');
while(job) {
  taskPush(job);
  job = prompt('ジャンルを入力して下さい。');
  genruPush(job);
  alert('新しいタスクを入力しました。');
  for(let i = 0; i < task_list.tasks.length; i++) {
    console.log(i, task_list.tasks[i], task_list.genrus[i]);
  }
  job = prompt('タスクを入力して下さい');
} 
