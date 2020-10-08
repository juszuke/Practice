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
  const removeTasks = () => {
    const parent = document.getElementById('list');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    };
  }
  

  // タスク一覧を表示する機能
  const showTasks = () => {
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
      
      // 状態によってtd要素にクラスを設定する
      const getTd = newButton.parentNode;
      const getTr = getTd.parentNode;
      
      if (newButton.value === '作業中') {
        getTr.classList ='working';
      } else if (newButton.value === '完了') {
        getTr.classList = 'completed';
      }
      
      // 削除
      newCell = newRow.insertCell();
      newButton = document.createElement('input');
      newButton.type = 'button'
      newButton.classList = 'delete'
      newButton.value = '削除'
      newCell.appendChild(newButton);
    });  

    // 特定の状態のtr要素を取得する
    const working = document.getElementsByClassName('working');
    const completed = document.getElementsByClassName('completed');

    // 選択したラジオボタンに合わせて表示する項目を指定する
    if (document.getElementById('all').checked) {
      for (let i = 0; i < working.length; i++) {
        working[i].classList.remove('none');
      }
    
      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.remove('none');
      }
      
    } else if (document.getElementById('working').checked) {
      for (let i = 0; i < working.length; i++) {
        working[i].classList.remove('none');
      }

      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.add('none');
      }
      
    } else if (document.getElementById('completed').checked) {
      for (let i = 0; i < working.length; i++) {
        working[i].classList.add('none');
      }
    
      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.remove('none');
      }
    }
  }
  

  // タスク一覧を表示する
  showTasks();
  
  
  // 新規タスクを登録する
  document.getElementById('add').addEventListener('click', () => {
    addTask();
    removeTasks();
    showTasks();
  });
 
  
  // クリックしたら状態の変更と削除の機能を実行する
  document.getElementById('list').addEventListener('click', e => {
    // タスクのIDを取得する機能
    const eventParent = e.target.parentNode;
    const eventGrandParent = eventParent.parentNode;
    const taskId = Number(eventGrandParent.firstChild.textContent);

    // タスクを削除する機能
    if (String(e.target.classList) === 'delete') {
      const deleteTask = () => {
        tasks.splice(taskId,1);
      }

      // タスクを削除する
      deleteTask();
      removeTasks();
      showTasks();

    } else if (String(e.target.classList) === 'status') {
      // タスクの状態を変更する機能
      const changeStatus = () => {
        if (e.target.value === '作業中') {
          tasks[taskId].status = '完了';
        } else if (e.target.value === '完了') {
          tasks[taskId].status = '作業中'
        }
      }

      // タスクの状態を変更する
      changeStatus();
      removeTasks();
      showTasks();
    }
  });


  // ラジオボタンですべてを選択した場合の処理
  document.getElementById('all').addEventListener('click', () => {
    removeTasks();
    showTasks();

    for (let i = 0; i < working.length; i++) {
      working[i].classList.remove('none');
    }

    for (let i = 0; i < completed.length; i++) {
      completed[i].classList.remove('none');
    }
  });
  
  // ラジオボタンで作業中を選択した場合の処理
  document.getElementById('working').addEventListener('click', () => {
    removeTasks();
    showTasks();
    
    for (let i = 0; i < working.length; i++) {
      working[i].classList.remove('none');
    }
    
    for (let i = 0; i < completed.length; i++) {
      completed[i].classList.add('none');
    }
  });
  

  // ラジオボタンで完了を選択した場合の処理
  document.getElementById('completed').addEventListener('click', () => {
    removeTasks();
    showTasks();
    
    for (let i = 0; i < working.length; i++) {
      working[i].classList.add('none');
    }
    
    for (let i = 0; i < completed.length; i++) {
      completed[i].classList.remove('none');
    }
  });
}