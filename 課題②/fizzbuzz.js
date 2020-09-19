'use strict';

{

  // p要素を作成
  for (let i =1; i < 100; i++) {
    const elem = document.createElement('p');
    elem.classList = 'cls'
    elem.id = `output${i}`;
    document.getElementById('output').appendChild(elem);
  }

  // ボタンをクリックしたら処理を実行
  document.getElementById('button').addEventListener('click', () => {

    // 表示されている結果をブランクにする
    for (let i =1; i < 100; i++) {
      const output = document.getElementById(`output${i}`);
      output.textContent = '';
    }

    // フォームからFizzNum、BuzzNumの値を取得
    const x = Number(document.getElementById('fizznum').value);
    const y = Number(document.getElementById('buzznum').value);

    // // xかyが整数値でない場合はエラー判定
    if (Number.isInteger(x) && Number.isInteger(y) && (x && y)) {
      // ループ処理
      for (let i =1; i < 100; i++) {
        // FizzBuzzの結果を判定
        const output = document.getElementById(`output${i}`);
        if (i % x == 0 && i % y == 0){
          output.textContent = `FizzBuzz ${i}`;
        } else if (i % x == 0){
          output.textContent = `Fizz ${i}`;
        } else if (i % y == 0){
          output.textContent = `Buzz ${i}`;
        }
      }
    } else {
      // エラーの結果を追加
      const output = document.getElementById('output1');
      output.textContent = '整数値を入力してください';
    }
  });
}
