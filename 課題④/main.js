'use strict'
        
// 各オブジェクトを取得する
const title = document.getElementById('title');
const category = document.getElementById('category');
const difficulty = document.getElementById('difficulty');
const question = document.getElementById('question');

// ボタン
const start = document.getElementById('start');
const answers = document.getElementById('answers');
const home = document.getElementById('home');

const quizSet = [];
const correct = 0;
let currentNum = 0;
let isAnswered;
let score = 0;

// ホーム画面へ移動する処理
const showHome = () => {
  title.textContent = 'ようこそ';
  category.textContent = '';
  difficulty.textContent = '';
  question.textContent = '以下のボタンをクリック';
  home.classList.add('none');
  start.classList.remove('none');
  
  currentNum = 0;
  score = 0;
}

// 待機画面へ移動する処理
const loadQuiz = () => {
  title.textContent = '取得中';
  category.textContent = '';
  difficulty.textContent = '';
  question.textContent = '少々お待ちください';
  start.classList.add('none');
  
  // クイズデータをAPIから取得する
  return new Promise(resolve => {
    // APIへの非同期処理
    fetch('https://opentdb.com/api.php?amount=10')
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          return Promise.reject(new Error('エラーです'));
        }
      })
      .then(data => {
        for(let i = 0; i < data.results.length; i++) {
          quizSet.push(data.results[i]);
        }
        setQuiz();
        resolve();
      })
  })
}
  
  // クイズの正解判定をする処理 要編集！！
  function checkAnswer(button) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;
    if (button.textContent === quizSet[currentNum].correct_answer) {
      console.log('correct');
      score++;
    } else {
      console.log('wrong'); 
    }
  }
  
  // 選択肢をシャッフルする処理
  function shuffle(choices) {
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[j], choices[i]] = [choices[i], choices[j]];
    }
    return choices;
  }

  // クイズ回答画面へ移動する処理
  const setQuiz = () => {
    isAnswered = false;
    
    title.textContent = `問題${currentNum + 1}`;
    category.textContent = `[ジャンル] ${quizSet[currentNum].category}`;
    difficulty.textContent = `[難易度] ${quizSet[currentNum].difficulty}`;
    question.textContent = quizSet[currentNum].question;
    
    // correct_answerとincorrect_answersを結合してchoicesを作成する
    let choices = quizSet[currentNum].incorrect_answers.concat(quizSet[currentNum].correct_answer);
    quizSet[currentNum]["choices"] = choices; // choicesをquizSetに追加する
    
    while(answers.firstChild) {
      answers.removeChild(answers.firstChild);
    }
    
    const shuffleChoices = shuffle(quizSet[currentNum].choices);
    shuffleChoices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => {
        checkAnswer(button);
      });
    answers.appendChild(button);
  });

  answers.classList.remove('none');
}

// 結果画面へ移動する処理
const showResult = () => {
  while(answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
  
  title.textContent = `あなたの正解数は${score}です！！`;
  category.textContent = '';
  difficulty.textContent = '';
  question.textContent = '再度チャレンジしたい場合は以下をクリック！!';
  answers.classList.add('none');
  home.classList.remove('none');
}

// 最後の問題に回答したら結果ページへ、それ以外は次の問題へ進む
answers.addEventListener('click', () => {
  if (currentNum === quizSet.length - 1) {
    showResult();
  } else {
    currentNum++;
    setQuiz();
  }
});