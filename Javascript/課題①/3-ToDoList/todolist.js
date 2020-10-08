'use strict'

const tasks = ['掃除', '買い物', '散歩'];

function showAllTasks() {
  console.log('=========================');
  console.log('現在持っているのタスク一覧');
  console.log('=========================');
  tasks.forEach ((task, index) => {
    console.log(`${index} : ${task}`);
  });
}

function addTask() {
  let newTask = prompt('タスクを入力してください');
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
