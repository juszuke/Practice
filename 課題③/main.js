'use strict'

{
  // Taskクラス
  class Task {
    constructor(text) {
      this.text = text;
      this.status = '作業中';
    }
  }
  
  // タスク一覧の初期値
  const tasks = [
    new Task('川へ洗濯'),
    new Task('山へ芝刈り'),
    new Task('鬼ヶ島へ鬼退治'),
  ];
  
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
      newButton.classList = 'status'
      newButton.value = `${task.status}`
      newCell.appendChild(newButton);
      
      // 削除
      newCell = newRow.insertCell();
      newButton = document.createElement('input');
      newButton.type = 'button'
      newButton.classList = 'delete'
      newButton.value = '削除'
      newCell.appendChild(newButton);
    });
  }
  
  // タスク一覧を表示する
  showAllTaks();
  
  // 新規タスクを登録する
  document.getElementById('add').addEventListener('click', () => {
    addTask();
    removeAllTasks();
    showAllTaks();
  });
  
  // クリックしたらボタンの機能を実行する
  document.getElementById('list').addEventListener('click', e => {
    // タスクのIDを取得する機能
    const eventParent = e.target.parentNode;
    const eventGrandParent = eventParent.parentNode;
    const taskId = Number(eventGrandParent.firstChild.textContent);

    // タスクを削除する機能
    if (e.target.classList == 'delete') {
      const deleteTask = () => {
        tasks.splice(taskId,1);
      }

      // タスクを削除する
      deleteTask();
      removeAllTasks();
      showAllTaks();

    } else if (e.target.classList == 'status') {
      // タスクの状態を変更する機能
      const changeStatus = () => {
        if (e.target.value == '作業中') {
          tasks[taskId].status = '完了';
        } else if (e.target.value == '完了') {
          tasks[taskId].status = '作業中'
        }
      }

      // タスクの状態を変更する
      changeStatus();
      removeAllTasks();
      showAllTaks();
    }
  });
}