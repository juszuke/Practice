'use strict'

{
  // Taskクラス
  class Task {
    constructor(text) {
      this.text = text
      this.status = '作業中';
      this.delete = '削除';
    }
  }
  
  // タスク一覧
  const tasks = [];
  
  // ボタンをクリックしたら処理を実行する
  document.getElementById('add').addEventListener('click', () => {

    // 出力結果を削除する
    const parent = document.getElementById('list');
    while(parent.firstChild){
      parent.removeChild(parent.firstChild);
    };
    
    // 新規タスクを登録する
    const text = document.getElementById('task').value;
    const newTask = new Task(text);
    tasks.push(newTask);
    
    // タスク一覧を表示する
    tasks.forEach ((task,index) => {
      // tr要素を作成する
      let table = document.getElementById('list');
      let newRow = table.insertRow();
      
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
      newButton.value = '削除'
      newCell.appendChild(newButton);
    });

    // フォームをブランクにする
    const textForm = document.getElementById('task');
    textForm.value = ''
  });
}