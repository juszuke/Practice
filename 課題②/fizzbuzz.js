'use strict';

{
  const x = document.getElementById('fizznum').value;
  const y = document.getElementById('buzznum').value;
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('output').textContent = fizzbuzz()
  });
}

function fizzbuzz(){
  for (let i =1; i < 101; i++) {
    if (i % x == 0 && i % y == 0){
      console.log('FizzBuzz ' + i);
    } else if (i % x == 0){
      console.log('Fizz ' + i);
    } else if (i % y == 0){
      console.log('Buzz ' + i);
    }
  }
}