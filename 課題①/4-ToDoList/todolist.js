'use strict'

const tasks = [
  {
    name: '机を片付ける',
    genre: '掃除',
  },
  {
    name: '牛乳を買う',
    genre: '買い物',
  },
  {
    name: '散歩する',
    genre: '運動',
  },
];

function showAllTasks() {
  console.log('=========================');
  console.log('現在持っているのタスク一覧');
  console.log('=========================');
  tasks.forEach ((task, index) => {
    console.log(`${index} : [内容] ${task.name} 、[ジャンル]${task.genre} `);
  });
}

function addTask() {
  const newTask = [];
  const name = prompt('タスクを入力してください');
  newTask['name'] = name;
  const genre = prompt('ジャンルを入力してください');
  newTask['genre'] = genre;
  tasks.push(newTask);
  alert('新しいタスクを追加しました。');
  showAllTasks();
}

function showMenu() {
  prompt('「確認,追加,削除,終了」の４つのいずれかを入力してください');
}

showAllTasks();
addTask();
showMenu();
