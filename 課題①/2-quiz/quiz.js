'use strict'

while (true) {
  let quiz = prompt('日本の首都は？');
  document.write(quiz);
  if (quiz === "東京") {
    alert('正解です！');
  }else
  alert('不正解です！');
}