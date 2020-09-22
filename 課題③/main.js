'use strict'

{
  // Taskクラス
  class Task {
    constructor(text) {
      this.text = text
      this.status = '作業中';
    }
  }
  
  // タスク一覧
  const tasks = [];
  
  // 新規タスクを登録する機能
  const addTask = () => {
    const text = document.getElementById('text').value;
    const newTask = new Task(text);
    tasks.push(newTask);

    // フォームをブランクにする
    const textForm = document.getElementById('text');
    textForm.value = ''
  }
    
    
  // 出力結果を全て削除する機能
  const removeAllTasks = () => {
    const parent = document.getElementById('list');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    };
  }
  
  // タスク一覧を表示する機能
  const showAllTaks = () => {
    tasks.forEach ((task,index) => {
      // tr要素を作成する
      let table = document.getElementById('list');
      let newRow = table.insertRow();
      newRow.id = `task${index}`;
      
      // td要素を作成する
      // ID
      let newCell = newRow.insertCell();
      let newText = document.createTextNode(`${index}`);
      newCell.appendChild(newText);
      
      // コメント
      newCell = newRow.insertCell();
      newText = document.createTextNode(`${task.text}`);
      newCell.appendChild(newText);
      
      // 状態
      newCell = newRow.insertCell();
      let newButton = document.createElement('input');
      newButton.type = 'button'
      newButton.value = '作業中'
      newCell.appendChild(newButton);
      
      // 削除
      newCell = newRow.insertCell();
      newButton = document.createElement('input');
      newButton.type = 'button'
      newButton.id = 'delete'
      newButton.value = '削除'
      newCell.appendChild(newButton);
    });
  }
  
  showAllTaks();
  
  // 新規タスクを登録する
  document.getElementById('add').addEventListener('click', () => {
    addTask();
    removeAllTasks();
    showAllTaks();
  });
  
  // タスク削除する
  document.getElementById('list').addEventListener('click', e => {
    if (e.target.value === '削除') {
      const eventParent = e.target.parentNode;
      const eventGrandParent = eventParent.parentNode;
      const taskId = Number(eventGrandParent.firstChild.textContent);
      tasks.splice(taskId,1);
      removeAllTasks();
      showAllTaks();
    }
  });
}