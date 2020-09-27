'use strict';

{

  // p要素を作成する関数
  const createElem = (i) => {
    const elem = document.createElement('p');
    elem.classList = 'list';
    elem.id = `output${i}`;
    document.getElementById('output').appendChild(elem);
  };

  // ボタンをクリックしたら処理を実行
  document.getElementById('button').addEventListener('click', () => {

    // 出力結果を削除する
    const parent = document.getElementById('output');
    while(parent.firstChild){
      parent.removeChild(parent.firstChild);
    };

    // フォームからFizzNum、BuzzNumの値を取得
    const fizznum = Number(document.getElementById('fizznum').value);
    const buzznum = Number(document.getElementById('buzznum').value);

    // // xかyが整数値でない場合はエラー判定
    if (Number.isInteger(fizznum) && Number.isInteger(buzznum) && (fizznum && buzznum)) {
      // ループ処理
      for (let i =1; i < 100; i++) {
        // FizzBuzzの結果を判定
        if (i % fizznum == 0 && i % buzznum == 0){
          createElem(i)
          const output = document.getElementById(`output${i}`);
          output.textContent = `FizzBuzz ${i}`;
        } else if (i % fizznum == 0){
          createElem(i)
          const output = document.getElementById(`output${i}`);
          output.textContent = `Fizz ${i}`;
        } else if (i % buzznum == 0){
          createElem(i)
          const output = document.getElementById(`output${i}`);
          output.textContent = `Buzz ${i}`;
        }
      }
    } else {
      // エラーの結果を追加
      createElem(1);
      const output = document.getElementById('output1');
      output.textContent = '整数値を入力してください';
    }
  });
}
